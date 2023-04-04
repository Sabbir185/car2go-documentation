import React from 'react';
import AdminLayout from '../../../layout/adminLayout';

const TermsConditionPage = () => {
    return (
        <AdminLayout>
            <div className='bg-zinc-100 h-auto m-6 w-[90%] text-[16px] p-4'>
                <h4 className='text-center font-semibold underline'>Terms & Condition Page</h4>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-[#FFA525] capitalize pb-2'>Terms & Condition</h5>
                    <div className='m-4'>
                        <p className='text-base'>In this dynamic page, anyone can see a terms & condition page title, subtitle and some text about the terms & condition.</p>
                        <img className='h-auto w-auto shadow-sm' src='/images/homepage/etc/terms-condition.png' alt="" />
                    </div>
                </div> 
            </div>
        </AdminLayout>
    );
};

export default TermsConditionPage;