// HomePage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';

const HomePage = () => {
  const [videoUrl, setVideoUrl] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setVideoUrl(event.target.value);
  };

  const handleSummarizeClick = () => {
    // Implement the logic for video summarization if needed
    console.log(`Summarize video with URL: ${videoUrl}`);

    // Navigate to the Summary page with the video URL as a parameter
    navigate(`/summary/${encodeURIComponent(videoUrl)}`);
  };

  const handleInputFocus = () => {
    setIsFocused(true);
  };

  const handleInputBlur = () => {
    setIsFocused(false);
  };

  return (
    <div className="home-container">
      <h1 className="product-name">Simplify YT</h1>

      <div
        className={`video-section ${isFocused ? 'focused' : ''}`}
      >
        <div className="input-container">
          <input
            type="text"
            placeholder="Paste Video URL"
            value={videoUrl}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
          />
          <button onClick={handleSummarizeClick}>Summarize</button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
