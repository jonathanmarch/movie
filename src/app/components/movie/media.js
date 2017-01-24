import React, {Component} from 'react';
import baguetteBox from 'baguettebox.js';

function ShowMedia(props){
  return (
    <div className="movie__media__container backdrops">
      {props.media.map((media, index) => (
        <a key={index} href={"https://image.tmdb.org/t/p/w1920/" + media.file_path}>
          <img src={"https://image.tmdb.org/t/p/w500/" + media.file_path} />
        </a>
      ))}
    </div>
  )
}

export default class Media extends Component {
  componentDidMount() {
    baguetteBox.run('.backdrops');
  }

  render() {
    let media = null;

    if (this.props.media.backdrops.length) {
      media = <ShowMedia media={this.props.media.backdrops} />
    } else {
      media = <h3>Sorry there is currently no media for this movie.</h3>;
    }

    return (
      <div className="movie__media">
        <div className="movie__media__content">
          <h1>Media</h1>
          {media}
        </div>
      </div>
    )
  }
}
