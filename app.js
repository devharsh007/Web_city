// To make the searchbar functioning
function handleKeyDown(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        search();
        return false;
    }
    return true;
}
function search() {
    var query = document.querySelector("input[name=q]").value;
    var searchUrl = "https://search.brave.com/search?q=" + encodeURIComponent(query);
    window.open(searchUrl, "_blank");
}