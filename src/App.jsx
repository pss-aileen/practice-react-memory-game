import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card';
// import cards from './data/cards.json';
import doubleCards from './utils/doubleCards';
import randomCards from './utils/randomCards';
import originalCards from './data/cards';

// console.log(cards2);
console.log(originalCards);

function limitCards(array, number) {
  const cards = array.splice(number);

  return cards;
}

limitCards(originalCards, 4);
const doubleCardsArray = doubleCards(originalCards);
console.log(doubleCardsArray);
const randomCardsArray = randomCards(doubleCardsArray);
console.log(randomCardsArray);

function App() {
  const sessionInfoModel = {
    clickTimes: 0,
    cards: [],
  };

  const [cards, setCards] = useState(randomCardsArray);
  const [sessionInfo, setSessionInfo] = useState(sessionInfoModel);

  function updateSessionInfo(id, name) {
    if (sessionInfo.cards.length === 1 && sessionInfo.cards[0].id === id) {
      console.log('クリックは無効です');
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
    // console.log('useEffect');

    if (sessionInfo.cards.length === 2) {
      console.log('2つあるよ');

      if (sessionInfo.cards[0].name === sessionInfo.cards[1].name) {
        console.log('あってました');
        setCards((cards) => {
          const newCards = [...cards];
          newCards.map((card) => {
            if (card.name === sessionInfo.cards[0].name) {
              card.isMatched = true;
            }
            return card;
          });
          console.log(newCards);
          return newCards;
        });

        setSessionInfo(sessionInfoModel);
      } else {
        console.log('あってませんでした');

        setTimeout(() => {
          setSessionInfo(sessionInfoModel);
        }, 700);
      }
    }
  }, [sessionInfo]);

  useEffect(() => {
    // console.log('useEffectのcards: ', cards);
  }, [cards]);

  return (
    <>
      <h1>Memory Game</h1>

      <h2>info</h2>
      <ul className='info'>
        <li>clicked times: {sessionInfo.clickTimes}</li>
        <li>
          choosed:{' '}
          {sessionInfo.cards.map((info) => {
            return <span key={info.id}>{info.name}</span>;
          })}
        </li>
      </ul>

      <h2>cards</h2>

      <p>他のカードをクリックしてください（or Aがそろいました！）</p>

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
    </>
  );
}

export default App;
