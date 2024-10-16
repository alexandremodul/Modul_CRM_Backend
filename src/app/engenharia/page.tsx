"use client";
import Table from '../../components/table/tableData';
import Sidebar from '../../components/sidebar/sideitems';

function engenharia() {
  return (
    <div className='flex w-full'>   
            <Sidebar /> 
      <div className='pl-96 w-full'>
         <Table />
       </div>
    </div>
    

  )
}

export default engenharia
