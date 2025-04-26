const myLibrary =[];
function Book(title, author, pages, haveRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.haveRead = haveRead;
  this.info = function () {
    return `${this.title} by ${this.author}, ${this.pages}, ${this.haveRead}`;
  };
};

function addBookToLibrary(title, author, pages, haveRead) {
  const newBook = new Book(title, author, pages, haveRead);
  myLibrary.push(newBook);
  return myLibrary;
};
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", "295 pages", "have read");
addBookToLibrary("rando", "rando", "rando", "rando");
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", "295 pages", "have read");
addBookToLibrary("rando", "rando", "rando", "rando");

const bookDisplay = document.querySelector("#bookDisplay");
function displayBooks(bookDisplay) {
  for(const obj of myLibrary) {
    const bookCard = document.createElement("div");
    const bookTitle = document.createElement("h3");
    const bookAuthor = document.createElement("p");
    const bookPages = document.createElement("p");
    const bookHaveRead = document.createElement("p");
    bookCard.classList.add("card");
    bookTitle.textContent = obj.title;
    bookAuthor.textContent = obj.author;
    bookPages.textContent = obj.pages;
    bookHaveRead.textContent = obj.haveRead;
    bookCard.appendChild(bookTitle);
    bookCard.appendChild(bookAuthor);
    bookCard.appendChild(bookPages);
    bookCard.appendChild(bookHaveRead);
    bookDisplay.appendChild(bookCard);
  };
};

displayBooks(bookDisplay);
const newBook = document.querySelector("#newBook");
const dialog = document.querySelector("dialog");
newBook.addEventListener("click", () => {
  dialog.showModal();  
});

const confirmBtn = document.querySelector("#confirmBtn");

confirmBtn.addEventListener("click", (e) => {
  e.preventDefault(); // Prevent the default form submission
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const pages = document.querySelector("#pages").value;
  const haveRead = document.querySelector("#haveRead").value;
  addBookToLibrary(title, author, pages, haveRead);
  bookDisplay.innerHTML = ""; // Clear the display
  displayBooks(bookDisplay); // Redisplay the books
  dialog.close(); // Close the dialog
  console.log(myLibrary); // Log the updated library to the console

  // Clear the form fields
  document.querySelector("#title").value = "";
  document.querySelector("#author").value = "";
  document.querySelector("#pages").value = "";
  document.querySelector("#haveRead").value = "";
});
const cancelBtn = document.querySelector("#cancelBtn");
cancelBtn.addEventListener("click", () => {
  dialog.close(); // Close the dialog without adding a book
});

