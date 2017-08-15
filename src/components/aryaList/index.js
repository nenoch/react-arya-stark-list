import React from 'react';
import PropTypes from 'prop-types';

const AryaList = ({ names }) => {
  const nameItems = names.map(name => (
    <li key={name.id}>
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
};

export default AryaList;
