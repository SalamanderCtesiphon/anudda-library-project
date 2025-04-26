const myLibrary =[];

// Book constructor function
function Book(title, author, pages, haveRead, id) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.haveRead = haveRead;
  this.id = Math.floor(Math.random() * 10000); // Generate a random ID if not provided
  // Method to return book information
  this.info = function () {
    return `${this.title} by ${this.author}, ${this.pages}, ${this.haveRead}`;
  };
};

// Function to add a book to the library
function addBookToLibrary(title, author, pages, haveRead) {
  const newBook = new Book(title, author, pages, haveRead);
  myLibrary.push(newBook);
  return myLibrary;
};

// Adding some initial books to the library
addBookToLibrary("The Great Gatsby", "F. Scott Fitzgerald", "180 pages", "have read");
addBookToLibrary("1984", "George Orwell", "328 pages", "have read");
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", "295 pages", "have read");
addBookToLibrary("The Catcher in the Rye", "J.D. Salinger", "277 pages", "have read");

// Function to display books in the library
const bookDisplay = document.querySelector("#bookDisplay");
function displayBooks(bookDisplay) {
  for(const obj of myLibrary) {
    const bookCard = document.createElement("div");
    const bookTitle = document.createElement("h3");
    const bookAuthor = document.createElement("p");
    const bookPages = document.createElement("p");
    const bookHaveRead = document.createElement("button");
    const consoleLog = document.createElement("button");
    consoleLog.textContent = "Console Log";
    consoleLog.addEventListener("click", () => {
      console.log(obj.info()); // Log the book info to the console
    }
    );
    bookCard.appendChild(consoleLog);
    bookHaveRead.textContent = obj.haveRead;
    bookHaveRead.addEventListener("click", () => {
      // Toggle the haveRead status
      if (bookHaveRead.textContent === "have read") {
        bookHaveRead.textContent = "not read";
      } else {
        bookHaveRead.textContent = "have read";
      }
    }
    );
    // Create a remove button to delete the book
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.addEventListener("click", () => {
      const index = myLibrary.findIndex(book => book.id === obj.id);
      if (index !== -1) {
        myLibrary.splice(index, 1); // Remove the book from the library
        bookDisplay.innerHTML = ""; // Clear the display
        displayBooks(bookDisplay); // Redisplay the books
      }
    });
    bookCard.appendChild(removeBtn);
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

// Event listener for the "Add New Book" button
const newBook = document.querySelector("#newBook");
const dialog = document.querySelector("dialog");
newBook.addEventListener("click", () => {
  dialog.showModal();  
});

// Event listener for the "Confirm" button in the dialog
const confirmBtn = document.querySelector("#confirmBtn");

confirmBtn.addEventListener("click", (e) => {
  e.preventDefault(); // Prevent the default form submission
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const pages = document.querySelector("#pages").value;
  const readStatus = document.querySelector("#haveRead").value;
  let haveRead = "";
  if (readStatus === "yes") {
    haveRead = "have read";
  }
  else {
    haveRead = "not read";
  }
  // Validate the form fields
  if (!title || !author || !pages || !haveRead) {
    alert("Please fill in all fields.");
    return;
  }
  // Add the new book to the library and update the display
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

// Event listener for the "Cancel" button in the dialog
const cancelBtn = document.querySelector("#cancelBtn");
cancelBtn.addEventListener("click", (e) => {
  e.preventDefault(); // Prevent the default form submission
  dialog.close(); // Close the dialog without adding a book
});

