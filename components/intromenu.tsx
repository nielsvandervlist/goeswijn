import {CMS_NAME, CMS_URL} from '../lib/constants'
import Blocks from "./blocks";

export default function IntroMenu() {
    return (
        <div className={'relative'}>
            <section
                className={'text-center container flex items-center justify-center min-h-screen flex-col'}>
                <div className={'-mt-[150px]'}>
                    <h1 className={'text-orange text-[54px] lg:text-[120px] tracking-widest'}>Menu</h1>
                    <h2 className={'text-brown underline-yellow intro text-[28px] lg:text-[32px] tracking-widest'}>Lunch, diner &
                        wijnkaart</h2>
                </div>
            </section>
        </div>
    )
}
