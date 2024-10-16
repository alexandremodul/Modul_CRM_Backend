"use client";
import React, { useEffect, useState } from "react";
import Blocos from "../../../components/blocos/blocos";
import { Backend_Acesso } from "@/api/backend";
import Modal from '../../../components/modal/modal';

interface ProdutoDetalhes {
  codigo: string;
  versao_desenho_atual: string;
  status_de_revisao: string;
  id_codigo: string;
}

interface Estrutura {
  codigo: string;
  componente: string;
  quantidade: number;
  id_estruturas: string;
}

interface Roteiro {
  produto: string;
  operacao_descr: string;
  oper_ref_grade: number;
  id_roteiro: string;
}
interface Revisao {
  descricao: string;
  id_revisao: number;
}

function Page() {
  const [prodDetails, setProdDetails] = useState<ProdutoDetalhes | null>(null);
  const [estruturas, setEstruturas] = useState<Estrutura[]>([]);
  const [roteiros, setRoteiros] = useState<Roteiro[]>([]);
  const [revisoes, setRevisoes] = useState<Revisao[]>([]);

  useEffect(() => {
    const id_codigo = localStorage.getItem('id_codigo');
  
    if (id_codigo) {
      const backend = new Backend_Acesso();
  
      backend
        .listarProdutosDetalhe(id_codigo) 
        .then((data: any) => { 
          if (data) {
            const produtoDetalhe: ProdutoDetalhes = {
              codigo: data.codigo,
              versao_desenho_atual: data.versao_desenho_atual,
              status_de_revisao: data.status_de_revisao,
              id_codigo: data.id_codigo,
            };
            setProdDetails(produtoDetalhe); 
          } else {
            setProdDetails(null); 
          }
        })
        .catch((error) => {
          setProdDetails(null); 
        });
    } else {
      setProdDetails(null); 
    }
  }, []);

  useEffect(() => {
    const backend = new Backend_Acesso();
  
    if (prodDetails && prodDetails.id_codigo) {
      const codigo = prodDetails.id_codigo;
  
      backend
        .listarEstruturas(codigo)
        .then((data: Estrutura | Estrutura[]) => {
          if (Array.isArray(data)) {
            const estruturas: Estrutura[] = data.map((estrutura) => ({
              codigo: estrutura.codigo,
              componente: estrutura.componente,
              quantidade: estrutura.quantidade,
              id_estruturas: estrutura.id_estruturas,
            }));
            setEstruturas(estruturas);
          } else if (data && typeof data === 'object') {
            const estruturas: Estrutura[] = [data];
            setEstruturas(estruturas);
          }
        })
        .catch((error) => {
        });
    }
  }, [prodDetails]);

  useEffect(() => {
    if (prodDetails && prodDetails.id_codigo) {
      const produto = prodDetails.id_codigo;
      const backend = new Backend_Acesso();
  
      backend
        .listarRoteiros(produto)
        .then((data) => {
          const roteiros: Roteiro[] = Array.isArray(data)
            ? data.map((roteiro) => ({
                produto: roteiro.produto,
                operacao_descr: roteiro.operacao_descr,
                oper_ref_grade: roteiro.oper_ref_grade,
                id_roteiro: roteiro.id_roteiro,
              }))
            : [data]; 
  
          setRoteiros(roteiros);
        })
        .catch((error) => {
        });
    }
  }, [prodDetails]);

  useEffect(() => {
    const backend = new Backend_Acesso();
  
    if (prodDetails) {
      const status_revisao = prodDetails.status_de_revisao;
      backend
        .listarRevisao(status_revisao) 
        .then((data) => {
          
          const revisoes: Revisao[] = Array.isArray(data) ? data.map((revisao) => ({
            descricao: revisao.descricao,
            id_revisao: revisao.id,
          })) : [data]; 
  
          setRevisoes(revisoes);
        })
        .catch((error) => {
        });
    }
  }, [prodDetails]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const bloco1Content = (
    <div>
      <h2 className="text-lg font-semibold mb-4">Detalhes dos Produtos:</h2>
      {prodDetails ? (
      <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="p-4">Código</th>
              <th className="p-4">Versão Desenho Atual</th>
              <th className="p-4">Status de Revisão</th>
              <th className="p-4">ID Código</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-4">{prodDetails.codigo}</td>
              <td className="p-4">{prodDetails.versao_desenho_atual}</td>
              <td className="p-4">{prodDetails.status_de_revisao}</td>
              <td className="p-4">{prodDetails.id_codigo}</td>
            </tr>
          </tbody>
        </table>
      ) : (
        <p>Nenhum detalhe do produto encontrado.</p>
      )}
    </div>
  );
  
  const bloco2Content = (
    <div>
      <h2 className="text-lg font-semibold mb-4">Detalhes da Estrutura:</h2>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="p-4">Código</th>
            <th className="p-4">Componente</th>
            <th className="p-4">Quantidade</th>
            <th className="p-4">ID Estrutura</th>
          </tr>
        </thead>
        <tbody>
          {estruturas.map((estrutura, index) => (
            <tr key={index}>
              <td className="p-4">{estrutura.codigo}</td>
              <td className="p-4">{estrutura.componente}</td>
              <td className="p-4">{estrutura.quantidade}</td>
              <td className="p-4">{estrutura.id_estruturas}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const bloco3Content = (
    <div>
      <h2>Detalhes do Roteiro:</h2>
      <table style={{ width: '100%' }}>
        <thead>
          <tr>
            <th>Produto</th>
            <th>Descrição Operação</th>
            <th>Operação Grade</th>
            <th>ID Roteiro</th>
          </tr>
        </thead>
        <tbody>
          {roteiros.map((roteiro, index) => (
            <tr key={index}>
              <td>{roteiro.produto}</td>
              <td>{roteiro.operacao_descr}</td>
              <td>{roteiro.oper_ref_grade}</td>
              <td>{roteiro.id_roteiro}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const modalContent = (
    <div>
      <h2 className="text-lg font-semibold mb-4">Detalhes da Revisão:</h2>
      {revisoes.length > 0 ? (
        <table className="table-auto w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-4 border">Descrição</th>
            </tr>
          </thead>
          <tbody>
            {revisoes.map((revisao, index) => (
              <tr key={index}>
                <td className="p-4 border">{revisao.descricao}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Nenhuma revisão encontrada.</p>
      )}
      <div className="flex justify-center space-x-4 mt-4">
        <button className="bg-blue-500 text-white p-2 rounded">
          Cadastrar Nova Revisão
        </button>
        <button className="bg-blue-500 text-white p-2 rounded">
          Editar Revisão Atual
        </button>
      </div>
    </div>
  );


  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      const navigationType = window.performance.navigation.type;
      if (navigationType !== 1) { 
        localStorage.removeItem('id_codigo');
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);
  return (
    <div>
      <Blocos
        bloco1={bloco1Content}
        bloco2={bloco2Content}
        bloco3={bloco3Content}
      />
      <div className="flex justify-center mt-4">
        <button onClick={openModal} className="bg-blue-500 text-white p-2 rounded">
          Cadastrar/Editar Revisão
        </button>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2 className="text-xl font-bold mb-4">Revisão</h2>
        {modalContent}
        <div className="flex justify-center mt-4">
          <button className="bg-red-500 text-white p-2 rounded" onClick={closeModal}>
            Fechar Modal
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default Page;
