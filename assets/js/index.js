import {BASE_URL} from "./config.js";
export const apiList = (s , type) => {

    const url = BASE_URL + `s=${s}&type=${type}`
    fetch(url)
    .then((response) => response.json())
    .then((results) => {
        const items = results.Search;
        viewMovieSlider(items);
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

export const viewMovieSlider = (items) => {
    const container = document.getElementById('movies');
    items.map((item) => {
         container.appendChild(createHTML(item));
    })
}

const createHTML = (item) => {
    //<img src="https://m.media-amazon.com/images/M/MV5BNzFjZmM1ODgtMDBkMS00NWFlLTg2YmUtZjc3ZTgxMjE1OTI2L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg" class="card-img-top" alt="...">
    let TITLE = item.Title;
    let YEAR = item.Year;
    let TYPE = item.Type;
    let POSTER = item.Poster;

    let swiper = document.createElement('div');
    swiper.className = 'swiper-slide';

    let card = document.createElement('div');
    card.className='card';

    let img = document.createElement('img');
    img.className = 'card-img-top';
    img.src = POSTER;

    let cardbody = document.createElement('div');
    cardbody.className='card-body';

    let section = document.createElement('section');
    section.className='d-flex justify-content-between';

    let blankdiv = document.createElement('div');
    let icon = document.createElement('i');
    let icon2 = document.createElement('i');
    icon.className='bi bi-play-circle-fill card-icon';
    icon2.className='bi bi-play-circle card-icon';

    blankdiv.appendChild(icon);
    blankdiv.appendChild(icon2);

    let blankdiv2 = document.createElement('div');
    let icondiv2 = document.createElement('i');
    icondiv2.className='bi bi-arrow-down-circle card-icon';

    blankdiv2.appendChild(icondiv2);

    section.appendChild(blankdiv);
    section.appendChild(blankdiv2);

    let section2 = document.createElement('section');
    section2.className='d-flex align-items-center justify-content-between';
    let paragraf = document.createElement('p');
    paragraf.className='movieapp-card-text m-0';
    paragraf.style.cssText='color: rgb(0, 186, 0);';
    paragraf.innerHTML=YEAR;
    let span = document.createElement('span');
    span.className='m-2 movieapp-card-text text-white';
    span.innerHTML = TYPE;
    let span2 = document.createElement('span');
    span2.className='border movieapp-card-text p-1 text-white';
    span2.innerHTML = 'HD';
    let span3 = document.createElement('span');
    span3.className='movieapp-card-text text-white';
    span3.innerHTML = TITLE;

    section2.appendChild(paragraf);
    section2.appendChild(span);
    section2.appendChild(span2);

    cardbody.appendChild(section);
    cardbody.appendChild(section2);
    cardbody.appendChild(span3);
    cardbody.appendChild(img);

    card.appendChild(img);
    card.appendChild(cardbody);
    swiper.appendChild(card);

    console.log(swiper);
    return swiper;
}