/**
 * This script works in conjunction with the buttonClick.js
 * to hide/unhide the extension upon clicking the button
 * 
 * However, this script is run on pages, not in the background
 */

var mainDiV = document.getElementById("highlighter-extension-form-div");

if (mainDiV.classList.contains('highlighter-extension-hide')) {
  mainDiV.classList.remove('highlighter-extension-hide');
} else {
  mainDiV.classList.add('highlighter-extension-hide');
}