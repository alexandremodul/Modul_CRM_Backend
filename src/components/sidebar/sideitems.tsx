import Sidebar from './sidebar'
import { FaGears } from "react-icons/fa6";
import { LuCheckCheck } from "react-icons/lu"

const menuItems = [
  {
    icon: <FaGears />,
    title: 'Engenharia',
    // link: '/engenharia',
    subItems: [
      { title: 'Projetos', link: '/engenharia' },
      { title: 'Desenhos', link: '/engenharia/desenhos' }
    ],
  },
  {
    icon: <LuCheckCheck />,
    title: 'Qualidade',
    link: '/qualidade',
    subItems: [
      { title: 'Análise de Risco', link: '/qualidade/analise-de-risco' },
      { title: 'Fichas de Ocorrência', link: '/qualidade/fichas-ocorrencia' }
    ],
  },
];

export default function sideitems() {
  return (
    <div>
      <Sidebar menuItems={menuItems} />
    </div>
  );
}
