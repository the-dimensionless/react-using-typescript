import logo from './logo.svg';
import './App.css';

function App() {
  const firstName: string = "Sumit Singh";

  // tuple
  const aTuple: [string, number] = ['dummyString', 23];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          The value {firstName} is of type {typeof firstName} type!
        </p>
        <p>
          The value {aTuple} is of type {typeof aTuple} type!
        </p>
      </header>
    </div>
  );
}

export default App;
