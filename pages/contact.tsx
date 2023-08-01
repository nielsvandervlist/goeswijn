import Head from 'next/head'
import { GetStaticProps } from 'next'
import Container from '../components/container'
import Layout from '../components/layout'
import {getMenuContent} from '../lib/api'
import IntroMenu from "../components/intromenu";
import IntroContact from "../components/introcontact";
import Blocks from "../components/blocks";
import PageTransition from "../components/PageTransition";
import React from "react";

type IndexPageProps = {}
type IndexPageRef = React.ForwardedRef<HTMLDivElement>

export default function Menu({ menu }, preview, props: IndexPageProps, ref: IndexPageRef ) {

  return (
      <PageTransition ref={ref}>
    <Layout preview={preview}>
      <Head>
        <title>{`Bistro Goeswijn`}</title>
      </Head>
      <Container>
        <IntroContact />
      </Container>
        <div className={'relative overflow-x-hidden w-full h-[180px] -mt-[180px]'}>
            <div className={'absolute bottom-[1px] -left-[60px] right-0'}><Blocks className={'bg-orange'}/></div>
            <div className={'absolute bottom-[59px] left-0 right-0'}><Blocks className={'bg-orange'}/></div>
            <div className={'absolute bottom-[117px] -left-[60px] right-0'}><Blocks className={'bg-orange'}/></div>
        </div>
    </Layout>
      </PageTransition>
  )
}
