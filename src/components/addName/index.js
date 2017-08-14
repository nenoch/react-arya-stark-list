import React from 'react';
import PropTypes from 'prop-types';

const AddName = ({submitName}) => {
  let input;

  return (
  <div>
    <form onSubmit={ (event) => {
      event.preventDefault();
      submitName(input.value);
      input.value = '';
      }}
    >
      <input
        className='name-input'
        ref={(element) => {
          input = element;
        }}
      />
      <button type='submit' className='name-submit'>
        Add name
      </button>
    </form>
  </div>);

};

AddName.propTypes = {
  submitName: PropTypes.func.isRequired,
};

export default AddName;
