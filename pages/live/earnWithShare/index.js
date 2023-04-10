import React from 'react';
import AdminLayout from '../../../layout/adminLayout';

const EarnWithShare = () => {
    return (
        <AdminLayout>
            <div className='bg-zinc-100 h-auto m-6 w-[90%] text-[16px] p-4'>
                <h4 className='text-center font-semibold underline'>Earn With Share Page</h4>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-[#FFA525] capitalize pb-2'>Earn With Share</h5>
                    <div className='m-4'>
                        <p className='text-base'>Here, anyone can see a <span className='font-semibold text-[#FFA525]'>earn with share</span> page along with a title, subtitle, and some contents. The title, subtitle, and every contents are dynamic and can be created, updated, or deleted in the admin panel.</p>
                        <p className='text-base'>Now, click on the <span className='font-semibold text-[#FFA525]'>Register Now</span> button. Then, you can see a registration form. But, you must have to login as driver to fill out this form. Here, you have to submit vehicle information.</p>
                        <img className='h-auto w-auto shadow-sm' src='/images/homepage/home/earn-with-share.png' alt="" />
                        <p className='text-base mt-5'>Then, click on the <span className='font-semibold text-[#FFA525]'>Next</span> button. Here, you have to submit all specific documents, which form fields come from the admin &gt; driver management &gt; document input.</p>
                        <img className='h-auto w-auto shadow-sm' src='/images/homepage/home/earn-with-share-next.png' alt="" />
                        <p className='text-base mt-5'>Now, you have to wait until the administrator approves your application.</p>
                    </div>
                </div> 
            </div>
        </AdminLayout>
    );
};

export default EarnWithShare;