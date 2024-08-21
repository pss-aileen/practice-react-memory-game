function doubleCards(array) {
  const firstArray = structuredClone(array);
  const nextArray = structuredClone(array);

  nextArray.map((item) => {
    item.id = item.id + array.length;
    return item;
  });

  const newArray = [...firstArray, ...nextArray];

  return newArray;
}

export default doubleCards;
