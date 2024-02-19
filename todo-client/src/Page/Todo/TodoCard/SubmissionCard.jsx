import React from 'react'
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { Button, IconButton } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch } from 'react-redux';
import { acceptSubmission } from '../../../ReduxToolKit/SubmissionSlice';

export const SubmissionCard = ({item}) => {
    const dispatch = useDispatch();
    
    const handleAccept = (status) => {
        dispatch(acceptSubmission({id: item.id, status}))
        console.log(status);
    }

  return (
    <div className='rounded-md bg-black p-5 flex items-center justify-between'>
        <div className='space-y-2'>
            <div className='flex items-center gap-2'>
                <span>Epic Link:</span>
                <div className='flex items-center gap-2 text-[#70286e]'>
                    <OpenInNewIcon/>
                    <a href={item.githubLink} target='_blank' rel='noopener noreferrer'>Go To Link</a>
                </div>
            </div>
            <div className='flex items-center gap-2 text-xs'>
                <p>Updated: </p>
                <p className='text-gray-400'>{item.submissionTime}</p>
            </div>
        </div>
        <div>
            {item.status === "PENDING"? <div className='flex gap-5'>
                <div className='text-green-500'>
                    <IconButton color='success' onClick={() => handleAccept("APPROVED")}>
                        <CheckIcon/>
                    </IconButton>
                </div>
                <div className='text-red-500'>
                <IconButton color='error' onClick={() => handleAccept("REJECTED")}>
                        <CloseIcon/>
                    </IconButton>
                </div>
            </div>:
            <Button color={item.status === "APPROVED" ? 'success':'error'} size='small' variant='outlined'>
                {item.status}
            </Button>}
        </div>
    </div>
  )
}
