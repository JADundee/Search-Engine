import { setSearchFocus } from "./searchBar.js";
import { getSearchTerm } from "./dataFunctions.js";
import { retrieveSearchResults } from "./dataFunctions.js";
import { buildSearchResults } from "./searchResults.js";

document.addEventListener("readystatechange", (event) => {
    if (event.target.readyState === "complete") {
        initApp()
    }
})

const initApp = () => {
    setSearchFocus();

    //TODO: 3 listeners clear text

    const form = document.getElementById("searchBar")
    form.addEventListener("submit", submitSearch)
}

// Procedural Workflow Function
const submitSearch = (event) => {
    event.preventDefault();
    //TODO: delete search results
    processSearch();
    //TODO: set focus
}

// procedural
const processSearch = async () => {
    //TODO: clear stats line
    const searchTerm = getSearchTerm();
    if (searchTerm === "") return;
    const resultArray = await retrieveSearchResults(searchTerm);
    if (resultArray.length) buildSearchResults(resultArray);
    //TODO: set stats line
}