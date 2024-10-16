import Sidebar from '../../components/sidebar/sideitems';
import Table from '../../components/table/tableData';
import WithAuth from '../../auth/withauth'

export default function Produtos() {
  return (
    <div className="flex">
      <Sidebar /> 
      <div className="flex-1 p-6"> 
        <Table />
        <WithAuth />

      </div>
    </div>
  );
}
