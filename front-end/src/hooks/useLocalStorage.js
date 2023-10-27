import { useState } from "react";

export function useLocalStorage(key, defaultValue) {
    function getJSONFromLocalStorage() {
        if (localStorage[key]) {
            return JSON.parse(localStorage[key]);
        } else {
            return defaultValue;
        }
    }

    const [data, setData] = useState(() => getJSONFromLocalStorage());

    function setJSONTOLocalStorage(newData) {
        setData(newData);
        localStorage[key] = JSON.stringify(newData);
    }

    return [data, setJSONTOLocalStorage];
}
