const Navbar = () => {
    return (
        <nav className="flex items-center sticky top-0 z-50 justify-between px-6 py-4 bg-gradient-to-r from-purple-700 to-blue-600">
            <div className="text-white font-bold text-xl">
                Cumilla Modern High School Alumni Association
            </div>
            <div className="hidden md:flex space-x-6 text-white">
                <a href="#home">HOME</a>
                <a href="#services">SERVICES</a>
                <a href="#about">ABOUT US</a>
                <a href="#gallery">GALLERY</a>
                <a href="#contact">CONTACT US</a>
            </div>
            {/* <button className="bg-white text-purple-700 px-4 py-2 rounded">
                Log In | Sign Up
            </button> */}
        </nav>
    )
}

export default Navbar