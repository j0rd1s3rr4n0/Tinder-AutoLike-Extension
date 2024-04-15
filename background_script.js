let scriptEnabled = false;

chrome.browserAction.onClicked.addListener(function (tab) {
  scriptEnabled = !scriptEnabled;
  if (scriptEnabled) {
    chrome.browserAction.setIcon({ path: "icon_active.png" });
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ["content_script.js"]
    });
  } else {
    chrome.browserAction.setIcon({ path: "icon_inactive.png" });
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: function () {
        // Este código vacío desactiva el script en la página actual
      }
    });
  }
});
