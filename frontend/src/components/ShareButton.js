import React from 'react';

const ShareButton = ({ speed }) => {
  const handleShare = () => {
    const shareUrl = `${window.location.origin}/tracking?speed=${speed}`;
    navigator.clipboard.writeText(shareUrl);
    alert('Share URL copied to clipboard!');
  };

  return <button onClick={handleShare} className="btn">Share</button>;
};

export default ShareButton;