import React from 'react';
import AdminLayout from '../../../layout/adminLayout';

const PrivacyPolicyPage = () => {
    return (
        <AdminLayout>
            <div className='bg-zinc-100 h-auto m-6 w-[90%] text-[16px] p-4'>
                <h4 className='text-center font-semibold underline'>Privacy Policy Page</h4>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-[#FFA525] capitalize pb-2'>Privacy Policy</h5>
                    <div className='m-4'>
                        <p className='text-base'>In this dynamic page, anyone can see a privacy policy page title, subtitle and some text about the privacy policy.</p>
                        <img className='h-auto w-auto shadow-sm' src='/images/homepage/etc/privacy-policy.png' alt="" />
                    </div>
                </div> 
            </div>
        </AdminLayout>
    );
};

export default PrivacyPolicyPage;