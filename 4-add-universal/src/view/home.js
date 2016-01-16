import React, { Component } from 'react';

import Counter from 'component/counter';

// NOTE: http://rackt.github.io/redux/docs/recipes/WritingTests.html
export class Home extends Component {
  render() {
    return (
      <div>
        <h1>Home</h1>

        <Counter />
      </div>
    );
  }
}

export default Home;
