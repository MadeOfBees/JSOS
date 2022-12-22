import * as React from 'react';
import { Button, Grid, Stack, Modal, Box } from '@mui/material';
const DisplayBoard = ({ totalSquares, refreshNum }) => {
  const [board, setBoard] = React.useState([]);
  const [isPlayersTurn, setIsPlayersTurn] = React.useState(true);
  const [modal, setModal] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const style = { position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', border: '2px solid #000', boxShadow: 24, p: 4, };
  const handleClose = () => setOpen(false);
  const primary = "info";
  const secondary = "warning";
  const drawBoard = () => {
    setOpen(false);
    const boardArray = [];
    for (let i = 0; i < totalSquares; i++) {
      boardArray.push(0);
    }
    setBoard(boardArray);
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  React.useEffect(() => drawBoard(), [refreshNum]);
  const handleInput = (e, index) => {
    const newBoard = [...board];
    newBoard[index] = e.target.innerText;
    setBoard(newBoard);
    checkWinStatus(newBoard);
    setIsPlayersTurn(false);
    cpuTurn(newBoard);
  }
  const checkIfTie = (newBoard) => newBoard.join('').includes(0) ? "continue" : "tie";
  const checkIfWin = (newBoard) => newBoard.join('').includes('SOS') ? (isPlayersTurn ? "win" : "loss") : "continue";
  const checkWinStatus = (newBoard) => {
    if (checkIfWin(newBoard) === "win") {endGame("You win!");}
    if (checkIfWin(newBoard) === "loss") {endGame("You lose!");}
    if (checkIfTie(newBoard) === "tie") {endGame("It's a tie!");}
  }

  const endGame = (input) => {
    setModal(input);
    setOpen(true);
  }

  const cpuTurn = (newBoard) => {
    const emptyIndex = newBoard.indexOf(0);
    newBoard[emptyIndex] = 'O';
    setBoard(newBoard);
    checkWinStatus(newBoard);
    setIsPlayersTurn(true);
  }

  return (
    <Grid container spacing={1} justifyContent="center">
      {board.map((item, index) => {
        if (item === 'S') {
          return (
            <Grid item xs={1} key={index}>
              <Button variant="contained" color={primary} onClick={(e) => handleInput(e, index)}>S</Button>
            </Grid>
          )
        }
        if (item === 'O') {
          return (
            <Grid item xs={1} key={index}>
              <Button variant="contained" color={secondary} onClick={(e) => handleInput(e, index)}>O</Button>
            </Grid>
          )
        }
        else {
          return (
            <Grid item xs={1} key={index}>
              <Stack>
                <Button variant="contained" color={primary} onClick={(e) => handleInput(e, index)}>S</Button>
                <Button variant="contained" color={secondary} onClick={(e) => handleInput(e, index)}>O</Button>
              </Stack>
            </Grid>
          )
        }
      }
      )}
        <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
          <Box sx={style}>
            <Stack spacing={2}>
              <h2 id="modal-modal-title">{modal}</h2>
              <Button variant="contained" onClick={drawBoard}>Play Again</Button>
            </Stack>
          </Box>
        </Modal>
    </Grid>
  );
}

export default DisplayBoard;