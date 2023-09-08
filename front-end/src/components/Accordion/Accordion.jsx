import { useState } from "react";
import styles from "./Accordion.module.css";
import ARROW_ICON from "../../assets/arrow.svg";

export function Accordion({ content }) {
    const [activeSectionIndex, setActiveSectionIndex] = useState(0);
    return (
        <ul>
            {content.map((section, index) => {
                return (
                    <li key={section.title}>
                        <div
                            className={styles.section}
                            onClick={() => setActiveSectionIndex(index)}
                        >
                            <p>{section.title}</p>
                            <img
                                src={ARROW_ICON}
                                className={
                                    index == activeSectionIndex
                                        ? styles.expanded
                                        : ""
                                }
                            />
                        </div>
                        {index === activeSectionIndex && (
                            <p className={styles.content}>{section.content}</p>
                        )}
                    </li>
                );
            })}
        </ul>
    );
}
