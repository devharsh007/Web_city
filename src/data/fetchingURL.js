document.addEventListener("DOMContentLoaded", function () {
    const urls = [
        "https://cors-anywhere.herokuapp.com/https://www.github.com",
        "https://cors-anywhere.herokuapp.com/https://www.google.com",

        // Add more URLs as needed
    ];

    const titlesContainer = document.getElementById("titles-container");

    urls.forEach(url => {
        fetch(url)
            .then(response => response.text())
            .then(html => {
                const parser = new DOMParser();
                const doc = parser.parseFromString(html, "text/html");
                const title = doc.querySelector("title").textContent;

                const titleElement = document.createElement("p");
                titleElement.textContent = `Title :${title}`;

                titlesContainer.appendChild(titleElement);
            })
            .catch(error => {
                console.error(`Error fetching ${url}:`, error);
            });
    });
});
