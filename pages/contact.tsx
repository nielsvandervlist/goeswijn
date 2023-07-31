import Head from 'next/head'
import { GetStaticProps } from 'next'
import Container from '../components/container'
import Layout from '../components/layout'
import {getMenuContent} from '../lib/api'
import IntroMenu from "../components/intromenu";
import IntroContact from "../components/introcontact";

export default function Menu({ menu }, preview ) {

  return (
    <Layout preview={preview}>
      <Head>
        <title>{`Bistro Goeswijn`}</title>
      </Head>
      <Container>
        <IntroContact />
      </Container>
    </Layout>
  )
}
