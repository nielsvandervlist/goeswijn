import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'
import Blocks from "./blocks";

export default function Footer() {
  return (
    <footer className={'relative mt-80'}>
      <div className={'absolute bottom-[0px] -left-[60px] right-0'}><Blocks className={'bg-green'}/></div>
      <div className={'absolute bottom-[58px] left-0 right-0'}><Blocks className={'bg-green'}/></div>
      <div className={'absolute bottom-[116px] -left-[60px] right-0'}><Blocks className={'bg-green'}/></div>
    </footer>
  )
}
