import {CMS_NAME, CMS_URL} from '../lib/constants'
import Blocks from "./blocks";

export default function IntroContact() {
    return (
        <div className={'overflow-hidden'}>
            <section
                className={'text-center container overflow-hidden flex items-center justify-center min-h-screen flex-col'}>
                <div className={'-mt-[150px]'}>
                    <h1 className={'text-orange text-[120px] tracking-widest'}>Contact</h1>
                    <h2 className={'text-brown underline-yellow text-[32px] tracking-widest'}>open 12-laat
                        dinsdagen dicht</h2>
                    <ul className={'text tracking-widest mt-20'}>
                        <li className={'text-[24px] mb-4'}>Choorlammersteeg 1D</li>
                        <li className={'text-[24px] mb-4'}>2311 EP leiden</li>
                        <li className={'text-[24px] mb-4'}>071-785 78 10</li>
                        <li className={'text-[24px] mb-4'}>bistrogoeswijn@gmail.com</li>
                    </ul>
                </div>
            </section>
            <div className={'absolute bottom-[1px] -left-[60px] right-0'}><Blocks className={'bg-orange'}/></div>
            <div className={'absolute bottom-[59px] left-0 right-0'}><Blocks className={'bg-orange'}/></div>
            <div className={'absolute bottom-[117px] -left-[60px] right-0'}><Blocks className={'bg-orange'}/></div>
        </div>
    )
}
