import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss';
import Entry from './pages/Entry/Entry';
import Game from './pages/Game/Game';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import NewGame from './pages/NewGame/NewGame';
import NoMatch from './pages/NoMatch/NoMatch';
import Register from './pages/Register/Register';

function App() {
  return (
    <div className='App container'>
      <Router>
        <Routes>
          <Route path='/' element={<Entry />} />
          <Route path='register' element={<Register />} />
          <Route path='login' element={<Login />} />
          <Route path='home' element={<Home />} />
          <Route path='newgame' element={<NewGame />} />
          <Route path='game' element={<Game />} />
          <Route path='*' element={<NoMatch />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
