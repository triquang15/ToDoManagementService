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
                        <img src="https://wac-cdn.atlassian.com/dam/jcr:0bd5b997-5257-4711-b4d8-379ba8b5e895/hero@2x.png?cdnVersion=1450" alt="" />
                    </div>
                    <div className='back'>
                        <img src="https://it4rest.com/wp-content/uploads/2022/09/1_O-tZNv1G6_Y0gGrNfJJTDA.png" alt="" />
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
