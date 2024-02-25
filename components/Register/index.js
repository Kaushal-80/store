import Link from 'next/link'
import React, { useState } from 'react'

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try{
      // add post api in the below empty coloun  ex = {axios.post('api')}
      await axios.post('',{name, email, password})
    } catch(err){
      console.log(err)
    }
  }

  return <>
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <div className='w-[30%] p-5 border-t-4 border-green-400 rounded-md bg-slate-50'>
        <div className='text-xl font-bold mb-6'>Register</div>
        <form onSubmit = {handleSubmit}>
          <div className='mb-4'>
            <label htmlFor="name" className='font-semibold'>Name </label>
            <input required type="text" id="name" name="name" className='w-full mt-2 p-2 border border-slate-500 rounded-md' placeholder='John Doe'
              onChange={(e) =>  setName(e.target.value)}
            />
          </div>
          <div className='mb-4'>
            <label htmlFor="email" className='font-semibold'>Email </label> <br></br>
            <input required type="email" id="email" name="email" className='w-full mt-2 p-2 border border-slate-500 rounded-md' placeholder='johnDoe@gmail.com'
              onchange = {(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='mb-4'>
            <label htmlFor="password" className='font-semibold'>Password </label>
            <input required type="password" id="password" className='w-full mt-2 p-2 border border-slate-500 rounded-md' placeholder='*******'
              onchange = {(e) => setPassword(e.target.value)}
            />
          </div>
          <div className='flex justify-between mb-4'>
            <button type="submit" className='bg-green-600 hover:bg-green-800 text-white font-semibold py-2 px-4 rounded'>Register</button>
          </div>

          {/* <div className='mb-4'>
            <p className='text-red-500'>error</p>
          </div> */}

          <div className='w-full text-right'>
            <span>Already have an account? <Link href={"/"} className='underline'>Login</Link></span>
          </div>
        </form>
      </div>
    </main>

  </>
}

export default Register