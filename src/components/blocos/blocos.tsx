import React from 'react';

interface BlocosProps {
    bloco1: React.ReactNode;  
    bloco2: React.ReactNode;
    bloco3: React.ReactNode;
}

function Blocos({ bloco1, bloco2, bloco3 }: BlocosProps) {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="bg-gray-200 p-4 text-center">{bloco1}</div>
      <div className="bg-gray-200 p-4 text-center">{bloco2}</div>
      <div className="bg-gray-200 p-4 text-center col-span-2">{bloco3}</div>
    </div>
  );
}

export default Blocos;
