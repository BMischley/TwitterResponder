console.log("Content script loaded!");

document.addEventListener(
  "click",
  function (event) {
    console.log("Document was clicked!");
    let tweetElement = event.target.closest('[data-testid="tweet"]');
    if (tweetElement) {
      // Extract the tweet's information (this is a simplified version; adjust accordingly)
      let tweetContent = tweetElement.querySelector(
        '[data-testid="tweetText"]'
      ).innerText;
      console.log("Tweet selected:", tweetContent);

      // Check if chrome.runtime exists and if sendMessage is a function
      try {
        chrome.runtime.sendMessage({
          type: "TWEET_SELECTED",
          data: tweetContent,
        });
      } catch (error) {
        console.error("Error sending message:", error);
      }
    }
  },
  true
);
