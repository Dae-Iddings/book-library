let myLibrary = [];

const addBook = (ev) =>{
  ev.preventDefault();
  let book = {
    id: Date.now(),
    title: document.getElementById('bookTitle').value,
    author: document.getElementById('author').value,
    pages: document.getElementById('pages').value,
    read: document.getElementById('read').value
  }
  myLibrary.push(book);
  document.forms[0].reset() // clear form for next entry 
  //for display purposes only
  console.log(book);
}
document.addEventListener('DOMContentLoaded', ()=>{
  document.getElementById('button').addEventListener('click', addBook);
});