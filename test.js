import { websitesData } from "./app-data.js";

// DOMContentLoaded Functions
document.addEventListener("DOMContentLoaded", function () {

    let headContainer = document.querySelector('#head_container');
    let categaryList = document.querySelector('#categary_list');
    let webContainer = document.querySelector('#web_container');
    let dateElement = document.querySelector('#date_Element');
    let timeElement = document.querySelector("#time_Element");
    let greetElement = document.querySelector('#greet_Element');
    const searchInput = document.querySelector('.search-cat');

    // Setting the clock updation 
    setInterval(() => {
        dateRenderer(dateElement, timeElement)
    }, 1000);
    greetings(greetElement);
    categaryFilter();

    // Filter Categary
    function categaryFilter() {
        let catArray = Object.keys(websitesData);
        // console.log(catArray);
        for (let i of catArray) {
            categaryList.innerHTML +=
                `<button id=${i}>${i}</Button > `
        }
    }

    // Event listener for buttons
    categaryList.addEventListener('click', (e) => {
        if (e.target && e.target.nodeName == 'BUTTON') {
            let category = e.target.id;
            websitesLoader(category);
        }
    })

    // Event listener for search
    searchInput.addEventListener('input', (e) => {
        const searchValue = e.target.value.toLowerCase();

        // Clear previous search results
        webContainer.innerHTML = '';

        // Iterate over categories
        Object.values(websitesData).forEach((category) => {
            const resultWebsites = category.filter((website) =>
                website.name.toLowerCase().includes(searchValue)
            );

            const htmlContent = resultWebsites.map((website) => {
                return `<a href="${website.link}">${website.name}</a>`;
            }).join('');

            webContainer.innerHTML += htmlContent;
        });
    });

});

function websitesLoader(cat) {
    let catArray = websitesData[cat];
    webContainer.innerHTML = catArray.map((website) => {
        return `
            <a href = "${website.link}">${website.name}</a>
            `;
    }).join('');
    console.log(webContainer);
}

//? Date and Greet Functions
function dateRenderer(x, y) {
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
