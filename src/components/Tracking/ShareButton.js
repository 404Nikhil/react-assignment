import React from 'react';

function ShareButton({ speed }) {
  const handleShare = () => {
    const url = `${window.location.origin}/tracking?speed=${speed}`;
    navigator.clipboard.writeText(url).then(() => {
      alert('Share link copied to clipboard!');
    }, (err) => {
      console.error('Could not copy text: ', err);
    });
  };

  return (
    <button className="share-btn" onClick={handleShare}>Share</button>
  );
}

export default ShareButton;