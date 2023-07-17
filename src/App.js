var list = document.querySelector("#bmlist");
var cat = document.querySelector("#catlist");
var main = document.querySelector(".bmlist");
var catName = document.querySelector("#catName");

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










// Filter and display websites based on category
// function filterWebsites(category) {
//   let filteredWebsites = websites.filter((website) => website.cat === category);
//   let content = filteredWebsites.map((website) => `<a href="${website.link}">${website.name}</a>`).join("");
//   list.innerHTML = content;
// }

// Generate the category list
// function generateCategoryList() {
//   let categories = Array.from(new Set(websites.map((website) => website.cat)));
//   let content = categories.map((category) => `<li onclick="filterWebsites('${category}')">${category}</li>`).join("");
//   cat.innerHTML = content;
// }

// generateCategoryList();



// Certainly! Let's go through the code step by step to understand how it works:
// 1. The `websites` array contains objects representing different websites. Each object has properties like `link`, `cat` (category), and `name` for the website's details.
// 2. The variables `list` and `cat` are assigned the references to HTML elements with the `id` attributes "list" and "catlist", respectively. These elements will be used to display the filtered websites and the category list.
// 3. The `filterWebsites` function takes a `category` parameter and filters the `websites` array based on that category. It uses the `filter` method to create a new array containing only the websites that have a matching category.
// 4. The filtered websites are then mapped to HTML anchor tags using the `map` method. Each anchor tag has the website's name as the inner content and its link as the `href` attribute.
// 5. The mapped anchor tags are joined together into a single string using the `join` method, and the resulting HTML content is assigned to the `content` variable.
// 6. The `content` is then inserted into the `list` element's innerHTML property, replacing any previous content. This updates the displayed list of websites.
// 7. The `generateCategoryList` function generates the category list based on the unique categories present in the `websites` array.
// 8. It first uses the `map` method to extract all the categories from the `websites` array.
// 9. The `Set` object is used to create a new set of unique categories by passing the categories array as an argument. This removes any duplicate categories.
// 10. The resulting set is converted back to an array using `Array.from` and assigned to the `categories` variable.
// 11. The `categories` array is then mapped to HTML list items (`<li>`) using the `map` method. Each list item has an `onclick` event attached that calls the `filterWebsites` function with the corresponding category as a parameter.
// 12. The mapped list items are joined together into a single string and assigned to the `content` variable.
// 13. The `content` is inserted into the `cat` element's innerHTML property, replacing any previous content. This updates the displayed category list.
// 14. Finally, the `generateCategoryList` function is called to generate the initial category list when the page loads.
// By using the `filter` and `map` array methods, the code dynamically filters the websites based on the selected category and updates the list accordingly. The category list allows users to select a specific category to view the related websites