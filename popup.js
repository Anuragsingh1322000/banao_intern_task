document.getElementById('fetchTitle').addEventListener('click', function() {
    // Query the active tab
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      var tab = tabs[0];
      var title = tab.title;
      document.getElementById('title').textContent = "Tab Title: " + title;
    });
  });
  