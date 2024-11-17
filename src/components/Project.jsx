import { Links } from "./Links"

export function Project({ project }) {
    return (
        <article className="flex flex-row justify-between mt-10
                            bg-gradient-to-t from-slate-900 to-slate-700
                          text-slate-50 max-w-screen-lg border border-slate-600
                            max-sm:flex-col-reverse max-sm:w-[95vw] sm:w-[600px]">
                                
            <div className="flex flex-col justify-between p-3 w-96 items-start text-wrap
                            max-sm:gap-2 max-sm:items-center max-sm:justify-around max-sm:h-[250px] max-sm:text-center max-sm:w-[95vw]">
                <h2 className="text-2xl">{project.title.toUpperCase()}</h2>
                <p className="max-sm:text-base text-balance">{project.description}</p>
                <Links urls={project.urls}/>
            </div>
            <div className="w-72 max-sm:w-full">
                <img src={project.cover} alt="" className="object-contain h-ful" />
            </div>
        </article>
    )
}