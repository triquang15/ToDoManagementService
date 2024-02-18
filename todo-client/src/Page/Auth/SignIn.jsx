import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import { Button, Divider } from '@mui/material';

export const SignIn = ({ togglePanel }) => {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("handleSubmit", formData);
    }
    return (
        <div>
            <h1 className='text-lg font-bold text-center pb-8'>Log in to continue Jira Software</h1>
            <form className='space-y-3' onSubmit={handleSubmit}>
                <TextField fullWidth label="Email" name='email' type='email'
                    value={formData.email} onChange={handleChange} placeholder='Enter your email' required />

                <TextField fullWidth label="Password" name='password' type='password'
                    value={formData.password} onChange={handleChange} placeholder='Enter your password' required />

                <div>
                    <Button fullWidth className='customeButton' type='submit' sx={{ padding: ".9rem" }}>Continue</Button>
                </div>
            </form>
            <div className='mt-5 flex items-center gap-2 py-5 justify-center'>
                <span>Can't log in ? •</span>
                <Button onClick={togglePanel}>Create an account</Button>
            </div>
            <Divider />
            <h1 className='text-center mt-2 font-bold'>ATLASSIAN</h1>
            <p className='text-center mt-2 text-xs'>One account for Jira, Confluence, Trello and more.</p>
            <p className='text-center mt-2 text-xs'>Privacy Policy • User Notice</p>
        </div>
    )
}
