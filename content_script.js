var headerEnabled = false;
var scriptEnabled = false;

function clickElement() {
  let a = document.querySelector("#q1298270057 > div > div.App__body.H\\(100\\%\\).Pos\\(r\\).Z\\(0\\) > div > main > div.H\\(100\\%\\) > div > div > div.Mt\\(a\\).Px\\(4px\\)--s.Pos\\(r\\).Expand.H\\(--recs-card-height\\)--ml.Maw\\(--recs-card-width\\)--ml > div.recsCardboard__cardsContainer.H\\(100\\%\\).Pos\\(r\\).Z\\(1\\) > div > div.Pos\\(a\\).B\\(0\\).Iso\\(i\\).W\\(100\\%\\).Start\\(0\\).End\\(0\\) > div > div.Mx\\(a\\).Fxs\\(0\\).Sq\\(70px\\).Sq\\(60px\\)--s.Bd.Bdrs\\(50\\%\\).Bdc\\(\\$c-ds-border-gamepad-like-default\\) > button")
  if (a) {
    //a.click();
    console.log('Like');
  }else{
    console.log('Error - Necesaria Actualización');
  }
}

setInterval(function () {
  if (scriptEnabled) {
    clickElement();
  }
}, 1500);

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.toggleHeader) {
    headerEnabled = !headerEnabled;
    if (headerEnabled) {
      clickElement();
      scriptEnabled = true;
    } else {
      scriptEnabled = false;
      window.location.reload();
    }
    sendResponse({ headerEnabled });
  }
});
