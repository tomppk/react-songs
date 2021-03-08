// Import both default export and named export from
// react library
import React, { Component } from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";

class SongList extends Component {
  // Helper function to render songs as list.
  // Takes songs array from SongList component's state
  // this.props that was set by connect() function down
  // below.
  // Maps over each song in array and calls callback
  // for each song that returns JSX. Upper return
  // statement then returns the new mapped array.
  renderList() {
    return this.props.songs.map((song) => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => this.props.selectSong(song)}>
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }

  render() {
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

// Conventionally named mapStateToProps. From react-redux.
// Takes as argument redux state object so our redux store
// that is composed of our reducers and all of our data.
// Returns object with key songs and value songs from our
// store.
// This returned object is going to show as props to our
// SongList component.
// So inside this class based component it is possible to
// call this.props === {songs: state.songs}
const mapStateToProps = (state) => {
  return { songs: state.songs };
};

// Syntax connect(mapStateToProps)(SongList) equals:
// function connect(mapStateToProps) {
//     return function(SongList) {
//         return 'something'
//     }
// }
// So connect() takes in as argument mapStateToProps and
// returns a second function that takes SongList component
// as argument.
// Call connect() and pass in our component (SongList) as
// second function call.
// Second argument in connect() is an object that takes in
// action creator and passes it to our component as a prop.
// The component can then use this action creator function
// to update our redux stores state of which song is
// selected by calling this function
// this.props.selectSong(song)
// By calling this.props.selectSong(song) tells Redux to
// dispatch() the action to our reducers inside our store
// and for our reducers to update store's state based on
// the type and payload of the action received.

// Our action creator is just a regular function. By passing
// it in to connect() tells Redux that it is a action
// creator function. This action creator can only update
// Redux store state if it is called as component props
// calling it by itself cannot communicate with Redux store
export default connect(mapStateToProps, {
  selectSong: selectSong,
})(SongList);
