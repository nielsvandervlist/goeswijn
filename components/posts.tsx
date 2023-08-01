import Link from "next/link";
import {Parallax, ParallaxProvider} from "react-scroll-parallax";
import {useInView, motion} from "framer-motion";
import {useRef} from "react";

export default function Posts({posts}) {

    return <section className={'container py-0 lg:flex flex-col justify-center gap-40 posts lg:mt-0'}>

            {
                posts.map((post, index) => {

                    const ref = useRef(null)
                    const isInView = useInView(ref, { once: true })

                    return <motion.div ref={ref}
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
                                               y: 50,
                                           },
                                       }} key={index}
                                       className={'lg:flex gap-20 post m-auto relative mb-32 lg:mb-0'}>
                            <figure
                                className={'rounded-lg w-full h-[300px] mb-10 lg:mb-0 lg:w-[540px] lg:h-[570px] bg-center bg-cover overflow-hidden z-10'}
                                style={{backgroundImage: `url(${post.node.featuredImage?.node.sourceUrl})`}}
                            >
                            </figure>
                        <img className={'-z-10 absolute lg:block'} src={'/circle.png'}/>
                            <div className={'lg:w-[540px] lg:h-[570px]'}>
                                <h3 className={'text-brown underline-yellow text-[32px] tracking-widest mb-8'}>{post.node.title}</h3>
                                <div className={'post-text mb-14'} dangerouslySetInnerHTML={{__html: post.node.excerpt}}/>
                                <Link className={'btn'} href={`/${post.node.title}`}>{post.node.title}</Link>
                            </div>
                    </motion.div>
                })
            }
        </section>
}
