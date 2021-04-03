import React, { useState, useRef } from "react";
import Player from "./components/Player";
import Song from "./components/Song";
import SongsLibrary from "./components/SongsLibrary";
/*
  По структуре организации стилей:
  На мой взгляд нет смысла добавлять нижнее подчеркивание вначале названия файла. В случае со сборщиками grunt, gulp это было нужно,
  чтобы файлики не компилились в отдельные файлы в dist. В react app это не нужно.
*/
import "./styles/app.scss";
import Data from "./util";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [songs, setSongs] = useState(Data()),
    [libraryActive, setLibraryActive] = useState(false),
    [currentSong, setCurrentSong] = useState(songs[0]),
    [isPlaying, setIsPlaying] = useState(false),
    [songInfo, setSongInfo] = useState({
      currentTime: 0,
      duration: 0,
      animationPercentage: 0,
    }),
    audioRef = useRef(null);
  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    const roundedCurrent = Math.round(current);
    const roundedDuration = Math.round(duration);
    const animationPercentage = Math.round(
      (roundedCurrent / roundedDuration) * 100
    );
    setSongInfo({
      ...songInfo,
      currentTime: current,
      duration,
      animationPercentage,
    });
    if (current === duration) {
      const songId = songs.findIndex((song) => song.id === currentSong.id);
      if (songId + 1 < songs.length) {
        changeSong(songs[songId + 1].id);
      } else {
        changeSong(songs[0].id);
      }
    }
  };

  const changeSong = (id) => {
    setSongs(
      songs.map((song) => {
        if (song.id === id) {
          return {
            ...song,
            active: true,
          };
        } else {
          return {
            ...song,
            active: false,
          };
        }
      })
    );
    setCurrentSong(songs.filter((song) => song.id === id)[0]);
    if (isPlaying) {
      const audioPromise = audioRef.current.play();
      if (audioPromise !== undefined) {
        audioPromise.then((audio) => audioRef.current.play());
      }
    }
  };
  return (
    <div
      className={`App ${libraryActive ? "App_Active" : ""}`}
      onClick={(e) => {
        if (
          libraryActive &&
          (e.target.className === "Player" || e.target.className === "Song")
        ) {
          setLibraryActive(!libraryActive);
        }
      }}
    >
      <div
        className={`App__Menu ${libraryActive ? "hidden" : ""}`}
        onClick={() => setLibraryActive(!libraryActive)}
      >
        Menu
        <FontAwesomeIcon icon={faMusic} />
      </div>
      <Song currentSong={currentSong} isPlaying={isPlaying} />
      <Player
        currentSong={currentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        songInfo={songInfo}
        setSongInfo={setSongInfo}
        audioRef={audioRef}
        songs={songs}
        changeSong={changeSong}
      />
      <SongsLibrary
        songs={songs}
        setCurrentSong={setCurrentSong}
        isPlaying={isPlaying}
        audioRef={audioRef}
        setSongs={setSongs}
        libraryActive={libraryActive}
        setLibraryActive={setLibraryActive}
        changeSong={changeSong}
        currentSong={currentSong}
      />
      <audio
        ref={audioRef}
        src={currentSong.audio}
        className="Player__Song"
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler}
      ></audio>
    </div>
  );
}

export default App;
