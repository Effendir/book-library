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

class Book {
  constructor(title, author, pages, read, coverUrl, id){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.coverUrl = coverUrl;
    this.id = id;
  }
}

class Library {
  constructor() {
    this.books = [{title: 'Wanderland', author: 'Livio Corritore', pages: '136', read: 'read', coverUrl: 'https://www.editions-pantheon.fr/wp-content/uploads/9782754759663-708x1080.jpg', id: 0}];
    this.id = 1;
  }

  getBooks() {
    return this.books;
  }

  addBook() {
    const addBookForm = document.getElementById("addBookForm");
    const theLibrary = this;
    addBookForm.addEventListener("submit", function(event) {
      event.preventDefault();
      const title = document.getElementById("title").value;
      const author = document.getElementById("author").value;
      const pages = document.getElementById("pages").value;
      const read = document.getElementById("read").value;
      const coverUrl = document.getElementById("coverUrl").value || "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Hanna_book_cover.jpg/1920px-Hanna_book_cover.jpg";
      const book = new Book(title, author, pages, read, coverUrl, theLibrary.id);
      theLibrary.books.push(book);
      addBookForm.reset();
      session.toggleForm();
      theLibrary.id += 1;
      session.displayBooks(theLibrary.books);
    });
  }

  markAsRead(){
    const modifyButtons = document.querySelectorAll(".markAsRead");
    const theLibrary = this;
    modifyButtons.forEach((button) => {
      button.addEventListener("click", function (e) {
        const bookId = parseInt(button.parentElement.dataset.id);
        const bookIndex = theLibrary.books.findIndex((book) => book.id === bookId);
        if (bookIndex !== -1) {
          theLibrary.books[bookIndex].read = "read";
          session.displayBooks(theLibrary.books);
        }
      })
    })
  }

  deleteBook() {
    const deleteButtons = document.querySelectorAll(".delete");
    const theLibrary = this;
    deleteButtons.forEach((button) => {
      button.addEventListener("click", function (e) {
        const bookId = parseInt(button.parentElement.dataset.id);
        const bookIndex = theLibrary.books.findIndex((book) => book.id === bookId);
        if (bookIndex !== -1) {
          theLibrary.books.splice(bookIndex, 1);
          session.displayBooks(theLibrary.books);
        }
      })
    })
  }

}

class UI {
 constructor() {
  this.myLibrary = new Library();
 }

 initiate() {
  const libraryContent = this.myLibrary.getBooks();
  this.displayBooks(libraryContent);
  this.myLibrary.addBook();
  this.myLibrary.deleteBook();
  this.myLibrary.markAsRead();
  const addButton = document.querySelector(".add");
  const closeForm = document.querySelector(".close");
  addButton.addEventListener("click", this.toggleForm);
  closeForm.addEventListener("click", this.toggleForm);
 }

 displayBooks(content) {
  const libraryDisplay = document.querySelector(".main");
  libraryDisplay.innerHTML = "";
  content.forEach((book) => {
    let bookcard =
    `<div class="book-card" data-id="${book.id}">
    <img src="images/pencil.svg" alt="modify icon" class="markAsRead">
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
  });
  this.myLibrary.markAsRead();
  this.myLibrary.deleteBook();
}

 toggleForm() {
  const form = document.querySelector("#formContainer");
  form.style.display = form.style.display === "none" ? "block" : "none";
 }
}

const session = new UI();
session.initiate();
