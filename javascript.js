function info(title, author, pages, read) {
    this.title = title
    this.author = author 
    this.pages = pages 
    this.read = read
    this.returnInfo = function() {
      return title + ' by ' + author + ", " + pages + ' pages ' + ', ' + read
    }
  }
  // let theHobbit = new info('The Hobbit', 'J.R.R. Tolkien', '295', 'not read yet');
  // console.log(theHobbit.returnInfo());
  function getID() {
    var nodes = document.forms["getFormInfo"].querySelectorAll("input[type='text']");
    var array = [].map.call(nodes, function(item) {
      return {name : item.name, value : item.value};
    });
    console.log(array);
  }
  let myLibrary = [];

function Book() {
  // the constructor...
}

function addBookToLibrary() {
  // do stuff here
}