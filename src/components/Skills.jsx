import htmlLogo from '/icons/html.svg'
import cssLogo from '/icons/css.svg'
import jsLogo from '/icons/js.svg'
import gitLogo from '/icons/git.svg'
import githubLogo from '/icons/github.svg'
import reactLogo from '/icons/react.svg'
import tailwindLogo from '/icons/tailwind.svg'
import { SkillIcons } from './SkillIcons'

export function Skills() {
    return (
        <section id="Skills" className='h-dvh flex flex-col items-center justify-center gap-10'>
            <h2 className='font-bold text-2xl'>MIS HABILIDADES</h2>
            <div className='flex flex-col gap-10'>
                <SkillIcons>
                    <h3>LENGUAJES</h3>
                    <div className='flex'>
                        <img src={htmlLogo} alt="Logo de HTML" />
                        <img src={cssLogo} alt="Logo de CSS" />
                        <img src={jsLogo} alt="Logo de JavaScript" />
                    </div>
                </SkillIcons>
                <SkillIcons>
                    <h3>HERRAMIENTAS</h3>
                    <div className='flex'>
                        <img src={gitLogo} alt="Logo de Git" />
                        <img src={githubLogo} alt="Logo de Github" />
                    </div>
                </SkillIcons>
                <SkillIcons>
                    <h3>FRAMEWORKS</h3>
                    <div className='flex'>
                        <img src={reactLogo} alt="Logo de React" />
                        <img src={tailwindLogo} alt="Logo de Tailwind" />
                    </div>
                </SkillIcons>
            </div>
        </section>
    )
}