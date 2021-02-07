import React from 'react';
import ReactPlayer from 'react-player';
import './index.css';

// eslint-disable-next-line react/prop-types
const YoutubePlayer = ({ url }) => (
  <div className="player-wrapper">
    <ReactPlayer
      className="react-player"
      url={url}
      width="100%"
      height="100%"
    />
  </div>
);

export default YoutubePlayer;
