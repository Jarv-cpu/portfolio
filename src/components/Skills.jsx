import htmlLogo from '/icons/html.svg';
import cssLogo from '/icons/css.svg';
import jsLogo from '/icons/js.svg';
import gitLogo from '/icons/git.svg';
import githubLogo from '/icons/github.svg';
import reactLogo from '/icons/react.svg';
import tailwindLogo from '/icons/tailwind.svg';
import phpLogo from '/icons/php.svg';
import angularLogo from '/icons/angular.svg';
import bootstrapLogo from '/icons/bootstrap.svg';
import postmanLogo from '/icons/postman.svg';
import reactNativeLogo from '/icons/react-native.svg';
import laravelLogo from '/icons/laravel.svg';

import { SkillIcons } from './SkillIcons';

const skillsData = [
    {
        title: 'LENGUAJES',
        icons: [htmlLogo, cssLogo, jsLogo, phpLogo],
    },
    {
        title: 'HERRAMIENTAS',
        icons: [gitLogo, githubLogo, postmanLogo],
    },
    {
        title: 'FRAMEWORKS/LIBRERIAS',
        icons: [reactLogo, tailwindLogo, angularLogo, bootstrapLogo, reactNativeLogo, laravelLogo],
    },
];

export function Skills() {
    return (
        <section id="Skills" className='p-2 py-20 flex flex-col items-center justify-center gap-10  text-white'>
            <h2 className='font-bold text-3xl'>MIS HABILIDADES</h2>
            <div className='flex flex-col gap-10 '>
                {skillsData.map((skill, index) => (
                    <SkillIcons key={index} className=''>
                        <h3 className='text-xl font-semibold mb-4'>{skill.title}</h3>
                        <div className='flex justify-center flex-wrap gap-4'>
                            {skill.icons.map((icon, iconIndex) => (
                                <div key={iconIndex} className='w-24 h-24 p-2 bg-slate-700 rounded-lg shadow-md'>
                                    <img src={icon} className='object-contain w-full h-full' alt={`Logo de ${skill.title}`} />
                                </div>
                            ))}
                        </div>
                    </SkillIcons>
                ))}
            </div>
        </section>
    );
}
