import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Op } from './interfaces/op.entity';  // Atualize o caminho para o arquivo correto
import { CreateOpDto } from './dtos/create-op.dto';
import { UpdateOpDto } from './dtos/update-op.dto';

@Injectable()
export class OpService {
  constructor(
    @InjectRepository(Op) private readonly opRepository: Repository<Op>,  // Atualize para a entidade 'Op'
  ) {}

  async create(createOpDto: CreateOpDto): Promise<Op> {
    const op = this.opRepository.create(createOpDto);
    return await this.opRepository.save(op);
  }

  async findAll(): Promise<Op[]> {
    return this.opRepository.find();
  }

  async findOne(id: number): Promise<Op> {
    return this.opRepository.findOneBy({ id: id });
  }

  async update(id: number, updateOpDto: UpdateOpDto): Promise<Op> {
    await this.opRepository.update(id, updateOpDto);
    return this.findOne(id);  
  }

  async removeAll(): Promise<void> {
    await this.opRepository.clear(); 
  }

  async remove(id: number): Promise<void> {
    await this.opRepository.delete(id);
  }
}
