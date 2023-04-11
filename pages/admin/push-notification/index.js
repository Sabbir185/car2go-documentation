import React from 'react';
import AdminLayout from '../../../layout/adminLayout';
import {Tabs} from 'antd';
import AllNotifications from "./all_notification";
import FailedNotifications from "./failed_notification";
import ScheduledNotifications from "./schedule_notification";
import SendNotifications from "./send_notification";
import ManageGroup from "./manage_group";


const pages = [
    {
        title:"Send Notification",
        page: <SendNotifications/>
    },
    {
        title: 'All Notifications',
        page: < AllNotifications/>
    },{
        title: 'Failed Notifications',
        page: < FailedNotifications/>
    },{
        title: 'Scheduled Notifications',
        page: < ScheduledNotifications/>
    },{
    title: 'Manage Groups',
    page: <ManageGroup/>
    }

]
const FrontendPages = () => {
    return (
        <AdminLayout>
            <div className='bg-yellow-50 bg-opacity-20 h-auto m-6 w-[90%] text-[16px] p-4 rounded'>
                <Tabs defaultActiveKey="1" centered>
                    {/* landing page */}
                    {
                        pages.map((page, index) => {
                            return (
                                <Tabs.TabPane tab={page.title} key={index + 1}>
                                    {page.page}
                                </Tabs.TabPane>
                            )
                        })
                    }

                </Tabs>
            </div>
        </AdminLayout>
    );
};

export default FrontendPages;
