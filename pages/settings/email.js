import Link from 'next/link';
import React from 'react';
import AdminLayout from '../../layout/adminLayout';

const backend = () => {
    return (
        <AdminLayout>
            <div className='bg-gray-50 h-auto m-6 w-[90%] text-[16px] p-2'>
                <h4 className='text-center border-b-[1px] py-2 border-black'>
                    Email settings
                </h4>
                <div className='m-4'>
                    <p className='text-[18px] font-semibold'>To send email from the system,email credential need to be full-fill . There are three email option to chose from</p>
                    <p className='text-[18px] font-bold text-green-600'>** Select the default email. Email always send from default email ** </p>
                    <ul className='list-disc'>
                        <li className='my-4'>
                            <p className='border-b-[1px] border-black font-semibold text-[18px]'>SendGrid Smtp</p>
                            sendgrid is a cloud-based email service that provides reliable transactional and marketing email delivery. It is a great option for sending emails from your application. It is a great option for sending emails from your application.
                            Go to <a href='https://sendgrid.com/' target='_blank' className='text-blue-500'>https://sendgrid.com/</a> and create an account.
                            <p className='text-[18px] font-semibold text-green-500'>After creating an account, you will get an API key. Copy the API key and paste it in the API key field.</p>

                            <img className=' w-auto mt-4' src="/images/setting/email/sendgrid.png" alt=""/>
                        </li>
                        <li className='my-4'>
                            <p className='border-b-[1px] border-black font-semibold text-[18px]'>Gmail Provider</p>
                            Gmail is a free email service provided by Google. It is a great option for sending emails from your application.
                            <img className=' w-auto mt-4' src="/images/setting/email/gmail.png" alt=""/>
                        </li>
                        <li className='my-4'>
                            <p className='border-b-[1px] border-black font-semibold text-[18px]'>Other Provider</p>
                            other provider can be used to send email from the system.
                            <img className=' w-auto mt-4' src="/images/setting/email/other.png" alt=""/>
                        </li>

                    </ul>
                </div>
            </div>
        </AdminLayout>
    );
};

export default backend;