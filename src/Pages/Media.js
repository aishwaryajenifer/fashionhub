import React from 'react';
import { videos } from '../data/Data';
import './Media.css';

const MediaComponent = () => {
  return (
    <div className="media-container">
      <h1 className="media-title">Fashion Influencer Videos</h1>
      <div className="video-grid">
        {videos.map((video) => (
          <div key={video.id} className="video-card">
            <div className="video-thumbnail">
              <img src={video.thumbnail} alt={video.title} />
              <div className="video-overlay">
                <a
                  href={video.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="video-play-button"
                >
                  ▶
                </a>
              </div>
            </div>
            <div className="video-info">
              <h2 className="video-title">{video.title}</h2>
              <p className="video-description">{video.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MediaComponent;
