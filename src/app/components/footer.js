import React, {Component} from 'react';

export class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer__content">
          <a href="https://www.themoviedb.org/" target="_blank">
            <img src="https://www.themoviedb.org/assets/static_cache/9b3f9c24d9fd5f297ae433eb33d93514/images/v4/logos/408x161-powered-by-rectangle-green.png" />
          </a>
        </div>
      </footer>
    );
  }
}
