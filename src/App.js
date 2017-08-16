import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AddName from './components/addName/';
import AryaList from './components/aryaList/';
import actions from './actions/';

export const App = ({ submitName, names, deleted, deleteName, undeleteName }) => (
  <div>
    <h1>Arya Stark List</h1>
    <AddName submitName={submitName} />
    <AryaList names={names} deleted={deleted} deleteName={deleteName} undeleteName={undeleteName}/>
  </div>
);

App.propTypes = {
  submitName: PropTypes.func.isRequired,
  names: PropTypes.arrayOf(PropTypes.shape(
    {
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    },
  )).isRequired,
  deleted: PropTypes.arrayOf(PropTypes.shape(
    {
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    },
  )).isRequired,
  deleteName: PropTypes.func.isRequired,
  undeleteName: PropTypes.func.isRequired,
};

const mapStateToProps = state => state.aryaStarkListApp;

const mapDispatchToProps = dispatch => ({
  submitName: (text) => {
    if (text) {
      dispatch(actions.submitName(text));
    }
  },
  deleteName: (id) => {
    dispatch(actions.deleteName(id));
  },
  undeleteName: (id) => {
    dispatch(actions.undeleteName(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
