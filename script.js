const myLibrary = [];
const addButton = document.querySelector(".add");
const libraryDisplay = document.querySelector(".main");
const addBookForm = document.getElementById("addBookForm");
const closeForm = document.querySelector(".close");
let id = 1;

function Book(title, author, pages, read, coverUrl, id) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.coverUrl = coverUrl;
  this.id = id;
}

function render() {
  let pablo = new Book("Wanderland", "Livio Corritore", "136", "unread", "https://www.editions-pantheon.fr/wp-content/uploads/9782754759663-708x1080.jpg", id);
  myLibrary.push(pablo);

  addButton.addEventListener("click", toggleForm);
  closeForm.addEventListener("click", toggleForm);
  displayLibrary();
  deleteBook();
  modifyBook();
  deleteBook()

  addBookForm.addEventListener("submit", function(event) {
    event.preventDefault();
    addBook()
  });
}

function toggleForm() {
  addBookForm.parentElement.classList.contains("visible") ? addBookForm.parentElement.classList.remove("visible") : addBookForm.parentElement.classList.add("visible")
}

function displayLibrary() {
  libraryDisplay.innerHTML = "";
  content.forEach((book) => {
    let bookcard =
    `<div class="book-card" data-id="${book.id}">
    <button class="delete">✕</button>
    <div class="book-cover"><img src="${book.coverUrl}"></div>
    <div class="book-info">
    <div class="main-info">
    <p class="title">${book.title}</p>
    <p class="author">${book.author}</p>
    </div>
    <div class="sub-infos">
    <p class="pages">${book.pages}p</p>
    <p class="read-status">${book.read}</p>
    </div>
    </div>
    </div>`;
    libraryDisplay.innerHTML += bookcard;
  });
  this.myLibrary.markAsRead();
  this.myLibrary.deleteBook();
}

function addBook() {
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const read = document.getElementById("read").value;
  const coverUrl = document.getElementById("coverUrl").value;
  const book = new Book(title, author, pages, read, coverUrl, id);
  myLibrary.push(book);
  addBookForm.reset();
  id += 1;
  toggleForm();
  displayLibrary();
}

function deleteBook() {
  const deleteButtons = document.querySelectorAll(".delete");
  deleteButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      const bookId = parseInt(button.parentElement.dataset.id);
      const bookIndex = myLibrary.findIndex((book) => book.id === bookId);
      if (bookIndex !== -1) {
        myLibrary.splice(bookIndex, 1);
        displayLibrary();
      }
    })
  })
}

function modifyBook() {
  const modifyButtons = document.querySelectorAll(".modify");
  modifyButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      const bookId = parseInt(button.parentElement.dataset.id);
      const bookIndex = myLibrary.findIndex((book) => book.id === bookId);
      if (bookIndex !== -1) {
        myLibrary[bookIndex].read = "read";
        displayLibrary();
        console.log("yo");
      }
    })
  })
}

render()
