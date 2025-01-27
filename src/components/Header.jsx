export function Header() {
    return (
        <header className="w-full h-[70px] fixed top-0 left-0 flex items-center justify-between px-6 bg-slate-900 bg-opacity-90 text-lg z-10 shadow-md max-sm:text-xs max-sm:pr-4 max-sm:gap-2 max-sm:justify-center">
            <div className="flex items-center max-sm:hidden">
                <span className="text-bold text-white">Desarrollador Junior</span>
            </div>
            <nav className="flex gap-6">
                <a href="#About" className="font-bold hover:text-yellow-300 transition duration-300">JESÚS</a>
                <a href="#Projects" className="font-bold hover:text-yellow-300 transition duration-300">PROYECTOS</a>
                <a href="#Skills" className="font-bold hover:text-yellow-300 transition duration-300">HABILIDADES</a>
                <a href="#Contact" className="font-bold hover:text-yellow-300 transition duration-300">CONTACTO</a>
            </nav>
        </header>
    )
}
