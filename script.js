const myLibrary = [];
const addButton = document.querySelector(".add");
const libraryDisplay = document.querySelector(".main");
const addBookForm = document.getElementById("addBookForm");
const closeForm = document.querySelector(".close");

// FUNCTIONS

// Book constructor
function Book(title, author, pages, read, coverUrl) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.coverUrl = coverUrl;
}


// Function to display/hide form on click
formContainer.style.display = "none";
function toggleForm() {
  formContainer.style.display = formContainer.style.display === "none" ? "block" : "none";
}

// Function for displaying library on screen
function displayLibrary() {
  libraryDisplay.innerHTML = "";
  myLibrary.forEach((book) => {
    let bookcard =
    `<div class="book-card">
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
}

// EVENT LISTENERS

// Function to toggle form visibility
addButton.addEventListener("click", toggleForm);
closeForm.addEventListener("click", toggleForm);

// Event listener for form submission
addBookForm.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission
  // Retrieve form values
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const read = document.getElementById("read").value;
  const coverUrl = document.getElementById("coverUrl").value;
  // Create book object
  const book = new Book(title, author, pages, read, coverUrl);
  // Add book to library
  myLibrary.push(book);
  // Clear form inputs
  addBookForm.reset();
  // Hide form
  formContainer.style.display = "none";
  displayLibrary();
});
