var getSelectedTab = (tab) => {
  var tabId = tab.id;
  var sendMessage = (messageObj) => chrome.tabs.sendMessage(tabId, messageObj);
  document.getElementById('hide').addEventListener('click', () => sendMessage({ action: 'HIDE' }));
  document.getElementById('reset').addEventListener('click', () => sendMessage({ action: 'RESET' }))
}
chrome.tabs.getSelected(null, getSelectedTab);