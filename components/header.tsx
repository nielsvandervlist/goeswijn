import Link from 'next/link'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faInstagram, faFacebook} from '@fortawesome/free-brands-svg-icons'
import {faBars, faX} from "@fortawesome/free-solid-svg-icons";
import {useRouter} from "next/router";
import {useState} from "react";

export default function Header() {

    const router = useRouter();
    const [open, setOpen] = useState(false)

    return (
        <header className={'flex justify-between p-8 absolute top-0 left-0 right-0 z-20'}>
            <h2 className={'text-[35px] text-brown'}>
                Goeswijn
            </h2>
            <nav className={'lg:block hidden main-menu'}>
                <ul className={'flex gap-8'}>
                    <li className={router.pathname === '/' ? 'written tracking-widest text-[20px] text-orange' : 'written tracking-widest text-[20px]'}>
                        <Link href={'/'}>Home</Link></li>
                    <li className={router.pathname === '/menu' ? 'written tracking-widest text-[20px] text-orange' : 'written tracking-widest text-[20px]'}>
                        <Link href={'/menu'}>Menu</Link></li>
                    <li className={router.pathname === '/contact' ? 'written tracking-widest text-[20px] text-orange' : 'written tracking-widest text-[20px]'}>
                        <Link href={'/contact'}>Contact</Link></li>
                </ul>
            </nav>
            <ul className={'gap-4 lg:flex hidden'}>
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
            <FontAwesomeIcon
                className={'text-brown text-[32px] absolute right-8 top-8 lg:hidden'}
                icon={faBars}
                onClick={() => setOpen(!open)}
            />
            {open && <div className={'mobile-nav fixed inset-0 bg-background z-20 flex justify-center items-center'}>
                <FontAwesomeIcon className={'absolute top-8 right-8 text-[32px]'} icon={faX}
                                 onClick={() => setOpen(false)}/>
                <nav>
                    <ul className={'text-center gap-8 flex flex-col'}>
                        <li className={router.pathname === '/' ? 'written tracking-widest text-[32px] text-orange' : 'written tracking-widest text-[32px]'}>
                            <Link href={'/'}>Home</Link></li>
                        <li className={router.pathname === '/menu' ? 'written tracking-widest text-[32px] text-orange' : 'written tracking-widest text-[32px]'}>
                            <Link href={'/menu'}>Menu</Link></li>
                        <li className={router.pathname === '/contact' ? 'written tracking-widest text-[32px] text-orange' : 'written tracking-widest text-[32px]'}>
                            <Link href={'/contact'}>Contact</Link></li>
                    </ul>
                </nav>
                <ul className={'gap-8 flex absolute left-8 bottom-8'}>
                    <li>
                        <a href={'/'}>
                            <FontAwesomeIcon className={'text-[32px]'} icon={faInstagram}/>
                        </a>
                    </li>
                    <li>
                        <a href={'/'}>
                            <FontAwesomeIcon className={'text-[32px]'} icon={faFacebook}/>
                        </a>
                    </li>
                </ul>
            </div>}
        </header>
    )
}
