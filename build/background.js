let extensionState = {
    tweetContent: ""
};

console.log("Background script running!");

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log("Received message:", message);

    if (chrome.runtime.lastError) {
        console.error(chrome.runtime.lastError);
    }
    
    switch(message.type) {
        case "TWEET_SELECTED":
            extensionState.tweetContent = message.data;

            // Respond immediately with a confirmation if needed
            sendResponse({ status: "Tweet stored" });
            break;
            
        case "FETCH_TWEET":
            // Respond with the stored tweet content
            sendResponse({
                type: "TWEET_SELECTED",
                data: extensionState.tweetContent
            });
            break;
    }

    // Indicate that you wish to send a response asynchronously (important for service workers)
    return true;
});
