import logo from './logo.svg';
import './App.css';
import Message from './components/Message';
import User from './components/User';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Message message='basic prop' />
        <User name='Sumit' age={24} isAdmin={false} />
      </header>
    </div>
  );
}

export default App;
