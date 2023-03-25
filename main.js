//Grab Single Element
const form = document.getElementById('my-form');
console.log(form);

console.log(document.querySelector('.container'));
console.log(document.querySelector('#my-form'));
console.log(document.querySelector('h1'));

//Grab Multiple Item
const nodeItems = document.querySelectorAll('.item');
const colItems = document.getElementsByClassName('item');
console.log(document.getElementsByTagName('li'));

nodeItems.forEach(item => console.log(item));

for(let i=0; i<colItems.length; i++){
    console.log(colItems[i]);
}

//DOM manipulation
const ul = document.querySelector('.items');
ul.remove();
const btn = document.querySelector('.btn');
btn.style.backgroundColor = 'darkblue';
btn.style.textTransform = 'uppercase';
btn.style.fontWeight = 'bolder';

//Event Listener
btn.addEventListener('click', e => {
    e.preventDefault();  // to prevent data entered in the form deleted upon refreshing
    document.querySelector('#my-form').style.backgroundColor = 'lightblue';
    ul.firstElementChild.textContent = 'HTML';
    ul.children[1].innerText = 'CSS';
    ul.lastElementChild.innerHTML = '<h4>JavaScript</h4><p>Web dev language</p>' // can give the entire html content using innerHTML in the statement
})