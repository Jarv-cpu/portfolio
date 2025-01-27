export function Links({ urls }) {
    return (
      <nav className="flex items-center space-x-2">
        {urls.web ? (
          <a
            href={urls.web}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 bg-slate-100 text-slate-900 hover:bg-slate-900 hover:text-slate-100 px-3 py-1.5 border border-slate-900 hover:border-slate-100" // Hover colors restored
          >
            Sitio web
          </a>
        ) : (
          <span className="text-slate-500 text-sm italic">Sitio web no disponible</span>
        )}
  
        {urls.gitHub ? (
          <a
            href={urls.gitHub}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 bg-slate-100 text-slate-900 hover:bg-slate-900 hover:text-slate-100 px-3 py-1.5 border border-slate-900 hover:border-slate-100" // Hover colors restored
          >
            GitHub
          </a>
        ) : (
          <span className="text-slate-500 text-sm italic">GitHub no disponible</span>
        )}
      </nav>
    );
  }