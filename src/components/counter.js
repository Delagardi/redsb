import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions';

const Counter = ({ counter, inc, dec, rnd }) => {
  return (
    <div className="jumbotron">
      <h2>{counter}</h2>
      <button
        onClick={dec}
        className="btn btn-primary btn-lg">DEC</button>
      <button
        onClick={inc}
        className="btn btn-primary btn-lg">INC</button>
      <button
        onClick={rnd}
        className="btn btn-primary btn-lg">RND</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    counter: state
  }
}

// Variant 1
const mapDispatchToProps = (dispatch) => {
  const { inc, dec, rnd } = bindActionCreators(actions, dispatch);

  return {
    inc,
    dec,
    rnd
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

// Variant 2
// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators(actions, dispatch);
// }

//export default connect(mapStateToProps, mapDispatchToProps)(Counter);

// Variant 3
// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators(actions, dispatch);
// }

//export default connect(mapStateToProps, actions)(Counter);