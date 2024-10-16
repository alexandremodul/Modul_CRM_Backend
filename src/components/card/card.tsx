import { FC } from 'react';

interface CardProps {
  icon: FC<{ className?: string }>;
  title: string;
  value: string | number;
  bgColor: string;
}

const Card: React.FC<CardProps> = ({ icon: Icon, title, value, bgColor }) => {
  return (
    <div className={`flex space-x-2 w-96 h-48 items-center p-3 shadow rounded-lg ${bgColor} text-white`}>
      <div className="p-3 rounded-full bg-white bg-opacity-20">
        <Icon className="text-xl text-white" /> 
      </div>
      <div className="ml-4">
        <h3 className="text-sm font-semibold">{title}</h3>
        <p className="text-4xl font-bold">{value}</p>
      </div>
    </div>
  );
};

export default Card;
