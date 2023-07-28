import { ThreeColumnsBar } from "../../components/ThreeColumnsBar/ThreeColumnsBar";
import { MainMenu } from "../../components/MainMenu/MainMenu";
import { Logo } from "../../components/Logo/Logo";
import { IconMenu } from "../../components/IconMenu/IconMenu";
import { CategoriesMenu } from "../../components/CategoriesMenu/CategoriesModule";
import { Footer } from "../../components/Footer/Footer";
import { Outlet } from "react-router-dom";

function Layout() {
    return (
        <>
            <ThreeColumnsBar>
                <MainMenu />
                <Logo />
                <IconMenu />
            </ThreeColumnsBar>
            <CategoriesMenu />
            <Outlet />
            <Footer />
        </>
    );
}

export { Layout };
