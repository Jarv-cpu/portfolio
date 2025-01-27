export function SkillIcons({ children }) {
    return (
      <article className="bg-slate-900
                            rounded-lg 
                            p-4 shadow-md
                            transition-all 
                            duration-300 border-2 
                            border-slate-700 
                            hover:border-slate-500 
                            hover:shadow-lg 
                            flex flex-col 
                            text-start
                            justify-center
                            text-lg
                            font-semibold">
        {children}
      </article>
    );
  }