let myLibrary = [];
function Book(title, author, pages, comment, read) {
	this.title = title;
	this.author = author;
	this.pages = pages;
  this.comment = comment;
	this.read = read;
}
const addBook = (ev) =>{
  ev.preventDefault();
  let bookRead = document.getElementById('read')
  function hasRead() {
    if (bookRead.checked == true) {
    return true
  } else {
    return false
  }
}
  let newBook = new Book (document.getElementById('bookTitle').value, 
    document.getElementById('author').value,  
    document.getElementById('pages').value, 
    document.getElementById('comment').value, 
    hasRead())
    //add new book to library
  myLibrary.push(newBook);
  document.forms[0].reset() // clear form for next entry 
  document.getElementById('form').style.display = 'none' // hides form after submitted
  createBookId();
  console.log(myLibrary);
  if (myLibrary.length == 1) {
    displayBooks();
  } else {
  removeAllBooks();
  displayBooks();
  }
}
document.addEventListener('DOMContentLoaded', ()=>{
  document.getElementById('button').addEventListener('click', addBook);
});

let bookCardContainer = document.querySelector('.bookCardContainer');
function displayBooks() {
  for (let i = 0; i < myLibrary.length; i++) {
    let bookCard = document.createElement('div');
    bookCard.classList.add('bookCard');
    bookCard.setAttribute('id', 'bookCard' + i);
    bookCardContainer.appendChild(bookCard);
    //create title dom
    let bookCardTitle = document.createElement('h3');
    bookCardTitle.textContent = myLibrary[i].title
    bookCardTitle.classList.add('bookCardTitle');
    bookCardTitle.setAttribute('id', 'bookCardTitle' + i);
    bookCard.appendChild(bookCardTitle);
    //create author dom
    let bookCardAuthor = document.createElement('p');
    bookCardAuthor.textContent = myLibrary[i].author;
    bookCardAuthor.classList.add('bookCardAuthor');
    bookCardAuthor.setAttribute('id', 'bookCardAuthor' + i);
    bookCard.appendChild(bookCardAuthor);
    //create pages dom
    let bookCardPages = document.createElement('p')
    bookCardPages.textContent = myLibrary[i].pages;
    bookCardPages.classList.add('bookCardPages');
    bookCardPages.setAttribute('id', 'bookCardPages' + i)
    bookCard.appendChild(bookCardPages);
    // create comment dom
    let bookCardComment = document.createElement('p');
    bookCardComment.textContent = myLibrary[i].comment;
    bookCardComment.classList.add('bookCardComment');
    bookCardComment.setAttribute('id', 'bookCardComment' + i);
    bookCard.appendChild(bookCardComment);
    //create read dom
    let bookCardRead = document.createElement('button');
    bookCardRead.textContent = myLibrary[i].read;
    bookCardRead.classList.add('bookCardRead');
    bookCardRead.setAttribute('id', 'bookCardRead' + i);
    bookCard.appendChild(bookCardRead);
    if (myLibrary[i].read == true) {
      bookCardRead.classList.add('hasRead')
      bookCardRead.textContent = 'Read'
    } else {
      bookCardRead.classList.add('hasNotRead')
      bookCardRead.textContent = 'Has Not Read'
    }
    bookCardRead.value = i;
    //remove button
    createBookId();
    let removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.classList.add('removeButton');
    removeButton.setAttribute('id', 'removeButton' + i)
    removeButton.value = i
    bookCard.appendChild(removeButton);
    //remove button clickable 
    const removeButtons = document.querySelectorAll('.removeButton');
removeButtons.forEach((removeButton) => {
  removeButton.addEventListener ('click', () => { 
   let removeValue = removeButton.value
   if (myLibrary.length == 0) {
    let myLibrary = [];
   } else {
    myLibrary.splice(removeValue, 1);
   }
   removeBook(removeValue);
  });
});
//event listener for read button

  }
const readButtons = document.querySelectorAll('.bookCardRead')
readButtons.forEach((readButton) => {
  readButton.addEventListener ('click', () => {
    let changeValue = readButton.value
    changeReadStatus(changeValue);
  });
});
}

// pulls up form 
function addChild() {
  document.getElementById('form').style.display = 'block';
}
displayBooks();
function createBookId() {
  for (let i =0; i < myLibrary.length; i++) {
    myLibrary[i].bookId = i
  }
}
function removeBook(removeValue) {
    const bookCard = document.getElementById('bookCard' + removeValue);
    const bookCardTitle = document.getElementById('bookCardTitle' + removeValue);
    const bookCardAuthor = document.getElementById('bookCardAuthor' + removeValue);
    const bookCardPages = document.getElementById('bookCardPages' + removeValue);
    const bookCardComment = document.getElementById('bookCardComment' + removeValue);
    const bookCardRead = document.getElementById('bookCardRead' + removeValue);
    const removeButton = document.getElementById('removeButton' + removeValue);
    let bookCardContainer = document.querySelector('.bookCardContainer');
    bookCard.removeChild(bookCardTitle);
    bookCard.removeChild(bookCardAuthor);
    bookCard.removeChild(bookCardPages);
    bookCard.removeChild(bookCardComment);
    bookCard.removeChild(bookCardRead);
    bookCard.removeChild(removeButton);
    bookCardContainer.removeChild(bookCard);
}
function removeAllBooks() {
  for (let i = 0; i < myLibrary.length - 1; i++) {
    removeBook(i);
  }
}
function changeReadStatus(changeValue) {
let readButton = document.getElementById('bookCardRead' + changeValue);
if (myLibrary[changeValue].read == true) {
  readButton.classList.remove('hasRead')
  readButton.classList.add('hasNotRead')
  readButton.textContent = 'Has Not Read'
  myLibrary[changeValue].read = false
  console.log(myLibrary)
} else if (myLibrary[changeValue].read == false) {
  readButton.classList.remove('hasNotRead')
  readButton.classList.add('hasRead')
  readButton.textContent = 'Read'
  myLibrary[changeValue].read = true
  console.log(myLibrary)
}
}