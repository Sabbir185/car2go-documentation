import React from 'react';
import AdminLayout from '../layout/adminLayout';

const InitalSetup = () => {

    return (
        <AdminLayout>
        <div className='md:mx-10'>
            <div className='bg-gray-50 h-auto mt-6 text-[16px] pt-2'>
                <h5 className='text-center capitalize text-gray-700 font-semibold'>Quick Website Setup</h5>
                <div className='m-4 bg-green-500 p-4'>
                    <p className='text-center mb-0 text-white text-[20px]'>Make sure that, you have already filled up
                        <span className="italic pr-1">Admin Configuration </span> form and restart your backend server.</p>
                </div>
                <div className='m-4'>
                    <h5 className='border-b-[1px] border-black capitalize'>1. Admin login</h5>
                    <p className="my-3">To log in as admin, use the registered email when filling out the quick setup form.</p>
                    <img className='h-96 w-auto mx-auto' src='/pictures/initial-setup/login.png' alt="" />
                </div>

                <li className='my-4 m-4'>
                    <span className="border-b border-gray-500 mb-4 pb-1">2. Website settings and service information fill up</span>
                    <ul className='list-disc pt-3 space-y-1'>
                        <li>
                            1. At the beginning of the start process, you need to fill out the settings information. Here, <span className="text-blue-500">Site Settings, Application URLs, and Email Settings</span> are imports. Please fill out the information first.
,                        </li>
                        <li>
                            2. Then, <span className="text-blue-500">Service Management</span> section. You may need some time to complete this section because these are your business input fields.
                        </li>
                        <li>
                            3. After that, you need to create some <span className="text-blue-500">Document input</span> fields. These are dynamic input fields that will display during the driver&apos;s vehicle registration form. 
                        </li>
                        <li>
                            4. Now, navigate to the <span className="text-blue-500">Frontend Pages</span> section, where all of your website&apos;s information will be displayed. For more information, navigate the <span className="text-blue-500">Admin Panel</span> section.
                        </li>
                    </ul>
                </li>


                <div className='m-4 mb-3'>
                    <img className='h-auto w-auto mx-auto' src='/pictures/initial-setup/setting1.png' alt="" />
                </div>
                <br />
                <div className='m-4'>
                    <img className='h-auto w-auto mx-auto' src='/pictures/initial-setup/setting3.png' alt="" />
                </div>
                <br />
                <div className='m-4'>
                    <img className='h-auto w-auto mx-auto' src='/pictures/initial-setup/setting-document.png' alt="" />
                </div>
                <br />
                <div className='m-4'>
                    <img className='h-auto w-auto mx-auto' src='/pictures/initial-setup/settings4.png' alt="" />
                </div>
            </div>
        </div>
        </AdminLayout>
    );
};

export default InitalSetup;