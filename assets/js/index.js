import {BASE_URL} from "./config.js";

export const apiList = (s , type) => {

    const url = BASE_URL + `s=${s}&type=${type}`
    fetch(url)
    .then((response) => response.json())
    .then((results) => {
        const items = results.Search;
        viewMoviesGroup(items);
        viewMoviesTable(items);
    })
}

export const viewMoviesGroup = (items) => {

    items.map((item) => {
        console.group(item.Title);
        console.log(item.Title);
        console.log(item.Type);
        console.log(item.Year);
        console.log(item.Poster);
        console.groupEnd();
    })
}

export const viewMoviesTable = (items) => {

    items.map((item) => {
        console.table(item);
    })
}