// Grab the heading in the document
const myHeading = document.querySelector('h1');
 
// Replace the heading text with Hello World!
myHeading.textContent = 'Hello world!';

function changeColor(newColor) {
  var elem = document.getElementById('myPara');
  elem.style.color = newColor;
}
