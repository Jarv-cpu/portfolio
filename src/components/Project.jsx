import { Links } from "./Links"

export function Project({ project }) {
    return (
        <article className="flex flex-row justify-between mt-10
                            bg-slate-700
                            hover:bg-slate-500
                            transition-all duration-500
                          text-slate-50 max-w-screen-lg p-[2px]
                            max-sm:flex-col-reverse max-sm:w-[90vw]">

            <div className="flex flex-col justify-between p-3 w-96 items-start text-wrap
                            max-sm:p-2 max-sm:gap-2 max-sm:items-center max-sm:justify-around max-sm:h-[250px] max-sm:text-center max-sm:w-[100%]
                            bg-gradient-to-t from-slate-900 to-slate-700
                            ">
                <h2 className="text-2xl">{project.title.toUpperCase()}</h2>
                <p className="max-sm:text-base text-balance">{project.description}</p>
                <Links urls={project.urls} />
            </div>
            <div className="w-72 sm:w-56 max-sm:w-full">
                <img src={project.cover} alt="" className="object-contain h-full w-full" />
            </div>
        </article>
    )
}