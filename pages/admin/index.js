import Navbar from '@/components/Navbar'
import Link from 'next/link'
import React from 'react'

const admin = () => {
    return <>
        <Navbar />
        <header>
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <div className="text-center sm:text-left">
                        <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">Welcome Back, <span className='text-green-500'>User!</span></h1>

                        <p className="mt-1.5 text-md text-gray-500">All the data details</p>
                    </div>

                </div>
            </div>
        </header>

        <div className="max-w-screen-xl mx-auto">
            <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
                <thead className="bg-gray-50">
                    <tr>
                        <th scope="col" className="px-6 py-4 font-medium text-gray-900">Name</th>
                        <th scope="col" className="px-6 py-4 font-medium text-gray-900">Mobile No.</th>
                        <th scope="col" className="px-6 py-4 font-medium text-gray-900">Invoice No.</th>
                        <th scope="col" className="px-6 py-4 font-medium text-gray-900">Invoice Amount</th>
                        <th scope="col" className="px-6 py-4 font-medium text-gray-900">Invoice Date</th>
                        <th scope="col" className="px-6 py-4 font-medium text-gray-900"></th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 border-t border-gray-100">
                    <tr className="odd:bg-white even:bg-gray-50">
                        <th className="px-6 py-4 font-medium text-gray-900">John Doe</th>
                        <td className="px-6 py-4">1234567890</td>
                        <td className="px-6 py-4">2024-02/22/001</td>
                        <td className="px-6 py-4">5000</td>
                        <td className="px-6 py-4">22/02/2024</td>



                        <td className="flex justify-end gap-4 px-6 py-4 font-medium"><Link href="">Delete</Link><Link href=""
                            className="text-primary-700">Edit</Link>
                            <Link href="" className="text-primary-700">Print</Link>
                            
                            </td>
                    </tr>

                    <tr className="odd:bg-white even:bg-gray-50">
                        <th className="px-6 py-4 font-medium text-gray-900">Michal Jackson</th>
                        <td className="px-6 py-4">1234567890</td>
                        <td className="px-6 py-4">2024-02/22/001</td>
                        <td className="px-6 py-4">5000</td>
                        <td className="px-6 py-4">22/02/2024</td>



                        <td className="flex justify-end gap-4 px-6 py-4 font-medium">
                            <Link href="">Delete</Link>
                            <Link href="" className="text-primary-700">Edit</Link>
                            <Link href="" className="text-primary-700">Print</Link>

                        </td>
                    </tr>

                    <tr className="odd:bg-white even:bg-gray-50">
                        <th className="px-6 py-4 font-medium text-gray-900">Cristiano Ronaldo</th>
                        <td className="px-6 py-4">1234567890</td>
                        <td className="px-6 py-4">2024-02/22/001</td>
                        <td className="px-6 py-4">5000</td>
                        <td className="px-6 py-4">22/02/2024</td>



                        <td className="flex justify-end gap-4 px-6 py-4 font-medium"><Link href="">Delete</Link><Link href=""
                            className="text-primary-700">Edit</Link>
                            <Link href="" className="text-primary-700">Print</Link>
                            
                            </td>
                    </tr>

                    <tr className="odd:bg-white even:bg-gray-50">
                        <th className="px-6 py-4 font-medium text-gray-900">Ms.Dhoni</th>
                        <td className="px-6 py-4">1234567890</td>
                        <td className="px-6 py-4">2024-02/22/001</td>
                        <td className="px-6 py-4">5000</td>
                        <td className="px-6 py-4">22/02/2024</td>



                        <td className="flex justify-end gap-4 px-6 py-4 font-medium"><Link href="">Delete</Link>
                            <Link href="" className="text-primary-700">Edit</Link>
                            <Link href="" className="text-primary-700">Print</Link>
                        </td>
                    </tr>

                </tbody>
            </table>
        </div>
    </>
}

export default admin