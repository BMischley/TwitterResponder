// Initialize the state if needed
let extensionState = {
    tweetContent: ""
};

// Listen for messages from the popup or content script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === "TWEET_SELECTED") {
        extensionState.tweetContent = message.data;
        // You can also call the OpenAI API here if needed
        // or handle other long-term operations
    }
});

// If needed, you can set up listeners for other browser events
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.url) {
        // Check if the URL matches a pattern and perform some action
    }
});

// Other background operations or listeners can be added here

