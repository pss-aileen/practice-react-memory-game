import Card from './../components/Card';
import doubleCards from './../utils/doubleCards';
import randomCards from './../utils/randomCards';
import originalCards from './../data/cards';
import { useState, useEffect } from 'react';

function limitCards(array, number) {
  const cards = array.splice(number);

  return cards;
}

// カードの枚数はここで調整
// 2とすると4枚出る、max17まで
limitCards(originalCards, 12);
const doubleCardsArray = doubleCards(originalCards);
const randomCardsArray = randomCards(doubleCardsArray);

export default function Cards() {
  const sessionInfoModel = {
    clickTimes: 0,
    cards: [],
  };

  const [cards, setCards] = useState(randomCardsArray);
  const [sessionInfo, setSessionInfo] = useState(sessionInfoModel);

  function updateSessionInfo(id, name) {
    if (sessionInfo.cards.length === 1 && sessionInfo.cards[0].id === id) {
      console.log('click is prohibited');
      return;
    }

    setSessionInfo((sessionInfo) => {
      const newSessionInfo = {
        clickTimes: sessionInfo.clickTimes + 1,
        cards: [...sessionInfo.cards],
      };

      const newOne = { id: id, name: name };
      newSessionInfo.cards.push(newOne);

      return newSessionInfo;
    });
  }

  useEffect(() => {
    if (sessionInfo.cards.length === 2) {
      console.log('There are 2 cards.');

      if (sessionInfo.cards[0].name === sessionInfo.cards[1].name) {
        console.log('matched');
        setCards((cards) => {
          const newCards = [...cards];
          newCards.map((card) => {
            if (card.name === sessionInfo.cards[0].name) {
              card.isMatched = true;
            }
            return card;
          });
          return newCards;
        });

        setSessionInfo(sessionInfoModel);
      } else {
        console.log('not matched');

        setTimeout(() => {
          setSessionInfo(sessionInfoModel);
        }, 700);
      }
    }
  }, [sessionInfo]);

  return (
    <ul className='cards'>
      {cards.map((card) => {
        let isSelected = false;
        for (let i = 0; i < sessionInfo.cards.length; i++) {
          if (sessionInfo.cards[0] && sessionInfo.cards[i].id === card.id) {
            isSelected = true;
          }
        }

        return <Card name={card.name} key={card.id} id={card.id} onUpdate={updateSessionInfo} isMatched={card.isMatched} isSelected={isSelected} cardBackUrl={card.cardBackUrl} />;
      })}
    </ul>
  );
}
