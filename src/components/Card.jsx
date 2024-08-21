import PropTypes from 'prop-types';
// import React from 'react';

export default function Card({ id, name, isMatched, onUpdate, isSelected, cardBackUrl }) {
  function handleClick() {
    onUpdate(id, name);
  }

  return (
    <li>
      <button onClick={handleClick} disabled={isMatched === true ? 'disabled' : ''} className={isSelected || isMatched ? 'isSelected' : ''}>
        <img src={`./images/${cardBackUrl}`} alt={cardBackUrl} className='front' />
        <img src={`./images/card_back.png`} alt={cardBackUrl} className='back' />
      </button>
    </li>
  );
}

Card.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string.isRequired,
  cardBackUrl: PropTypes.string.isRequired,
  onUpdate: PropTypes.func.isRequired,
  isMatched: PropTypes.bool.isRequired,
  isSelected: PropTypes.bool,
};
