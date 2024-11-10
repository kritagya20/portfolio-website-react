import React, { useState, useEffect } from 'react';
import './CopyButton.css'; 
import { ClipBoard } from '..';
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
        className="bg-[var(--dark)] opacity-100 border-solid border-2 rounded-lg border-[var(--light3)] z-20"
        onClick={handleCopy}
        title="Paste this command to your terminal and see the magic."
    >
        <span className="btn btn--copy inline-flex items-center gap-2">
            <span className="typed-text text-[var(--white)] font-thin">{displayedText}</span>
            <span className="btn--copy__icon text-[var(--white)]">
                <ClipBoard />
            </span>
        </span>
    </button>
</>

    );
};

export default CopyButton;