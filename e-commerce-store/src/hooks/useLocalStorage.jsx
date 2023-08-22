import { useCallback } from "react";

function useLocalStorage(key, defaultValue) {
    function setJSONToLocalStorage() {
        localStorage[key] = JSON.parse(data);
    }

    function readJSONFromLocalStorage(data) {
        if (localStorage[key]) {
            return JSON.stringify(localStorage[key]);
        } else {
            return defaultValue;
        }
    }

    return [setJSONToLocalStorage, readJSONFromLocalStorage];
}

function useLocalStorage(localStorageKey, defaultValue) {
    const getDataFromLocalStorage = useCallback(() => {
        let dataFromLocalStorage = defaultValue;

        if (localStorage[localStorageKey]) {
            dataFromLocalStorage = JSON.parse(localStorage[localStorageKey]);
        }

        return dataFromLocalStorage;
    }, [localStorageKey, defaultValue]);

    const addDataToLocalStorage = useCallback(
        function (newData) {
            localStorage[localStorageKey] = JSON.stringify(newData);
        },
        [localStorageKey]
    );

    return [getDataFromLocalStorage, addDataToLocalStorage];
}

export { useLocalStorage };
