import React from 'react';
import AdminLayout from '../../../layout/adminLayout';
import { Tabs } from 'antd';

const FrontendPages = () => {
    return (
        <AdminLayout>
            <div className='bg-yellow-50 bg-opacity-20 h-auto m-6 w-[90%] text-[16px] p-4 rounded'>
                <Tabs defaultActiveKey="1" centered>
                    {/* landing page */}
                    <Tabs.TabPane tab="Landing Page" key="1">
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
                        <div className='my-4'>
                            <h5 className='border-b-[1px] border-[#FFA525] capitalize pb-2'>Brand Partner Section</h5>
                            <div className='m-4'>
                                <p className='text-base underline font-semibold capitalize'>admin panel</p>
                                <img className='h-auto w-auto shadow-sm' src='/images/admin/frontend-pages/landing-page/brand.png' alt="" />
                                <p className='text-base underline font-semibold capitalize mt-4'>landing page</p>
                                <img className='h-auto w-auto shadow-sm' src='/images/admin/frontend-pages/landing-page/brand-land.png' alt="" />
                            </div>
                        </div>
                        <div className='my-4'>
                            <h5 className='border-b-[1px] border-[#FFA525] capitalize pb-2'>Work Section</h5>
                            <div className='m-4'>
                                <p className='text-base underline font-semibold capitalize'>admin panel</p>
                                <img className='h-auto w-auto shadow-sm' src='/images/admin/frontend-pages/landing-page/work.png' alt="" />
                                <p className='text-base underline font-semibold capitalize mt-4'>landing page</p>
                                <img className='h-auto w-auto shadow-sm' src='/images/admin/frontend-pages/landing-page/work-land.png' alt="" />
                            </div>
                        </div>
                        <div className='my-4'>
                            <h5 className='border-b-[1px] border-[#FFA525] capitalize pb-2'>Numeric Statistics Section</h5>
                            <div className='m-4'>
                                <p className='text-base underline font-semibold capitalize'>admin panel</p>
                                <img className='h-auto w-auto shadow-sm' src='/images/admin/frontend-pages/landing-page/numeric.png' alt="" />
                                <p className='text-base underline font-semibold capitalize mt-4'>landing page</p>
                                <img className='h-auto w-auto shadow-sm' src='/images/admin/frontend-pages/landing-page/numeric-land.png' alt="" />
                            </div>
                        </div>
                        <div className='my-4'>
                            <h5 className='border-b-[1px] border-[#FFA525] capitalize pb-2'>Benifit Section</h5>
                            <div className='m-4'>
                                <p className='text-base underline font-semibold capitalize'>admin panel</p>
                                <img className='h-auto w-auto shadow-sm mx-auto' src='/images/admin/frontend-pages/landing-page/benifit.png' alt="" />
                                <p className='text-base underline font-semibold capitalize mt-4'>landing page</p>
                                <img className='h-auto w-auto shadow-sm' src='/images/admin/frontend-pages/landing-page/benifit-land.png' alt="" />
                            </div>
                        </div>
                    </Tabs.TabPane>

                    <Tabs.TabPane tab="Login" key="2">
                        <h4 className='text-center font-semibold underline'>Login Page</h4>
                        <p className='text-base'>First, you need to go to the admin panel &gt; frontend pages &gt; login page, where you will see a section. Here, you have to input images in different languages, and the image will be shown on the login page. </p>
                        <p className='text-base underline font-semibold capitalize mt-4'>admin panel</p>
                        <img className='h-auto w-auto shadow-sm' src='/images/admin/frontend-pages/landing-page/login.png' alt="" />
                        <p className='text-base underline font-semibold capitalize mt-4'>login page</p>
                        <img className='h-auto w-auto shadow-sm' src='/images/admin/frontend-pages/landing-page/login-land.png' alt="" />
                    </Tabs.TabPane>

                    <Tabs.TabPane tab="Contact" key="3">
                        <h4 className='text-center font-semibold underline'>Contact Page</h4>
                        <p className='text-base'>First, you need to go to the admin panel &gt; frontend pages &gt; contact page, where you will see 3 sections. Here, you have to fill out all the forms in different languages, and the information will be shown on the contact page. </p>
                        <p className='text-base underline font-semibold capitalize mt-4'>admin panel</p>
                        <img className='h-auto w-auto shadow-sm' src='/images/admin/frontend-pages/landing-page/contact.png' alt="" />
                        <img className='h-auto w-auto shadow-sm' src='/images/admin/frontend-pages/landing-page/contact-information.png' alt="" />
                        <p className='text-base underline font-semibold capitalize mt-4'>contact page</p>
                        <img className='h-auto w-auto shadow-sm' src='/images/admin/frontend-pages/landing-page/contact-land.png' alt="" />
                        <img className='h-auto w-auto shadow-sm mt-4' src='/images/admin/frontend-pages/landing-page/contact-information-land.png' alt="" />
                    </Tabs.TabPane>

                    <Tabs.TabPane tab="Faq" key="4">
                        <h4 className='text-center font-semibold underline'>Faq Page</h4>
                        <p className='text-base'>First, you need to go to the admin panel &gt; frontend pages &gt; faq page, where you will see a form. Here, you can delete, update, and create a new FAQ in different languages, and the FAQs will be shown on the FAQ page. </p>
                        <p className='text-base underline font-semibold capitalize mt-4'>admin panel</p>
                        <img className='h-auto w-auto shadow-sm' src='/images/admin/frontend-pages/landing-page/faq.png' alt="" />
                        <p className='text-base underline font-semibold capitalize mt-4'>faq page</p>
                        <img className='h-auto w-auto shadow-sm' src='/images/admin/frontend-pages/landing-page/faq-land.png' alt="" />
                    </Tabs.TabPane>

                    <Tabs.TabPane tab="About" key="5">
                        <h4 className='text-center font-semibold underline'>About Page</h4>
                        <p className='text-base'>First, you need to go to the admin panel &gt; frontend pages &gt; about page, where you will see a form. Here, you can create an about page by filling out all the forms in different languages, and the contents will be shown on the about page. </p>
                        <p className='text-base underline font-semibold capitalize mt-4'>admin panel</p>
                        <img className='h-auto w-auto shadow-sm' src='/images/admin/frontend-pages/landing-page/about.png' alt="" />
                        <p className='text-base underline font-semibold capitalize mt-4'>about page</p>
                        <img className='h-auto w-auto shadow-sm mx-auto' src='/images/admin/frontend-pages/landing-page/about-land.png' alt="" />
                    </Tabs.TabPane>

                    <Tabs.TabPane tab="Terms & Conditions" key="6">
                        <h4 className='text-center font-semibold underline'>Terms & Conditions Page</h4>
                        <p className='text-base'>First, you need to go to the admin panel &gt; frontend pages &gt; terms & conditions page, where you will see a form. Here, you can create a terms & conditions page by filling out all the forms in different languages, and the contents will be shown on the terms & conditions page. </p>
                        <p className='text-base py-4 text-white rounded-md bg-[#FFA525] font-semibold mt-5 text-center'>Creating a terms & conditions page is the same process as creating an about page.</p>
                    </Tabs.TabPane>

                    <Tabs.TabPane tab="Privacy Policy" key="7">
                        <h4 className='text-center font-semibold underline'>Privacy Policy Page</h4>
                        <p className='text-base'>First, you need to go to the admin panel &gt; frontend pages &gt; privacy policy page, where you will see a form. Here, you can create a privacy policy page by filling out all the forms in different languages, and the contents will be shown on the privacy policy page. </p>
                        <p className='text-base py-4 text-white rounded-md bg-[#FFA525] font-semibold mt-5 text-center'>Creating a privacy policy page is the same process as creating an about page.</p>
                    </Tabs.TabPane>

                    <Tabs.TabPane tab="Service" key="8">
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

                    <Tabs.TabPane tab="Business" key="9">
                        <h4 className='text-center font-semibold underline'>Business Page</h4>
                        <p className='text-base'>First, you need to go to the admin panel &gt; frontend pages &gt; business page, where you will see a form. Here, you can create a business page by filling out all the forms in different languages, and the contents will be shown on the business page. </p>
                        <p className='text-base py-4 text-white rounded-md bg-[#FFA525] font-semibold mt-5 text-center'>Creating a business page is the same process as creating an about page.</p>
                    </Tabs.TabPane>

                    <Tabs.TabPane tab="Safety" key="10">
                        <h4 className='text-center font-semibold underline'>Safety Page</h4>
                        <p className='text-base'>First, you need to go to the admin panel &gt; frontend pages &gt; safety page, where you will see a form. Here, you can create a safety page by filling out all the forms in different languages, and the contents will be shown on the safety page. </p>
                        <p className='text-base underline font-semibold capitalize mt-4'>admin panel</p>
                        <img className='h-auto w-auto shadow-sm' src='/images/admin/frontend-pages/landing-page/safety.png' alt="" />
                        <p className='text-base underline font-semibold capitalize mt-4'>safety page</p>
                        <img className='h-auto w-auto shadow-sm mx-auto' src='/images/admin/frontend-pages/landing-page/safety-land.png' alt="" />
                    </Tabs.TabPane>

                    <Tabs.TabPane tab="Blog" key="11">
                        <h4 className='text-center font-semibold underline'>Blog Page</h4>
                        <p className='text-base'>First, you need to go to the admin panel &gt; frontend pages &gt; blog page, where you will see a form. Here, you can delete, update, and create a new blog in different languages, and the blogs will be shown on the blog page. </p>
                        <p className='text-base underline font-semibold capitalize mt-4'>admin panel</p>
                        <img className='h-auto w-auto shadow-sm' src='/images/admin/frontend-pages/landing-page/blog.png' alt="" />
                        <p className='text-base underline font-semibold capitalize mt-4'>blog page</p>
                        <img className='h-auto w-auto shadow-sm mx-auto' src='/images/admin/frontend-pages/landing-page/blog-land.png' alt="" />
                    </Tabs.TabPane>

                    <Tabs.TabPane tab="Press" key="12">
                        <h4 className='text-center font-semibold underline'>Press Page</h4>
                        <p className='text-base'>First, you need to go to the admin panel &gt; frontend pages &gt; press, where you will see a form. Here, you can delete, update, and create a new press in different languages, and the presses will be shown on the press page. </p>
                        <p className='text-base underline font-semibold capitalize mt-4'>admin panel</p>
                        <img className='h-auto w-auto shadow-sm' src='/images/admin/frontend-pages/landing-page/press.png' alt="" />
                        <p className='text-base underline font-semibold capitalize mt-4'>press page</p>
                        <img className='h-auto w-auto shadow-sm mx-auto' src='/images/admin/frontend-pages/landing-page/press-land.png' alt="" />
                    </Tabs.TabPane>

                    <Tabs.TabPane tab="Custom" key="13">
                        <h4 className='text-center font-semibold underline'>Custom Page</h4>
                        <p className='text-base'>First, you need to go to the admin panel &gt; frontend pages &gt; custom page. On this page, you can add an additional page for your website, where you can specify the menu or footer to display. You can delete or update all custom page data. Click on the <span className='text-[#FFA525] font-semibold'>Add New Page</span> button and submit the title of your custom page. Then you have to fill out all the input forms for a specific custom page in different languages.</p>
                        <p className='text-base underline font-semibold capitalize mt-4'>admin panel</p>
                        <img className='h-auto w-auto shadow-sm' src='/images/admin/frontend-pages/custom-page/custom.png' alt="" />
                        <p className='text-base underline font-semibold capitalize mt-4'>landing page header section</p>
                        <img className='h-auto w-auto shadow-sm mx-auto' src='/images/admin/frontend-pages/custom-page/custom-heading-land.png' alt="" />
                        <p className='text-base underline font-semibold capitalize mt-4'>landing page footer section</p>
                        <img className='h-auto w-auto shadow-sm mx-auto' src='/images/admin/frontend-pages/custom-page/custom-footer-land.png' alt="" />
                        <p className='text-base underline font-semibold capitalize mt-4'>custom page</p>
                        <img className='h-auto w-auto shadow-sm mx-auto' src='/images/admin/frontend-pages/custom-page/custom-land.png' alt="" />
                    </Tabs.TabPane>
                </Tabs>
            </div>
        </AdminLayout>
    );
};

export default FrontendPages;