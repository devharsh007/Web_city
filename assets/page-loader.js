
let filteredCategory = document.getElementById("filteredCat");
let appBar = document.getElementById("bookmarks-bar");

// Provides current date 
function date() {
    let currentDate = new Date();
    let dateOptions = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    };
    let date = currentDate.toLocaleDateString("en-GB", dateOptions);
    document.getElementById("date-bar").innerHTML = date;
}
// Greet function provider
function greet() {
    let currentTime = new Date();
    let greet = Math.floor(currentTime.getHours() / 6);
    switch (greet) {
        case 0:
            document.getElementById("greet-bar").innerHTML = "Good Night!";
            break;
        case 1:
            document.getElementById("greet-bar").innerHTML = "Good Morning!";
            break;
        case 2:
            document.getElementById("greet-bar").innerHTML = "Good Afternoon!";
            break;
        case 3:
            document.getElementById("greet-bar").innerHTML = "Good Evening!";
            break;
    }
};
// function to load date() & greet()
function loadFunction() {
    date();
    greet();
}
window.onload = loadFunction();


import {websites} from './app-data.js';

// Filter Categary
function fiterFunction() {
    let filterCategory = Array.from(new Set(websites.map((x) => x.cat)));
    return filterCategory;
}

// Render filter function in HTML
function categaryRender() {
    let filtredWeb = fiterFunction();
    filteredCategory.innerHTML = filtredWeb.map((x) => `
    <button class="categary-list">${x}</button>
    `).join("");

    // Add event listener to category buttons
    filteredCategory.addEventListener('click', function (event) {
    if (event.target.classList.contains('categary-list')) {
        const selectedCategory = event.target.textContent;
        const filteredLinks = websites.filter((site) => site.cat === selectedCategory);
        displayCategoryLinks(filteredLinks);
    }
    });
}

// Display category links
function displayCategoryLinks(categoryLinks) {
    const categoryLinksContainer = document.getElementById('category-links');

    // Clear the previous content in the container
    categoryLinksContainer.innerHTML = '';

    // Render the links for the selected category
    categoryLinks.forEach((link) => {
        const listItem = document.createElement('li');
        const linkElement = document.createElement('a');
        linkElement.href = link.link;
        linkElement.target = "_blank";
        linkElement.textContent = link.name;
        listItem.appendChild(linkElement);
        categoryLinksContainer.appendChild(listItem);
    });
}
categaryRender();
