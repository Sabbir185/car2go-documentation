import React from 'react';
import AdminLayout from '../../../layout/adminLayout';

const MorePage = () => {
    return (
        <AdminLayout>
            <div className='bg-zinc-100 h-auto m-6 w-[90%] text-[16px] p-4'>
                <h4 className='text-center font-semibold underline'>More Page</h4>
                <p className='text-center'>This section is a little different from the whole site because you can add more pages to your website according to your needs in the admin panel.</p>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-[#FFA525] capitalize pb-2'>more</h5>
                    <div className='m-4'>
                        <p className='text-base'>Here, anyone can see a drop-down menu that has some page names. Business, safety, press and faq's pages ase fixed here. The admin can create unlimited custom pages in the admin panel. The custom page name will display in the more drop-down menu.</p>
                        <img className='h-auto w-auto shadow-sm' src='/images/homepage/more/more-menu.png' alt="" />
                    </div>
                </div>

                <div className='my-4'>
                    <h5 className='border-b-[1px] border-[#FFA525] capitalize pb-2'>business</h5>
                    <div className='m-4'>
                        <p className='text-base'>Here, anyone can see a page title, subtitle, and page content that is fully dynamic. The admin can update all information in the admin panel at any time.</p>
                        <img className='h-auto w-auto shadow-sm' src='/images/homepage/more/business.png' alt="" />
                    </div>
                </div>

                <div className='my-4'>
                    <h5 className='border-b-[1px] border-[#FFA525] capitalize pb-2'>safety</h5>
                    <div className='m-4'>
                        <p className='text-base'>Here, anyone can see a page title, subtitle, and page content with an image that is fully dynamic. The admin can create, update or delete any information in the admin panel at any time.</p>
                        <img className='h-auto w-auto shadow-sm' src='/images/homepage/more/safety.png' alt="" />
                    </div>
                </div>

                {/* <div className='my-4'>
                    <h5 className='border-b-[1px] border-[#FFA525] capitalize pb-2'>press</h5>
                    <div className='m-4'>
                        <p className='text-base'>Here, anyone can see a page title, subtitle, and page content that is fully dynamic. The admin can update all information in the admin panel at any time.</p>
                        <img className='h-auto w-auto shadow-sm' src='/images/homepage/more/business.png' alt="" />
                    </div>
                </div> */}

                <div className='my-4'>
                    <h5 className='border-b-[1px] border-[#FFA525] capitalize pb-2'>FAQ's</h5>
                    <div className='m-4'>
                        <p className='text-base'>Here, anyone can see a page title, subtitle, and faq page content that is fully dynamic. The admin can create, update or delete any faq in the admin panel at any time.</p>
                        <img className='h-auto w-auto shadow-sm' src='/images/homepage/more/faq.png' alt="" />
                    </div>
                </div>

                <div className='my-4'>
                    <h5 className='border-b-[1px] border-[#FFA525] capitalize pb-2'>Custom page</h5>
                    <div className='m-4'>
                        <p className='text-base'>Here, anyone can see a page title, subtitle, and custom page content that is fully dynamic. The admin can create, update or delete any custom page in the admin panel at any time.</p>
                        <img className='h-auto w-auto shadow-sm' src='/images/homepage/more/custom.png' alt="" />
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
};

export default MorePage;