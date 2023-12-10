import { websitesData } from "./app-data.js";

// Variable Declarations:
let headContainer,
    categaryList,
    appList,
    dateElement,
    greetElement,
    searchInput,
    timeElement;


// DOMContentLoaded Event Listener:
document.addEventListener("DOMContentLoaded", function () {

    headContainer = document.querySelector('#head_container');
    categaryList = document.querySelector('#categary_list');
    appList = document.querySelector('#app_list');
    dateElement = document.querySelector('#date_Element');
    timeElement = document.querySelector("#time_Element");
    searchInput = document.querySelector('.search-cat');

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
        appList.innerHTML = '';

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
            appList.innerHTML += htmlContent;
        });
    });

});

// Websites Loader Function:
function websitesLoader(cat) {
    let catArray = websitesData[cat];
    appList.innerHTML = catArray.map((website) => {
        return `
            <a href = "${website.link}">${website.name}</a>
            `;
    }).join('');
    console.log(appList);
}
