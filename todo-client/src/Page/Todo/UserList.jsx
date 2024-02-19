import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Avatar, Button, Divider, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from '../../ReduxToolKit/AuthSlice';
import { assignTaskToUser } from '../../ReduxToolKit/TodoSlice';
import { useLocation } from 'react-router';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  outline: 'none',
  boxShadow: 24,
  p: 2,
};

const tasks = [1,1,1,1,]
export default function UserList({ handleClose, open }) {
  const dispatch = useDispatch();
  const {auth} = useSelector(store => store);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const taskId = queryParams.get("taskId");

  React.useEffect((item) => {
    dispatch(getAllUsers(localStorage.getItem("jwt")))
  },[])

  const handleAssignedTask = (user) => {
       dispatch(assignTaskToUser({userId: user.id, taskId: taskId}))
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
          {
            auth.users.map((item, index) =>
              <>
                <div className='flex items-center justify-between w-full'>
                  <div>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar src='https://cdn.pixabay.com/photo/2017/07/18/23/23/user-2517433_1280.png' />
                      </ListItemAvatar>
                      <ListItemText secondary={`@${item.fullName.split(" ").join("_").toLowerCase()}`} primary={item.fullName} />
                    </ListItem>
                  </div>
                  <div>
                    <Button onClick={() => handleAssignedTask(item)} className='customeButton'>Select</Button>
                  </div>
                </div>
              {index!== tasks.length-1 && <Divider variant='inset' />}
              </>
            )
          }
        </Box>
      </Modal>
    </div>
  );
}