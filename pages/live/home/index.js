import React from 'react';
import AdminLayout from '../../../layout/adminLayout';

const HomePage = () => {
    return (
        <AdminLayout>
            <div className='bg-zinc-100 h-auto m-6 w-[90%] text-[16px] p-4'>
                
                <h4 className='text-center font-semibold underline'>Home Page</h4>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-[#FFA525] capitalize pb-2'>header and hero section</h5>
                    <div className='m-4'>
                        <p className='text-base'>In this section, anyone can see the hero section with a banner image; here, all the sections are dynamic. You can change it according to your requirements in the admin panel.</p>
                        <img className='h-auto w-auto shadow-sm' src='/images/homepage/home/hero.png' alt="" />
                    </div>
                </div>

                <div className='my-4'>
                    <h5 className='border-b-[1px] border-[#FFA525] capitalize pb-2'>brand/partnership</h5>
                    <div className='m-4'>
                        <p className='text-base'>In this section, anyone can see the partnership/brand company logo as a slider; this section is also dynamic.</p>
                        <img className='h-auto w-auto shadow-sm' src='/images/homepage/home/brand.png' alt="" />
                    </div>
                </div>

                <div className='my-4'>
                    <h5 className='border-b-[1px] border-[#FFA525] capitalize pb-2'>platform service</h5>
                    <div className='m-4'>
                        <p className='text-base'>In this section, anyone can see all the services provided by the platform and their descriptions, which are dynamic.</p>
                        <img className='h-auto w-auto shadow-sm' src='/images/homepage/home/platform.png' alt="" />
                    </div>
                </div>

                <div className='my-4'>
                    <h5 className='border-b-[1px] border-[#FFA525] capitalize pb-2'>platform work</h5>
                    <div className='m-4'>
                        <p className='text-base'>In this section, three cards are displayed for your company's work process flow.</p>
                        <img className='h-auto w-auto shadow-sm' src='/images/homepage/home/work-card.png' alt="" />
                    </div>
                </div>

                <div className='my-4'>
                    <h5 className='border-b-[1px] border-[#FFA525] capitalize pb-2'>counter section</h5>
                    <div className='m-4'>
                        <p className='text-base'>In this section, there are four options to display some value, such as: app downloads, active riders, active users, and trips or orders saved. This section is also dynamic.</p>
                        <img className='h-auto w-auto shadow-sm' src='/images/homepage/home/counter.png' alt="" />
                    </div>
                </div>

                <div className='my-4'>
                    <h5 className='border-b-[1px] border-[#FFA525] capitalize pb-2'>benefit section</h5>
                    <div className='m-4'>
                        <p className='text-base'>In this section, three cards are displayed for your company's benefit information in a dynamic way.</p>
                        <img className='h-auto w-auto shadow-sm' src='/images/homepage/home/benifit.png' alt="" />
                    </div>
                </div>

                <div className='my-4'>
                    <h5 className='border-b-[1px] border-[#FFA525] capitalize pb-2'>testmonial section</h5>
                    <div className='m-4'>
                        <p className='text-base'>This is the user feedback section. The admin can delete and control this.</p>
                        <img className='h-auto w-auto shadow-sm' src='/images/homepage/home/testmonial.png' alt="" />
                    </div>
                </div>

                <div className='my-4'>
                    <h5 className='border-b-[1px] border-[#FFA525] capitalize pb-2'>latest blog section</h5>
                    <div className='m-4'>
                        <p className='text-base'>In this section, anyone can see the latest blog as a slider. The admin can create, update, or delete any blog in the admin panel.</p>
                        <img className='h-auto w-auto shadow-sm' src='/images/homepage/home/blog.png' alt="" />
                    </div>
                </div>

                <div className='my-4'>
                    <h5 className='border-b-[1px] border-[#FFA525] capitalize pb-2'>newsletter</h5>
                    <div className='m-4'>
                        <p className='text-base'>In this section, there is an input form. Anyone can subscribe to your platform by submitting his/her email here.</p>
                        <img className='h-auto w-auto shadow-sm' src='/images/homepage/home/newsletter.png' alt="" />
                    </div>
                </div>

                <div className='my-4'>
                    <h5 className='border-b-[1px] border-[#FFA525] capitalize pb-2'>Footer And Copyright</h5>
                    <div className='m-4'>
                        <p className='text-base'>This is the footer and copyright section, which is totally dynamic. The admin can change the logo and any data in the admin panel.</p>
                        <img className='h-auto w-auto shadow-sm' src='/images/homepage/home/footer.png' alt="" />
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
};

export default HomePage;