import Alert from './alert'
import Footer from './footer'
import Meta from './meta'
import Header from "./header";
import ResengoWidget from "./resengoWidget";

export default function Layout({preview, children}) {
    return (
        <>
            <Meta/>
            <div className="min-h-screen">
                <Header/>
                <main>{children}</main>
            </div>
        </>
    )
}
