import { Links } from "./Links";

export function Project({ project }) {
    return (
        <article className="flex justify-between mt-10
                            border-slate-700 hover:border-slate-500
                            transition-all duration-500 text-slate-50 
                            max-w-screen-lg max-md:flex-col-reverse 
                            max-sm:w-[90vw] rounded-xl border-2 
                            overflow-hidden
                            shadow-lg">
            
            <div className="flex flex-col justify-between p-4 w-96 
                            items-start text-wrap max-md:p-2 
                            max-md:gap-2 max-md:items-center 
                            max-md:justify-around max-md:h-[250px] 
                            max-md:text-center max-md:w-[100%] 
                            bg-slate-900">
                
                <h2 className="text-2xl">{project.title.toUpperCase()}</h2>
                <p className="max-sm:text-base text-balance">{project.description}</p>
                <Links urls={project.urls} />
            </div>
            
            <div className="w-80 md:w-96 max-md:w-full">
                <img src={project.cover} alt="" className="object-cover" />
            </div>
        </article>
    );
}
