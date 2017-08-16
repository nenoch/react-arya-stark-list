import React from 'react';
import PropTypes from 'prop-types';

const AryaList = ({ names, deleted, deleteName, undeleteName }) => {

  const nameItems = names.map(name => (
    <li key={name.id}>
      <button
        type='button'
        className='name-delete'
        onClick={()=>deleteName(name.id)}
      >Kill</button>
      <span className="name-text">{name.text}</span>
    </li>));

  const deletedItems = deleted.map(name => (
    <li key={name.id}>
      <button
        type='button'
        className='name-undelete'
        onClick={()=>undeleteName(name.id)}
      >Resuscitate</button>
      <span className="deleted-name-text">{name.text}</span>
    </li>));

  return (
    <ul>
      {nameItems}
      {deletedItems}
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
