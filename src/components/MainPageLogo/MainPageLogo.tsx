"use client"
import Image from "next/image";
import {useEffect, useRef} from "react";
import {logoMove} from "@/hook/useLogoMove";

const MainPageLogo = () => {
    const refChild = useRef(null);
    const refParent = useRef(null);

    useEffect(() => {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) return;
        logoMove(refChild, refParent);
    }, []);

    return (
        <div className='w-screen h-screen absolute top-0 left-0 overflow-hidden'>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div ref={refParent} className="w-full h-full relative">
                    <Image width={1920} height={1080} className="w-full h-full object-contain lg:aspect-auto z-20"
                           src={'/img/NO-NLbac.png'} alt={''}/>
                    <div ref={refChild} className="w-full h-full absolute left-0" style={{top: "20%"}}>
                        <Image width={1920} height={1080} className="w-full h-full object-contain lg:aspect-auto"
                               src={'/img/head2.png'} alt={''}/>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default MainPageLogo;
