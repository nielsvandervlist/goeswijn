import {CMS_NAME, CMS_URL} from '../lib/constants'
import Blocks from "./blocks";

export default function IntroMenu() {
    return (
        <div className={'overflow-hidden'}>
            <section
                className={'text-center container overflow-hidden flex items-center justify-center min-h-screen flex-col'}>
                <div className={'-mt-[150px]'}>
                    <h1 className={'text-orange text-[120px] tracking-widest'}>Menu</h1>
                    <h2 className={'text-brown underline-yellow text-[32px] tracking-widest'}>Lunch, diner &
                        wijnkaart</h2>
                </div>
            </section>
            <div className={'absolute bottom-[1px] -left-[60px] right-0'}><Blocks className={'bg-orange'}/></div>
            <div className={'absolute bottom-[59px] left-0 right-0'}><Blocks className={'bg-orange'}/></div>
            <div className={'absolute bottom-[117px] -left-[60px] right-0'}><Blocks className={'bg-orange'}/></div>
        </div>
    )
}
