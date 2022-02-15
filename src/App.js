import logo from './logo.svg';
import './App.css';
import Rando from 'js-rando';

function App() {
  let rando = new Rando()
  return (
    <div className="App">
      <p>{rando.RandomInt(1, 11)}</p>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
