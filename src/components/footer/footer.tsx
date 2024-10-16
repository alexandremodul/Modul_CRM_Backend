export function Footer() {
    return (
        <footer className="w-full bg-blue-600 text-white py-6 fixed bottom-0 left-0">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-5">
                <div className="text-center md:text-left mb-4 md:mb-0">
                    <h2 className="text-lg font-bold">Modul CRM</h2>
                    <p>Contato: (15)3264-1234</p>
                </div>

                {/* Direitos autorais */}
                <div className="text-center md:text-right mt-4 md:mt-0">
                    <p>&copy; {new Date().getFullYear()} Modul CRM. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
}
