import React, {Component} from 'react';

export class Header extends Component {
  render() {
    return (
      <header className="sitenav">
        <div className="sitenav__container">
          <div className="sitenav__logo"><a href="/">Movie Trailers</a></div>
        </div>
      </header>
    );
  }
}
