import React, { useState } from 'react';
import Link from 'next/link'; 
import { IconType } from 'react-icons';
import Modal from '../modal/modal';

interface DataItem {
  id: string;
  name: string;
  tipo: string;
  unidade: string;
}

interface TableProps {
  alterButtonIcon: IconType;  
  alterButtonColor: string;   
  alterButtonText: string;    
  deleteButtonIcon: IconType;  
  deleteButtonColor: string;  
  deleteButtonText: string;    
  data: DataItem[];
}

export default function Table({ 
  alterButtonIcon: AlterButtonIcon, 
  alterButtonColor, 
  alterButtonText, 
  deleteButtonIcon: DeleteButtonIcon, 
  deleteButtonColor, 
  deleteButtonText, 
  data 
}: TableProps) {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Filtrando os itens da tabela com base no termo de pesquisa
  const filteredData = data.filter((item) =>
    item.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Armazenar o id no localStorage
  const handleIdArmazenar = (id: string) => {
    localStorage.setItem("id_codigo", id);
  };

  return (
    <div className="flex flex-col mt-8">
      <div className="mb-2 w-96 mx-auto">
        <input 
          type="text" 
          placeholder="Pesquisar..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg"
        />
      </div>

      <div className="flex justify-center w-3/4 p-6 bg-white shadow-lg rounded-lg">
        <div className="w-full h-64 overflow-y-auto">
          <table className="w-full text-left">
            <thead>
              <tr>
                <th className="px-4 py-2 border">Código</th>
                <th className="px-4 py-2 border">Descrição</th>
                <th className="px-4 py-2 border">Tipo</th>
                <th className="px-4 py-2 border">Unidade</th>
                <th className="px-4 py-2 border">Opções</th>
                <th className="px-4 py-2 border">Alterar</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.length > 0 ? (
                filteredData.map((item: DataItem) => (
                  <tr key={item.id} className="hover:bg-gray-100">
                    <td className="px-4 py-2 border">{item.id}</td>
                    <td className="px-4 py-2 border">{item.name}</td>
                    <td className="px-4 py-2 border">{item.tipo}</td>
                    <td className="px-4 py-2 border">{item.unidade}</td>
                    <td className="px-4 py-2 border">
                      <button onClick={openModal} className="bg-blue-500 text-white p-2 rounded">
                        Revisão
                      </button>
                    </td>
                    <td className="px-4 py-2 border">
                      <Link href={`/engenharia/detalhes`}>
                        <button 
                          onClick={() => handleIdArmazenar(item.id)} 
                          className={`px-4 py-2 w-full text-white rounded ${alterButtonColor}`}
                        >
                          <AlterButtonIcon className="inline-block mr-2" />
                          {alterButtonText}
                        </button>
                      </Link>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="text-center px-4 py-2">
                    Nenhum item encontrado.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2 className="text-xl font-bold mb-4">Revisão?</h2>
        <p>LOREM IPSUM REVISAO LOREM IPSUM REVISAOLOREM IPSUM REVISAOLOREM IPSUM REVISAOLOREM IPSUM REVISAO.</p>
        <button className="bg-red-500 text-white p-2 rounded" onClick={closeModal}>
          Fechar Modal
        </button>
      </Modal>
    </div>
  );
}
