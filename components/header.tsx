import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'

export default function Header() {
  return (
    <header className={'flex justify-between p-8 absolute top-0 left-0 right-0'}>
        <h2 className={'text-[35px] text-brown'}>
            Goeswijn
        </h2>
        <nav>
            <ul className={'flex gap-8'}>
                <li className={'written tracking-widest text-[20px] test'}><Link href={'/'}>Home</Link></li>
                <li className={'written tracking-widest text-[20px]'}><Link href={'/menu'}>Menu</Link></li>
                <li className={'written tracking-widest text-[20px]'}><Link href={'/reseveren'}>Reseveren</Link></li>
                <li className={'written tracking-widest text-[20px]'}><Link href={'/contact'}>Contact</Link></li>
            </ul>
        </nav>
        <ul className={'flex gap-4'}>
            <li>
                <a href={'/'}>
                    <FontAwesomeIcon className={'text-[20px]'} icon={faInstagram}/>
                </a>
            </li>
            <li>
                <a href={'/'}>
                    <FontAwesomeIcon className={'text-[20px]'} icon={faFacebook}/>
                </a>
            </li>
        </ul>
    </header>
  )
}
