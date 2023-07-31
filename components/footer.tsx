import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'
import Blocks from "./blocks";
import ResengoWidget from "./resengoWidget";

export default function Footer() {
  return (
    <footer className={'mt-20 lg:mt-80 relative'}>

        <ResengoWidget />

      <div className={'absolute bottom-[0px] -left-[60px] right-0'}><Blocks className={'bg-green'}/></div>
      <div className={'absolute bottom-[58px] left-0 right-0'}><Blocks className={'bg-green'}/></div>
      <div className={'absolute bottom-[116px] -left-[60px] right-0'}><Blocks className={'bg-green'}/></div>
    </footer>
  )
}
