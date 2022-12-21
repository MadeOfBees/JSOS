import * as React from 'react';


const DisplayBoard = ({ totalSquares }) => {
  const [board, setBoard] = React.useState([]);
  const [isPlayersTurn, setIsPlayersTurn] = React.useState(true);

  const DrawBoard = () => {
    const boardArray = [];
    for (let i = 0; i < totalSquares; i++) {
      boardArray.push("");
    }
    setBoard(boardArray); 
  }

  React.useEffect(() => DrawBoard(), [totalSquares]);

  const handleInput = (e) => {
    if (isPlayersTurn) {
      if (e.target.value === 's' || e.target.value === 'o' || e.target.value === 'S' || e.target.value === 'O') {
        e.target.disabled = true;
        e.target.value = e.target.value.toUpperCase();
        setIsPlayersTurn(false);
        CPUTurn();
      }
    }
  }  

  const CPUTurn = () => {

  }
  


  return (
    <div>
      {board.map((item) => {
        return (
          <input key={item} style={{ display: 'inline-block', width: '50px', height: '50px', border: '1px solid black' }} onChange={handleInput}></input>
        )
      }
      )}
    </div>
  );
}

export default DisplayBoard;