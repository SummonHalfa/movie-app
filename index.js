import {BASE_URL} from "./config.js";

export const apiList = (s , type) => {

    const url = BASE_URL + `s=${s}&type=${type}`
    console.log(url);
    fetch(url)
    .then((response) => response.json())
    .then((results) => {
        const items = results.Search;
        console.log(items);
    })

}