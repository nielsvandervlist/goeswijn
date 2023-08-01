import { AppProps } from 'next/app'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import '../styles/index.css'
import '../styles/main.scss'
import {AnimatePresence} from "framer-motion";
import {useRouter} from "next/router";

function MyApp({ Component, pageProps }: AppProps) {

  const onExitComplete = () => {
    window.scrollTo({ top: 0 })
  }

  const router = useRouter()
  const pageKey = router.asPath

  return <AnimatePresence onExitComplete={onExitComplete} mode="wait" initial={false}><Component key={pageKey} {...pageProps} /></AnimatePresence>
}

export default MyApp
