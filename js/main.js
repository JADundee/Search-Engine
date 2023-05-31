document.addEventListener("readystatechange", (event) => {
    if (event.target.readyState === "complete") {
        initApp()
    }
})

const initApp = () => {
    // set focus

    // 3 listeners clear text

    const form = document.getElementById("searchBar")
    form.addEventListener("submit", submitSearch)
}

// Procedural Workflow Function
const submitSearch = (event) => {
    event.preventDefault();
    // delete search results
    // process search
    // set focus
}