document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("toggleButton");
  const buttonText = toggleButton.querySelector(".button-82-front.text");

  toggleButton.addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { toggleHeader: true }, function (response) {
        if (response && response.headerEnabled) {
          buttonText.innerText = "Desactivar";
        } else {
          buttonText.innerText = "Activar";
          chrome.tabs.reload(tabs[0].id);
        }
      });
    });
  });
});
