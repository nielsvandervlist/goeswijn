import Head from 'next/head'
import { GetStaticProps } from 'next'
import Container from '../components/container'
import Layout from '../components/layout'
import {getMenuContent} from '../lib/api'
import IntroMenu from "../components/intromenu";
import ResengoWidget from "../components/resengoWidget";
import Blocks from "../components/blocks";

export default function Menu({ menu }, preview ) {

    const table = menu.content.replace(/\\"/g, '"')

  return (
    <Layout preview={preview}>
      <Head>
        <title>{`Bistro Goeswijn`}</title>
      </Head>
      <Container>
        <IntroMenu />
          <div className={'menu-content my-40 max-w-[700px] mx-auto'} dangerouslySetInnerHTML={{ __html: table }} />
      </Container>
        <footer className={'relative mt-80'}>
            <div className={'absolute bottom-[0px] -left-[60px] right-0'}><Blocks className={'bg-green'}/></div>
            <div className={'absolute bottom-[58px] left-0 right-0'}><Blocks className={'bg-green'}/></div>
            <div className={'absolute bottom-[116px] -left-[60px] right-0'}><Blocks className={'bg-green'}/></div>
        </footer>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
    const menu = await getMenuContent()

  return {
    props: { menu, preview },
    revalidate: 10,
  }
}
