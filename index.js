/*
const container = document.querySelector('.content');
const h3 = document.createElement('h3'); //create element in mem
h3.classList.add('newercontent') //add class
h3.textContent = "I'm a blue h3!"; //content
h3.style.color = 'blue'; //styles
container.appendChild(h3) //add to parent
*/

const body = document.querySelector('body');
//body.style.display('flex')
const header_text = document.createElement('h1');

header_text.classList.add('header');
header_text.textContent = "Etch-a-Sketch with JS only!"
header_text.style.backgroundColor = 'grey'
body.appendChild(header)



body.style.display = 'flex';
body.style.flexDirection = 'column';
body.style.alignItems = 'center'

