import React from 'react'
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb'
import ContactUs from '../../components/ContactUs/ContactUs'

const Contact = () => {
    return (
        <>
            <Breadcrumb pageName="Contact Us" />
            <div className="grid grid-cols-1 gap-9 sm:grid-cols-2">
                <div className="flex flex-col gap-9">
                    <ContactUs />
                </div>
            </div>
        </>
    )
}

export default Contact