import React, {Component} from 'react';

function ShowMedia(props){
  return (
    <div className="movie__media__container">
      {props.media.map((media, index) => (
        <img key={index} src={"https://image.tmdb.org/t/p/w500/" + media.file_path} />
      ))}
    </div>
  )
}

export default class Media extends Component {
  render() {
    let media = null;

    if (this.props.media.backdrops) {
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
