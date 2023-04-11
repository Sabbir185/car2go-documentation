import React from 'react';

const PushNotifications = () => {
    return (
            <div>
                <h4 className='text-center border-b-[1px] py-2 border-black'>Push notification credentials</h4>
                <div className='m-4'>
                    <ul className='list-disc'>

                        <li className='my-4'>
                            <p className='border-b-[1px] border-black font-semibold text-[18px]'>Give the json file </p>
                            json file is collected from firebase console.
                            <img className=' w-auto mt-4' src="/images/setting/pn/push.png" alt=""/>
                        </li>
                        <h5 className='border-b-[1px] border-black'>
                            Getting the json file from firebase console
                        </h5>
                        <li className='my-4'>
                            <p className='border-b-[1px] border-black font-semibold text-[18px]'>Step 1: Go to firebase</p>
                            Go to firebase console.Click add project.
                            <img className=' w-auto mt-4' src="/images/setting/pn/gotofirebase.png" alt=""/>
                        </li>
                        <li className='my-4'>
                            <p className='border-b-[1px] border-black font-semibold text-[18px]'>Step 2: Enter project name</p>
                            Enter project name and click continue.
                            <img className=' w-auto mt-4' src="/images/setting/pn/name.png" alt=""/>
                        </li>
                        <li className='my-4'>
                            <p className='border-b-[1px] border-black font-semibold text-[18px]'>Step 3: Chose platform</p>
                            Chose platform in which you want to send push-notification.
                            <img className=' w-auto mt-4' src="/images/setting/pn/iosand.png" alt=""/>
                        </li>
                        <li className='my-4'>
                            <p className='border-b-[1px] border-black font-semibold text-[18px]'>Step 4: Configuration</p>
                           configure the project.Fill the required details.After filling the details collect the settings file and upload it .
                            <img className=' w-auto mt-4' src="/images/setting/pn/config.png" alt=""/>
                        </li>

                    </ul>
                </div>
            </div>

    );
};

export default PushNotifications;
