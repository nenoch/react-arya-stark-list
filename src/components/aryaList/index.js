import React from 'react';
import PropTypes from 'prop-types';

const AryaList = ({ names, deleted, deleteName, undeleteName }) => {

  const nameItems = names.map(name => (
    <li key={name.id} className="list-group-item name-item">
      <button
        type='button'
        className='name-delete'
        onClick={()=>deleteName(name.id)}
      ><i className="fa fa-bolt" aria-hidden="true"></i> Kill</button>
      <span className="list-group-item-heading name-text">{name.text}</span>
    </li>));

  const deletedItems = deleted.map(name => (
    <li key={name.id} className="list-group-item name-item">
      <button
        type='button'
        className='name-undelete'
        onClick={()=>undeleteName(name.id)}
      ><i className="fa fa-fire" aria-hidden="true"></i> Resuscitate</button>
      <span className="list-group-item-heading deleted-name-text">{name.text}</span>
    </li>));

  return (
      <div className="col-md-6 col-sm-6 col-lg-6">
        <ul className='list-group'>
          {nameItems}
          {deletedItems}
        </ul>
      </div>
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
