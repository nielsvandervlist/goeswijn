import Link from "next/link";

export default function Posts({posts}){

    return <section className={'container py-40 flex flex-col justify-center gap-40 posts'}>

        {
            posts.map((post, index) => {
                return <div key={index} className={'flex gap-20 post m-auto relative'}>
                    <figure
                        className={'rounded-lg w-[540px] h-[570px] bg-center bg-cover overflow-hidden z-10'}
                        style={{backgroundImage: `url(${post.node.featuredImage?.node.sourceUrl})`}}
                    >
                    </figure>
                    <img className={'-z-1 absolute'} src={'/circle.png'}/>
                    <div className={'w-full w-[540px] h-[570px]'}>
                        <h3 className={'text-brown underline-yellow text-[32px] tracking-widest mb-8'}>{post.node.title}</h3>
                        <div className={'text mb-10'} dangerouslySetInnerHTML={{__html: post.node.excerpt}}/>
                        <Link className={'btn'} href={`/${post.node.title}`}>{post.node.title}</Link>
                    </div>
                </div>
            })
        }
    </section>
}
