import Blocks from "./blocks";
import {useInView, motion} from "framer-motion";
import {useRef} from "react";
import Link from "next/link";

export default function Intro() {

    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    return (
        <motion.section
            ref={ref}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={{
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                        duration: 0.5,
                        ease: 'easeOut',
                    },
                },
                hidden: {
                    opacity: 0,
                    y: 100,
                },
            }}
            className={'text-center container flex items-center justify-center min-h-screen flex-col relative'}>
            <div className={'-mt-[150px] flex flex-col items-center'}>
                <div className={'panel'}>
                    <h1 className={'text-orange text-[54px] lg:text-[120px] tracking-widest'}>Goeswijn</h1>
                    <h1 className={'text-orange text-[54px] lg:text-[120px] tracking-widest'}>Goeswijn</h1>
                </div>
                <h2 className={'text-brown underline-yellow text-[28px] lg:text-[32px] tracking-widest intro mb-20'}>natuurwijn en sharing
                    dishes</h2>
                <Link className={'btn'} href={`/menu`}>Bekijk menu</Link>
            </div>
        </motion.section>
    )
}
