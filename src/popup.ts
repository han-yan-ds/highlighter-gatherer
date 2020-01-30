const body = document.getElementsByTagName('body')[0];
const mainDiv = document.createElement('div');
const openFormButton = document.createElement('button');

openFormButton.id = "highlighter-extension-form-button";

mainDiv.insertAdjacentElement('afterbegin', openFormButton);
body.insertAdjacentElement('afterbegin', mainDiv);
