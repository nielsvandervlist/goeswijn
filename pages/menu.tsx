import Head from 'next/head'
import {GetStaticProps} from 'next'
import Container from '../components/container'
import Layout from '../components/layout'
import {getMenuContent} from '../lib/api'
import IntroMenu from "../components/intromenu";
import ResengoWidget from "../components/resengoWidget";
import Blocks from "../components/blocks";
import Footer from "../components/footer";
import React from "react";
import PageTransition from "../components/PageTransition";

type IndexPageProps = {}
type IndexPageRef = React.ForwardedRef<HTMLDivElement>

export default function Menu({menu}, preview, props: IndexPageProps, ref: IndexPageRef) {

    const table = menu.content.replace(/\\"/g, '"')

    return (
        <PageTransition ref={ref}>
        <Layout preview={preview}>
            <Head>
                <title>{`Bistro Goeswijn`}</title>
            </Head>
            <Container>
                <IntroMenu/>
            </Container>
            <div className={'relative overflow-x-hidden w-full h-[180px] bottom-[180px]'}>
                <div className={'absolute bottom-[1px] -left-[60px] right-0'}><Blocks className={'bg-orange'}/></div>
                <div className={'absolute bottom-[59px] left-0 right-0'}><Blocks className={'bg-orange'}/></div>
                <div className={'absolute bottom-[117px] -left-[60px] right-0'}><Blocks className={'bg-orange'}/></div>
            </div>
            <div className={'-mt-[100px] lg:mt-0'}>
            <Container>
                <div className={'menu-content max-w-[700px] mx-auto'}
                     dangerouslySetInnerHTML={{__html: table}}/>

            </Container>
            </div>
            <Footer/>
        </Layout>
        </PageTransition>
    )
}

export const getStaticProps: GetStaticProps = async ({preview = false}) => {
    const menu = await getMenuContent()

    return {
        props: {menu, preview},
        revalidate: 10,
    }
}
