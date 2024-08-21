import PropTypes from 'prop-types';
import React from 'react';

export default function Card({ id, name, onUpdate }) {
  function handleClick() {
    onUpdate(id, name);
  }
  return (
    <li>
      <button onClick={handleClick}>
        {name} (id: {id})
      </button>
    </li>
  );
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  onUpdate: PropTypes.func.isRequired,
};
