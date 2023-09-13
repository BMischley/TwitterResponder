import React, { useState, useEffect } from "react";
import { Switch, FormControl, FormLabel } from "@chakra-ui/react";

function Popup() {
  const [tweet, setTweet] = useState("");

  useEffect(() => {
    const messageListener = (message, sender, sendResponse) => {
      console.log(message);
      if (message.type === "TWEET_SELECTED") {
        setTweet(message.data);
      }
    };

    chrome.runtime.onMessage.addListener(messageListener);

    // Fetch the current tweet when the popup is opened
    chrome.runtime.sendMessage({ type: "FETCH_TWEET" }, (response) => {
      if (response && response.type === "TWEET_SELECTED") {
        setTweet(response.data);
      }
    });

    // Cleanup: remove the listener when the component is unmounted
    return () => {
      chrome.runtime.onMessage.removeListener(messageListener);
    };
  }, []);

  return (
    <div className="w-64 text-sm ">
      <p>Selected Tweet:</p>
      <textarea value={tweet}></textarea>
      <FormControl display="flex" alignItems="center">
        <FormLabel htmlFor="email-alerts" mb="0">
          Funny?
        </FormLabel>
        <Switch id="email-alerts" />
      </FormControl>
    </div>
  );
}

export default Popup;
