export function SkillIcons({ children }) {
    return (
        <article className='bg-gradient-to-t from-slate-900 to-slate-700
                            flex flex-col items-center text-slate-50 border-2
                            border-slate-700 font-bold
                            hover:border-slate-500
                            transition-all duration-500'>
            {children}
        </article>
    )
}