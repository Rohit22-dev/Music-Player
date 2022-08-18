import { useState, useEffect } from "react";
import SpotifyPlayer from "react-spotify-web-playback";

export default function Player({ accessToken, trackUri }) {
  const [play, setPlay] = useState(false);

  useEffect(() => setPlay(true), [trackUri]);

  if (!accessToken) return null;
  return (
    <SpotifyPlayer
      token={accessToken}
      showSaveIcon
      callback={(state) => {
        if (!state.isPlaying) setPlay(false);
      }}
      play={play}
      uris={trackUri ? [trackUri] : []}
      styles={{
        bgColor: "#000",
        sliderColor: "white",
        color: "#fff",
        sliderHandleColor: "#00ff21",
        sliderTrackColor: "grey",
        trackNameColor: "orange",
        trackArtistColor: "white",
        activeColor: "orange",
        paddingTop: "5px",
      }}
    />
  );
}
