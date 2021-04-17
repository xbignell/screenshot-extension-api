let screenshot = document.getElementById("screenshot");

screenshot.addEventListener("click", async () => {
    chrome.tabs.captureVisibleTab(null,{"format":"png"},function(dataUri) {
        download(dataUri);
    });
})

const download = (data) => {
    const fileElement = document.createElement('a');
    fileElement.href = data;
    fileElement.download = 'reddot.png';
    fileElement.click();
}
