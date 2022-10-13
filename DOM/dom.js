// Examine the document Object
// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title ); // document.title = 123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.all[10]);
// console.log(document.links);
// console.log(document.images);

// GETELEMENTBYID
// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');

// console.log(headerTitle);
// headerTitle.textContent = 'Hello'; // pays attention to the styling
// headerTitle.innerText = 'Goodbye'; // Overrides the above

// headerTitle.innerHTML = '<h3>Hello</h3>';

// header.style.borderBottom = 'solid 3px #000';

// GETELEMENTSBYCLASSNAME

// var items = document.getElementsByClassName('list-group-item');
// console.log(items); //console.log(items)[1];
// items[1].textContent = 'Hello 2';
// items[1].style.fontWeight = 'bold';
// items[1].style.background = 'yellow';

// // Gives error
// // items.style.backgroundColor = '#f4f4f4';

// for(var i = 0; i <items.length; i++){
//     items[i].style.backgroundColor = '#f4f4f4';
// }

// GETELEMENTSBYTAGNAME
// var li = document.getElementsByTagName('li');
// console.log(li); //console.log(items)[1];
// li[1].textContent = 'Hello 2';
// li[1].style.fontWeight = 'bold';
// li[1].style.background = 'yellow';

// // Gives error
// // li.style.backgroundColor = '#f4f4f4';

// for(var i = 0; i <li.length; i++){
//     li[i].style.backgroundColor = '#f4f4f4';
// }

// QUERYSELECTOR -- works same as jQuery
// var header = document.querySelector('#main-header'); //id
// header.style.borderBottom = 'solid 4px #ccc';

// var input = document.querySelector('input'); //tagname
// input.value = 'Hello world';

// var submit = document.querySelector('input[type="submit"]'); //css
// submit.value = 'SEND';

// var item = document.querySelector('.list-group-item'); // class
// item.style.color = 'red';

// var lastItem = document.querySelector('.list-group-item:last-child'); // css
// lastItem.style.color = 'blue';

// var secondItem = document.querySelector('.list-group-item:nth-child(2)'); // css
// secondItem.style.color = 'green';


// QUERYSELECTORALL -- grabs more than one thing
// var titles = document.querySelectorAll('.title');
// titles[0].textContent = 'Hello';

// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even = document.querySelectorAll('li:nth-child(even)');

// for (var i = 0; i < odd.length; i++) {
//     odd[i].style.backgroundColor = '#f4f4f4';
//     even[i].style.backgroundColor = '#ccc';
// }

// TRAVERSING THE DOM
var itemList = document.querySelector('#items');

// parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode);

// ParentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentElement.parentElement);

//ChildNodes
// console.log(itemList.childNodes);

// console.log(itemList.children);
// itemList.children[1].style.backgroundColor = 'yellow';

// //  First child
// console.log(itemList.firstChild);
// //  firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello 1';

//  Last child
// console.log(itemList.lastChild);
//  lastElementChild
// console.log(itemList.lastElementChild);
// itemList.lasttElementChild.textContent = 'Hello 4';

// nextSibling
// console.log(itemList.nextSibling);

// // nextElementSibling
// console.log(itemList.nextElementSibling);

// PreviousSibling
// console.log(itemList.previousSibling);
// PreviousElementSibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = 'green';

// createElement

// create a div
// var newDiv = document.createElement('div');

// // Add class
// newDiv.className = 'hello';

// // Add id
// newDiv.id = 'hello1';

// // Add attr
// newDiv.setAttribute('title', 'Hello Div');

// // Create a text node
// var newDivText = document.createTextNode('Hello World');

// //Add text to div
// newDiv.appendChild(newDivText);

// var container = document.querySelector('header .container');
// var h1 = document.querySelector('header h1');

// console.log(newDiv);

// newDiv.style.fontSize = '30px';

// EVENTS

// container.insertBefore(newDiv, h1);
// var button = document.getElementById('button').addEventListener('click',buttonClick);

// function buttonClick(e){
//     // console.log('Button clicked')
//     // document.getElementById('header-title').textContent = 'Changed';
//     // document.querySelector('#main').style.backgroundColor = '#f4f4f4';

//     // console.log(e.target);
//     // console.log(e.target.id);
//     // console.log(e.target.className);
//     // var output = document.getElementById('output');
//     // output.innerHTML = '<h3>' + e.target.id+'</h3>';

//     // console.log(e.type);

//     // console.log(e.clientX);
//     // console.log(e.clientY);

//     // console.log(e.offsetX);
//     // console.log(e.offsetY);

//     // console.log(e.altKey);
//     // console.log(e.ctrlKey);
//     // console.log(e.shiftKey);
// }
var button = document.getElementById('button');
var box = document.getElementById('box');


// button.addEventListener('click',runEvent);
// button.addEventListener('dblclick',runEvent);
// button.addEventListener('mousedown',runEvent);
// button.addEventListener('mouseup',runEvent);

// box.addEventListener('mouseenter', runEvent);
// box.addEventListener('mouseleave', runEvent);

// box.addEventListener('mouseover', runEvent);
// box.addEventListener('mouseout', runEvent);

// box.addEventListener('mousemove', runEvent);

var itemInput = document.querySelector('input[type="text"');
var form = document.querySelector('form');
var select = document.querySelector('select');

// itemInput.addEventListener('keydown', runEvent);
// itemInput.addEventListener('keyup', runEvent);
// itemInput.addEventListener('keypress', runEvent);

// itemInput.addEventListener('focus', runEvent);
// itemInput.addEventListener('blur', runEvent);

// itemInput.addEventListener('cut', runEvent);
// itemInput.addEventListener('paste', runEvent);

// itemInput.addEventListener('input', runEvent);

// select.addEventListener('change', runEvent);

form.addEventListener('submit', runEvent);


function runEvent(e) {
    e.preventDefault();
    console.log('EVENT TYPE:' +e.type);

    // document.body.style.display = 'none';

    // console.log(e.target.value);
    // document.getElementById('output').innerHTML = '<h3>'+e.target.value+'</h3';

    // box.style.backgroundColor ="rgb("+e.offsetX+","+e.offsetY+", 40)";
}









