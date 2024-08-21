import PropTypes from 'prop-types';
// import React from 'react';

export default function Card({ id, name, isMatched, onUpdate, isSelected }) {
  function handleClick() {
    onUpdate(id, name);
  }
  return (
    <li>
      <button onClick={handleClick} disabled={isMatched === true ? 'disabled' : ''} className={isSelected ? 'isSelected' : ''}>
        <span>{name}</span>
        <br />
        (id: {id})
      </button>
    </li>
  );
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  onUpdate: PropTypes.func.isRequired,
  isMatched: PropTypes.bool.isRequired,
  isSelected: PropTypes.bool,
};
