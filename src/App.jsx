import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card';

const cards = [
  {
    id: 1,
    name: 'A',
    isMatched: false,
  },
  {
    id: 2,
    name: 'B',
    isMatched: false,
  },
  {
    id: 3,
    name: 'C',
    isMatched: false,
  },
  {
    id: 4,
    name: 'D',
    isMatched: false,
  },
];

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

function randomCards(array) {
  const newArray = [];

  for (let i = 0; i < 8; i++) {
    const randomNumber = Math.floor(Math.random() * array.length);
    const item = array.splice(randomNumber, 1);
    newArray.push(item[0]);
  }

  return newArray;
}

const doubleCardsArray = doubleCards(cards);
const randomCardsArray = randomCards(doubleCardsArray);

function App() {
  const [cards, setCards] = useState(randomCardsArray);
  const [clickTimes, setClickTimes] = useState(0);
  const [oneSession, setOneSession] = useState([]);

  // クリックしたら、oneSessionが動く
  // クリックした回数を計測
  // 1回目のクリックで、データを保持
  // 2回目のクリックでデータをさらに格納して、
  // それらのnameが一致しているかを確認する
  // 確認できて、あってたら、cardsの該当するidのisMatchedを変更する
  // あってなかったら、そのまま
  // そして、isMatched以外のカードは全て閉じるようにする

  useEffect(() => {
    compare();
  }, [oneSession]);

  function setA(number) {
    setClickTimes((number) => number + 1);
    setB(number);
  }

  function setB(arrayNumber) {
    setOneSession((sessionLog) => {
      const newSessionLog = [...sessionLog, cards[arrayNumber]];
      return newSessionLog;
    });
  }

  function compare() {
    console.log('通過していますか？');
    console.log(oneSession);
    if (oneSession.length === 2) {
      const A = oneSession[0]['name'];
      const B = oneSession[1]['name'];

      if (A === B) {
        console.log('一致しています！！！');
      }
    } else if (oneSession.length >= 3) {
      setOneSession([]);
      setClickTimes(0);
    }
  }

  function handleClick(id, arrayNumber) {
    console.log('handleClickEvent Start');
    setA(arrayNumber);
  }

  return (
    <>
      <p>Hello</p>
      <ul>
        <li>clickTimes {clickTimes}</li>
        <li>
          {oneSession.map((item) => {
            return <span key={item.id}>{item.name}</span>;
          })}
        </li>
        {/* <li></li> */}
      </ul>
      {cards.map((item, index) => {
        return <Card id={item.id} onHandleClick={handleClick} key={item.id} isMatched={item.isMatched} name={item.name} arrayNumber={index} />;
      })}
    </>
  );
}

export default App;
