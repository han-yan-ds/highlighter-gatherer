/**
 * This script is run in the background.  
 * It handles the clicking of the Extension Button on the Toolbar
 */

chrome.browserAction.onClicked.addListener(() => {
  chrome.tabs.executeScript({
    "file": "/src/background/buttonClickResponse.js"
  })
})