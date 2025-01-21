import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

const Layout = () => {
    return (
        <div className="w-full min-h-screen  bg-white">
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout