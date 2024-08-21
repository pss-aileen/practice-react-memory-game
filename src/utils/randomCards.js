function randomCards(array) {
  const newArray = [];

  while (array.length) {
    const randomNumber = Math.floor(Math.random() * array.length);
    const item = array.splice(randomNumber, 1);
    newArray.push(item[0]);
  }

  return newArray;
}

export default randomCards;
