import React from 'react';
import AdminLayout from '../../../layout/adminLayout';

const ContactPage = () => {
    return (
        <AdminLayout>
            <div className='bg-zinc-100 h-auto m-6 w-[90%] text-[16px] p-4'>
                <h4 className='text-center font-semibold underline'>Contact Page</h4>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-[#FFA525] capitalize pb-2'>contact</h5>
                    <div className='m-4'>
                        <p className='text-base'>In this section, anyone can see a contact page form along with company contact details. This section is also dynamic.</p>
                        <img className='h-auto w-auto shadow-sm' src='/images/homepage/contact/contact.png' alt="" />
                    </div>
                </div> 
            </div>
        </AdminLayout>
    );
};

export default ContactPage;