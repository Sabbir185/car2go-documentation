import React from 'react';
import { Tabs } from 'antd';
import AdminLayout from '../../../layout/adminLayout';

const driverManagement = () => {
    return (
        <AdminLayout>
            <div className='bg-yellow-50 bg-opacity-20 h-auto m-6 w-[90%] text-[16px] p-4 rounded'>
                <Tabs defaultActiveKey="1" centered>
                    {/* driver list */}
                    <Tabs.TabPane tab="Driver List" key="1">
                        <p className='text-base mt-2'>On this page, the admin can view all driver’s accounts and information. The admin can update and delete any driver using the action buttons.</p>
                        <img className='h-auto w-auto' src="/images/admin/driver-management/driver-list.png" alt="" />

                        <div className='my-6'>
                            <h5 className='border-b-[1px] border-[#FFA525] pb-2'>Ratings</h5>
                            <p className='text-base mt-2'>Here, the admin can view driver ratings that were given by users after completing a trip. The admin can manage it by making it active, inactive, or deleting it.</p>
                            <img className='h-auto w-auto mx-auto mt-2' src="/images/admin/driver-management/ratings.png" alt="" />
                        </div>
                    </Tabs.TabPane>

                    {/* vehicle list */}
                    <Tabs.TabPane tab="Vehicle List" key="2">
                        <p className='text-base mt-2'>On this page, the admin can view all driver’s vehicle list. The administrator can also view document details and update or delete any vehicle using the action buttons.</p>
                        <img className='h-auto w-auto' src="/images/admin/driver-management/vehicle-list.png" alt="" />

                        <div className='my-6'>
                            <h5 className='border-b-[1px] border-[#FFA525] pb-2'>Update Vehicle</h5>
                            <p className='text-base mt-2'>Here, the admin can update specific vehicle information and also update driver documents by clicking the click here button in the below.</p>
                            <img className='h-auto w-auto mx-auto mt-2' src="/images/admin/driver-management/vehicle-update.png" alt="" />
                        </div>
                    </Tabs.TabPane>

                    {/* driver earning */}
                    <Tabs.TabPane tab="Driver Earnings" key="3">
                        <p className='text-base mt-2'>On this page, the admin can view all drivers earnings lists. The administrator can also view earning details or delete any earning history using the action buttons.</p>
                        <img className='h-auto w-auto' src="/images/admin/driver-management/driver-earning.png" alt="" />
                    </Tabs.TabPane>

                    {/* document input */}
                    <Tabs.TabPane tab="Document Input" key="4">
                        {/* <p className='text-base mt-2'>On this page, the admin can view all drivers earnings lists. The administrator can also view earning details or delete any earning history using the action buttons.</p>
                        <img className='h-auto w-auto' src="/images/admin/driver-management/document-input.png" alt="" /> */}
                    </Tabs.TabPane>
                </Tabs>
            </div>
        </AdminLayout>
    );
};

export default driverManagement;