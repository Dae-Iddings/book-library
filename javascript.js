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
  //for display purposes only
  console.log(book);
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
    //bookCard.textContent = myLibrary[i].title
    bookCardContainer.appendChild(bookCard);
  }
}
displayBooks();