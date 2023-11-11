import { websitesData } from "./app-data.js";

// Variable Declarations:
let headContainer,
    categaryList,
    webContainer,
    dateElement,
    greetElement,
    searchInput,
    timeElement;


// DOMContentLoaded Event Listener:
document.addEventListener("DOMContentLoaded", function () {

    headContainer = document.querySelector('#head_container');
    categaryList = document.querySelector('#categary_list');
    webContainer = document.querySelector('#web_container');
    dateElement = document.querySelector('#date_Element');
    timeElement = document.querySelector("#time_Element");
    greetElement = document.querySelector('#greet_Element');
    searchInput = document.querySelector('.search-cat');

    // Date and Time Update:
    setInterval(() => {
        dateRenderer(dateElement, timeElement)
    }, 1000);
    greetings(greetElement);
    categaryFilter();

    // Category Filter Function:
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
        // Converting to lowercase for case-insensitive search
        const searchValue = e.target.value.toLowerCase();

        // Clear previous search results
        webContainer.innerHTML = '';

        // Iterate over categories
        Object.values(websitesData).forEach((category) => {
            // Filter websites within each category
            const resultWebsites = category.filter((website) =>
                website.name.toLowerCase().includes(searchValue)
            );

            // Update the web container with the search results for each category
            const htmlContent = resultWebsites.map((website) => {
                return `<a href="${website.link}">${website.name}</a>`;
            }).join('');

            // Display the search results for each category
            webContainer.innerHTML += htmlContent;
        });
    });

});

// Websites Loader Function:
function websitesLoader(cat) {
    let catArray = websitesData[cat];
    webContainer.innerHTML = catArray.map((website) => {
        return `
            <a href = "${website.link}">${website.name}</a>
            `;
    }).join('');
    console.log(webContainer);
}

// Date Renderer Function:
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

// Greetings Function:
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
