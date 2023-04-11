import Link from 'next/link';
import React from 'react';
import AdminLayout from '../../layout/adminLayout';

const backend = () => {
    return (<AdminLayout>
            <div className='bg-gray-50 h-auto m-6 w-[90%] text-[16px] p-2'>
                <h4 className='text-center border-b-[1px] py-2 border-black'>Organization </h4>
                <div className='m-4'>
                    <ul className='list-disc'>
                        <li className='my-4'>
                            <p className='border-b-[1px] border-black font-semibold text-[18px]'>Descriptions</p>
                            Organization contains the list of all the organizations that are created by the admin. Admin
                            can create, edit, and delete organizations.
                            each organization contains the following information:
                            <ul className='list-disc ml-4'>
                                <li className='my-4'>
                                    <p className='border-b-[1px] border-black font-semibold text-[18px]'>Name</p>
                                    Name of the organization.
                                </li>
                                <li className='my-4'>
                                    <p className='border-b-[1px] border-black font-semibold text-[18px]'>Email</p>
                                    Email of the organization.
                                </li>
                                <li className='my-4'>
                                    <p className='border-b-[1px] border-black font-semibold text-[18px]'>Phone</p>
                                    Phone number of the organization.
                                </li>
                                <li className='my-4'>
                                    <p className='border-b-[1px] border-black font-semibold text-[18px]'>Address</p>
                                    Address of the organization.
                                </li>
                                <li className='my-4'>
                                    <p className='border-b-[1px] border-black font-semibold text-[18px]'>City</p>
                                    City of the organization.
                                </li>
                                <li className='my-4'>
                                    <p className='border-b-[1px] border-black font-semibold text-[18px]'>Postal Code</p>
                                    Postal code of the organization.
                                </li>
                                <li className='my-4'>
                                    <p className='border-b-[1px] border-black font-semibold text-[18px]'>Country</p>
                                    Country of the organization.
                                </li>
                            </ul>
                            <img className='h-[500px] w-auto mt-4' src="/images/support_ticket/organization.png"
                                 alt=""/>
                        </li>
                    </ul>
                </div>
            </div>
        </AdminLayout>);
};

export default backend;
