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

export default function Index({allPosts: {edges}, preview}) {

    return (
        <Layout preview={preview}>
            <Head>
                <title>{`Bistro Goeswijn`}</title>
            </Head>
            <Container>
                <Intro/>
                {edges.length > 0 &&
                    <Posts posts={edges}/>
                }
            </Container>
            <footer className={'relative mt-80'}>

                <ResengoWidget />

                <div className={'absolute bottom-[0px] -left-[60px] right-0'}><Blocks className={'bg-green'}/></div>
                <div className={'absolute bottom-[58px] left-0 right-0'}><Blocks className={'bg-green'}/></div>
                <div className={'absolute bottom-[116px] -left-[60px] right-0'}><Blocks className={'bg-green'}/></div>
            </footer>
        </Layout>
    )
}

export const getStaticProps: GetStaticProps = async ({preview = false}) => {
    const allPosts = await getAllPostsForHome(preview)

    return {
        props: {allPosts, preview},
        revalidate: 10,
    }
}
