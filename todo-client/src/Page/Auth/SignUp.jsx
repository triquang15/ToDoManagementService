import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import { Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useDispatch } from 'react-redux';
import { register } from '../../ReduxToolKit/AuthSlice';

export const SignUp = ({ togglePanel }) => {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
        role: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(register(formData));
        console.log("handleSubmit", formData);
    }
    return (
        <div>
            <h1 className='text-lg font-bold text-center pb-8'>Sign up to continue Jira Software</h1>
            <h5 className='font-normal text-xs'>By signing up, I accept the Atlassian Cloud Terms of Service and acknowledge the Privacy Policy.</h5>
            <br />
            <form className='space-y-3' onSubmit={handleSubmit}>
                <TextField fullWidth label="Full Name" name='fullName' type='text'
                    value={formData.fullName} onChange={handleChange} placeholder='Enter your full name' required />

                <TextField fullWidth label="Email" name='email' type='email'
                    value={formData.email} onChange={handleChange} placeholder='Enter your email' required />

                <TextField fullWidth label="Password" name='password' type='password'
                    value={formData.password} onChange={handleChange} placeholder='Enter your password' required />
                <FormControl fullWidth>
                    <InputLabel>Role</InputLabel>
                    <Select value={formData.role} label="Role" name='role' onChange={handleChange}>
                        <MenuItem value={"ROLE_ADMIN"}>Admin</MenuItem>
                        <MenuItem value={"ROLE_USER"}>User</MenuItem>
                    </Select>
                </FormControl>
                <div>
                    <Button fullWidth className='customeButton' type='submit' sx={{ padding: ".9rem" }}>Sign up</Button>
                </div>
            </form>
            <div className='mt-5 flex items-center gap-2 py-5 justify-center'>
                <span>Already have an Atlassian account?</span>
                <Button onClick={togglePanel}>Log in</Button>
            </div>
        </div>
    )
}
