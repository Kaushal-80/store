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
import NavbarWithCookies from '@/components/Navbar';



const deleteRecord = () => {
    const router = useRouter();
    const [details, setDetails] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [csvData, setCsvData] = useState([]);
    const [filteredCount, setFilteredCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [perPage] = useState(10); // Number of items per page


    // data getting through api
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/delrecord/', {

            headers: {
                Authorization: `Token ${Cookies.get('token')}`,
            },


        }).then(res => {
            setDetails(res.data);
            setCsvData(res.data);
            setFilteredCount(res.data.length);
        })
        

    }, []);


    // filtered data logic
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

        // Reverse the order to show latest data first
        return filteredData.reverse();
    };


    const paginate = pageNumber => setCurrentPage(pageNumber);
    const indexOfLastDetail = currentPage * perPage;
    const indexOfFirstDetail = indexOfLastDetail - perPage;
    const currentDetails = filterData().slice(indexOfFirstDetail, indexOfLastDetail);





    // export to excel and filtered data count logic
    useEffect(() => {
        const filteredData = filterData();
        setCsvData(filteredData);
        setFilteredCount(filteredData.length);
    }, [searchTerm, startDate, endDate]);




    return <>
        <NavbarWithCookies />

        {/* Welcome messsage */}
        <header>
            <div className="mx-auto mt-20 max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <div className="text-center sm:text-left">

                        <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">Deleted Record</h1>
                        <p className="mt-1.5 text-md text-gray-500">All information of deleted record</p>
                    </div>

                </div>
            </div>
        </header>

        <div className="max-w-screen-xl mx-auto sm:px-4 ">

            {/* Search */}
            <div className="flex justify-end my-4">
                <input
                    type="search"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="sm:text-sm border border-slate-500 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                />

                <input
                    type="date"
                    placeholder="Start Date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="sm:text-sm  border border-slate-500 ml-2 px-3 py-2  rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
                <input
                    type="date"
                    placeholder="End Date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="sm:text-sm border border-slate-500 ml-2 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                />

            </div>


            {/* Export to Excel Button */}
            <CSVLink data={csvData}>
                <button className=" sm:text-sm rounded-md border border-green-600 bg-green-600 px-8 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-green-800 hover:bg-green-800 focus:ring focus:ring-blue-200 disabled:cursor-not-allowed disabled:border-green-300 disabled:bg-green-300">Export To Excel</button>
            </CSVLink>


            {/* filtered data count */}
            <div className="my-5 sm:mt-0 ">
                <div className="sm:block sm:text-right">
                    <span className="text-md text-gray-500 ">
                        Filtered data count: {filteredCount}
                    </span>
                </div>
            </div>



            {/* table */}
            <div className="table-container overflow-x-auto">
                <table className="w-full border-collapse bg-white text-left text-sm text-gray-500  ">
                    <thead className="bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-4 font-medium text-gray-900">Name</th>
                            <th scope="col" className="px-6 py-4 font-medium text-gray-900">Mobile No.</th>
                            <th scope="col" className="px-6 py-4 font-medium text-gray-900">Invoice No.</th>
                            <th scope="col" className="px-6 py-4 font-medium text-gray-900">Invoice Amount</th>
                            <th scope="col" className="px-6 py-4 font-medium text-gray-900">Invoice Date</th>
                            <th scope="col" className="px-6 py-4 font-medium text-gray-900">Coupon Code</th>
                            <th scope="col" className="px-6 py-4 font-medium text-gray-900">Draw Date</th>
                            <th scope="col" className="px-6 py-4 font-medium text-gray-900">Time</th>
                            <th scope="col" className="px-6 py-4 font-medium text-gray-900">IP Address</th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-100 border-t border-gray-100">
                        {currentDetails.map((d, index) => (
                            <tr key={index} className="odd:bg-white even:bg-gray-50">
                                <th className="px-6 py-4 font-medium text-gray-900">{d.Name}</th>
                                <td className="px-6 py-4">{d.Mobile_No}</td>
                                <td className="px-6 py-4">{d.Invoice_no}</td>
                                <td className="px-6 py-4">{d.Amount}</td>
                                <td className="px-6 py-4">{format(new Date(d.Invoice_date), 'dd-MM-yyyy')}</td>
                                <td className="px-6 py-4">{d.Token_id}</td>
                                <td className="px-6 py-4">{format(new Date(d.dr_date), 'dd-MM-yyyy')}</td>
                                <td className="px-6 py-4">{d.time}</td>
                                <td className="px-6 py-4">{d.deleted_by_ip}</td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>




            {/* pagination */}
            <div className="flex justify-center my-4">
                <ul className="flex space-x-2">
                    {Array.from({ length: Math.ceil(filterData().length / perPage) }, (_, i) => (
                        <li key={i}>
                            <button
                                onClick={() => paginate(i + 1)}
                                className={`px-3 py-1 rounded-md text-slate-500 focus:outline-none ${currentPage === i + 1 ? 'bg-gray-300' : 'hover:bg-gray-200'}`}
                            >
                                {i + 1}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>



    </>
}

export default deleteRecord