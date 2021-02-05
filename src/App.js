import React, { useState } from 'react';
import Board from './Components/Board';
import './Styles/root.scss';
import { calculateWinner } from './helpers';

const App = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setisXNext] = useState(false);

  const winner = calculateWinner(board);
  const message = winner
    ? `Winner is ${winner}`
    : `Next player is ${isXNext ? 'X' : 'O'}`;
  const handleSquareClick = position => {
    if (board[position] || winner) {
      return;
    }
    // eslint-disable-next-line arrow-body-style
    setBoard(prev => {
      return prev.map((square, pos) => {
        if (pos === position) {
          return isXNext ? 'X' : 'O';
        }
        return square;
      });
    });
    setisXNext(prev => !prev);
  };
  return (
    <div className="app">
      <h1>Tic Tac Toe</h1>
      <h3>{message}</h3>
      <Board board={board} handleSquareClick={handleSquareClick} />
    </div>
  );
};

export default App;
