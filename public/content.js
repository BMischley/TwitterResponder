// Function to handle the extraction of tweet text when you click on a tweet
function handleTweetClick(event) {
    // For simplicity, this assumes that the tweet text is in an element with a class "tweet-text"
    const tweetText = event.target.querySelector('.tweet-text');
    
    if (tweetText) {
        // Send the tweet text to the popup or background script
        chrome.runtime.sendMessage({ type: "TWEET_SELECTED", data: tweetText.textContent });
    }
}

// Add an event listener to all tweets on the page (assuming tweets have a class "tweet")
const tweets = document.querySelectorAll('.tweet');
tweets.forEach(tweet => tweet.addEventListener('click', handleTweetClick));

// Listen for messages from popup or background script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === "SOME_MESSAGE_TYPE") {
        // Handle the message and possibly send a response
        sendResponse({ data: "Some response data" });
    }
});
