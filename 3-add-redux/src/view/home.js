import React, { Component } from 'react';

import Counter from 'component/counter';

export default class Home extends Component {
  render() {
    return (
      <div>
        <h1>Home</h1>

        <Counter />
      </div>
    );
  }
}
