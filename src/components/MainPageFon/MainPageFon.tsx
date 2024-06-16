import Image from "next/image";

const MainPageFon = () => {
    const nameImg = Math.floor(Math.random() * 11);
    return (
        <div>
            <Image width={1920} height={1080} className="w-full h-full absolute top-0 object-cover lg:aspect-auto" src={`/img/osu-fon/${nameImg}.png`} alt={''}/>

        </div>
    );
};

export default MainPageFon;
