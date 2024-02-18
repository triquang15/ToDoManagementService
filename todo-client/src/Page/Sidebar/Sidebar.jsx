import { Avatar, Button } from '@mui/material'
import React, { useState } from 'react'
import './Sidebar.css'
import CreateTask from '../Todo/CreateTask';
import { useLocation, useNavigate } from 'react-router-dom';

const menu = [
    { name: 'System Dashboard', value: 'System Dashboard', role: ['ROLE_ADMIN', 'ROLE_USER'] },
    { name: 'Create issue', value: '', role: ['ROLE_ADMIN'] },
    { name: 'IN PROGRESS', value: 'IN PROGRESS', role: ['ROLE_ADMIN'] },
    { name: 'TODO', value: 'TODO', role: ['ROLE_ADMIN'] },
    { name: 'DONE', value: 'DONE', role: ['ROLE_ADMIN', 'ROLE_USER'] },
    { name: 'Notification', value: 'NOTIFICATION', role: ['ROLE_USER'] }
]

const role = 'ROLE_ADMIN';
export const Sidebar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [activeMenu, setActiveMenu] = useState("System Dashboard");

    const [openCreateTaskForm, setOpenCreateTaskForm] = React.useState(false);
    const handleCloseCreateTaskForm = () => {
        setOpenCreateTaskForm(false)
    }

    const handleOpencCreateTask = () => {
        setOpenCreateTaskForm(true)
    }

    const handleMenuChange = (item) => {
        const updatedParams = new URLSearchParams(location.search);
        if (item.name === "Create issue") {
            handleOpencCreateTask()
        } else if (item.name === "System Dashboard") {
            updatedParams.delete("filter")
            const queryString = updatedParams.toString();
            const updatedPath = queryString ? `${location.pathname}? ${queryString}` :
                location.pathname;
            navigate(updatedPath);
        } else{
            updatedParams.set("filter", item.value);
            navigate(`${location.pathname}?${updatedParams.toString()}`)
        }
        setActiveMenu(item.name)
    }

    const handleLogout = () => {
        console.log('handleLogout');
    }

    return (
        <>
            <div className='card min-h-[85vh] flex flex-col justify-center fixed w-[20vw]'>
                <div className='space-y-3 h-full'>
                    <div className='flex justify-center'>
                        <Avatar className='border-2 border-[#67296e]'
                            sx={{ width: '8rem', height: '8rem' }} src='data:image/jpeg;base64,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' />
                    </div>
                    {
                        menu.filter((item) => item.role.includes(role)).map((item) =>
                            <p onClick={() => handleMenuChange(item)} className={`py-3 px-5 rounded-full text-center cursor-pointer 
                ${activeMenu === item.name ? 'activeMenuItem' : 'menuItem'}`}>
                                {item.name}
                            </p>)
                    }
                </div>
                <br />
                <Button onClick={handleLogout} sx={{ padding: ".7rem", borderRadius: "2rem" }} fullWidth className='logoutButton'>Logout</Button>
            </div>
            <CreateTask open={openCreateTaskForm} handleClose={handleCloseCreateTaskForm} />
        </>

    )
}
