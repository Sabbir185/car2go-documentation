import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import AdminLayout from '../../../layout/adminLayout';

const Setting = () => {
    const router = useRouter();

    const handledatabase = () => {
        router.push('/instruction/setting/db/')
    }

    return (
        <AdminLayout>
            <div className='bg-gray-50 h-auto m-6 w-[90%] text-[16px] p-4'>
                <h4 className='text-center'>Env File Setup Information</h4>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black'>.env File Setup Information</h5>
                    <div className='m-4'>
                        <p>Now hit your domain on the browser, for example: <span className='text-red-500 font-bold'>car2go.com</span>, the following page will be appeared. Now follow the below steps.</p>
                        <img className='h-auto w-auto my-4' src="/pictures/installation/setup.png" alt="" />
                    </div>
                </div>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black capitalize'> Admin creation</h5>
                    <div className='m-4'>
                        <p>In this section, the admin or company owner has to provide the basic information like name, email, phone number and password to activate the website like below picture.</p>
                        <img className='h-auto w-auto my-4' src="/pictures/installation/setup_done.png" alt="" />
                    </div>
                </div>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black capitalize'>Database setup </h5>
                    <p onClick={handledatabase} className='text-red-500 w-[100px] text-center p-2 rounded border-2 border-gray-100 font-medium cursor-pointer hover:border-2 hover:border-red-500'>Click here</p>
                </div>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black capitalize'>AWS Bucket Information</h5>
                    <div className='m-4'>
                        <p>Please fill out proper AWS bucket information. <Link href='https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-bucket.html'><a target='_blank' rel="opener" >Click Here for proper instructions</a></Link></p>
                        <img className='h-auto w-auto' src="/images/s4.png" alt="" />
                    </div>
                </div>
                <div className='my-4 shadow p-4'>
                    <p className='text-red-500 font-semibold mb-0'>After completion this process you need to restart the backend server.</p>
                </div>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black capitalize'>Server Restart</h5>
                    <div className='m-4'>
                        <p>Go to your cPanel or server panel. Click Node Project tab. You will see the backend project. Now click on backend project name. Like this</p>
                        <img className='h-auto w-auto' src="/images/restart1.png" alt="" />
                    </div>
                    <div className='m-4'>
                        <p>Then you will get this kind of pop up, follow the instructions in the picture.</p>
                        <img className='h-auto w-auto' src="/images/restart2.png" alt="" />
                    </div>
                    <div className='m-4'>
                        <p>Then click on the Restart button.</p>
                        <img className='h-auto w-auto' src="/images/restart3.png" alt="" />
                    </div>
                    <div className='my-4 shadow p-4'>
                        <p className='text-red-500 font-semibold mb-0'>Then go to your website and reload your frontend page. Then you can see your website landing page.</p>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
};

export default Setting;