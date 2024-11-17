export function About() {
    return (
        <section id="About" className='h-dvh flex flex-col gap-2 items-center justify-center
                                       '>
            <img src="/images/fotoJesus.jpg" alt="Foto de Jesus Romero"
            className='flex relative top-0 animate-flotar w-[200px] h-[200px] rounded-full border-2'/>
            <h1 className='text-[40px] whitespace-nowrap border-r-4 border-white w-[20ch] overflow-hidden animate-typingBlink
                           max-sm:text-[25px]'>Hola, Soy Jesus Romero</h1>

            <h2>Un Desarrollador Front End Junior</h2>
            <p className='mt-2 text-lg w-[450px] text-wrap text-center max-sm:w-[250px] max-sm:text-balance'>Tengo 20 años, estudio la carrera de Ing. informatica, me gusta el desarrollo web y aspiro a ser Full Stack</p>
        </section>
    )
}