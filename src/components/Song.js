import React from "react";

const Song = ({ currentSong, isPlaying }) => {
  return (
    <div className="Song">
      <img
        className={`Song__Cover ${isPlaying ? "Song__Cover_Active" : ""}`}
        src={currentSong.cover}
        alt={currentSong.name}
      />
      <h2 className="Song__Name">{currentSong.name}</h2>
      <h3 className="Song__Artist">{currentSong.artist}</h3>
    </div>
  );
};

export default Song;
