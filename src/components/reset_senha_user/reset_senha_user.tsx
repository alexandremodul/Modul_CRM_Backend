import { useState } from 'react';
import Button from '../buttons/buttons';
import Input from '../input/input';
import { CiUser } from "react-icons/ci";
import { CiLock } from "react-icons/ci";

export default function ResetPassUser() {
    const [login, setLogin] = useState(''); 
    const [senha, setSenha] = useState(''); 
    const [confirmarSenha, setConfirmarSenha] = useState(''); 
    const handleRedefinir = () => {
      alert('Senha redefinida com sucesso!');
  };
    return (
        <div className="flex justify-center items-center h-screen mt-2 pb-60">
            <div className="border-2 border-sky-200 w-[350px] h-96 p-8">
                <h2 className="text-center font-bold mb-4">Redefinir Senha de Usuário CRM</h2>
                <ul className="space-y-4">
                    <li>
                        <Input 
                            placeholder="Login/Apelido" 
                            icon={<CiUser />} 
                            value={login} 
                            onChange={(e) => setLogin(e.target.value)} 
                        />
                    </li>
                    <li>
                        <Input 
                            placeholder="Senha" 
                            icon={<CiLock />} 
                            type='password' 
                            value={senha} 
                            onChange={(e) => setSenha(e.target.value)} 
                        />
                    </li>
                    <li>
                        <Input 
                            placeholder="Confirmar Senha" 
                            icon={<CiLock />} 
                            type='password' 
                            value={confirmarSenha}
                            onChange={(e) => setConfirmarSenha(e.target.value)} 
                        />
                    </li>
                    <li>
                        <Button 
                            text="Redefinir" 
                            onClick={handleRedefinir}
                        />
                    </li>
                </ul>
            </div>
        </div>
    );
}
