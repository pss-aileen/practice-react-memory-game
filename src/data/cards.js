const cards = [
  {
    id: 1,
    name: 'card_joker',
    cardBackUrl: 'card_joker.png',
    isMatched: false,
  },
];

for (let i = 0; i < 4; i++) {
  const cardTypes = ['club', 'diamond', 'heart', 'spade'];
  let cardType = cardTypes[i];

  for (let j = 1; j <= 4; j++) {
    const numbers = ['01', '11', '12', '13'];

    let cardNumber = numbers[j - 1];

    const cardName = `card_${cardType}_${cardNumber}`;

    const card = {
      id: 4 * i + j,
      name: cardName,
      cardBackUrl: cardName + '.png',
      isMatched: false,
    };

    cards.push(card);
  }
}

export default cards;
