import { redirect } from "react-router-dom";
import { BACK_END_URL, PATH_TO_ENDPOINT_MAPPING } from "../constants/api";

function mainPageLoader({ params }) {
    const gender = params.gender;

    const backEndPath = PATH_TO_ENDPOINT_MAPPING[gender];

    if (backEndPath) {
        return fetch(`${BACK_END_URL}/${backEndPath}`);
    } else {
        return redirect("/kobieta");
    }
}

export { mainPageLoader };
