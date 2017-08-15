import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AddName from './components/addName/';
import actions from './actions/';

export const App = ({ submitName }) => (
  <div>
    <h1>Arya Stark List</h1>
    <AddName submitName={submitName} />
  </div>
);

App.propTypes = {
  submitName: PropTypes.func.isRequired,
};

const mapStateToProps = state => state.aryaStarkListApp;

const mapDispatchToProps = dispatch => ({
  submitName: (text) => {
    if (text) {
      dispatch(actions.submitName(text));
    }
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
