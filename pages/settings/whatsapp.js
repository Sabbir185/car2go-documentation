import Link from 'next/link';
import React from 'react';
import AdminLayout from '../../layout/adminLayout';

const backend = () => {
    return (
        <AdminLayout>
            <div className='bg-gray-50 h-auto m-6 w-[90%] text-[16px] p-2'>
                <h4 className='text-center border-b-[1px] py-2 border-black'>
                    WhatsApp settings
                </h4>
                <div className='m-4'>
                    <p className='text-[18px] font-semibold'>
                        To send whatsapp messages from the system, fill up credential  .</p>

                    <ul className='list-disc'>

                        <li className='my-4'>
                            <p className='border-b-[1px] border-black font-semibold text-[18px]'>Twillo Provider</p>
Twillo also provides whatsapp service. It is a great option for sending whatsapp messages from your application.
                            <p className='text-[18px] font-semibold text-green-500'>Go to <a href='https://www.twilio.com/' target='_blank' className='text-blue-500'>https://www.twilio.com/</a> and create an account.</p>
                            <p className='text-[18px] font-semibold text-green-500'>After creating an account, you will get an API key. Copy the API key and paste it in the API key field.</p>
                            <img className=' w-auto mt-4' src="/images/setting/wa/wa.png" alt=""/>
                        </li>
                    </ul>
                </div>
            </div>
        </AdminLayout>
    );
};

export default backend;