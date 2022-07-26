function search(args) {
    args.searchTerms = args.searchTerms.trim();
    let url = 'https://www.google.com/search?q=site:reddit.com+';
    let terms = document.getElementById('inputBox').value
    terms = encodeURIComponent(terms)
    url = url + terms;
    params = {
        'url': url,
        'active': true
    };
    chrome.tabs.create(params, function (newTab) {
        chrome.scripting.executeScript(
            {
                target: {tabId: newTab.id},
                files: ['tabPlacer.js'],
            }
        )
    });
}