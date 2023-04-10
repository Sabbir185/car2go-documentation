import React from 'react';
import AdminLayout from '../../../layout/adminLayout';
import { Tabs } from 'antd';

const Marketing = () => {
    return (
        <AdminLayout>
            <div className='bg-yellow-50 bg-opacity-20 h-auto m-6 w-[90%] text-[16px] p-4 rounded'>
                <Tabs defaultActiveKey="1" centered>
                    {/* landing page */}
                    <Tabs.TabPane tab="Dashboard" key="1">
                        <h4 className='text-center font-semibold underline'>Landing Page</h4>
                        <p className='text-base text-center'>First, you need to go to the admin panel &gt; frontend pages &gt; landing page, where you will see five sections. Here, you have to fill out all the forms in different languages, and these details will be shown on the landing page. </p>
                        <div className='my-4'>
                            <h5 className='border-b-[1px] border-[#FFA525] capitalize pb-2'>Hero Section</h5>
                            <div className='m-4'>
                                <p className='text-base underline font-semibold capitalize'>admin panel</p>
                                <img className='h-auto w-auto shadow-sm' src='/images/admin/frontend-pages/landing-page/hero.png' alt="" />
                                <p className='text-base underline font-semibold capitalize mt-4'>landing page</p>
                                <img className='h-auto w-auto shadow-sm' src='/images/admin/frontend-pages/landing-page/hero-land.png' alt="" />
                            </div>
                        </div>
                    </Tabs.TabPane>

                    <Tabs.TabPane tab="SMS Options" key="2">
                        <h4 className='text-center font-semibold underline'>SMS Options</h4>
                        <p className='text-base'>Here you will see a form. You can send a message to an individual person or in a group using this form. By clicking the send now or schedule for later button, you can send a message immediately or later.</p>
                        <p className='text-base underline font-semibold capitalize mt-4'>Send sms</p>
                        <img className='h-auto w-auto shadow-sm' src='/images/admin/marketing/send-sms.png' alt="" />
                        <p className='text-base underline font-semibold capitalize mt-4'>another page</p>
                        <ul className='list-disc text-base'>
                            <li>
                                <p><span className='font-medium text-[#FFA525]'>All SMS :</span> Here, you will see the list of all successful, pending, or failed SMS.</p>
                            </li>
                            <li>
                                <p><span className='text-base font-medium text-[#FFA525]'>Pending SMS :</span> Here, you will see the list of all pending SMS.</p>
                            </li>
                            <li>
                                <p><span className='text-base font-medium text-[#FFA525]'>Delivered SMS :</span> Here, you will see the list of all successful SMS.</p>
                            </li>
                            <li>
                                <p><span className='text-base font-medium text-[#FFA525]'>Schedule SMS :</span> Here, you will see the list of all SMS that are scheduled for later.</p>
                            </li>
                            <li>
                                <p><span className='text-base font-medium text-[#FFA525]'>Failed SMS :</span> Here, you will see the list of all failed SMS.</p>
                            </li>
                        </ul>
                    </Tabs.TabPane>

                    <Tabs.TabPane tab="Whatsapp Options" key="3">
                    <h4 className='text-center font-semibold underline'>Whatsapp Options</h4>
                        <p className='text-base'>Here you will see a form. You can send a message to an individual person or in a group using this form. By clicking the send now or schedule for later button, you can send a message immediately or later.</p>
                        <p className='text-base underline font-semibold capitalize mt-4'>Send Whatsapp Message</p>
                        <img className='h-auto w-auto shadow-sm' src='/images/admin/marketing/send-whatsapp.png' alt="" />
                        <p className='text-base underline font-semibold capitalize mt-4'>another page</p>
                        <ul className='list-disc text-base'>
                            <li>
                                <p><span className='font-medium text-[#FFA525]'>All Whatsapp Message :</span> Here, you will see the list of all successful, pending, or failed Message.</p>
                            </li>
                            <li>
                                <p><span className='text-base font-medium text-[#FFA525]'>Pending Whatsapp Message :</span> Here, you will see the list of all pending Message.</p>
                            </li>
                            <li>
                                <p><span className='text-base font-medium text-[#FFA525]'>Delivered Whatsapp Message :</span> Here, you will see the list of all successful Message.</p>
                            </li>
                            <li>
                                <p><span className='text-base font-medium text-[#FFA525]'>Schedule Whatsapp Message :</span> Here, you will see the list of all Message that are scheduled for later.</p>
                            </li>
                            <li>
                                <p><span className='text-base font-medium text-[#FFA525]'>Failed Whatsapp Message :</span> Here, you will see the list of all failed Message.</p>
                            </li>
                        </ul>
                    </Tabs.TabPane>

                    <Tabs.TabPane tab="Email Options" key="4">
                        <h4 className='text-center font-semibold underline'>Faq Page</h4>
                        <p className='text-base'>First, you need to go to the admin panel &gt; frontend pages &gt; faq page, where you will see a form. Here, you can delete, update, and create a new FAQ in different languages, and the FAQs will be shown on the FAQ page. </p>
                        <p className='text-base underline font-semibold capitalize mt-4'>admin panel</p>
                        <img className='h-auto w-auto shadow-sm' src='/images/admin/frontend-pages/landing-page/faq.png' alt="" />
                        <p className='text-base underline font-semibold capitalize mt-4'>faq page</p>
                        <img className='h-auto w-auto shadow-sm' src='/images/admin/frontend-pages/landing-page/faq-land.png' alt="" />
                    </Tabs.TabPane>

                    <Tabs.TabPane tab="Manage User" key="5">
                        <h4 className='text-center font-semibold underline'>About Page</h4>
                        <p className='text-base'>First, you need to go to the admin panel &gt; frontend pages &gt; about page, where you will see a form. Here, you can create an about page by filling out all the forms in different languages, and the contents will be shown on the about page. </p>
                        <p className='text-base underline font-semibold capitalize mt-4'>admin panel</p>
                        <img className='h-auto w-auto shadow-sm' src='/images/admin/frontend-pages/landing-page/about.png' alt="" />
                        <p className='text-base underline font-semibold capitalize mt-4'>about page</p>
                        <img className='h-auto w-auto shadow-sm mx-auto' src='/images/admin/frontend-pages/landing-page/about-land.png' alt="" />
                    </Tabs.TabPane>

                    <Tabs.TabPane tab="SMS Settings" key="6">
                        <h4 className='text-center font-semibold underline'>Terms & Conditions Page</h4>
                        <p className='text-base'>First, you need to go to the admin panel &gt; frontend pages &gt; terms & conditions page, where you will see a form. Here, you can create a terms & conditions page by filling out all the forms in different languages, and the contents will be shown on the terms & conditions page. </p>
                        <p className='text-base py-4 text-white rounded-md bg-[#FFA525] font-semibold mt-5 text-center'>Creating a terms & conditions page is the same process as creating an about page.</p>
                    </Tabs.TabPane>

                    <Tabs.TabPane tab="Whatsapp Settings" key="7">
                        <h4 className='text-center font-semibold underline'>Privacy Policy Page</h4>
                        <p className='text-base'>First, you need to go to the admin panel &gt; frontend pages &gt; privacy policy page, where you will see a form. Here, you can create a privacy policy page by filling out all the forms in different languages, and the contents will be shown on the privacy policy page. </p>
                        <p className='text-base py-4 text-white rounded-md bg-[#FFA525] font-semibold mt-5 text-center'>Creating a privacy policy page is the same process as creating an about page.</p>
                    </Tabs.TabPane>

                    <Tabs.TabPane tab="Email Settings" key="8">
                    <h4 className='text-center font-semibold underline'>Service Page</h4>
                        <p className='text-base'>First, you need to go to the admin panel &gt; frontend pages &gt; service page, where you will see a list of services. Here, you have to fill out all the forms for each service in different languages, and these data will be shown on the landing page. </p>
                        <div className='my-4'>
                            <h5 className='border-b-[1px] border-[#FFA525] capitalize pb-2'>Hero Section</h5>
                            <div className='m-4'>
                                <p className='text-base underline font-semibold capitalize'>admin panel</p>
                                <img className='h-auto w-auto shadow-sm' src='/images/admin/frontend-pages/service/service.png' alt="" />
                                <p className='text-base underline font-semibold capitalize mt-4'>landing page header section</p>
                                <img className='h-auto w-auto shadow-sm' src='/images/admin/frontend-pages/service/service-header-land.png' alt="" />
                                <p className='text-base underline font-semibold capitalize mt-4'>service page &gt; car</p>
                                <img className='h-auto w-auto shadow-sm' src='/images/admin/frontend-pages/service/service-land.png' alt="" />
                            </div>
                        </div>
                        <div className='my-4'>
                            <h5 className='border-b-[1px] border-[#FFA525] capitalize pb-2'>2nd Section</h5>
                            <div className='m-4'>
                                <p className='text-base underline font-semibold capitalize'>admin panel</p>
                                <img className='h-auto w-auto shadow-sm mx-auto' src='/images/admin/frontend-pages/service/second.png' alt="" />
                                <p className='text-base underline font-semibold capitalize mt-4'>service page</p>
                                <img className='h-auto w-auto shadow-sm' src='/images/admin/frontend-pages/service/second-land.png' alt="" />
                            </div>
                        </div>
                    </Tabs.TabPane>
                </Tabs>
            </div>
        </AdminLayout>
    );
};

export default Marketing;