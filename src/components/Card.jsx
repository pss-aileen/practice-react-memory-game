import PropTypes from 'prop-types';
import React from 'react';

export default function Card({ id, name }) {
  return (
    <li>
      <button>
        {name} (id: {id})
      </button>
    </li>
  );
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};
