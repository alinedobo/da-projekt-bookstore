function init() {
    renderBookListing();
}

function renderBookListing() {
    const bookListingRef = document.getElementById("book-listing");

    for (let i = 0; i < books.length; i++) {
        bookListingRef.innerHTML += /*html*/ `
            <div class="book-preview">
                <img src="./assets/images/Vectorizeimages-Iconpack-Book.512.png" alt="icon of a book" onclick="showBookDetails(${i})">
                <p>${books[i].name}</p>
            </div>
        `;
    }
}




function showBookDetails(index) {
    const dialogRef = document.getElementById("book-dialog");

    dialogRef.showModal();

    dialogRef.innerHTML = /*html*/ `
    <div id="dialog-container">
        <header>
            <h2 id="title">${books[index].name}</h2>
            <img src="./assets/icons/close-button.svg" alt="close button" />
        </header>
        <section>
            <div id="book-details">
                <div id="book-numbers">
                    <h2 id="price">${books[index].price}€</h2>
                    <div id="likes">
                        <p id="likes-counter">1212</p>
                        <button id="heart">
                            <p>&#x2661;</p>
                        </button>
                    </div>
                </div>
                <table>
                    <tr>
                        <th>Author:</th>
                        <td>${books[index].author}</td>
                    </tr>
                    <tr>
                        <th>Published:</th>
                        <td>${books[index].publishedYear}</td>
                    </tr>
                    <tr>
                        <th>Genre:</th>
                        <td>${books[index].genre}</td>
                    </tr>
                </table>
            </div>
        </section>
        <section>
            <h3>Comments:</h3>
            <table>
                <tr>
                    <td></td>
                    <td></td>
                </tr>
            </table>
        </section>
    </div>
    `;
}
