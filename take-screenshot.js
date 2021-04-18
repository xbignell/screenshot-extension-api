document.addEventListener('takeScreenshot', () => {
    chrome.runtime.sendMessage({}, () => {});
}, false);
