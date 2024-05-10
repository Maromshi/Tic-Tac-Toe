import { useState } from "react";
import { UseTicTacToe } from "../hooks/use-tic-tac-toe";

function TicTacToe() {
  const {
    board,
    isWinningButton,
    reset_button,
    get_status_message,
    handle_click,
  } = UseTicTacToe();
  //   console.log(board);

  return (
    <div className="game">
      <div className="status">
        {get_status_message()}
        <button className="reset-button" onClick={reset_button}>
          Reset Game
        </button>
      </div>
      <div className="board">
        {board.map((_, index) => (
          <button
            className="cell"
            key={index}
            onClick={() => handle_click(index)}
            disabled={_ !== null}
          >
            {_}
          </button>
        ))}
      </div>
    </div>
  );
}

export default TicTacToe;
