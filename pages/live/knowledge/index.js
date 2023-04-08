import React from 'react';
import AdminLayout from '../../../layout/adminLayout';

const KnowledgePage = () => {
    return (
        <AdminLayout>
            <div className='bg-zinc-100 h-auto m-6 w-[90%] text-[16px] p-4'>
                <h4 className='text-center font-semibold underline'>Knowledge Page</h4>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-[#FFA525] capitalize pb-2'>Knowledge</h5>
                    <div className='m-4'>
                        <p className='text-base'>In this dynamic page, anyone can see a knowledge-base page title, subtitle and some content(question and answer).</p>
                        <img className='h-auto w-auto shadow-sm' src='/images/homepage/etc/knowledge.png' alt="" />
                    </div>
                </div> 
            </div>
        </AdminLayout>
    );
};

export default KnowledgePage;