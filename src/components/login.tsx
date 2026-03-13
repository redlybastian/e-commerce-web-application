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
       if(e.target.name === 'password') {
            if(e.target.value === '') {
                console.log('Password is required')
                setError('Password is required')
            } else {
                console.log('password', e.target.value)
            }
            return

        }
        if(e.target.name === 'email') {
            if(e.target.value === '') {
                console.log('Email is required')
                setError('Email is required')
            } else {
                console.log('email', e.target.value)
            }
            return

        }
     
        
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {        e.preventDefault();
        e.preventDefault();
        
    }


    return (
        <section className="w-screen h-screen   bg-[url(/log_background.jpg)] bg-cover  bg-center  from-black to-slate-300 text-white flex justify-center items-center">
             <div className="flex flex-col  justify-center  items-center  gap-3">
                <div className="mt-25 flex flex-col gap-15">
                  
                     <h1 className="font-bold text-2xl text-center">Return to Your <br />Frequency.</h1>
                    <h2 className="text-xl text-center font-bold">Reconnect with the heart of the <br /> beat.</h2>

                </div>
               <div className="flex flex-col shadow-4xl   shadow-black shadow-2xl border-3  border-r-gray-500  border-l-gray-500 border-t-gray-500   border-b-gray-600 items-center gap-10  pt-19 pb-13 px-10 rounded-4xl ">  
                 <img className="w-15 rounded-full border-1 border-slate-500  shadow-2xl" src="/electric _web.png" alt="" />
                <h2 className="text-xl  font-bold">
                    Log In
                </h2>
                 <form  className="flex flex-col items-center" action="" onSubmit={handleSubmit}>
                        <input className="bg-white text-black py-0.5 px-2 rounded-xl border-b-blue-300 border-spacing-1.5 hover:outline-black " type="text" placeholder="Email" name="email" value={loginFormData.email} onChange={handleChange} /><br />
                        <p>{error}</p><br />
                        <input className="bg-white text-black py-0.5 px-2 rounded-xl border-b-blue-300 border-spacing-1.5 hover:outline-black " type="password" placeholder="password" name="password" value={loginFormData.password} onChange={handleChange} /><br />
                        <p>{error}</p><br />
                        <button className=" py-2 px-6 rounded-3xl bg-black "  type="submit">Log In</button>
                    </form>

               </div>
              
                <div className="text-center text-sm m-1 flex flex-col gap-5 shadow-2xl">
                             <h3 className="font-bold text-center  text-lg shadow-2xl " >The world went quiet br while you were away.</h3>
                            <p className="text-sm font-medium shadow-2xl " >Every note you’ve ever loved is waiting just behind <br /> this door. 
                                We’ve kept your sanctuary  warm and your <br /> playlists ready; all 
                                that’s missing is the listener.</p>
                </div>
           
            </div>
        </section>
       
    );
}