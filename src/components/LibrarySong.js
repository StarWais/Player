import React from "react";

const LibrarySong = ({ currentSong, changeSong, isPlaying }) => {
  return (
    <div
      className={`LibrarySong ${
        currentSong.active ? "LibrarySong_Active" : ""
      }`}
      onClick={() => changeSong(currentSong.id)}
    >
      <div
        className={`LibrarySong__Wrapper ${
          isPlaying && currentSong.active ? "LibrarySong_Playing" : ""
        }`}
      >
        <img
          className="LibrarySong__Cover"
          src={currentSong.cover}
          alt={currentSong.name}
        />
        <div className="LibrarySong__Description">
          <h3 className="LibrarySong__Name">{currentSong.name}</h3>
          <h3 className="LibrarySong__Artist">{currentSong.artist}</h3>
        </div>
      </div>
    </div>
  );
};

export default LibrarySong;
