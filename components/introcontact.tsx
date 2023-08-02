import {CMS_NAME, CMS_URL} from '../lib/constants'
import Blocks from "./blocks";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowDown, faLocationDot} from "@fortawesome/free-solid-svg-icons";
import React from "react";

export default function IntroContact() {
    return (
        <div className={'overflow-hidden'}>
            <section
                className={'text-center container overflow-hidden flex items-center justify-center min-h-screen flex-col'}>
                <div className={'py-40 text-center flex flex-col'}>
                    <h1 className={'text-orange text-[54px] lg:text-[120px] tracking-widest'}>Contact</h1>
                    <h2 className={'text-brown underline-yellow intro text-[28px] lg:text-[32px] tracking-widest'}>open 12-laat
                        dinsdagen dicht</h2>
                    <div className={'pb-20 lg:pt-10 pt-14 flex gap-20 items-center justify-center relative'}>
                        <ul className={'text tracking-widest mx-auto text-center w-full flex flex-col gap-4'}>
                            <li className={'text-[24px] lg:text-[32px] mb-4 written'}>Choorlammersteeg 1D</li>
                            <li className={'text-[24px] lg:text-[32px] mb-4 written'}>2311 EP leiden</li>
                            <li className={'text-[24px] lg:text-[32px] mb-4 written'}>
                                <a href={"tel:071-785-78-10"}>071-785 78 10</a>
                            </li>
                            <li className={'text-[24px] lg:text-[32px] mb-4 written'}>bistrogoeswijn@gmail.com</li>
                            <li>
                                <a target={'_blank'} href={'https://www.google.com/maps/place/Bistro+Goeswijn/@52.157204,4.4894487,17z/data=!3m1!4b1!4m6!3m5!1s0x47c5c7fda83cdef3:0x63df6ddbf3daefd8!8m2!3d52.157204!4d4.4920236!16s%2Fg%2F11sj59fm7j?entry=ttu'}>
                                    <h3 className={'route z-20 text-[32px] lg:text-[48px] text-brown p-4 w-full block mb-10'}>
                                        <FontAwesomeIcon icon={faLocationDot}/> Route</h3>
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>
            </section>
        </div>
    )
}
