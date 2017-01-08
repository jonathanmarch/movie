import React, {Component} from 'react';

export default class Movie extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    var id = this.props.params.id;
    console.log('test');
    console.log(id);
  }

  render () {
    return (
      <div>
      test
      </div>
    )
  }
}
