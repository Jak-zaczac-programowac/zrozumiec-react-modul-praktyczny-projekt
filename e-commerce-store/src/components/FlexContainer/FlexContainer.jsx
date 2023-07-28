import style from "./FlexContanier.module.css";

function FlexContainer({ children }) {
    return <div className={style["flex-container"]}>{children}</div>;
}

export { FlexContainer };
