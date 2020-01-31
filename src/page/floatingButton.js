const body = document.getElementsByTagName('body')[0];
const mainDiv = document.createElement('div');
const openFormButton = document.createElement('button');

mainDiv.classList.add('highlighter-extension-hide');
mainDiv.id = "highlighter-extension-form-div";
openFormButton.id = "highlighter-extension-form-button";

openFormButton.addEventListener('click', () => {
  console.log("HELLO WORLD");
  // REPLACE WITH CODE THAT SHOWS/HIDES FORM
})

mainDiv.insertAdjacentElement('afterbegin', openFormButton);
body.insertAdjacentElement('afterbegin', mainDiv);
