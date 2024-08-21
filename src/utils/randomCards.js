function randomCards(array) {
  const newArray = [];

  for (let i = 0; i < 8; i++) {
    const randomNumber = Math.floor(Math.random() * array.length);
    const item = array.splice(randomNumber, 1);
    newArray.push(item[0]);
  }

  return newArray;
}

export default randomCards;