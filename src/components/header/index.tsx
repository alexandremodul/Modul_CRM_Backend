"use client"
import Link from 'next/link';
import { FiUser, FiLogOut} from 'react-icons/fi'
import { useRouter } from 'next/navigation'; 

export function Header(){
    const router = useRouter();

    const handleLogoff = () =>{
        const token = localStorage.getItem('token');
        localStorage.removeItem('token');
        router.replace('/');
    }
    

    return(
        <header className="w-full flex itens-center px-2 py-4 bg-white h-20 shadow-sm">
            <div className="w-full flex itens-center justify-between mx-5 mx-auto">
                <Link href="/">
                    <h1 className="font-bold text-2xl hover:tracking-widest duration-300">
                        <span className="text-blue-500">Modul</span> CRM
                    </h1>
                </Link>
               
                <div className="flex items-baseline gap-4">
                <Link href="/login">
                    <FiUser size={26} color='#4b5563'/>
                </Link>
             
                <button onClick={handleLogoff}>
                    <FiLogOut size={26} color='#4b5563'/>
                </button>

                </div>
            </div>

        </header>
    )
}