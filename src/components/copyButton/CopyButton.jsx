import React, { useState, useEffect } from 'react';
import './CopyButton.css'; 

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CopyButton = () => {
    const [displayedText, setDisplayedText] = useState('');
    const textToCopy = 'npx kritagya';

    useEffect(() => {
        let i = 0;
        const intervalId = setInterval(() => {
            if (i < textToCopy.length) {
                setDisplayedText(textToCopy.slice(0, i + 1)); // Update displayedText with substring
                i++;
            } else {
                clearInterval(intervalId);
            }
        }, 100); // Adjust the speed of typing here (in ms)

        return () => clearInterval(intervalId); // Cleanup on unmount
    }, []);

    const handleCopy = () => {
        navigator.clipboard.writeText(textToCopy).then(() => {
            toast.success('Command copied to clipboard!');
        }).catch(err => {
            console.error('Failed to copy: ', err);
            toast.error('Failed to copy to clipboard.');
        });
    };

    return (
        <>
            <button 
                className='btn-container' 
                onClick={handleCopy}
                title="Paste this command to your terminal and see the magic."
            >
                <span className="btn btn--copy">
                    <span className="typed-text">{displayedText}</span>
                    <span className="btn--copy__icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184" />
                    </svg>

                    </span>                    
                </span>
            </button>
        </>
    );
};

export default CopyButton;