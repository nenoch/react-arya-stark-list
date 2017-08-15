import React from 'react';
import PropTypes from 'prop-types';

const AryaList = ({ names, deleteName }) => {
  const nameItems = names.map(name => (
    <li key={name.id}>
    <button
      type='button'
      className='name-delete'
      onClick={()=>deleteName(name.id)}
    >Delete</button>
      <span className="name-text">{name.text}</span>
    </li>
  ));

  return (
    <ul>
      {nameItems}
    </ul>
  );
};

AryaList.propTypes = {
  names: PropTypes.arrayOf(PropTypes.shape(
    {
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    },
  )).isRequired,
  deleteName: PropTypes.func.isRequired,
};

export default AryaList;
