// const myLibrary = [];
// const addButton = document.querySelector(".add");
// const libraryDisplay = document.querySelector(".main");
// const addBookForm = document.getElementById("addBookForm");
// const closeForm = document.querySelector(".close");
// let id = 1;


// FUNCTIONS

// Book constructor
// function Book(title, author, pages, read, coverUrl, id) {
//   this.title = title;
//   this.author = author;
//   this.pages = pages;
//   this.read = read;
//   this.coverUrl = coverUrl;
//   this.id = id;
// }

class Book {
  constructor(title, author, pages, read, coverUrl, id){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.coverUrl = coverUrl;
    this.id = id;
  }

  markAsRead(){
    const modifyButtons = document.querySelectorAll(".modify");
    modifyButtons.forEach((button) => {
      button.addEventListener("click", function (e) {
        const bookId = parseInt(button.parentElement.dataset.id);
        const bookIndex = myLibrary.getBooks().findIndex((book) => book.id === bookId);
        if (bookIndex !== -1) {
          myLibrary.modifyBook(bookIndex, "read", "read");
          myLibrary.displayBooks();
        }
      })
    })
  }
}

class Library {
  constructor() {
    this.books = []
    this.id = 0;
    this.addBook = this.addBook.bind(this);
  }

  getBooks() {
    return this.books;
  }

  displayBooks() {
    const libraryDisplay = document.querySelector(".main");
    libraryDisplay.innerHTML = "";
    this.books.forEach((book) => {
      let bookcard =
      `<div class="book-card" data-id="${book.id}">
      <img src="images/pencil.svg" alt="modify icon" class="modify">
      <button class="delete">X</button>
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
      book.markAsRead(); // Add a event listener to the book.
    });
    this.addBook();
    this.deleteBook();
  }

  addBook() {
    const addBookForm = document.getElementById("addBookForm");
    const theLibrary = this;
    addBookForm.addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent form submission
      // Retrieve form values
      const title = document.getElementById("title").value;
      const author = document.getElementById("author").value;
      const pages = document.getElementById("pages").value;
      const read = document.getElementById("read").value;
      const coverUrl = document.getElementById("coverUrl").value || "";
      // Create book object
      const book = new Book(title, author, pages, read, coverUrl, theLibrary.id);
      console.log(book);
      // Add book to library
      theLibrary.books.push(book);
      // Clear form inputs
      addBookForm.reset();
      // Hide form
      formContainer.style.display = "none";
      theLibrary.id += 1;
      theLibrary.displayBooks();

    });
  }

  modifyBook(index, key, value) {
      this.books[index].key = value;
      this.displayBooks();
  }

  deleteBook(book) {
    const deleteButtons = document.querySelectorAll(".delete");
    deleteButtons.forEach((button) => {
      button.addEventListener("click", function (e) {
        const bookId = parseInt(button.parentElement.dataset.id);
        const bookIndex = myLibrary.getBooks().findIndex((book) => book.id === bookId);
        if (bookIndex !== -1) {
          myLibrary.getBooks().splice(bookIndex, 1);
          myLibrary.displayBooks();
        }
      })
    })
  }

}

class UI {
 constructor() {
 }

 initiate() {
  const myLibrary = new Library();
  const addButton = document.querySelector(".add");
  const closeForm = document.querySelector(".close");
  addButton.addEventListener("click", this.toggleForm);
  closeForm.addEventListener("click", this.toggleForm);
 }

 toggleForm() {
  const form = document.querySelector("#formContainer");
  form.style.display = form.style.display === "none" ? "block" : "none";
 }
}

const session = new UI();
session.initiate();


// Function to display/hide form on click
// const addButton = document.querySelector(".add");
// addButton.addEventListener("click", toggleForm);
// const closeForm = document.querySelector(".close");
// closeForm.addEventListener("click", toggleForm);
// formContainer.style.display = "none";
// function toggleForm() {
//   formContainer.style.display = formContainer.style.display === "none" ? "block" : "none";
// }

// Function for displaying library on screen
// function displayLibrary() {
//   libraryDisplay.innerHTML = "";
//   myLibrary.forEach((book) => {
//     let bookcard =
//     `<div class="book-card" data-id="${book.id}">
//     <img src="images/pencil.svg" alt="modify icon" class="modify">
//     <button class="delete">X</button>
//     <div class="book-cover"><img src="${book.coverUrl}"></div>
//     <div class="book-info">
//     <div class="main-info">
//     <p class="title">${book.title}</p>
//     <p class="author">${book.author}</p>
//     </div>
//     <div class="sub-infos">
//     <p class="pages">${book.pages}p</p>
//     <p class="read-status">${book.read}</p>
//     </div>
//     </div>
//     </div>`;
//     libraryDisplay.innerHTML += bookcard;
//   });
// }

// Event listener for form submission
// addBookForm.addEventListener("submit", function(event) {
//   event.preventDefault(); // Prevent form submission
//   // Retrieve form values
//   const title = document.getElementById("title").value;
//   const author = document.getElementById("author").value;
//   const pages = document.getElementById("pages").value;
//   const read = document.getElementById("read").value;
//   const coverUrl = document.getElementById("coverUrl").value;
//   // Create book object
//   const book = new Book(title, author, pages, read, coverUrl, id);
//   // Add book to library
//   myLibrary.push(book);
//   // Clear form inputs
//   addBookForm.reset();
//   // Hide form
//   formContainer.style.display = "none";
//   id += 1;
//   displayLibrary();
//   deleteBook();
//   modifyBook();
// });

// Function for book deletion
// function deleteBook() {
//   const deleteButtons = document.querySelectorAll(".delete");
//   deleteButtons.forEach((button) => {
//     button.addEventListener("click", function (e) {
//       const bookId = parseInt(button.parentElement.dataset.id);
//       const bookIndex = myLibrary.findIndex((book) => book.id === bookId);
//       if (bookIndex !== -1) {
//         myLibrary.splice(bookIndex, 1);
//         displayLibrary();
//       }
//     })
//   })
// }

// Function for marking book as read
// function modifyBook() {
//   const modifyButtons = document.querySelectorAll(".modify");
//   modifyButtons.forEach((button) => {
//     button.addEventListener("click", function (e) {
//       const bookId = parseInt(button.parentElement.dataset.id);
//       const bookIndex = myLibrary.findIndex((book) => book.id === bookId);
//       if (bookIndex !== -1) {
//         myLibrary[bookIndex].read = "read";
//         displayLibrary();
//       }
//     })
//   })
// }
