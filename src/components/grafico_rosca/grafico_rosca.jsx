"use client";

import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const GraficoRosquinha = ({ doughnutLabels, doughnutData, doughnutColors }) => {
  const chartData = {
    labels: doughnutLabels,
    datasets: [
      {
        data: doughnutData,
        backgroundColor: doughnutColors.backgroundColor, 
        borderColor: doughnutColors.borderColor,          
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.label}: ${tooltipItem.raw}`;
          },
        },
      },
    },
  };

  return (
    <div className="flex justify-center ml-[200px]">
      <div className="w-full max-w-xl p-4 bg-white shadow-lg rounded-lg border border-gray-200">
        <h3 className="text-2xl font-semibold mb-4 text-center"></h3>
        <div className="h-[306px]">  
          <Doughnut data={chartData} options={options} />
        </div>
      </div>
    </div>
  );
};

export default GraficoRosquinha;
