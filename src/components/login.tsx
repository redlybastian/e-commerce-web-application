'use client'

import { useState } from "react";

export default function LogInPage() {
    const[loginFormData, setLoginFormData] = useState({
        email: '',
        password: ''

    })
    const[error, setError] = useState('')
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
       
        setLoginFormData({
            ...loginFormData,
            [e.target.name]: e.target.value
        })

    //    if(e.target.name === 'email') {
    //     console.log('email', e.target.value)
    //    } else if(e.target.name === 'password') {
    //     console.log('password', e.target.value)
    //    }
        if(e.target.name === 'email') {
            if(e.target.value === '') {
                console.log('Email is required')
                setError('Email is required')
            } else {
                console.log('email', e.target.value)
            }
            return

        }
        if(e.target.name === 'password') {
            if(e.target.value === '') {
                console.log('Password is required')
                setError('Password is required')
            } else {
                console.log('password', e.target.value)
            }
            return

        }
        
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {        e.preventDefault();
        e.preventDefault();
        
    }


    return (
        <div>
            <h1>Return to Your Frequency.</h1>
            <h2>Reconnect with the heart of the beat.</h2>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" placeholder="Email" name="email" value={loginFormData.email} onChange={handleChange} /><br />
                <p>{error}</p><br />
                <input type="password" placeholder="password" name="password" value={loginFormData.password} onChange={handleChange} /><br />
                 <p>{error}</p><br />
                <button type="submit">Log In</button>
            </form>
            <h3>The world went quiet while you were away.</h3>
            <p>Every note you’ve ever loved is waiting just behind this door. We’ve kept your sanctuary warm and your playlists ready; all that’s missing is the listener.</p>
        </div>
    );
}