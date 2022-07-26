let tab;
let inputbox = document.getElementById('inputBox');

document.getElementById('inputForm').addEventListener('submit', function(e) {
    e.preventDefault();
    search({searchTerms: inputbox.value, openerTab: tab});
});

chrome.tabs.query({currentWindow: true, active: true}).then(tabs => {
    tab = tabs[0];
});