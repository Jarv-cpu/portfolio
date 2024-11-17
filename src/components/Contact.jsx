import contacts from '../mocks/contacts.json'

export function Contact() {
    return (
        <footer id="Contact" className='bg-slate-950
                                        flex flex-col
                                        items-center
                                        gap-4
                                        p-3
                                        border-t-2
                                        border-black'>
            {contacts.map((contact) => (
                <article>
                    <a href={contact.link} target='_blank'
                    className='flex items-center gap-2 text-xl font-semibold'><img src={contact.logo} alt="" />{contact.contact}</a>
                </article>
            ))}
        </footer>
    )
}