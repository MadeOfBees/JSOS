import * as React from 'react';
import { Button, Grid, Stack, Modal, Box } from '@mui/material';
const DisplayBoard = ({ totalSquares, refreshNum }) => {
  const [board, setBoard] = React.useState([]);
  const [modal, setModal] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const style = { position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', border: '2px solid #000', boxShadow: 24, p: 4, };
  const handleClose = () => setOpen(false);
  const primary = "info";
  const secondary = "warning";
  const played = "success";
  

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
    cpuTurn(newBoard, false);
  }
  const checkWinStatus = (newBoard, cpuTurn) => {
    if (newBoard.join('').includes('SOS')) {
      if (cpuTurn) {
        endGame("CPU Wins!");
      } else {
        endGame("You Win!");
      }
    }
    else if (!newBoard.includes(0)) {
      endGame("Draw!");
    }
    else return;
  }

  const endGame = (input) => {
    setModal(input);
    setOpen(true);
  }

  const cpuTurn = (newBoard) => {
    if (newBoard.join('').includes('SOS')) {
      return;
    }
    if (newBoard.includes(0)) {
      const index = newBoard.indexOf(0);
      newBoard[index] = 'S';
    } else {
      for (let i = 0; i < newBoard.length; i++) {
        if (newBoard[i] === 'O') {
          newBoard[i] = 'S';
          break;
        }
      }
    }
    setBoard(newBoard);
    checkWinStatus(newBoard, true);
  }
  
  return (
    <Grid container spacing={1} justifyContent="center">
      {board.map((item, index) => {
        if (item === 'S') {
          return (
            <Grid item xs={1} key={index}>
              <Button variant="contained" color={played}>S</Button>
            </Grid>
          )
        }
        if (item === 'O') {
          return (
            <Grid item xs={1} key={index}>
              <Button variant="contained" color={played}>O</Button>
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