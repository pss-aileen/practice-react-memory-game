// import React from 'react';s

export default function Card({ id, arrayNumber, onHandleClick, isMatched, name }) {
  function click() {
    onHandleClick(id, arrayNumber);
  }

  return (
    <li>
      <button onClick={click}>{name}</button>
      {id}, {isMatched ? '一致' : '不一致'}
    </li>
  );
}
