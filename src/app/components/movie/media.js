import React, {Component} from 'react';

function ShowTrailers(props){
  return (
    <div className="movie__trailers__container">
      {props.trailers.map(video => (
        <div className="movie__trailers__video" key={video.id}>
          <iframe width="600" height="350" src={"https://www.youtube.com/embed/" + video.key + "?modestbranding=1"} frameBorder="0" allowFullScreen></iframe>
        </div>
      ))}
    </div>
  )
}

export default class Media extends Component {
  render() {
    let trailers = null;

    if (this.props.trailers.length) {
      trailers = <ShowTrailers trailers={this.props.trailers} />;
    } else {
      trailers = <h3>Sorry there is currently no trailers for this movie.</h3>;
    }

    return (
      <div className="movie__trailers">
        <div className="movie__trailers__content">
          <h1>Trailers</h1>
          {trailers}
        </div>
      </div>
    )
  }
}
