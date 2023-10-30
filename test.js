import { websites } from "./app-data.js";

let headContainer, categaryList, webContainer, dateElement,greetElement,timeElement;
function websitesLoader(cat) {
        console.log(cat);
        let webArray = websites.filter((x) => x.cat === cat);
        console.log(webArray);
        webContainer.innerHTML = webArray.map((website) => {
            return `
            <a href = "${website.link}">${website.name}</a>
            `;
        }).join('');
        console.log(webContainer);
}


// DOMContentLoaded Functions
document.addEventListener("DOMContentLoaded", function () {
    
    headContainer = document.querySelector('#head_container');
    categaryList = document.querySelector('#categary_list');
    webContainer = document.querySelector('#web_container');
    dateElement = document.querySelector('#date_Element');
    timeElement = document.querySelector("#time_Element");
    greetElement = document.querySelector('#greet_Element');
    const searchInput = document.querySelector('.search-cat');
    
    dateRenderer(dateElement,timeElement);
    greetings(greetElement);

    //Categary Render
    function DataRenderer() {
        categaryList.innerHTML = categaryFilter().map((x) =>
            `<button class="cat_btn" id=${x}>${x}</button>`
        ).join('');
    };
    DataRenderer(); 
    
    // Filter Categary
    function categaryFilter() {
        return Array.from(new Set(websites.map((x) => x.cat)))
    }
    // Event listener for buttons
    categaryList.addEventListener('click', (e) => {
        if (e.target && e.target.nodeName == 'BUTTON') {
            const category = e.target.id;
            websitesLoader(category);
        }
    })

    // Event listener for search
    searchInput.addEventListener('input', (e) => {
        // Converting to lowercase for case insensitive search
        const searchValue = e.target.value.toLowerCase();
        const resultWebsites = websites.filter((website) => website.name.toLowerCase().includes(searchValue));

        webContainer.innerHTML = resultWebsites.map((website) => {
            return `
            <a href = "${website.link}">${website.name}</a>
            `;
        }).join('');
    });
});

// Date and Greet Functions
function dateRenderer(x,y) {
    let date = new Date();
    let dateOptions = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    };
    let time = date.toLocaleTimeString();
    x.innerHTML = date.toLocaleDateString("en-GB", dateOptions);
    y.innerHTML = time.toUpperCase();
    return;
}

function greetings(x) {
    const timeOfDay = (new Date()).getHours();
    if (timeOfDay < 6) {
        return x.innerHTML = 'Good night';
    } else if (timeOfDay < 12) {
        return x.innerHTML = 'Good morning';
    } else if (timeOfDay < 18) {
        return x.innerHTML = 'Good afternoon';
    } else {
        return x.innerHTML = 'Good evening';
    }
}
