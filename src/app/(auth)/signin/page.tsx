'use client'
import React, { useState } from 'react'
import { signIn } from 'next-auth/react'

const Form = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const signin = async () => {
    await signIn('credentials', {
      username: formData?.username,
      password: formData?.password,
      redirect: true,
      callbackUrl: '/backoffice'
    },)
  }


  return (
    <div className='h-screen w-screen flex flex-nowrap justify-center items-center px-3'>
      <div className='bg-basecolor-default min-w-fit px-5 min-h-fit w-[40%] py-5 rounded-xl flex flex-col gap-10 border-white'>
        <div>
          <h2 className='text-xl font-bold p-3'>Email</h2>
          <input onChange={onChangeInput} type="username" placeholder='username' name='username' className='w-full rounded-full p-3 text-black' />
        </div>
        <div>
          <h2 className='text-xl font-bold p-3'>Password</h2>
          <input onChange={onChangeInput} type="password" name="password" placeholder='password' className='w-full rounded-full p-3 text-black' />
        </div>
        <button onClick={signin} className='bg-hover text-hover p-3 rounded-full'>Login</button>
      </div>
    </div>
  )
}

export default Form