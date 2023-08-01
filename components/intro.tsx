import Blocks from "./blocks";

export default function Intro() {
    return (
        <section
            className={'text-center container flex items-center justify-center min-h-screen flex-col relative'}>
            <div className={'-mt-[150px]'}>
                <h1 className={'text-orange text-[54px] lg:text-[120px] tracking-widest'}>Goeswijn</h1>
                <h2 className={'text-brown underline-yellow text-[32px] tracking-widest'}>natuurwijn en sharing
                    dishes</h2>
            </div>
        </section>
    )
}
