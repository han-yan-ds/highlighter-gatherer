/**
 * This script is run in the background.  
 * It handles the clicking of the Extension Button on the Toolbar
 */

chrome.browserAction.onClicked.addListener(() => {
  chrome.tabs.executeScript({
    "file": "/dist/background/buttonClickResponse.js"
  })
})