import { useState } from 'react';
import Link from 'next/link';
import Button from '../buttons/buttons';
import Input from '../input/input';
import { CiUser } from "react-icons/ci";
import { CiLock } from "react-icons/ci";
import { Backend_Acesso } from '../../api/backend'; // Atualize o caminho conforme necessário
import { useRouter } from 'next/navigation'; 

const backendAcesso = new Backend_Acesso();

export default function Login() {
  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const router = useRouter();

  const handleLogin = async () => {
      try {

          const data = await backendAcesso.login(login, password);
          console.log(data)
          alert('Logado com sucesso!');
          router.replace('/dashboard');

          console.log(data);
      } catch (error) {
          alert('Erro ao logar. Verifique suas credenciais.');
      }
  };

  return (
      <div className="flex justify-center items-center h-screen mt-2">
          <div className="border-2 border-sky-200 w-[350px] h-1/2 p-8">
              <h2 className="text-center font-bold mb-4">Login CRM</h2>
              <ul className="space-y-4">
                  <li>
                      <Input
                          placeholder="Usuário"
                          icon={<CiUser />}
                          value={login}
                          onChange={(e) => setLogin(e.target.value)}
                      />
                  </li>
                  <li>
                      <Input
                          placeholder="Senha"
                          icon={<CiLock />}
                          type="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                      />
                  </li>
                  <li>
                      <Button text="Login" onClick={handleLogin} />
                    
                  </li>
                  <li>
                     
                  </li>
              </ul>
          </div>
      </div>
  );
}