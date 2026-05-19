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
            <h3>Previous comments (${books[index].comments.length}):</h3>
            <table id="comment-section"></table>
        </section>
        <footer>
            <h3>Add your comment:</h3>
            <div id="comment-input-section">
            <input type="text" id="comment-input">
            <button onclick="saveComment(${index})">Send</button>
            </div>
        </footer>
    </div>
    `;

showPreviousComments(index);
}


function showPreviousComments(index){
const commentRef = document.getElementById("comment-section");

for (let i = 0; i < books[index].comments.length; i++){
commentRef.innerHTML += /*html*/`
    <tr>
        <td>${books[index].comments[i].name}</td>
        <td>${books[index].comments[i].comment}</td>
    </tr>
        `;
}
}

function saveComment(index){
    const commentInputRef = document.getElementById("comment-input");
    const commentInput = commentInputRef.value;

    commentInputRef.value = "";

    if (commentInput === "") {
        /* do nothing */
    } else {
        let myComment = {
            name: "You",
            comment: commentInput,
        }
       books[index].comments.push(myComment);

    showPreviousComments(index);
/*     saveToLocalStorage(index); */
}
}