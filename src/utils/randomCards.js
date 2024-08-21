function randomCards(array) {
  const newArray = [];

  console.log(array.length);

  // カードの枚数調整、将来的には変えれるようにしたい

  while (array.length) {
    console.log(array.length);
    console.log(array);
    const randomNumber = Math.floor(Math.random() * array.length);
    const item = array.splice(randomNumber, 1);
    newArray.push(item[0]);
  }

  // for (let i = 0; i < array.length; i++) {
  //   console.log(array.length, i);
  //   console.log(array);
  //   const randomNumber = Math.floor(Math.random() * array.length);
  //   const item = array.splice(randomNumber, 1);
  //   // console.log(randomNumber, item);
  //   newArray.push(item[0]);
  // }

  return newArray;
}

export default randomCards;
