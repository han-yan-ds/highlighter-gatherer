/**
 * This script is called by the background and creates the button (and later, form),
 * BUT it hides the button/form first
 */

const body = document.getElementsByTagName('body')[0];
const mainDiv = document.createElement('div');
const formDiv = document.createElement('div');
const openFormButton = document.createElement('button');

mainDiv.classList.add('highlighter-extension-hide');
mainDiv.id = "highlighter-extension-div";
formDiv.id = "highlighter-extension-form-div"
openFormButton.id = "highlighter-extension-button";

openFormButton.addEventListener('click', () => {
  console.log("HELLO WORLD");
  // REPLACE WITH CODE THAT SHOWS/HIDES FORM
})

mainDiv.insertAdjacentElement('afterbegin', openFormButton);
mainDiv.insertAdjacentElement('afterbegin', formDiv);
body.insertAdjacentElement('afterbegin', mainDiv);
