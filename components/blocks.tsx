import {useEffect, useRef, useState} from "react";
import clsx from "clsx";

export default function Blocks({className}){

    const size = useWindowSize();

    function useWindowSize() {
        const [windowSize, setWindowSize] = useState({
            width: undefined,
            height: undefined,
        });
        useEffect(() => {
            function handleResize() {
                setWindowSize({
                    width: window.innerWidth,
                    height: window.innerHeight,
                });
            }
            window.addEventListener("resize", handleResize);
            handleResize();
            return () => window.removeEventListener("resize", handleResize);
        }, []);
        return windowSize;
    }

    function blocks(){
        const width = useWindowSize().width
         const numberOfBlocks = Math.ceil(width / 120) + 1
        let blocksArray = []

        for (let i = 0; i < numberOfBlocks; i++ ){
            blocksArray.push(<div key={i} className={'flex'}>
                <div className={clsx(className, 'border-brown border-[2px] border-l-[0px] h-[60px] w-[60px]')}/>
                <div className={'border-brown bg-background border-[2px] border-l-[0px] h-[60px] w-[60px]'}/>
            </div>)
        }

        return blocksArray
    }

    return <div>
        <div className={'flex'}>
            {
                blocks()
            }
        </div>
    </div>
}
