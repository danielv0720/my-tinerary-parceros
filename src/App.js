// Components
import Navbar from './components/Navbar';
import Home1 from './pages/Home1'
// Routes
import { Routes, Route } from 'react-router-dom';
// Styles
import './App.css';
// Scroll To Top when change route
import AutoToTop from './components/AutoToTop';
// Components
import Cities from './pages/Cities';
import Hotels from './pages/Hotels';
import Layout from './layout/Layout';

// Layout




function App() {
  return (
    <div className="App">
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
