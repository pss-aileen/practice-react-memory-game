import './App.css';
import Card from './components/Card';
import cards from './data/cards.json';
import doubleCards from './utils/doubleCards';
import randomCards from './utils/randomCards';

const doubleCardsArray = doubleCards(cards);
const randomCardsArray = randomCards(doubleCardsArray);

console.log(randomCardsArray);

function App() {
  return (
    <>
      <h1>Memory Game</h1>

      <h2>info</h2>
      <ul>
        <li>session: 0</li>
        <li>choosed: A, B</li>
      </ul>

      <h2>cards</h2>

      <ul>
        {randomCardsArray.map((card) => (
          <Card name={card.name} key={card.id} id={card.id} />
        ))}
      </ul>
    </>
  );
}

export default App;
