import Head from 'next/head'
import {GetStaticProps} from 'next'
import Container from '../components/container'
import Layout from '../components/layout'
import {getBlogContent, getMenuContent} from '../lib/api'
import ResengoWidget from "../components/resengoWidget";
import Blocks from "../components/blocks";
import Footer from "../components/footer";
import React from "react";
import PageTransition from "../components/PageTransition";

type IndexPageProps = {}
type IndexPageRef = React.ForwardedRef<HTMLDivElement>

export default function Menu({blog}, preview, props: IndexPageProps, ref: IndexPageRef) {

    const content = blog.content.replace(/\\"/g, '"')

    return (
        <PageTransition ref={ref}>
        <Layout preview={preview}>
            <Head>
                <title>{`Menu`}</title>
            </Head>
            <Container>
                <div className={'min-h-screen flex items-center justify-center flex-col text-center'}>
                    <h1 className={'text-orange text-[54px] lg:text-[120px] tracking-widest -mt-[150px]'}>{blog.title}</h1>
                </div>
            </Container>
            <div className={'relative overflow-x-hidden w-full h-[180px] bottom-[180px]'}>
                <div className={'absolute bottom-[1px] -left-[60px] right-0'}><Blocks className={'bg-orange'}/></div>
                <div className={'absolute bottom-[59px] left-0 right-0'}><Blocks className={'bg-orange'}/></div>
                <div className={'absolute bottom-[117px] -left-[60px] right-0'}><Blocks className={'bg-orange'}/></div>
            </div>
            <div className={'-mt-[100px] lg:mt-0'}>
            <Container>
                <div className={'content max-w-[700px] mx-auto'}
                     dangerouslySetInnerHTML={{__html: content}}/>

            </Container>
            </div>
            <Footer/>
        </Layout>
        </PageTransition>
    )
}

export const getStaticProps: GetStaticProps = async ({preview = false}) => {
    const blog = await getBlogContent()

    return {
        props: {blog, preview},
        revalidate: 10,
    }
}
