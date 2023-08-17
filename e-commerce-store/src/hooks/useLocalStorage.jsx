import { useCallback } from "react";

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
