import React from 'react';
import { Tabs } from 'antd';
import AdminLayout from '../../../layout/adminLayout';
import { useRouter } from 'next/router';

const DriverManagement = () => {
    const router = useRouter();

    const handleTermsRouteChange = () => {
        router.push('driverManagement/termCon/')
    }

    return (
        <AdminLayout>
            <div className='bg-yellow-50 bg-opacity-20 h-auto m-6 w-[90%] text-[16px] p-4 rounded'>
                <Tabs defaultActiveKey="1" centered>
                    {/* driver list */}
                    <Tabs.TabPane tab="Driver List" key="1">
                        <p className='text-base mt-2'>On this page, the admin can view all driver’s accounts and information. The admin can update and delete any driver using the action buttons.</p>
                        <img className='h-auto w-auto shadow-sm' src="/images/admin/driver-management/driver-list.png" alt="" />

                        <div className='my-6'>
                            <h5 className='border-b-[1px] border-[#FFA525] pb-2'>Ratings</h5>
                            <p className='text-base mt-2'>Here, the admin can view driver ratings that were given by users after completing a trip. The admin can manage it by making it active, inactive, or deleting it.</p>
                            <img className='h-auto w-auto mx-auto mt-2 shadow-sm' src="/images/admin/driver-management/ratings.png" alt="" />
                        </div>
                    </Tabs.TabPane>

                    {/* vehicle list */}
                    <Tabs.TabPane tab="Vehicle List" key="2">
                        <p className='text-base mt-2'>On this page, the admin can view all driver’s vehicle list. The administrator can also view document details and update or delete any vehicle using the action buttons.</p>
                        <img className='h-auto w-auto shadow-sm' src="/images/admin/driver-management/vehicle-list.png" alt="" />

                        <div className='my-6'>
                            <h5 className='border-b-[1px] border-[#FFA525] pb-2'>Update Vehicle</h5>
                            <p className='text-base mt-2'>Here, the admin can update specific vehicle information and also update driver documents by clicking the click here button in the below.</p>
                            <img className='h-auto w-auto mx-auto mt-2 shadow-sm' src="/images/admin/driver-management/vehicle-update.png" alt="" />
                        </div>
                    </Tabs.TabPane>

                    {/* driver earning */}
                    <Tabs.TabPane tab="Driver Earnings" key="3">
                        <p className='text-base mt-2'>On this page, the admin can view all drivers earnings lists. The administrator can also view earning details or delete any earning history using the action buttons.</p>
                        <img className='h-auto w-auto shadow-sm' src="/images/admin/driver-management/driver-earning.png" alt="" />
                    </Tabs.TabPane>

                    {/* document input */}
                    <Tabs.TabPane tab="Document Input" key="4">
                        <p className='text-base mt-2'>On this page, the admin can view all registration form fields that will be shown on the landing page &gt; earn with share &gt; register page. The administrator can also add new form fields by clicking the <span className='text-[#FFA525] font-semibold'>Add Form Fields</span> button, and can also delete any form field using the action buttons on the right side.</p>
                        <img className='h-auto w-auto shadow-sm' src="/images/admin/driver-management/document/form-fields.png" alt="" />
                        <p className='text-base underline font-semibold capitalize mt-4'>landing page &gt; earn with share &gt; register</p>
                        <img className='h-auto w-auto shadow-sm' src="/images/admin/driver-management/document/lan-regi.png" alt="" />
                        <div className='my-4'>
                            <h5 className='border-b-[1px] border-[#FFA525] capitalize pb-2'>Add Form Fields</h5>
                            <div className='m-4'>
                                <p className='text-base'>When the admin clicks on <span className='text-[#FFA525] font-semibold'>Add Form Fields</span> button, then the admin will see a drawer. Now admin can add new fields from here.</p>
                                <img className='h-auto w-auto shadow-sm border mx-auto' src="/images/admin/driver-management/document/add-new.png" alt="" />
                                <p className='text-lg font-medium mt-4 mb-0 underline'>Method of use:</p>
                                <ul className='list-disc text-base'>
                                    <li>First, you need to insert a name in Input Name filed.
                                        <img className='h-auto w-auto m-2 border' src="/images/admin/driver-management/document/input-name.png" alt="" />
                                    </li>
                                    <li>Then select input type.
                                    <img className='h-auto w-auto m-2 border' src="/images/admin/driver-management/document/input-type.png" alt="" />
                                        <p className='mt-4 mb-0'>While defining the input field you need to follow some information below:</p>
                                        <ul className='list-disc'>
                                            <li>We have included 6 types of field types in this list:
                                                <ul className='list-disc'>
                                                    <li>Text: It collects string values.</li>
                                                    <li>Number: It collects number value.</li>
                                                    <li>Password: It collects password.</li>
                                                    <li>Textarea: Through this, a lot of data can be taken at once.</li>
                                                    <li>Images: It collects images.</li>
                                                    <li>Terms and conditions: Additional links can be added within this field.
                                                        <img className='h-auto w-auto m-2 border' src="/images/admin/driver-management/document/terms-condition.png" alt="" />
                                                    </li>
                                                    <li>Input Placeholder: You need to specify what messages you want to show the audience.
                                                        <img className='h-auto w-auto m-2 border' src="/images/placeholder.png" alt="" />
                                                    </li>
                                                    <li>You can manage the field whether it is required or not by selecting Yes or No respectively.
                                                        <img className='h-auto w-auto m-2 border' src="/images/admin/driver-management/document/required.png" alt="" />
                                                    </li>
                                                    <li>Status: You can also set the status of the field too. If the status is True then this field will be visible to users. If the status is set to False then it will not be visible to users.
                                                        <img className='h-auto w-auto m-2 border' src="/images/admin/driver-management/document/status.png" alt="" />
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className='my-4 bg-[#FFA525] p-4 flex items-center'>
                                        <div>
                                            <h5 className='inline  text-white'>Terms and Conditions: </h5>
                                            <p className='inline text-white'>It is very important to add a terms and conditions option to your driver registration form. Please follow the process.</p>
                                        </div>
                                        <button className='inline  text-white mx-4 border-2 border-white rounded px-4 py-1 cursor-pointer font-bold hover:bg-white hover:!text-[#FFA525]' onClick={handleTermsRouteChange}>
                                            Click Here</button>
                                    </li>
                                </ul>
                            </div>
                        </div> 
                    </Tabs.TabPane>
                </Tabs>
            </div>
        </AdminLayout>
    );
};

export default DriverManagement;