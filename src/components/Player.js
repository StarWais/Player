import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
  faPause,
} from "@fortawesome/free-solid-svg-icons";
const Player = ({
  isPlaying,
  setIsPlaying,
  audioRef,
  songInfo,
  setSongInfo,
  songs,
  changeSong,
  currentSong,
}) => {
  const format = (time) => {
    const hrs = ~~(time / 3600);
    const mins = ~~((time % 3600) / 60);
    const secs = ~~time % 60;
    let ret = "";
    if (hrs > 0) {
      ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
    }
    ret += "" + String(mins).padStart(2, "0") + ":" + (secs < 10 ? "0" : "");
    ret += "" + secs;
    return ret;
  };
  const playSongHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };
  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({
      ...songInfo,
      currentTime: e.target.value,
    });
  };
  const animatedStyles = {
    transform: `translateX(${songInfo.animationPercentage}%)`,
  };
  const songSkipHandler = (param) => {
    const songId = songs.findIndex((song) => song.id === currentSong.id);
    switch (param) {
      case "next":
        if (songId + 1 < songs.length) {
          changeSong(songs[songId + 1].id);
        } else {
          changeSong(songs[0].id);
        }
        break;
      case "prev":
        if (songId - 1 >= 0) {
          changeSong(songs[songId - 1].id);
        } else {
          changeSong(songs[songs.length - 1].id);
        }
        break;
      default:
        break;
    }
  };
  return (
    <div className="Player">
      <div className="Time">
        <div className="Time__Start">{format(songInfo.currentTime)}</div>
        <div
          className="Time__Track"
          style={{
            background: `linear-gradient(to right, ${currentSong.colors[0]}, ${currentSong.colors[1]})`,
          }}
        >
          <input
            type="range"
            className="Time__Range"
            min={0}
            max={songInfo.duration || 0}
            value={songInfo.currentTime}
            onChange={dragHandler}
          />
          <div className="Time__Range_Animated" style={animatedStyles}></div>
        </div>
        <div className="Time__End">{format(songInfo.duration)}</div>
      </div>
      <div className="Play">
        <FontAwesomeIcon
          className="Play__Previous"
          icon={faAngleLeft}
          size="2x"
          onClick={() => songSkipHandler("prev")}
        />
        <FontAwesomeIcon
          className="Play__Play"
          icon={isPlaying ? faPause : faPlay}
          size="2x"
          onClick={playSongHandler}
        />
        <FontAwesomeIcon
          className="Play__Next"
          icon={faAngleRight}
          size="2x"
          onClick={() => songSkipHandler("next")}
        />
      </div>
    </div>
  );
};

export default Player;
