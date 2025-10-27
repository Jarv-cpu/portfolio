export function About() {
    return (
        <section id="About" className='min-h-screen flex flex-col gap-4 items-center justify-center py-10  text-white'>
            <img
                src="/images/fotoJesus.jpg"
                alt="Foto de Jesus Romero"
                className='relative top-0 animate-flotar w-52 h-52 rounded-full border-4 border-white shadow-lg'
            />
            <h1 className='text-4xl whitespace-nowrap border-r-4 border-white w-[20ch] overflow-hidden animate-typingBlink max-sm:text-2xl'>
                Hola, Soy Jesus Romero
            </h1>

            <h2 className='text-2xl mt-2'>Un Desarrollador Full Stack Junior</h2>
            <p className='mt-4 text-lg w-[450px] text-center max-sm:w-[250px]'>
                Tengo 21 años y me apasiona construir aplicaciones web completas.
            </p>
        </section>
    )
}
