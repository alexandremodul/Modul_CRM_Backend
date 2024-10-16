"use client";

import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, TooltipItem } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface GraficoBarraProps {
  labels: string[];
  data: number[];
  barColors: {
    backgroundColor: string[];
    borderColor: string[];
  };
}

const GraficoBarra: React.FC<GraficoBarraProps> = ({ labels, data, barColors }) => {
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: 'Dados do Gráfico',
        data: data,
        backgroundColor: barColors.backgroundColor,
        borderColor: barColors.borderColor,
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem: TooltipItem<'bar'>) {
            return `${tooltipItem.label}: ${tooltipItem.raw}`;
          },
        },
      },
    },
  };

  return (
    <div>
      <div className="w-[1500px] max-w-5xl h-[500px] bg-white shadow-lg rounded-lg border border-gray-200">
        <h3 className="text-3xl font-semibold mb-8 text-center">Gráfico de Dados</h3>
        <div className="h-80">
          <Bar data={chartData} options={options} />
        </div>
      </div>
    </div>
  );
};

export default GraficoBarra;
