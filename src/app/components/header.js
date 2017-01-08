import React, {Component} from 'react';

export class Header extends Component {
  render() {
    return (
      <header className="sitenav">
        <div className="sitenav__container">
          <div className="sitenav__logo">Movie Trailers</div>
        </div>
      </header>
    );
  }
}
