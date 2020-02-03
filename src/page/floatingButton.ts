/**
 * This script is called by the background and creates the button (and later, form),
 * BUT it hides the button/form first
 */

// import { renderFormTemplate } from './showForm';

const body = document.getElementsByTagName('body')[0] as HTMLBodyElement;
const mainDiv = document.createElement('div') as HTMLDivElement;
const formDiv = document.createElement('div') as HTMLDivElement;
const openFormButton = document.createElement('button') as HTMLButtonElement;


mainDiv.classList.add('highlighter-extension-hide');
mainDiv.id = "highlighter-extension-div";
formDiv.id = "highlighter-extension-form-div"
openFormButton.id = "highlighter-extension-button";

openFormButton.addEventListener('click', () => {
  console.log("HELLO WORLD");
  // renderFormTemplate('highlighter-extension-form-div');
});

mainDiv.insertAdjacentElement('afterbegin', openFormButton);
mainDiv.insertAdjacentElement('afterbegin', formDiv);
body.insertAdjacentElement('afterbegin', mainDiv);
