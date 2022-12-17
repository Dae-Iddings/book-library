let myLibrary = [];
const addBook = (ev) =>{
  ev.preventDefault();
  let bookRead = document.getElementById('read')
  function hasRead() {
    if (bookRead.checked == true) {
    return 'read'
  } else {
    return 'not read'
  }
}
  let book = {
    title: document.getElementById('bookTitle').value,
    author: document.getElementById('author').value,
    pages: document.getElementById('pages').value,
    comment: document.getElementById('comment').value,
    read: hasRead()
  }
  myLibrary.push(book);
  document.forms[0].reset() // clear form for next entry 
  document.getElementById('form').style.display = 'none' // hides form after submitted
  // adds book to dom display
  let bookCard = document.createElement('div');
    bookCard.classList.add('bookCard');
    bookCardContainer.appendChild(bookCard);
    //create title dom
    let bookCardTitle = document.createElement('h3');
    bookCardTitle.textContent = book.title
    bookCardTitle.classList.add('bookCardTitle')
    bookCard.appendChild(bookCardTitle)
    //create author dom
    let bookCardAuthor = document.createElement('p');
    bookCardAuthor.textContent = book.author;
    bookCardAuthor.classList.add('bookCardAuthor')
    bookCard.appendChild(bookCardAuthor);
    //create pages dom
    let bookCardPages = document.createElement('p')
    bookCardPages.textContent = book.pages;
    bookCardPages.classList.add('bookCardPages')
    bookCard.appendChild(bookCardPages);
    // create comment dom
    let bookCardComment = document.createElement('p');
    bookCardComment.textContent = book.comment;
    bookCardComment.classList.add('bookCardComment')
    bookCard.appendChild(bookCardComment);
    //create read dom
    let bookCardRead = document.createElement('p');
    bookCardRead.textContent = book.read;
    bookCardRead.classList.add('bookCardRead')
    bookCard.appendChild(bookCardRead);
}
document.addEventListener('DOMContentLoaded', ()=>{
  document.getElementById('button').addEventListener('click', addBook);
});
let lfa = {
  title: 'Looking for Alaska',
  author: 'John Green',
  pages: '297',
  comment: 'my fave',
  read: 'read'
}
myLibrary.push(lfa);
let tfios = {
  title: 'The Fault in Our Stars',
  author: 'John Green',
  pages: '297',
  comment: 'its a metaphor',
  read: 'read'
}
myLibrary.push(tfios);
let bookCardContainer = document.querySelector('.bookCardContainer');
function displayBooks() {
  for (let i = 0; i < myLibrary.length; i++) {
    let bookCard = document.createElement('div');
    bookCard.classList.add('bookCard');
    bookCardContainer.appendChild(bookCard);
    //create title dom
    let bookCardTitle = document.createElement('h3');
    bookCardTitle.textContent = myLibrary[i].title
    bookCardTitle.classList.add('bookCardTitle')
    bookCard.appendChild(bookCardTitle)
    //create author dom
    let bookCardAuthor = document.createElement('p');
    bookCardAuthor.textContent = myLibrary[i].author;
    bookCardAuthor.classList.add('bookCardAuthor')
    bookCard.appendChild(bookCardAuthor);
    //create pages dom
    let bookCardPages = document.createElement('p')
    bookCardPages.textContent = myLibrary[i].pages;
    bookCardPages.classList.add('bookCardPages')
    bookCard.appendChild(bookCardPages);
    // create comment dom
    let bookCardComment = document.createElement('p');
    bookCardComment.textContent = myLibrary[i].comment;
    bookCardComment.classList.add('bookCardComment')
    bookCard.appendChild(bookCardComment);
    //create read dom
    let bookCardRead = document.createElement('p');
    bookCardRead.textContent = myLibrary[i].read;
    bookCardRead.classList.add('bookCardRead')
    bookCard.appendChild(bookCardRead);
  }
}
// pulls up form 
function addChild() {
  document.getElementById('form').style.display = 'block';
}
//displayBooks();