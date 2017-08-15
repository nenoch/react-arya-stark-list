import React from 'react';
import PropTypes from 'prop-types';

const AryaList = ({ names, deleted, deleteName, undeleteName }) => {

  function toggleListItem(item){
    if (names.includes(item)) {
      return (<button
        type='button'
        className='name-delete'
        onClick={()=>deleteName(item.id)}
      >Delete</button>)
    } else if (deleted.includes(item)) {
      return (<button
        type='button'
        className='name-undelete'
        onClick={()=>undeleteName(item.id)}
      >Undelete</button>)
    }
  }

  const nameItems = names.map(name => (
    <li key={name.id}>
      {toggleListItem(name)}
      <span className="name-text">{name.text}</span>
    </li>));

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
