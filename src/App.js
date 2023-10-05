var list = document.querySelector("#bmlist");
var cat = document.querySelector("#catlist");
var main = document.querySelector(".bmlist");
var catName = document.querySelector("#catName");
var appStore = document.querySelector("#appstore");

import {websites} from './data.js';
import { favs } from './favapps.js';

// Function for generating Bookmarks
let genPage = () => {
    let catlist = filterCategory();
    main.innerHTML = catlist.map((x) => `
    <div class="bmcat"><span class="sticky">${x}</span>
        <div class="siteList">
            ${filteredWebsites(x)}
        </div>
    </div>
    <hr>
    `).join("");
};
genPage();

// Function to filter website categories
function filterCategory() {
    let filteredCategory = Array.from(new Set(websites.map((x) => x.cat)));
    return filteredCategory;
    console.log(filteredCategory);
}

// Function to filter websites based on category
function filteredWebsites(cat) {
    let filteredWeb = websites.filter((x) => x.cat === cat);
    let printWeb = () => {
        return filteredWeb.map((x) => `
            <a href="${x.link}" target="_blank">${x.name}</a>
        `).join("");
    };
    return printWeb();
}

favs.map((x) => console.log(x));

// Function for generating Fav Applications
function favAppGen() {
    return (appStore.innerHTML= favs.map((x) => {
        let { name, link } = x;
        return  `
        <a class="applist" href="${x.link}">
            ${x.name}
        </a>
        `
    }).join(""));
}
favAppGen();