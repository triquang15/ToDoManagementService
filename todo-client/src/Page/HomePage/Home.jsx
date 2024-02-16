import React from 'react'
import { Sidebar } from '../Sidebar/Sidebar'

export const Home = () => {
    return (
        <div className='lg:flex px-5 lg:px-10 pt-[2.5vh]'>
            <div className='hidden lg:block w-[25vw] relative'>
                <Sidebar/>
            </div>
            <div className='right-side-part'>

            </div>
        </div>
    )
}
