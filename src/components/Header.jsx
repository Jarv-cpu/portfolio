
export function Header() {
    return (
        <header className="w-[99vw] h-[70px] fixed top-0 left-0 flex items-center justify-end pr-6 bg-slate-900 bg-opacity-75 text-[25px] z-[10]
                           max-sm:text-xs max-sm:pr-0 max-sm:gap-0 max-sm:justify-center">
            <nav className="flex gap-4">
                <a href="#About">JESÚS</a>
                <a href="#Projects">PROYECTOS</a>
                <a href="#Skills">HABILIDADES</a>
                <a href="#Contact">CONTACTO</a>
            </nav>
        </header>
    )
}
