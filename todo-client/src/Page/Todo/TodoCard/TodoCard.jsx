import React, { useState } from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { IconButton, MenuItem } from '@mui/material';
import Menu from '@mui/material/Menu';
import UserList from '../UserList';
import SubmissionList from './SubmissionList';
import EditTaskCard from './EditTaskCard';

const role = "ROLE_ADMIN"

const TodoCard = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const openMenu = Boolean(anchorEl);
    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const [openUserList, setOpenUserList] = useState(false);
    const handleCloseUserList = ()=> {
        setOpenUserList(false)
    }

    const [openSubmissionList, setOpenSubmissionList] = useState(false);
    const handleCloseSubmissionList = ()=> {
        setOpenSubmissionList(false)
    }

    const handleOpenUserList = () => {
            setOpenUserList(true);
            handleMenuClose()
    }

    const [openUpdateTaskForm, setOpenUpdateTaskForm] = useState(false);
    const handleCloseUpdateTaskForm = ()=> {
        setOpenUpdateTaskForm(false)
    }
    
    const handleOpenUpdateTask = () => {
        setOpenUpdateTaskForm(true)
        handleMenuClose()
    }
    const handleOpenSubmitList  = () => {
        setOpenSubmissionList(true)
        handleMenuClose()
    }
    const handleDeleteTask  = () => {
        handleMenuClose();
    }

    return (
      
        <div>
            <div className='card lg:flex justify-between'>
                <div className='lg:flex gap-5 items-center space-y-2 w-[90%] lg:w-[70%]'>
                    <div className=''>
                        <img className='lg:w-[7rem] lg:h-[7rem] object-cover' src="https://cdn.pixabay.com/photo/2023/08/28/20/32/flower-8220018_1280.jpg" alt="" />
                    </div>
                    <div className='space-y-5'>
                        <div className='space-y-2'>
                            <h1 className='font-bold text-lg'>Title 1</h1>
                            <p className='text-gray-500 text-sm'>Description</p>
                        </div>
                        <div className='flex flex-wrap gap-2 items-center'>
                            {[1, 1, 1, 1, 1].map((item) => <span className='py-1 px-5 rounded-full techStack'>Java</span>)}
                        </div>
                    </div>
                </div>
                <div>
                    <IconButton id="basic-button"
                        aria-controls={openMenu ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={openMenu ? 'true' : undefined}
                        onClick={handleMenuClick}>
                        <MoreVertIcon />
                    </IconButton>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={openMenu}
                        onClose={handleMenuClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        {role === "ROLE_ADMIN" ? <>
                        <MenuItem onClick={handleOpenUserList}>Assign</MenuItem>
                        <MenuItem onClick={handleOpenUpdateTask}>Edit</MenuItem>
                        <MenuItem onClick={handleOpenSubmitList}>Watchers</MenuItem>
                        <MenuItem onClick={handleDeleteTask}>Delete</MenuItem>
                        </> :
                            <></>}
                    </Menu>
                </div>
            </div>
            <UserList open={openUserList} handleClose={handleCloseUserList}/>
            <SubmissionList open={openSubmissionList} handleClose={handleCloseSubmissionList}/>
            <EditTaskCard open={openUpdateTaskForm} handleClose={handleCloseUpdateTaskForm}/>
        </div>
    )
}

export default TodoCard