import Navbar from '@/components/Navbar'
import axios from 'axios';
import Cookies from 'js-cookie';
import Link from 'next/link'
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CSVLink } from 'react-csv';
import { format } from 'date-fns';



const admin = () => {
    const router = useRouter();
    const [details, setDetails] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [csvData, setCsvData] = useState([]);
    const [filteredCount, setFilteredCount] = useState(0);



    useEffect(() => {
        axios.get('http://127.0.0.1:8000/form/', {

            headers: {
                Authorization: `Token ${Cookies.get('token')}`,
            },


        }).then(res => {
            setDetails(res.data);
            setCsvData(res.data);
            setFilteredCount(res.data.length);
        })
        if (router.query.success) {
            toast.success('Successfully updated the data ', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            })
        };

    }, []);

    const filterData = () => {
        let filteredData = details.filter(d =>
            d.Name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            d.Mobile_No.includes(searchTerm) ||
            d.Token_id.includes(searchTerm) ||
            (typeof d.Invoice_no === 'string' && d.Invoice_no.includes(searchTerm)) ||
            d.dr_date.includes(searchTerm) ||
            (typeof d.Amount === 'string' && d.Amount.includes(searchTerm))
        );

        if (startDate && endDate) {
            filteredData = filteredData.filter(d =>
                new Date(d.dr_date) >= new Date(startDate) &&
                new Date(d.dr_date) <= new Date(endDate)
            );
        }

        return filteredData;
    };

    useEffect(() => {
        const filteredData = filterData();
        setCsvData(filteredData);
        setFilteredCount(filteredData.length);
    }, [searchTerm, startDate, endDate]);

    // useEffect(() => {
    //     setFilteredCount(details.length);
    // }, [details]);




    return <>
        <Navbar />
        <ToastContainer />
        <header>
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <div className="text-center sm:text-left">

                        <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">Welcome Back</h1>
                        <p className="mt-1.5 text-md text-gray-500">All the data details</p>
                    </div>

                </div>
            </div>
        </header>

        <div className="max-w-screen-xl mx-auto">
            <div className="flex justify-end my-4">
                <input
                    type="search"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="border border-slate-500 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                />

                <input
                    type="date"
                    placeholder="Start Date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="border border-slate-500 ml-2 px-3 py-2  rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
                <input
                    type="date"
                    placeholder="End Date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="border border-slate-500 ml-2 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                />

            </div>


            <CSVLink data={csvData}>
                <button className="rounded-lg border border-green-600 bg-green-600 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-green-800 hover:bg-green-800 focus:ring focus:ring-blue-200 disabled:cursor-not-allowed disabled:border-green-300 disabled:bg-green-300">Export To Excel</button>
            </CSVLink>


            <div className="mt-5 sm:mt-0">
                <div className="sm:block sm:text-right">
                    <span className="text-md ">
                        Filtered data count: {filteredCount}
                    </span>
                </div>
            </div>

            <table id="table-to-xls" className="w-full border-collapse bg-white text-left text-sm text-gray-500">
                <thead className="bg-gray-50">
                    <tr>
                        <th scope="col" className="px-6 py-4 font-medium text-gray-900">Name</th>
                        <th scope="col" className="px-6 py-4 font-medium text-gray-900">Mobile No.</th>
                        <th scope="col" className="px-6 py-4 font-medium text-gray-900">Invoice No.</th>
                        <th scope="col" className="px-6 py-4 font-medium text-gray-900">Invoice Amount</th>
                        <th scope="col" className="px-6 py-4 font-medium text-gray-900">Invoice Date</th>
                        <th scope="col" className="px-6 py-4 font-medium text-gray-900">Coupon Code</th>
                        <th scope="col" className="px-6 py-4 font-medium text-gray-900">Draw Date</th>
                        <th scope="col" className="px-6 py-4 font-medium text-gray-900"></th>
                    </tr>
                </thead>

                <tbody className="divide-y divide-gray-100 border-t border-gray-100">
                    {filterData().map((d, index) => (
                        <tr key={index} className="odd:bg-white even:bg-gray-50">
                            <th className="px-6 py-4 font-medium text-gray-900">{d.Name}</th>
                            <td className="px-6 py-4">{d.Mobile_No}</td>
                            <td className="px-6 py-4">{d.Invoice_no}</td>
                            <td className="px-6 py-4">{d.Amount}</td>
                            <td className="px-6 py-4">{format(new Date(d.Invoice_date), 'dd-MM-yyyy')}</td>
                            <td className="px-6 py-4">{d.Token_id}</td>
                            <td className="px-6 py-4">{format(new Date(d.dr_date), 'dd-MM-yyyy')}</td>


                            <td className="flex justify-end gap-4 px-6 py-4 font-medium "><Link href={'/delete/' + d.id} className='hover:text-red-500 hover:underline'>Delete</Link>
                                <Link href={{ pathname: '/edit/' + d.id, query: { id: d.id } }} className="text-primary-700 hover:text-green-500 hover:underline">Edit</Link>
                                <Link href={{ pathname: '/coupon/', query: { id: d.id } }} className="text-primary-700 hover:text-black hover:underline">View</Link>

                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>



    </>
}

export default admin