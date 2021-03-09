import React, { useState } from "react";
import LibrarySong from "./LibrarySong";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const SongsLibrary = ({
  songs,
  setCurrentSong,
  libraryActive,
  setLibraryActive,
  changeSong,
  isPlaying,
}) => {
  return (
    <div className={`Library ${libraryActive ? "" : "Library_Closed"}`}>
      <FontAwesomeIcon
        className="Library__Close"
        icon={faTimes}
        size="2x"
        onClick={() => setLibraryActive(false)}
      />
      <h2 className="Library__Title">Songs Library</h2>
      <div className="Library__Songs">
        {songs.map((song) => (
          <LibrarySong
            key={song.id}
            className="Library__Song"
            setCurrentSong={setCurrentSong}
            changeSong={changeSong}
            currentSong={song}
            isPlaying={isPlaying}
          />
        ))}
      </div>
    </div>
  );
};

export default SongsLibrary;
