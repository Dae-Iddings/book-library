function info(title, author, pages, read) {
    this.title = title
    this.author = author 
    this.pages = pages 
    this.read = read
    this.returnInfo = function() {
      return title + ' by ' + author + ", " + pages + ' pages ' + ', ' + read
    }
  }
  let theHobbit = new info('The Hobbit', 'J.R.R. Tolkien', '295', 'not read yet');
  console.log(theHobbit.returnInfo());
  
  let myLibrary = [];

function Book() {
  // the constructor...
}

function addBookToLibrary() {
  // do stuff here
}