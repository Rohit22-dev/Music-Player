import React from "react";

export default function TrackSearchResult({ track, chooseTrack }) {
  function handlePlay() {
    chooseTrack(track);
  }

  return (
    <div
      className="d-flex my-2 align-items-center "
      style={{ cursor: "pointer" }}
      onClick={handlePlay}
    >
      <img src={track.albumUri} style={{ height: "64px", width: "64px" }} />
      <div className="mx-3">
        <div style={{ color: "orange" }}>{track.title}</div>
        <div className="text-light">{track.artist}</div>
      </div>
    </div>
  );
}
