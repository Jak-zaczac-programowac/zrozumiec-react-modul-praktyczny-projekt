import { ThreeColumnsBar } from "../../components/ThreeColumnsBar/ThreeColumnsBar";
import { MainMenu } from "../../components/MainMenu/MainMenu";
import { Logo } from "../../components/Logo/Logo";
import { IconMenu } from "../../components/IconMenu/IconMenu";
import { CategoriesMenu } from "../../components/CategoriesMenu/CategoriesModule";
import { SummerSale } from "../../components/SummerSale/SummerSale";
import { BestSellers } from "../../components/BestSellers/BestSellers";
import { Footer } from "../../components/Footer/Footer";

function MainPage() {
    return (
        <>
            <ThreeColumnsBar>
                <MainMenu />
                <Logo />
                <IconMenu />
            </ThreeColumnsBar>
            <CategoriesMenu />
            <SummerSale />
            <BestSellers />
            <Footer />
        </>
    );
}

export { MainPage };
