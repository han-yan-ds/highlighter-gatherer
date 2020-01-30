chrome.browserAction.onClicked.addListener(() => {
  chrome.tabs.executeScript({
    "code": "var body = document.getElementsByTagName('body')[0];"+
    "body.textContent = 'HELLO AND SALUTATIONS';"
  })
})