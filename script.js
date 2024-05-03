const myLibrary = [];
const addButton = document.querySelector(".add");
const libraryDisplay = document.querySelector(".main");

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  let book = new Book(title, author, pages, read);
  myLibrary.push(book);
}

function displayLibrary() {

}
