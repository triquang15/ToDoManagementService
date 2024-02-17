import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Autocomplete, Button, Grid, TextField } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers';

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

const tagsName = ["Angular", "React Js", "Python", "Java", "C#"]
export default function EditTaskCard({ handleClose, open }) {
    const [formData, setFormData] = React.useState({
        title: "",
        image: "",
        description: "",
        tags: [],
        deadLine: new Date(),
    })

    const [selectedTags, setSeclectedTags] = React.useState([]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    const handleTagsChange = (event, value) => {
        setSeclectedTags(value)
    }

    const handleTimeLineChange = (date) => {
        setFormData({
            ...formData,
            deadLine: date
        })
    }

    const formatedDate = (input) => {
        let {
            $y: year,
            $M: month,
            $D: day,
            $H: hours,
            $m: minutes,
            $s: seconds,
            $ms: miliseconds
        } = input;

        const date = new Date(year, month, day, hours, minutes, seconds, miliseconds)
        const formatedDate = date.toISOString();

        return formatedDate;
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        const { deadLine } = formData;
        formData.deadLine = formatedDate(deadLine)
        formData.tags = selectedTags
        console.log('formData', formData, 'deadLine', formData.deadLine);
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
                                <TextField label='Title' fullWidth name='title' value={formData.title}
                                    onChange={handleChange} />

                            </Grid>
                            <Grid item xs={12}>
                            <TextField label='Image' fullWidth name='image' value={formData.image}
                                    onChange={handleChange} />

                            </Grid>
                            <Grid item xs={12}>                               
                                <Autocomplete multiple id='multiple-limit-tags' options={tagsName}
                                    onChange={handleTagsChange} getOptionLabel={(option) => option}
                                    renderInput={(params) => <TextField label="Tags"
                                        fullWidth {...params} />} />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField label='Description' multiple fullWidth name='description' value={formData.description}
                                    onChange={handleChange} />
                            </Grid>
                            <Grid item xs={12}>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DateTimePicker onChange={handleTimeLineChange} renderInput={(params) =>
                                        <TextField {...params} />}
                                        className='w-full' label="Time Tracking" />
                                </LocalizationProvider>
                            </Grid>
                            <Grid item xs={12}>
                                <Button fullWidth sx={{ padding: '.9rem' }} className='customeButton' type='submit'>Update</Button>
                            </Grid>
                        </Grid>
                    </form>
                </Box>
            </Modal>
        </div>
    );
}