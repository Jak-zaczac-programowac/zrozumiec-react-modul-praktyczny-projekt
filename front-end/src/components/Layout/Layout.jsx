import { TopBar } from "../../components/TopBar/TopBar";
import { MainMenu } from "../../components/MainMenu/MainMenu";
import { Logo } from "../../components/Logo/Logo";
import { IconMenu } from "../../components/IconMenu/IconMenu";
import { CategoriesMenu } from "../../components/CategoriesMenu/CategoriesMenu";
import { Footer } from "../../components/Footer/Footer";
import { MainContent } from "../../components/MainContent/MainContent";
import { CurrencySelector } from "../../components/CurrencySelector/CurrencySelector";

function Layout({ children }) {
    return (
        <>
            <MainContent>
                <TopBar>
                    <MainMenu />
                    <Logo />
                    <CurrencySelector />
                    <IconMenu />
                </TopBar>
                <CategoriesMenu />
                {children}
            </MainContent>
            <Footer />
        </>
    );
}

export { Layout };
