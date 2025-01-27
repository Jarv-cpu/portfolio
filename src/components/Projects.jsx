import projects from '../mocks/projects.json';
import { Project } from './Project';

export function Projects() {
    return (
        <section id="Projects" className='flex flex-col items-center justify-center py-20 max-sm:font-semibold p-2'>
            <h2 className='text-2xl font-normal'>PROYECTOS DESTACABLES</h2>
            {projects.map((project, index) => (
                <Project project={project} key={index} />
            ))}
        </section>
    );
}
