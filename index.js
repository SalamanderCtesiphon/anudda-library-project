function Book(title, author, pages, haveRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.haveRead = haveRead;
  this.info = function () {
    return `${this.title} by ${this.author}, ${this.pages}, ${haveRead}`;
  };
};

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", "295 pages", "have read");
console.log(theHobbit.info());
