import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { withCookies } from 'react-cookie';
import Cookies from 'js-cookie'
import { useRouter } from 'next/router'
import Link from 'next/link';

// const NavbarWithCookies = withCookies(Navbar);
// export default NavbarWithCookies;

const Navbar = ({ cookies }) => {
    const [user, setUser] = useState({});
    const [isScrolled, setIsScrolled] = useState(false);

    const router = useRouter();

    const isAdminPage = router.pathname === '/admin'

    useEffect(() => {
        const handleScroll = () => {
            // Check if the page is scrolled
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        // Listen to scroll event
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    useEffect(() => {
        const fetchUser = async () => {
            try {
                const token = cookies.get('token');
                if (!token) {
                    return;
                }
                const config = {

                    headers: {
                        Authorization: `Token ${token}`
                    }
                }
                const res = await axios.get('http://127.0.0.1:8000/user/', config)
                setUser(res.data)
            } catch (err) {
                console.log(err);
            }
        }
        fetchUser()

    }, [cookies]);



    const Logout = async () => {
        try {
            const token = Cookies.get('token');

            if (!token) {
                return;
            }
            const config = {

                headers: {
                    Authorization: `Token ${token}`
                }
            };
            cookies.remove('token')
            router.push('/');
            // const response = await axios.post('http://127.0.0.1:8000/logout/', config);

            // if (response.status === 200) {
            //     console.log("deleted")
            // }


        } catch (err) {
            console.log(err);
        }
    }




    return <>
        <header className={`bg-white ${isScrolled ? 'fixed top-0 left-0 right-0 z-50' : ''}`}>
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 shadow-md">
                <div className="flex h-16 items-center justify-between">
                    <div className="md:flex md:items-center md:gap-12">
                        <a className="block text-teal-600" href="#">
                            <span className="sr-only">Home</span>
                            <h1 className='text-2xl text-green-500 font-bold'>Samruddhi Mega</h1>
                        </a>
                    </div>




                    <div className="flex items-center gap-6">
                        <div className="md:flex md:items-center md:gap-12">
                            <p>{user.email}</p>
                        </div>


                        <div className="sm:flex sm:gap-4">
                            {!isAdminPage? (
                                <Link
                                    className="rounded-md bg-green-600 hover:bg-green-800 px-5 py-2.5 text-sm font-medium text-white shadow"
                                    href="/admin"
                                >
                                    Admin
                                </Link>
                            ):(
                                <Link
                                    className="rounded-md bg-green-600 hover:bg-green-800 px-5 py-2.5 text-sm font-medium text-white shadow"
                                    href="/form"
                                >
                                    Form
                                </Link>
                            )}
                        </div>

                        <div className="sm:flex sm:gap-4">
                            <button
                                className="rounded-md bg-red-600 hover:bg-red-800 px-5 py-2.5 text-sm font-medium text-white shadow"
                                onClick={Logout}
                            >
                                Logout
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </header>
    </>
}

const NavbarWithCookies = withCookies(Navbar);

export default NavbarWithCookies;