import React, {Component} from 'react';

export class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer__content">
          <a href="https://www.themoviedb.org/" target="_blank">
            <img src="https://www.themoviedb.org/assets/1/v4/logos/408x161-powered-by-rectangle-green-bb4301c10ddc749b4e79463811a68afebeae66ef43d17bcfd8ff0e60ded7ce99.png" />
          </a>
        </div>
      </footer>
    );
  }
}
