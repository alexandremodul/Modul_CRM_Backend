import { useState } from 'react';
import Input from '../input/input';
import Button from '../buttons/buttons';
import { CiUser, CiLock } from "react-icons/ci";
import { Backend_Acesso } from '../../api/backend';

export default function Cadastro() {
    const [name, setName] = useState(''); 
    const [email, setEmail] = useState(''); 
    const [login, setLogin] = useState(''); 
    const [password, setPassword] = useState(''); 
    const [type_user, setTypeUser] = useState(1); 

    const backend = new Backend_Acesso();

    const handleCadastro = async () => {
        if (!name || !email || !login || !password) {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        try {
            const accessToken = localStorage.getItem('token') ?? '';

            if (!accessToken) {
                alert('Você não está autenticado. Por favor, faça login novamente.');
                return;
            }

            const response = await backend.cadastrarUsuario(
                { name, email, login, password, type_user }, 
                accessToken
            );

            alert('Cadastro feito com sucesso'); 
        } catch (error) {
            console.error('Erro ao cadastrar usuário:', error);
            alert('Erro ao cadastrar usuário. Tente novamente.');
        }
    };

    return (
        <div className="flex justify-center items-center h-screen mt-2 pb-60">
            <div className="border-2 border-sky-200 w-[350px] h-96 p-8">
                <h2 className="text-center font-bold mb-4">Cadastro de Usuário CRM</h2>
                <ul className="space-y-4">
                    <li>
                        <Input 
                            placeholder="Nome" 
                            icon={<CiUser />} 
                            value={name} 
                            onChange={(e) => setName(e.target.value)} 
                        />
                    </li>
                    <li>
                        <Input 
                            placeholder="Email" 
                            icon={<CiUser />} 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                        />
                    </li>
                    <li>
                        <Input 
                            placeholder="Login" 
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
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                        />
                    </li>
                    <li>
                        <label htmlFor="type_user" className="block text-sm font-medium text-gray-700">Tipo de Usuário</label>
                        <select 
                            id="type_user" 
                            value={type_user} 
                            onChange={(e) => setTypeUser(Number(e.target.value))}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500"
                        >
                            <option value={1}>Tipo 1</option>
                            <option value={2}>Tipo 2</option>
                            <option value={3}>Tipo 3</option>
                        </select>
                    </li>
                    <li>
                        <Button text="Cadastro" onClick={handleCadastro} />
                    </li>
                </ul>
            </div>
        </div>
    );
}
