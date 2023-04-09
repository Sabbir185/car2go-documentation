import Link from 'next/link';
import React from 'react';
import AdminLayout from '../../layout/adminLayout';

const backend = () => {
    return (
        <AdminLayout>
            <div className='bg-gray-50 h-auto m-6 w-[90%] text-[16px] p-2'>
                <h4 className='text-center border-b-[1px] py-2 border-black'>
                    Site settings
                </h4>
                <div className='m-4'>
                    <ul className='list-disc'>
                        <li className='my-4'>
                            <p className='border-b-[1px] border-black font-semibold text-[18px]'>Part 1 : Site
                                credentials</p>

                            Site credentials are basic information about the site.They are all self explanatory.
                            <img className=' w-auto mt-4' src="/images/setting/sitesetting/credentials.png" alt=""/>
                        </li>
                        <li className='my-4'>
                            <p className='border-b-[1px] border-black font-semibold text-[18px]'>Part 2 : Fill Social
                                media links</p>
                            social medial link are displayed in the footer of the site.
                            <img className=' w-auto mt-4' src="/images/setting/sitesetting/sosial.png" alt=""/>
                        </li>
                        <li className='my-4'>
                            <p className='border-b-[1px] border-black font-semibold text-[18px]'>Part 2 : Recaptcha
                                credentials</p>
                            recaptcha credentials are used to prevent spamming of the sign up form.
                            <img className=' w-auto mt-4' src="/images/setting/sitesetting/recaptcha.png" alt=""/>
                        </li>

                    </ul>
                </div>
            </div>
        </AdminLayout>
    );
};

export default backend;