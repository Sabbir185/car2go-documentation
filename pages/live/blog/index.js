import React from 'react';
import AdminLayout from '../../../layout/adminLayout';

const BlogPage = () => {
    return (
        <AdminLayout>
            <div className='bg-zinc-100 h-auto m-6 w-[90%] text-[16px] p-4'>
                <h4 className='text-center font-semibold underline'>Blog Page</h4>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-[#FFA525] capitalize pb-2'>blog</h5>
                    <div className='m-4'>
                        <p className='text-base'>Here, anyone can see a blog page along with a title, subtitle, and some blog. The title, subtitle, and every blog are dynamic and can be created, updated, or deleted in the admin panel.</p>
                        <img className='h-auto w-auto shadow-sm' src='/images/homepage/blog/blog.png' alt="" />
                    </div>
                </div> 
            </div>
        </AdminLayout>
    );
};

export default BlogPage;