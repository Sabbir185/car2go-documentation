import React from 'react';

const SendNotifications = () => {
    return (
            <div>
                <h4 className='text-center border-b-[1px] py-2 border-black'>Send Push Notifications to
                    Applications </h4>
                <div className='m-4'>
                    <ul className='list-disc'>
                        <li className='my-4'>
                            <p className='border-b-[1px] border-black font-semibold text-[18px]'>Step 1 :  Select the notification
                                candidate.</p>
                            System can send notifications to all users, drivers, or a specific group of users.To send a
                            notification to a specific group of users, you need to select the group from the drop-down
                            list.Or you can select all users or drivers.
                            <img className=' w-auto mt-4' src="/images/push_notifications/send_candidate.png" alt=""/>
                        </li>
                        <li className='my-4'>
                            <p className='border-b-[1px] border-black font-semibold text-[18px]'>Step 2 : Fill body </p>
                            After selecting the notification candidate, you need to enter the title and body of the
                            notification. The title and body of the notification will be displayed on the user's device.
                        </li>
                        <li className='my-4'>
                            <p className='border-b-[1px] border-black font-semibold text-[18px]'>Step 3 : Pick emoji</p>
                            select desired emoji with the help of emoji picker. It is optional.The emoji picker will be displayed when
                            you click on the emoji icon.Selected emoji will be displayed in the body field.
                            <img className='h-auto w-auto my-4' src="/images/push_notifications/emoji_in_send_page.png" alt=""/>

                        </li>
                        <li className='my-4'>
                            <p className='border-b-[1px] border-black font-semibold text-[18px]'>Step 4 : Chose delivery time</p>
                            After entering the title and body of the notification, you need to select the delivery time.there are two options to select the delivery time.
                            <ul className='list-disc'>
                                <li className='my-4'>
                                    <p className='border-b-[1px] border-black font-semibold text-[18px]'>Step 4.1 </p>
                                    <p>Send Now: If you select this option, the notification will be sent immediately.</p>
                                    <img className='h-auto w-auto my-4' src="/images/push_notifications/send_now.png" alt=""/>
                                </li>
                                <li className='my-4'>
                                    <p className='border-b-[1px] border-black font-semibold text-[18px]'>Step 4.2</p>
                                    <p>Scheduled for Later: If you select this option, you need to select the date and time
                                        for the notification to be sent.</p>
                                    <img className='h-auto w-auto my-4' src="/images/push_notifications/send_scheduled_notification.png" alt=""/>
                                </li>
                            </ul>
                        </li>
                        <li className='my-4'>
                            <p className='border-b-[1px] border-black font-semibold text-[18px]'>Step 5</p>
                            After selecting the delivery time, you need to click on the send button to send the
                            notification.
                        </li>
                        <li className={'my-4'}>
                            <p className='border-b-[1px] border-black font-semibold text-[18px]'>Step 6</p>
                            <p>Here is the example of the notification that will be sent to the user's device.</p>
                            <img className='h-auto w-auto my-4' src="/images/push_notifications/phone_sample.png" alt=""/>
                        </li>
                    </ul>
                </div>
            </div>
    );
};

export default SendNotifications;
