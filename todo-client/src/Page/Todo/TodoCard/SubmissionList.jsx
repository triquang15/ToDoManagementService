import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { SubmissionCard } from './SubmissionCard';
import { useDispatch, useSelector } from 'react-redux';
import { getSubmissionByTaskId } from '../../../ReduxToolKit/SubmissionSlice';
import { useLocation } from 'react-router';

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


export default function SubmissionList({ handleClose, open }) {
  const dispatch = useDispatch();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const taskId = queryParams.get("taskId");
  const {submission} = useSelector(store => store)

  React.useEffect(() => {
    if(taskId) {
       dispatch(getSubmissionByTaskId(taskId))
    }
  },[taskId])

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div>
            {submission.submissions.length > 0 ? <div className='space-y-2'>
              {submission.submissions.map((item) =>  <SubmissionCard item={item} />)}
            </div> :
              <div className='space-y-2'>
                <div className='text-center'>
                  You currently have no issues assigned to you. Enjoy your day!
                </div>
              </div>
            }
          </div>
        </Box>
      </Modal>
    </div>
  );
}