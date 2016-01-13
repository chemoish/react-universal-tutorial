import React, { Component, PropTypes } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as counterAction from './action/counter-action';

// http://rackt.github.io/redux/docs/recipes/WritingTests.html
export class Counter extends Component {
  render() {
    return (
      <div>
        <p>
          <b>{this.props.counter}</b>
        </p>

        <p>
          <button type="button" onClick={this.props.decrement}>Decrement</button>
          <button type="button" onClick={this.props.increment}>Increment</button>
        </p>
      </div>
    );
  }
}

Counter.propTypes = {
  counter: PropTypes.number.isRequired
};

export default connect(state => ({
  counter: state.counterReducer
}), function (dispatch) {
  return bindActionCreators(counterAction, dispatch);
})(Counter);
