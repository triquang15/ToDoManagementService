import React, { useState } from 'react'
import "./Auth.css"
import { SignIn } from './SignIn';
import { SignUp } from './SignUp';

export const Auth = () => {
    const [isRegister, setIsRegister] = useState(false);

    const togglePanel = () => {
        setIsRegister(!isRegister)
    }
    return (
        <div className='flex justify-center h-screen items-center overflow-hidden'>
            <div className='box lg:max-w-4xl'>
                <div className={`cover ${isRegister ? "rotate-active" : ""}`}>
                    <div className='front'>
                        <img src="https://media.istockphoto.com/id/823194138/photo/3d-rendering-of-virtual-human-silhouette-on-laptop-screen.jpg?s=612x612&w=0&k=20&c=ZWldMJpIuajMEQ-yJjkk0L-pU3LX2DTr4DXQ88Ecfjs=" alt="" />
                    </div>
                    <div className='back'>
                        <img src="https://media.istockphoto.com/id/1327213210/vector/trade-design-great-design-for-any-purposes-trade-concept-web-site-screen-template-forex.jpg?s=612x612&w=0&k=20&c=3XBsjW9DmgLpO8UWFq8_8Y6ogb-NvLXD8DIqri1y1mY=" alt="" />
                    </div>
                </div>
                <div className='forms h-full'>
                    <div className='form-content h-full'>
                        <div className='login-form'>
                            <SignIn togglePanel={togglePanel} />
                        </div>
                        <div className='signup-form'>
                            <SignUp togglePanel={togglePanel} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
