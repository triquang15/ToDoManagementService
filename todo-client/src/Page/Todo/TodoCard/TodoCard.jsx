import React, { useState } from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { IconButton, MenuItem } from '@mui/material';
import Menu from '@mui/material/Menu';
import UserList from '../UserList';
import SubmissionList from './SubmissionList';
import EditTaskCard from './EditTaskCard';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTask } from '../../../ReduxToolKit/TodoSlice';
import { useLocation, useNavigate } from 'react-router';
import SubmitModal from './SubmitModal';

const TodoCard = ({ item }) => {
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();
    const { auth } = useSelector(store => store)
    const [anchorEl, setAnchorEl] = React.useState(null);
    const openMenu = Boolean(anchorEl);
    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const [openUserList, setOpenUserList] = useState(false);
    const handleCloseUserList = () => {
        setOpenUserList(false)
    }

    const [openSubmitForm, setOpenSubmitForm] = useState(false);
    const handleCloseSubmitForm = () => {
        setOpenSubmitForm(false)
    }
    const handleOpenSubmitForm = () => {
        const updatedParams = new URLSearchParams(location.search);
        updatedParams.set("taskId", item.id);
        navigate(`${location.pathname}?${updatedParams.toString()}`)
        setOpenSubmitForm(true)
        handleMenuClose()
    }

    const [openSubmissionList, setOpenSubmissionList] = useState(false);
    const handleCloseSubmissionList = () => {
        setOpenSubmissionList(false)
    }
    const handleOpenSubmitList = () => {
        const updatedParams = new URLSearchParams(location.search);
        updatedParams.set("taskId", item.id);
        navigate(`${location.pathname}?${updatedParams.toString()}`)
        setOpenSubmissionList(true)
        handleMenuClose()
    }

    const handleOpenUserList = () => {
        const updatedParams = new URLSearchParams(location.search);
        updatedParams.set("taskId", item.id);
        navigate(`${location.pathname}?${updatedParams.toString()}`)
        setOpenUserList(true);
        handleMenuClose()
    }

    const [openUpdateTaskForm, setOpenUpdateTaskForm] = useState(false);
    const handleCloseUpdateTaskForm = () => {
        setOpenUpdateTaskForm(false)
    }

    const handleRemoveTaskIdParams = () => {
        const updatedParams = new URLSearchParams(location.search);
        updatedParams.delete("filter")
        const queryString = updatedParams.toString();
        const updatedPath = queryString ? `${location.pathname}? ${queryString}` :
            location.pathname;
        navigate(updatedPath);
    }

    const handleOpenUpdateTask = () => {
        const updatedParams = new URLSearchParams(location.search);
        updatedParams.set("taskId", item.id);
        navigate(`${location.pathname}?${updatedParams.toString()}`)
        setOpenUpdateTaskForm(true)
        handleMenuClose()
    }

    const handleDeleteTask = () => {
        dispatch(deleteTask(item.id))
        handleMenuClose();
    }

    return (

        <div>
            <div className='card lg:flex justify-between'>
                <div className='lg:flex gap-5 items-center space-y-2 w-[90%] lg:w-[70%]'>
                    <div className=''>
                        <img className='lg:w-[7rem] lg:h-[7rem] object-cover' style={{ width: '400px' }} src={item.image} alt="" />
                    </div>
                    <div className='space-y-5'>
                        <div className='space-y-2'>
                            <h1 className='font-bold text-lg'>{item.title}</h1>
                            <p className='text-gray-500 text-sm'>{item.description}</p>
                        </div>
                        <div className='flex flex-wrap gap-2 items-center'>
                            {item.tags.map((item) => <span className='py-1 px-5 rounded-full techStack'>{item}</span>)}
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
                        {auth.user?.role === "ROLE_ADMIN" ? <>
                            <MenuItem onClick={handleOpenUserList}>Assign</MenuItem>
                            <MenuItem onClick={handleOpenUpdateTask}>Edit</MenuItem>
                            <MenuItem onClick={handleOpenSubmitList}>Watchers</MenuItem>
                            <MenuItem onClick={handleDeleteTask}>Delete</MenuItem>
                        </> :
                            <>
                                <MenuItem onClick={handleOpenSubmitForm}>Submit</MenuItem>
                            </>}
                    </Menu>
                </div>
            </div>
            <UserList open={openUserList} handleClose={handleCloseUserList} />
            <SubmissionList open={openSubmissionList} handleClose={handleCloseSubmissionList} />
            <EditTaskCard item={item} open={openUpdateTaskForm} handleClose={handleCloseUpdateTaskForm} />
            <SubmitModal open={openSubmitForm} handleClose={handleCloseSubmitForm}/>
        </div>
    )
}

export default TodoCard