
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

// filteres the websites categaries
function fiterFunction() {
    let filterCategory = Array.from(new Set(websites.map((x) => x.cat)));
    return filterCategory;
}

// shows categaries to HTML
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
        // Use the correct property name for the URL
        linkElement.textContent = link.name;
        listItem.appendChild(linkElement);
        categoryLinksContainer.appendChild(listItem);
    });
}
categaryRender();

function appsRender(category) {
    // Clear the previous content in the AppBar
    console.log("appsRender called with category: " + category);
    appBar.innerHTML = '';
    // Filter the websites based on the selected category
    const filteredWebsites = websites.filter((site) => site.cat === category);
    // Create and append HTML elements for each website
    filteredWebsites.forEach((site) => {
        const websiteElement = document.createElement('a');
        websiteElement.href = site.link;
        websiteElement.textContent = site.name;

        const websiteItem = document.createElement('div');
        websiteItem.classList.add('website-item');
        websiteItem.appendChild(websiteElement);

        appBar.appendChild(websiteItem);
    });
}
// !Call appsRender initially with a default category (e.g., the first category)
const defaultCategory = " ";
appsRender(defaultCategory); // You can change this to the desired default category


function searchRender(searchTerm) {
    // Clear the previous content in the appBar
    appBar.innerHTML = '';
    // Filter the websites based on the search term
    const filteredWebsites = websites.filter((site) => site.name.toLowerCase().includes(searchTerm.x()));
    // Create and append HTML elements for each website
    filteredWebsites.forEach((site) => {
        const websiteElement = document.createElement('a');
        websiteElement.href = site.link;
        websiteElement.textContent = site.name;

        const websiteItem = document.createElement('div');
        websiteItem.classList.add('website-item');
        websiteItem.appendChild(websiteElement);

        appBar.appendChild(websiteItem);
    });
}

// Add a search input field to the HTML
const searchInput = document.createElement('input');
searchInput.type = 'text';
searchInput.placeholder = 'Search...';
searchInput.id = 'search-input';
appBar.appendChild(searchInput);

// Add an event listener to handle search input
searchInput.addEventListener('input', (event) => {
    const searchTerm = event.target.value;
    searchRender(searchTerm);
});



  

