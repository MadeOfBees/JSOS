import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';
import DrawBoard from '../Components/DrawBoard';
import Modal from '@mui/material/Modal';
import Slider from 'rc-slider';
import {Stack} from '@mui/system';
import 'rc-slider/assets/index.css';

export default function MainApp() {
    const ohHiMark = 15;
    const marks = {};
    for (let i = 3; i <= ohHiMark; i++) {marks[i] = i;}
    const [hasStarted, setHasStarted] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const style = { position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', border: '2px solid #000', boxShadow: 24, p: 4, };
    const [userInput, setUserInput] = React.useState(3);
    const [totalUserSquares, setTotalUserSquares] = React.useState(3);
    const [refreshNum, setRefreshNum] = React.useState(0);

    const setUserInputFunction = (e) => {
        if (e < 3) return;
        else setUserInput(e);
    }

    const takeUserInput = () => {
        setRefreshNum(refreshNum + 1);
        setTotalUserSquares(userInput);
        setHasStarted(true);
        handleClose();
    }

    return (
        <div >
            <Box sx={{ flexGrow: 2 }} style={{ marginTop: '20%' }}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    {totalUserSquares ? <DrawBoard totalSquares={totalUserSquares} refreshNum={refreshNum} /> : null}
                </div>
                <Grid container spacing={2} justifyContent="center" alignItems="center" style={{ marginTop: '5%' }}>
                    <Button variant="contained" onClick={handleOpen}>{hasStarted ? "New Game" : "Start Game"}</Button>
                </Grid>
            </Box>
            <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                <Box sx={style}>
                    <Stack>
                    <Slider min={3} max={ohHiMark} marks={marks} step={1} defaultValue={2} onChange={setUserInputFunction}/>
                    <Button variant="contained" onClick={takeUserInput} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20%' }}>Submit</Button>
                    </Stack>
                </Box>
            </Modal>
        </div>
    );
}
