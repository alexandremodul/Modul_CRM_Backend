import Image from "next/image";
import  heroImg from '@/assets/hero.svg'

export default function Home() {
  return (
    <main className="flex items-center flex-col justify-center min-h-[calc(100vh-80px)]">
      <h2 className="font-medium text-2xl mb-2">Modul CRM</h2>
      <h1 className="font-bold text-3xl mb-8 text-blue-600 md:text-4xl">Gestão Integrada de Relacionamentos</h1>
      <Image
        src={heroImg}
        alt="Imagem Centralização Informações"
        width={600}
        className="max-w-sm md:max-w-xl"
      />
    </main>
  );
}
