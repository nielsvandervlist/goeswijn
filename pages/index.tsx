import Head from 'next/head'
import {GetStaticProps} from 'next'
import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import {getAllPostsForHome} from '../lib/api'
import Posts from "../components/posts";
import ResengoWidget from "../components/resengoWidget";
import Blocks from "../components/blocks";
import Footer from "../components/footer";
import React from "react";
import PageTransition from "../components/PageTransition";

type IndexPageProps = {}
type IndexPageRef = React.ForwardedRef<HTMLDivElement>

export default function Index({allPosts: {edges}, preview}, props: IndexPageProps, ref: IndexPageRef ) {

    return (
        <PageTransition ref={ref}>
        <Layout preview={preview}>
            <Head>
                <title>{`Bistro Goeswijn`}</title>
            </Head>
            <Container>
                <Intro/>
            </Container>
            <div className={'relative overflow-x-hidden w-full h-[180px] bottom-[180px]'}>
                <div className={'absolute bottom-[1px] -left-[60px] right-0'}><Blocks className={'bg-orange'}/></div>
                <div className={'absolute bottom-[59px] left-0 right-0'}><Blocks className={'bg-orange'}/></div>
                <div className={'absolute bottom-[117px] -left-[60px] right-0'}><Blocks className={'bg-orange'}/></div>
            </div>
            <div className={'overflow-hidden lg:overflow-visible -mt-[140px] lg:mt-0 pt-[60px] lg:pt-0'}>
            <Container>
                {edges.length > 0 &&
                    <Posts posts={edges}/>
                }
            </Container>
            </div>
            <Footer/>
        </Layout>
        </PageTransition>
    )
}

export const getStaticProps: GetStaticProps = async ({preview = false}) => {
    const allPosts = await getAllPostsForHome(preview)

    return {
        props: {allPosts, preview},
        revalidate: 10,
    }
}
