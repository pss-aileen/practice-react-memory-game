import './App.css';
import cards from './data/cards.json';
import doubleCards from './utils/doubleCards';
import randomCards from './utils/randomCards';

const doubleCardsArray = doubleCards(cards);
const randomCardsArray = randomCards(doubleCardsArray);

console.log(randomCardsArray);

function App() {
  return <div>App</div>;
}

export default App;
