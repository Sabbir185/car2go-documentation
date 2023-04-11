import React from 'react';

const ScheduledNotifications = () => {
    return (
            <div>
                <h4 className='text-center border-b-[1px] py-2 border-black'>Scheduled Notifications</h4>
                <div className='m-4'>
                    <ul className='list-disc'>
                        All the Scheduled  push-notifications that are yet to sent to the users will be displayed in this table.
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
                                <p className='border-b-[1px] border-black font-semibold text-[18px]'>Scheduled Date</p>
                                <p>It is the date and time when the notification will be sent to the user.</p>
                            </li>
                            <li className='my-4'>
                                <p className='border-b-[1px] border-black font-semibold text-[18px]'>Group Name</p>
                                <p>It is the name of the group to which the notification is sent.if group name showed as "...", that means it is send to all user or driver or users. </p>
                            </li>
                        </ul>

                            <img className='h-[500px] w-auto mt-4' src="/images/push_notifications/schedule.png" alt="" />
                    </ul>
                </div>
            </div>
    );
};

export default ScheduledNotifications;
