import { setSearchFocus } from "./searchBar.js";
import { getSearchTerm } from "./dataFunctions.js";

document.addEventListener("readystatechange", (event) => {
    if (event.target.readyState === "complete") {
        initApp()
    }
})

const initApp = () => {
    setSearchFocus();

    // 3 listeners clear text

    const form = document.getElementById("searchBar")
    form.addEventListener("submit", submitSearch)
}

// Procedural Workflow Function
const submitSearch = (event) => {
    event.preventDefault();
    // delete search results
    processSearch();
    // set focus
}

// procedural
const processSearch = async () => {
    // clear stats line
    const searchTerm = getSearchTerm();
    if (searchTerm === "") return;
    const resultArray = await retrieveSearchResults(searchTerm);
}