import Image from "next/image";
import MainPageLogo from "@/components/MainPageLogo/MainPageLogo";

const MainPageFon = () => {
    const nameImg = Math.floor(Math.random() * 11);
    return (
        <Image width={1920} height={1080} className="w-full h-full absolute top-0 overflow-hidden object-cover lg:aspect-auto" src={`/img/osu-fon/${nameImg}.png`} alt={''}/>
    );
};

export default MainPageFon;
