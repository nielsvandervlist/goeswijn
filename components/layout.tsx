import Alert from './alert'
import Footer from './footer'
import Meta from './meta'
import Header from "./header";
import ResengoWidget from "./resengoWidget";
import Script from "next/script";

export default function Layout({preview, children}) {
    return (
        <>
            <Meta/>
            <div className="min-h-screen">
                <Header/>
                <main className={'relative'}>{children}</main>
                    <ResengoWidget />
            </div>
        </>
    )
}
