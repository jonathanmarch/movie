import React, {Component} from 'react';
import {Header} from './header';
import {Footer} from './footer';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}
