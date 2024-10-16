"use client"
import  { useEffect, useState } from 'react';
import { LuTrash2 } from "react-icons/lu";
import { FaPen } from "react-icons/fa";
import Table from './table';
import { Backend_Acesso } from '../../api/backend';

export default function Dashboard() {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const backend = new Backend_Acesso();
    
    backend.listarProdutos().then((data) => {
      const formattedData = data.map((produto: any) => ({
        id: produto.codigo,
        name: produto.descricao,  
        tipo: produto.tipo,
        unidade: produto.unidade
      }));
      setTableData(formattedData);
    }).catch((error) => {
      console.error("Erro ao buscar produtos:", error);
    });
  }, []);;

  return (
    <div>
      <Table 
        alterButtonIcon={FaPen}      
        alterButtonColor="bg-blue-500" 
        alterButtonText="Alterar"  
        deleteButtonIcon={LuTrash2}  
        deleteButtonColor="bg-red-500" 
        deleteButtonText="Detalhes" 
        data={tableData} 
      />
    </div>
  );
}
