import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';
import DrawBoard from '../Components/DrawBoard';
import Modal from '@mui/material/Modal';

export default function MainApp() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const style = { position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', border: '2px solid #000', boxShadow: 24, p: 4, };
    const [userInput, setUserInput] = React.useState(0);
    const [totalUserSquares, setTotalUserSquares] = React.useState(userInput);

    const setUserInputFunction = (e) => {
        const uInput = e.target.value.trim();
        if (isNaN(uInput)) return;
        else if (uInput < 3) return;
        else if (uInput > 100) return;
        else if (uInput === "") return;
        else setUserInput(uInput);
    }

    const takeUserInput = () => {
        setTotalUserSquares(userInput);
        handleClose();
    }

    return (
        <div >
            <Box sx={{ flexGrow: 2}} style={{ marginTop: '20%' }}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    {totalUserSquares ? <DrawBoard totalSquares={totalUserSquares} /> : null}
                </div>
                <Grid container spacing={2} justifyContent="center" alignItems="center" style={{ marginTop: '5%' }}>
                        <Button variant="contained" onClick={handleOpen}>Launch modal</Button>
                </Grid>

            </Box>
            <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                <Box sx={style}>
                    <input type="number" onChange={setUserInputFunction} />
                    <Button variant="contained" onClick={takeUserInput}>Submit</Button>
                </Box>
            </Modal>
        </div>
    );
}