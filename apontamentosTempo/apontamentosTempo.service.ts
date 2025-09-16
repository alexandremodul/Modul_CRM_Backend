// src/apontamentosTempo/apontamentosTempo.service.ts
import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ILike, IsNull, Repository } from 'typeorm';
import { ApontamentosTempo } from './interface/apontamentosTempo.entity';
import { StartApontamentoDto } from './dtos/start-apontamento.dto';
import { StopApontamentoDto } from './dtos/stop-apontamento.dto';
import { UpdateApontamentosTempoDto } from './dtos/update-apontamentosTempo.dto';

const norm = (s?: string | null) =>
  (s ?? '').toString().normalize('NFD').replace(/\p{Diacritic}/gu, '').trim().toLowerCase();

@Injectable()
export class ApontamentosTempoService {
  constructor(
    @InjectRepository(ApontamentosTempo)
    private readonly apontamentosTempoRepository: Repository<ApontamentosTempo>,
  ) {}

  async start(dto: StartApontamentoDto): Promise<ApontamentosTempo> {
    const entity = this.apontamentosTempoRepository.create({
      op: dto.op,
      item: dto.item,
      operacao: dto.operacao,
      dt_hr_inicio: new Date(dto.dt_hr_inicio),
      usuario: dto.usuario,
    });
    return this.apontamentosTempoRepository.save(entity);
  }

  async stopById(id: number, dto: StopApontamentoDto): Promise<ApontamentosTempo> {
    const apont = await this.apontamentosTempoRepository.findOne({ where: { id } });
    if (!apont) throw new NotFoundException(`Apontamento ${id} não encontrado`);
    if (!apont.dt_hr_inicio) throw new BadRequestException('Registro sem dt_hr_inicio.');

    const dtInicio = new Date(apont.dt_hr_inicio);
    const dtFim = new Date(dto.dt_hr_fim);
    if (dtFim < dtInicio) throw new BadRequestException('dt_hr_fim não pode ser anterior a dt_hr_inicio.');

    const diffMs = dtFim.getTime() - dtInicio.getTime();
    const calcminutos = Math.round(diffMs / 60000);

    apont.dt_hr_fim = dtFim;
    apont.calcminutos = calcminutos;
    if (typeof dto.quantidade === 'number') apont.quantidade = dto.quantidade;

    return this.apontamentosTempoRepository.save(apont);
  }

  async stopByOpAndUsuario(op: string, usuario: string, dto: StopApontamentoDto): Promise<ApontamentosTempo> {
    const apont = await this.apontamentosTempoRepository.findOne({
      where: { op, usuario, dt_hr_fim: IsNull() as any },
      order: { dt_hr_inicio: 'DESC' },
    });
    if (!apont) throw new NotFoundException(`Nenhum apontamento em aberto para op=${op}, usuario=${usuario}`);
    return this.stopById(apont.id, dto);
  }

  findAll(): Promise<ApontamentosTempo[]> {
    return this.apontamentosTempoRepository.find();
  }

  async findAllByOp(op: string): Promise<ApontamentosTempo[]> {
    return this.apontamentosTempoRepository.find({ where: { op } });
  }

  async findOne(id: number): Promise<ApontamentosTempo> {
    const apont = await this.apontamentosTempoRepository.findOne({ where: { id } });
    if (!apont) throw new NotFoundException(`ApontamentoTempo with ID ${id} not found`);
    return apont;
  }

  async update(id: number, dto: UpdateApontamentosTempoDto): Promise<ApontamentosTempo> {
    const apont = await this.findOne(id);
    Object.assign(apont, {
      ...dto,
      ...(dto.dt_hr_inicio && { dt_hr_inicio: new Date(dto.dt_hr_inicio) }),
      ...(dto.dt_hr_fim && { dt_hr_fim: new Date(dto.dt_hr_fim) }),
    });
    return this.apontamentosTempoRepository.save(apont);
  }

  async remove(id: number): Promise<void> {
    const apont = await this.findOne(id);
    await this.apontamentosTempoRepository.remove(apont);
  }

  async findByItemAndOperacao(item: string, operacao: string): Promise<ApontamentosTempo[]> {
    const itemN = norm(item);
    const operN = norm(operacao);

    const exact = await this.apontamentosTempoRepository
      .createQueryBuilder('a')
      .where('LOWER(TRIM(a.item)) = :item', { item: itemN })
      .andWhere('LOWER(TRIM(a.operacao)) = :oper', { oper: operN })
      .orderBy('a.dt_hr_inicio', 'DESC')
      .getMany();

    if (exact.length > 0) return exact;

    const fallback = await this.apontamentosTempoRepository.find({
      where: {
        item: ILike(`%${item}%`),
        operacao: ILike(`%${operacao}%`),
      },
      order: { dt_hr_inicio: 'DESC' as any },
    });

    return fallback;
  }
}
