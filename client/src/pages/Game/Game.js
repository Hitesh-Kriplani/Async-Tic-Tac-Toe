import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BackButton from '../../components/BackButton';
import {
  Board,
  Button,
  Content,
  ContentBox,
  ContentWrapper,
  Header,
  Heading,
  PlayArea,
} from '../../components/styles';
import { auth, database } from '../../services/firebase';
const Game = ({ match }) => {
  const initialBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];
  const [board, setBoard] = useState(initialBoard);
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [winner, setWinner] = useState(null);
  const [freeze, setFreeze] = useState(false);
  const [game, setGame] = useState({});
  const gameId = match.params.id;
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const user = auth.currentUser;
    if (!user) {
      navigate('/login');
    }
    if (user) {
      try {
        database.ref(`/games/${user.uid}/${gameId}`).on('value', (snapshot) => {
          const game = snapshot.val();
          setGame(game);
          setLoading(false);
        });
      } catch (error) {
        console.error(error);
        // You can display an error message to the user here
      }
    }
  }, [gameId]);

  const updateStates = (rowNum, cellNum) => {
    if (!freeze && !board[rowNum][cellNum]) {
      const newBoard = [...board];
      board[rowNum][cellNum] = currentPlayer;
      setBoard((prev) => [...prev]);
      setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
    }
  };

  useEffect(() => {
    const winner = getWinner(board);
    if (winner) {
      setFreeze(true);
      setWinner(winner);
    }
  }, [board]);
  if (loading) {
    return <div>Loading...</div>;
  }
  const handleSubmit = () => {
    setLoading(true);
    const user = auth.currentUser;
    if (!user) {
      setError('You must be logged in to submit the game');
      setLoading(false);
      return;
    }
    database
      .ref(`/games/${user.uid}/${gameId}`)
      .set({
        status: winner === 'X' ? 'X wins' : 'O wins',
        timestamp: Date.now(),
      })
      .then(() => {
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  };

  return (
    <div className='content'>
      <ContentWrapper>
        <BackButton />
        <ContentBox>
          <Heading>Game with Hitesh</Heading>
          <Content>Your piece</Content>
          <div
            style={{
              width: '64px',
              height: '64px',
              marginTop: '8px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <img src={require('../../assets/X.png')} alt='X' />
          </div>
          <Board>
            <Header>Your Move</Header>
            <PlayArea>
              {board.map((row, rowNum) => {
                return row.map((cell, cellNum) => {
                  return (
                    <Slot
                      key={`${rowNum}${cellNum}`}
                      rowNum={rowNum}
                      cellNum={cellNum}
                      updateStates={updateStates}
                      board={board}
                    />
                  );
                });
              })}
            </PlayArea>
          </Board>
          <Button onClick={handleSubmit} style={{ marginBottom: '16px' }}>
            Submit
          </Button>
        </ContentBox>
      </ContentWrapper>
    </div>
  );
};

const Slot = ({ rowNum, cellNum, updateStates, board }) => {
  const handleClick = (e) => {
    updateStates(rowNum, cellNum);
  };
  const item = board[rowNum][cellNum];
  return (
    <div
      style={{
        backgroundColor: '#fff',
        height: '100px',
        width: '121px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 0,
        margin: 0,
      }}
      onClick={handleClick}
    >
      {item && <img src={require(`../../assets/${item}.png`)} alt={item} />}
    </div>
  );
};

function getWinner(board) {
  if (!board) {
    return;
  }
  const firstDiagonal = [board[0][0], board[1][1], board[2][2]];
  const secondDiagonal = [board[0][2], board[1][1], board[2][0]];
  if (firstDiagonal?.every((el) => el === firstDiagonal[0])) {
    return firstDiagonal[0];
  }
  if (secondDiagonal?.every((el) => el === secondDiagonal[0])) {
    return secondDiagonal[0];
  }
  for (let i = 0; i < 3; i++) {
    if (board[i].every((el) => el === board[i][0])) {
      return board[i][0];
    }
    if (board[0][i] === board[1][i] && board[1][i] === board[2][i]) {
      return board[0][i];
    }
  }
  if (board.flat().every((el) => el !== null)) {
    return 'Draw';
  }
  return false;
}

export default Game;
