let bookList = JSON.parse(books);

for (let i = 0; i < bookList.length; i++){

    var bookCont = document.createElement("div"); 
    bookCont.setAttribute("id", "book" + [i]);
    document.getElementById("books").appendChild(bookCont);

   // create title <p>
    var bookTitle = document.createElement("p"); 
    var bookTitleText = document.createTextNode("Title: " + bookList[i].title);
    bookTitle.appendChild(bookTitleText);
    document.getElementById("book" + [i]).appendChild(bookTitle);

    // create author <p>
    var bookTitle = document.createElement("p"); 
    var bookTitleText = document.createTextNode("Author: " + bookList[i].author);
    bookTitle.appendChild(bookTitleText);
    document.getElementById("book" + [i]).appendChild(bookTitle);

    // create img
    var bookTitle = document.createElement("img"); 
    bookTitle.setAttribute("src", bookList[i].img);
    document.getElementById("book" + [i]).appendChild(bookTitle);

}
