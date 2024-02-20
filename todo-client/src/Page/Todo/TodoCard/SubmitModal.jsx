import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Button, Grid, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router';
import { submitTask } from '../../../ReduxToolKit/SubmissionSlice';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


export default function SubmitModal({ item, handleClose, open }) {
    const dispatch = useDispatch();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const taskId = queryParams.get("taskId");
    const [formData, setFormData] = React.useState({
        githubLink: "",
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(submitTask({taskId, githubLink: formData.githubLink}))
        handleClose();
    }

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={2} alignItems="center">
                            <Grid item xs={12}>
                                <TextField label='GitHub' fullWidth name='githubLink' value={formData.githubLink}
                                    onChange={handleChange} />
                            </Grid>
                            <Grid item xs={12}>
                                <Button fullWidth sx={{ padding: '.9rem' }} className='customeButton' type='submit'>Submit</Button>
                            </Grid>
                        </Grid>
                    </form>
                </Box>
            </Modal>
        </div>
    );
}