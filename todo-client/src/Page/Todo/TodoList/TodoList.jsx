import React, { useEffect } from 'react'
import TodoCard from '../TodoCard/TodoCard'
import { useDispatch, useSelector } from "react-redux"
import { fetchTasks, fetchUsersTasks } from '../../../ReduxToolKit/TodoSlice';
import { useLocation } from 'react-router';

export const TodoList = () => {
    const dispatch = useDispatch();
    const { task, auth } = useSelector(store => store)
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const filterValue = queryParams.get("filter");


    useEffect(() => {
        if (auth.user?.role === "ROLE_ADMIN") {
            dispatch(fetchTasks({ status: filterValue }));
        }
        dispatch(fetchUsersTasks({ status: filterValue }));
    }, [filterValue]);

    console.log('task', task);

    return (
        <div className='w-[67vw]'>
            <div className='space-y-3'>
                {
                    task.tasks.map((item) => <TodoCard item={item} />)
                }
            </div>
        </div>
    )
}
