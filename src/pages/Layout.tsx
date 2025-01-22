import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from '../components/Footer'
import Loader from '../common/Loader'

const Layout = () => {
    const [loading, setLoading] = useState<boolean>(true);
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    useEffect(() => {
        setTimeout(() => setLoading(false), 1000);
    }, []);
    return loading ? (
        <Loader />
    ) : (
        <div className="w-full min-h-screen  bg-white">
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout