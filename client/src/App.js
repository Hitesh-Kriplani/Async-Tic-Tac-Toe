import React from 'react';
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import './App.scss';
import PrivateRoute from './components/PrivateRoute';
import Entry from './pages/Entry/Entry';
import Game from './pages/Game/Game';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import NewGame from './pages/NewGame/NewGame';
import Register from './pages/Register/Register';

function App() {
  return (
    <div className='App container'>
      <Router>
        <Routes>
          <Route path='/' element={<Entry />} />
          <Route path='register' element={<Register />} />
          <Route path='login' element={<Login />} />
          <Route
            path='home'
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route
            path='newgame'
            element={
              <PrivateRoute>
                <NewGame />
              </PrivateRoute>
            }
          />
          <Route
            path='game'
            element={
              <PrivateRoute>
                <Game />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

/*
1. Decide database schema for games and setup
2. Make email ID and username unique from backend ---------- !!!DONE!!!
3. Persist user
4. Design X and O ---------- !!!DONE!!!
5. Setup Socket.io
6. As soon as the game is created, the intiator gets the first move & other user’s home page reflects the game
7. Every player sees `X` as their piece & `O` as the other player’s piece in every game
8. HomePage: Show timestamp and latest game first.
9. Show game status.
10. UI fixes.
11. Protected Routes. ---------- !!!DONE!!!
*/
