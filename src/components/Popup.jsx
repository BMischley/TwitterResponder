import React, { useState } from 'react';

function Popup() {
    const [tweetContent, setTweetContent] = useState('');
    const [response, setResponse] = useState('');

    const generateResponse = async () => {
        // Make an API call to your backend to get the response
        // const res = await fetch('YOUR_BACKEND_URL', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({ content: tweetContent })
        // });
        
        // const data = await res.json();
        setResponse("Funny tweet");
    };

    return (
        <div className="p-4">
            <textarea 
                className="w-full p-2 border rounded" 
                value={tweetContent} 
                onChange={e => setTweetContent(e.target.value)}
                placeholder="Paste the tweet content here..."
            />
            <button 
                className="mt-2 p-2 bg-blue-500 text-white rounded"
                onClick={generateResponse}
            >
                Generate Response
            </button>
            <div className="mt-2">{response}</div>
        </div>
    );
}

export default Popup;
