import React from 'react'
import TodoCard from '../TodoCard/TodoCard'

export const TodoList = () => {
    return (
        <div className='space-y-5 w-[67vw]'>
            <div className='space-y-3'>
                {
                    [1, 1, 1, 1, 1].map((item) => <TodoCard />)
                }
            </div>
        </div>
    )
}
