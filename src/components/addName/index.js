import React from 'react';
import PropTypes from 'prop-types';

const AddName = ({submitName}) => {
  let input;

  return (
      <div className="col-md-4 col-sm-4 col-lg-4">
        <form onSubmit={ (event) => {
          event.preventDefault();
          submitName(input.value);
          input.value = '';
          }}
          >
          <div className="form-group form-element">
            <div className="input-group">
              <div className="input-group-addon">To Kill</div>
                <input className="name-input form-control" ref={(element) => {
                  input = element;
                }}/>
              </div>
            </div>
            <button type="submit" className="btn btn-warning form-element name-submit">Add</button>
        </form>
      </div>);

};

AddName.propTypes = {
  submitName: PropTypes.func.isRequired,
};

export default AddName;
