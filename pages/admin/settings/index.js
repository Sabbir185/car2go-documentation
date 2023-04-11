import React from 'react';
import AdminLayout from '../../../layout/adminLayout';
import {Tabs} from 'antd';
import AppUrl from "./app_url";
import SiteSettings from "./site_settings";
import Email from "./email";
import SMS from "./sms";
import PushNotification from "../push-notification";
import Whatsapp from "./whatsapp";
import Language from "./language";
import Payment from "./payment";


const pages = [
    {
        title: 'App Url',
        page: < AppUrl/>
    }, {
        title: 'Site Settings',
        page: <SiteSettings/>
    }, {
        title: 'Emails Settings',
        page: <Email/>
    }, {
        title: 'SMS Settings',
        page: <SMS/>
    },
    {
        title: 'Whatsapp Settings',
        page: <Whatsapp/>
    },
    {
        title: 'Push Notification',
        page: <PushNotification/>
    },
    {
        title: 'Language Settings',
        page: <Language/>
    },
    {
        title: 'Payment Settings',
        page: <Payment/>
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
