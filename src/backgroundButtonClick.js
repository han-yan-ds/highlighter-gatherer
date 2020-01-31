chrome.browserAction.onClicked.addListener(() => {
  chrome.tabs.executeScript({
    "file": "/src/backgroundButtonClickResponse.js"
  })
})