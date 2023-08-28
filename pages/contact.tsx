import Head from 'next/head'
import {GetStaticProps} from 'next'
import Container from '../components/container'
import Layout from '../components/layout'
import {getContactContent} from '../lib/api'
import IntroMenu from "../components/intromenu";
import IntroContact from "../components/introcontact";
import Blocks from "../components/blocks";
import PageTransition from "../components/PageTransition";
import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLocationDot} from "@fortawesome/free-solid-svg-icons";

type IndexPageProps = {}
type IndexPageRef = React.ForwardedRef<HTMLDivElement>

export default function Menu({contact}, preview, props: IndexPageProps, ref: IndexPageRef) {

    const content = contact.content.replace(/\\"/g, '"')

    return (
        <PageTransition ref={ref}>
            <Layout preview={preview}>
                <Head>
                    <title>{`Contact`}</title>
                </Head>
                <Container>
                    <IntroContact content={content}/>
                </Container>
                <div className={'relative overflow-x-hidden w-full h-[180px] -mt-[180px]'}>
                    <div className={'absolute bottom-[1px] -left-[60px] right-0'}><Blocks className={'bg-orange'}/>
                    </div>
                    <div className={'absolute bottom-[59px] left-0 right-0'}><Blocks className={'bg-orange'}/></div>
                    <div className={'absolute bottom-[117px] -left-[60px] right-0'}><Blocks className={'bg-orange'}/>
                    </div>
                </div>

            </Layout>
        </PageTransition>
    )
}

export const getStaticProps: GetStaticProps = async ({preview = false}) => {
    const contact = await getContactContent()

    return {
        props: {contact, preview},
        revalidate: 10,
    }
}
