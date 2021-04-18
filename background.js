chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    chrome.tabs.captureVisibleTab(null,{ "format": "png" },async (dataUri) => {
       chrome.tabs.executeScript({
           code: `const image = document.getElementById('image'); 
           image.src = "${dataUri}"`
       })
    });
});
