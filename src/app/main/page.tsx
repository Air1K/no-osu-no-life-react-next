import MainPageFon from "@/components/MainPageFon/MainPageFon";
import MainPageLogo from "@/components/MainPageLogo/MainPageLogo";
import styles from "./style.module.scss";
const Page = () => {
    return (
        <main className={styles.mainContainer}>
            <div className='fixed inset-0'>
                <MainPageFon/>
                <div className="snow_wrap">
                    <div className="snow"></div>
                </div>
                <MainPageLogo/>
            </div>
            <div style={{height: '300vh', width: '100%'}} className={styles.infoBloc}>

            </div>
        </main>
    );
};

export default Page;
