import PropTypes from 'prop-types';
// import React from 'react';

export default function Card({ id, name, isMatched, onUpdate, isSelected, cardBackUrl }) {
  function handleClick() {
    onUpdate(id, name);
  }
  return (
    <li>
      <button onClick={handleClick} disabled={isMatched === true ? 'disabled' : ''} className={isSelected ? 'isSelected' : ''}>
        <img src={`./images/${cardBackUrl}`} alt='' />
        <br />
        {name}
        <br />
        (id: {id})
      </button>
    </li>
  );
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  cardBackUrl: PropTypes.string.isRequired,
  onUpdate: PropTypes.func.isRequired,
  isMatched: PropTypes.bool.isRequired,
  isSelected: PropTypes.bool,
};
