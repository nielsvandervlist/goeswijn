import {CMS_NAME, CMS_URL} from '../lib/constants'
import Blocks from "./blocks";

export default function IntroContact() {
    return (
        <div className={'overflow-hidden'}>
            <section
                className={'text-center container overflow-hidden flex items-center justify-center min-h-screen flex-col'}>
                <div className={'-mt-[150px]'}>
                    <h1 className={'text-orange text-[54px] lg:text-[120px] tracking-widest'}>Contact</h1>
                    <h2 className={'text-brown underline-yellow intro text-[28px] lg:text-[32px] tracking-widest'}>open 12-laat
                        dinsdagen dicht</h2>
                    <ul className={'text tracking-widest mt-20'}>
                        <li className={'text-[18px] lg:text-[24px] mb-4'}>Choorlammersteeg 1D</li>
                        <li className={'text-[18px] lg:text-[24px] mb-4'}>2311 EP leiden</li>
                        <li className={'text-[18px] lg:text-[24px] mb-4'}>071-785 78 10</li>
                        <li className={'text-[18px] lg:text-[24px] mb-4'}>bistrogoeswijn@gmail.com</li>
                    </ul>
                </div>
            </section>
        </div>
    )
}
