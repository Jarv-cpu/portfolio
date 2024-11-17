export function Links({urls}) {
    return (
        <nav>
            <a href={urls.web} target="_blank" className="bg-slate-50 text-slate-900 p-1 border border-slate-900 mr-1 hover:bg-slate-900 hover:text-slate-50 hover:border-slate-50 duration-300">Sitio web</a>
            <a href={urls.gitHub} target="_blank" className="bg-slate-50 text-slate-900 p-1 border border-slate-900 mr-1 hover:bg-slate-900 hover:text-slate-50 hover:border-slate-50 duration-300">GitHub</a>
        </nav>
    )
}