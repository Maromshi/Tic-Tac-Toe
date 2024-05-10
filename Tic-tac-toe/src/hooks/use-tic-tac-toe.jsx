import React, { useState } from "react";

const initialBoard = () => Array(9).fill(null);

export const UseTicTacToe = () => {
  const [board, setBoard] = useState(initialBoard());
  const [isXnext, setIsXnext] = useState(true);
  const winner_situation = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const calculate_winner = (currentBoard) => {
    for (const pattern of winner_situation) {
      const [a, b, c] = pattern;
      if (
        currentBoard[a] == currentBoard[b] &&
        currentBoard[a] == currentBoard[c]
      )
        return currentBoard[a]; // The winner
    }
  };
  const reset_button = () => {
    setBoard(initialBoard());
    setIsXnext(true);
  };
  const handle_click = (index) => {
    const winner = calculate_winner(board);
    // Check if there is a winner
    console.log(winner);
    if (winner || board[index]) return;

    // If not we will update the board every click
    const newBoard = [...board];
    newBoard[index] = isXnext ? "X" : "O";
    setBoard(newBoard);
    setIsXnext(!isXnext);
    // console.log(newBoard);
  };
  const get_status_message = () => {
    const winner = calculate_winner(board);
    if (winner) return `Player ${winner} wins!`;
    if (!board.includes(null)) return "Its A Draw!";
    return `Player ${isXnext ? "X" : "O"} turn`;
  };
  const isWinningButton = (index) => {
    const winner = calculate_winner(board);
    return winner && winner.includes(index);
  };

  return {
    calculate_winner,
    board,
    handle_click,
    get_status_message,
    reset_button,
    isWinningButton,
  };
};
