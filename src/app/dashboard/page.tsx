"use client"
import Sidebar from '../../components/sidebar/sideitems';
import Card from '../../components/card/card'; 
import GraficoBarra from "../../components/grafico_barra/grafico_barra";
import GraficoRosca from "../../components/grafico_rosca/grafico_rosca";

import { FaGears } from "react-icons/fa6";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { FaHelmetSafety } from "react-icons/fa6";
import { MdOutlineAttachMoney } from "react-icons/md";
import WithAuth from '../../auth/withauth'
import { useEffect } from 'react';

export default function Dashboard() {


    // Gráfico de Barras
    const labels = ['Engenharia', 'Produção', 'Torno', 'Fresa', 'Montagem', 'Qualidade','Almoxarifado','Vendas'];
    const data = [12, 19, 3, 5, 5, 15,14,2,20];
    const barColors = {
        backgroundColor: [
          'rgba(255, 99, 132, 1)', 
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)', 
          'rgba(75, 192, 192, 1)', 
          'rgba(153, 102, 255, 1)', 
          'rgba(255, 159, 64, 1)', 
          'rgba(99, 255, 132, 1)', 
          'rgba(235, 54, 162, 1)'  
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)', 
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)', 
            'rgba(75, 192, 192, 1)', 
            'rgba(153, 102, 255, 1)', 
            'rgba(255, 159, 64, 1)', 
            'rgba(99, 255, 132, 1)', 
            'rgba(235, 54, 162, 1)'  
        ]
      };
      
//Grafico de Rosca
const doughnutLabels = ['Engenharia', 'Produção', 'Torno', 'Fresa', 'Montagem', 'Qualidade', 'Almoxarifado', 'Vendas'];
const doughnutData = [12, 19, 3, 5, 5, 15, 14, 2];
const doughnutColors = {
    backgroundColor: [
        'rgba(255, 99, 132, 1)', 
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)', 
        'rgba(75, 192, 192, 1)', 
        'rgba(153, 102, 255, 1)', 
        'rgba(255, 159, 64, 1)', 
        'rgba(99, 255, 132, 1)', 
        'rgba(235, 54, 162, 1)' 
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)', 
        'rgba(54, 162, 235, 1)', 
        'rgba(255, 206, 86, 1)', 
        'rgba(75, 192, 192, 1)', 
        'rgba(153, 102, 255, 1)', 
        'rgba(255, 159, 64, 1)', 
        'rgba(99, 255, 132, 1)', 
        'rgba(235, 54, 162, 1)'
      ]
};

    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1 p-4">
                {/* Container de cartões e gráfico */}
                <div className="grid grid-cols-1 gap-4 mb-4">
                    <div className="grid grid-cols-4 gap-4 mb-4">
                    <Card icon={MdOutlineAttachMoney} title="Faturamento" value="R$ 8.500.000" bgColor="bg-yellow-500" />
                    <Card icon={FaGears} title="Engenharia" value="5 Projetos" bgColor="bg-blue-400" />
                    <Card icon={FaHelmetSafety} title="Produção" value="4 Produtos" bgColor="bg-blue-400" />
                    <Card icon={IoCheckmarkDoneSharp} title="Qualidade" value="6 Fichas" bgColor="bg-blue-400" />

                    </div>
                    
                    <div className="flex">
                        <GraficoBarra labels={labels} data={data} barColors={barColors} />
                        <GraficoRosca doughnutLabels={doughnutLabels} doughnutData={doughnutData} doughnutColors={doughnutColors} />
                    </div>
                 
                </div>
            </div>
            <WithAuth />

        </div>
    );
}
