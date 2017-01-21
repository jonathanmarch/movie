import React, {Component} from 'react';

export default class Trailers extends Component {
  render() {
    return (
      <div className="movie__trailers">
        <div className="movie__trailers__content">
          <h1>Trailers</h1>
          {this.props.trailers.map(video => (
            <div className="movie__trailers__video" key={video.id}>
              <iframe width="600" height="350" src={"https://www.youtube.com/embed/" + video.key + "?modestbranding=1"} frameBorder="0" allowFullScreen></iframe>
            </div>
          ))}
        </div>
      </div>
    )
  }
}
