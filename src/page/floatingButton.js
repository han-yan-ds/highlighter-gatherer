/**
 * This script is called by the background and creates the button (and later, form),
 * BUT it hides the button/form first
 */

const body = document.getElementsByTagName('body')[0];
const mainDiv = document.createElement('div');
const openFormButton = document.createElement('button');
const reactForm = document.createElement('div');

mainDiv.classList.add('highlighter-extension-hide');
mainDiv.id = "highlighter-extension-form-div";
openFormButton.id = "highlighter-extension-form-button";

ReactDOM.render(<App/>, reactForm);

openFormButton.addEventListener('click', () => {
  console.log("HELLO WORLD");
  // toggle form class between HIDE
})

mainDiv.insertAdjacentElement('afterbegin', openFormButton);
mainDiv.insertAdjacentElement('afterbegin', reactForm);
body.insertAdjacentElement('afterbegin', mainDiv);
