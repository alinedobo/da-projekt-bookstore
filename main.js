function init() {
    renderBookListing();
}

function renderBookListing() {
    const bookListingRef = document.getElementById("book-listing");

    for (let i = 0; i < books.length; i++) {
        bookListingRef.innerHTML += /*html*/ `
            <div class="book-preview" onclick="showBookDetails(${i})">
                <img src="./assets/images/Vectorizeimages-Iconpack-Book.512.png" alt="icon of a book">
                <p>${books[i].name}</p>
            </div>
        `;
    }
}

function showBookDetails(index) {
    dialofRef.showModal();

    dialofRef.innerHTML = /*html*/ `
    <div id="dialog-container">
        <header>
            <h2 id="title">${books[i].name}</h2>
            <img src="./assets/icons/close-button.svg" alt="close button" />
        </header>
        <section>
            <div id="book-details">
                <div id="book-numbers">
                    <h2 id="price"></h2>
                    <div>
                        <p id="likes-counter">1212</p>
                        <img
                        src="./assets/icons/Github-Octicons-Heart-16.512.png"
                        alt="heart icon"
                        />
                    </div>
                </div>
                <table>
                    <tr>
                        <th>Author:</th>
                        <td>${books[i].author}</td>
                    </tr>
                    <tr>
                        <th>Published:</th>
                        <td>${books[i].publishedYear}</td>
                    </tr>
                    <tr>
                        <th>Genre:</th>
                        <td>${books[i].genre}</td>
                    </tr>
                </table>
            </div>
        </section>
    </div>
    `;
}
