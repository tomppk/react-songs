import React from "react";
import { connect } from "react-redux";

// Destructure props.song
const SongDetail = ({ song }) => {
  if (!song) {
    return <div>Select a song</div>;
  }
  return (
    <div>
      <h3>Details for:</h3>
      <p>
        Title: {song.title}
        <br />
        Duration: {song.duration}
      </p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { song: state.selectedSong };
};

// When Redux store's state changes all components that
// are hooked together with connect() automatically
// re-render.
// So when clicking select button on SongList component
// what Redux does behind the scenes is:
// calls selectSong action creator to dispatch action
// object to our reducers. Reducers then look at the
// type and payload of received action and make
// possible changes to our store state.
export default connect(mapStateToProps)(SongDetail);
