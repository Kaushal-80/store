import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return <>
        <header className="bg-white">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="md:flex md:items-center md:gap-12">
                        <a className="block text-teal-600" href="#">
                            <span className="sr-only">Home</span>
                            <h1 className='text-2xl text-green-500 font-bold'>Navbar</h1>
                        </a>
                    </div>


                    <div className="flex items-center gap-4">
                        <div className="sm:flex sm:gap-4">
                            <Link
                                className="rounded-md bg-green-600 hover:bg-green-800 px-5 py-2.5 text-sm font-medium text-white shadow"
                                href="/admin"
                            >
                                Admin
                            </Link>

        
                        </div>

                        
                    </div>
                </div>
            </div>
        </header>
    </>
}

export default Navbar