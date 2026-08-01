let book=[  ];
 book = JSON.parse(localStorage.getItem('book')); //pack js object into string // to load into code
function addBook(){
    const inputButton=document.querySelector('.bookInput');
    const name=inputButton.value;
    book.push(name);
    inputButton.value='';
    displaybook();
}
function displaybook(){
    let html='';
    for(let i=0;i<book.length;i++){
        
  html += `
<div class="book-item">
    <span>${book[i]}</span>
    <button onclick="toDelete(${i})">Delete</button>
</div>
`;
    }
      document.querySelector(".result").innerHTML =html;
    
localStorage.setItem('book', JSON.stringify(book)) // to unpack the string into js object // to save into code

       
}
function toDelete(index){
 book.splice(index, 1);
    displaybook();
}