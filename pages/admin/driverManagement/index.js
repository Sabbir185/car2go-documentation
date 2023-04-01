import React from 'react';
import { Tabs } from 'antd';
import AdminLayout from '../../../layout/adminLayout';

const driverManagement = () => {
    return (
        <AdminLayout>
            <div className='bg-gray-50 h-auto m-6 w-[90%] text-[16px] p-4 rounded'>
                <Tabs defaultActiveKey="1" centered>
                    <Tabs.TabPane tab="Driver List" key="1">
                        <p className='text-base mt-2'>On this page, the admin can view all user’s accounts and all information about the user’s account details. The admin can update and delete in the action column.</p>
                        <img className='h-auto w-auto' src="/images/admin/driver-management/driver-list.png" alt="" />
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="Vehicle List" key="2">
                    Content of Tab Pane 2
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="Driver Earnings" key="3">
                    Content of Tab Pane 3
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="Document Input" key="4">
                    Content of Tab Pane 3
                    </Tabs.TabPane>
                </Tabs>
            </div>
        </AdminLayout>
    );
};

export default driverManagement;