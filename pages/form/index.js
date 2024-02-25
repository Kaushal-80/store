import Navbar from '@/components/Navbar'
import React from 'react'

const form = () => {
  return <>
    <Navbar/>
    <div className="mx-auto max-w-xl my-40">
        <form action="" className="space-y-5 rounded-md border-t-4 border-green-500 p-4 ">
            <div>
                <h1 className="text-[30px] font-semibold">Form</h1>
            </div>
            <div className="grid grid-cols-12 gap-5">
                <div className="col-span-6 mb-3">
                    <label for="example7" className="mb-1 block text-sm font-medium text-gray-700">Name</label>
                    <input type="text" id="example7"
                        className="block w-full rounded-md shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 p-3 border border-slate-500"
                        placeholder="John Doe" required />
                </div>
                <div className="col-span-6 mb-3">
                    <label for="example8" className="mb-1 block text-sm font-medium text-gray-700">Mobile No.</label>
                    <input type="text" pattern="[1-9]{1}[0-9]{9}" id="example8"
                        className="block w-full rounded-md shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 p-3 border border-slate-500"
                        placeholder="1234567890" required />
                </div>
                <div className="col-span-12">
                    <label for="example9" className="mb-1 block text-sm font-medium text-gray-700">Invoice No.</label>
                    <input type="number" id="example9"
                        className="block w-full rounded-md shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 p-3 border border-slate-500"
                        placeholder="2024-02/22/001" required />
                </div>
                <div className="col-span-6 mb-3">
                    <label for="example10" className="mb-1 block text-sm font-medium text-gray-700">Invoice Amount</label>
                    <input type="number" id="example10"
                        className="block w-full rounded-md shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 p-3 border border-slate-500"
                        placeholder="5000" required />
                </div>

                <div className="col-span-6 mb-3">
                    <label for="example10" className="mb-1 block text-sm font-medium text-gray-700">Invoice Date</label>
                    <input type="date" id="example10"
                        className="block w-full rounded-md shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 p-3 border border-slate-500"
                        placeholder="01/01/1991" required />
                </div>

                <div className="col-span-12">
                    <button type="submit"
                        className="rounded-lg border border-green-600 bg-green-600 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-green-800 hover:bg-green-800 focus:ring focus:ring-blue-200 disabled:cursor-not-allowed disabled:border-green-300 disabled:bg-green-300">Submit</button>
                </div>
            </div>
        </form>
    </div>
  </>
}

export default form