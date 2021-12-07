import logo from './logo.svg';
import './App.css';
import CardComponents from './components/CardComponents';
import PopCard from './components/PopCard';
import "bootstrap/dist/css/bootstrap.css"
import CardsContainers from './containers/CardsContainers';

function App() {
  return (
    <div className="App">
      <CardsContainers/>
    </div>
  );
}

export default App;
