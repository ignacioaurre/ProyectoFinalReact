import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Navbar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <main className="App-header">
        <Header />
        <Navbar />
      </main>
    </div>
  );
}

export default App;
