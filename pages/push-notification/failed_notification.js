import Link from 'next/link';
import React from 'react';
import AdminLayout from '../../layout/adminLayout';

const backend = () => {
    return (
        <AdminLayout>
            <div className='bg-gray-50 h-auto m-6 w-[90%] text-[16px] p-2'>
                <h4 className='text-center border-b-[1px] py-2 border-black'>Failed  Push-notifications </h4>
                <div className='m-4'>
                    <ul className='list-disc'>
                        <li className='my-4'>
                            <p className='border-b-[1px] border-black font-semibold text-[18px]'>Descriptions</p>
                            All the push-notifications that are <span className={'text-red-500'}>failed to sent</span> will be displayed in this table.Push-notifications are sorted by the date and time they are sent.
                            Table contains the following columns:
                            <ul className='list-disc'>
                                <li className='my-4'>
                                    <p className='border-b-[1px] border-black font-semibold text-[18px]'>Title</p>
                                    <p>It is the title of the notification that is sent to the user.</p>
                                </li>
                                <li className='my-4'>
                                    <p className='border-b-[1px] border-black font-semibold text-[18px]'>Body</p>
                                    <p>It is the body of the notification that is sent to the user.</p>
                                </li>
                                <li className='my-4'>
                                    <p className='border-b-[1px] border-black font-semibold text-[18px]'>Status</p>
                                    <p>a notification's status can be either success,scheduled or failed</p>
                                </li>
                                <li className='my-4'>
                                    <p className='border-b-[1px] border-black font-semibold text-[18px]'>Date</p>
                                    <p>It is the date and time when the notification is sent to the user.</p>
                                </li>
                                <li className='my-4'>
                                    <p className='border-b-[1px] border-black font-semibold text-[18px]'>Group Name</p>
                                    <p>It is the name of the group to which the notification is sent.if group name showed as "...", that means it is send to all user or driver or users. </p>
                                </li>
                            </ul>
                            <img className='h-[500px] w-auto mt-4' src="/images/push_notifications/failed.png" alt="" />
                        </li>

                    </ul>
                </div>
            </div>
        </AdminLayout>
    );
};

export default backend;