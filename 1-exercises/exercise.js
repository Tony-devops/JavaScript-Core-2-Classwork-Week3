/*
  To complete these exercises use vscode-live-server plugin to get live updates of your changes.
  - Install the Live Server plugin
  - Right click on index.html and select "Open with Live Server"
*/

/*
Task 1
=======

Write JavaScript below that console.logs:
    1. all the "p" element nodes of the document,
    --> should log a list of nodes with a length of 6

    2. the first div element node
    --> should log the ".site-header" node

    3. the element with id "jumbotronText"
    --> should log the "#jumbotronText" node

    4. all the "p" elements of contained inside the .primary-content element node
    --> should log a list of nodes with a length of 3

*/


/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/
let myAlert = document.querySelector("#alertBtn");
myAlert.addEventListener('click', ()=>{
alert('Dont do this again and again')
})

/*
Task 3
=======

When a user clicks the 'Change colour' button, the background colour of the page should change to red.
Hint: can you do this with a CSS class instead of adding styles to the element?
*/
let myButton = document.querySelector("#bgrChangeBtn");
let myBody = document.querySelector('body');
myButton.addEventListener('click', ()=>{
myBody.style.backgroundColor = 'red'
})



/*
Task 4
======

When a user clicks the 'Larger links!' button, the text of all links on the page should increase.
*/
let myFont = document.querySelector('#largerLinksBtn');
const aTags = document.querySelectorAll('a')
aTags.forEach((aTags) =>{
  aTags.style.fontSize = '1.5rem'
})

/*
Task 5
======

When a user clicks the 'Add some text' button, the text in the input field should be appended to the page as a new paragraph below it.
Hint: the new paragraph should be appended to the element with id 'addArticle'.
*/
let myInput =document.querySelector('#addArticleBtn')
myInput.addEventListener('click', ()=>{
let newPara = document.createElement('div');
let text = document.querySelector('#addArticleInput').value;
newPara.innerText = text;
let addArticle = document.querySelector('#addArticle');
addArticle.appendChild(newPara);
})
