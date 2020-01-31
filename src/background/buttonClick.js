chrome.browserAction.onClicked.addListener(() => {
  chrome.tabs.executeScript({
    "file": "/src/background/buttonClickResponse.js"
  })
})