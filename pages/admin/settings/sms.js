import React from 'react';

const SMS = () => {
    return (
            <div>
                <h4 className='text-center border-b-[1px] py-2 border-black'>
                    SMS settings
                </h4>
                <div className='m-4'>
                    <p className='text-[18px] font-semibold'>
                        To send SMS from the system, SMS credential need to be full-fill .</p>

                    <ul className='list-disc'>

                        <li className='my-4'>
                            <p className='border-b-[1px] border-black font-semibold text-[18px]'>Twillo Provider</p>
Twillo is a cloud-based email service that provides reliable transactional and marketing email delivery. It is a great option for sending SMS from your application.
                            <p className='text-[18px] font-semibold text-green-500'>Go to <a href='https://www.twilio.com/' target='_blank' className='text-blue-500'>https://www.twilio.com/</a> and create an account.</p>
                            <p className='text-[18px] font-semibold text-green-500'>After creating an account, you will get an API key. Copy the API key and paste it in the API key field.</p>
                            <img className=' w-auto mt-4' src="/images/setting/wa/sms.png" alt=""/>
                        </li>
                    </ul>
                </div>
            </div>

    );
};

export default SMS;
