import Link from 'next/link'
import React from 'react'

const Login = () => {
    return <>
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <div className='w-[25%] p-5 border-t-4 border-green-400 rounded-md bg-slate-50'>
      <div className='text-xl font-bold mb-6'>Login</div>
      <form>
        <div className='mb-4'>
          <label htmlFor="email" className='font-semibold'>Email </label> <br></br>
          <input required type="email" id="email" name="email" className='w-full mt-2 p-2 border border-slate-500 rounded-md' placeholder='johnDoe@gmail.com' />
        </div>
        <div className='mb-4'>
          <label htmlFor="password" className='font-semibold'>Password </label>
          <input required type="password" id="password" className='w-full mt-2 p-2 border border-slate-500 rounded-md' placeholder='*******' />
        </div>
        <div className='flex justify-between mb-4'>
          <button className='bg-green-600 hover:bg-green-800 text-white font-semibold py-2 px-4 rounded'>Login</button>
        </div>
        <div className='w-full text-right'>
          <span>Don't have an account? <Link href={"/register"} className='underline'>Register</Link></span>
        </div>
      </form>
    </div>
      
    </main>
  </>
}

export default Login