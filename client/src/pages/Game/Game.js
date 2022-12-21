import React, { useEffect, useState } from 'react';
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

const Game = () => {
  const initialBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];
  const [board, setBoard] = useState(initialBoard);
  const [turn, setTurn] = useState('X');
  const [winner, setWinner] = useState(null);
  const [freeze, setFreeze] = useState(false);

  const updateStates = (rowNum, cellNum) => {
    if (!freeze && !board[rowNum][cellNum]) {
      board[rowNum][cellNum] = turn;
      setBoard((prev) => [...prev]);
      setTurn(turn === 'X' ? 'O' : 'X');
    }
  };

  const resetBoard = () => {
    setBoard(initialBoard);
    setTurn('X');
    setFreeze(false);
    setWinner(null);
  };

  useEffect(() => {
    const winner = getWinner(board);
    if (winner) {
      setFreeze(true);
      setWinner(winner);
    }
  }, [board]);

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
              border: '1px solid black',
              marginTop: '8px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: '48px',
            }}
          >
            {turn}
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
          <Button onClick={() => resetBoard()} style={{ marginBottom: '16px' }}>
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
  return (
    <div
      style={{
        backgroundColor: 'rgba(255, 255, 255, 1)',
        height: '100px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onClick={handleClick}
    >
      {board[rowNum][cellNum]}
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
