import { websites } from "./app-data.js";

let headContainer, categaryList, webContainer, dateElement,greetElement;
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
    greetElement = document.querySelector('#greet_Element');
    
    dateRenderer(dateElement);
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
});

// Date and Greet Functions
function dateRenderer(x) {
    let date = new Date();
    let dateOptions = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    };
    return x.innerHTML = date.toLocaleDateString("en-GB", dateOptions);
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

function startRender() {
}