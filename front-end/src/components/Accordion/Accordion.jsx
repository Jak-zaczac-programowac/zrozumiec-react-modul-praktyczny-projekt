import { useState } from "react";
import styles from "./Accordion.module.css";

import Arrow from "../../assets/arrow.svg";

function Accordion({ options }) {
    const [expandedOption, setExpandedOption] = useState();

    return (
        <div>
            {options.map((option) => (
                <div key={option.title} className={styles.option}>
                    <div
                        className={styles.optionTitle}
                        onClick={() => setExpandedOption(option)}
                    >
                        <p>{option.title}</p>
                        <img
                            src={Arrow}
                            className={`${styles.arrow} ${
                                option === expandedOption
                                    ? styles.arrowFlipped
                                    : ""
                            }`}
                        />
                    </div>

                    <p
                        className={`${styles.details} ${
                            option === expandedOption
                                ? styles.detailsVisible
                                : ""
                        }`}
                    >
                        {option.details}
                    </p>
                </div>
            ))}
        </div>
    );
}

export { Accordion };
