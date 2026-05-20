function updateLocalStorage() {
    localStorage.setItem("books", JSON.stringify(books));
}

function getFromLocalStorage() {
    books = JSON.parse(localStorage.getItem("books"));
}