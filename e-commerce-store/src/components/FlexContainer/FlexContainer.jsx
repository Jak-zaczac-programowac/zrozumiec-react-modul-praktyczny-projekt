import style from "./FlexContanier.module.css";

function FlexContainer({ children }) {
    return <div className={style.flexContainer}>{children}</div>;
}

export { FlexContainer };
