import React from 'react';
import AdminLayout from '../../layout/adminLayout';
import { SectionHeading } from '../../components/dashboard/common/common';

const Withdraw = () => {
    return (
        <AdminLayout>
            <div className='bg-yellow-50 bg-opacity-20 h-auto m-6 w-[90%] text-[16px] p-4 rounded'>
                <SectionHeading heading="Withdraw" />
                <p>Withdraw section is for making withdraw request. This page also shows a list of withdraws and their status</p>
                <img className='h-auto w-auto mx-auto mt-2' src="/images/driver-panel/withdraw.png" alt="" />
                <p className='mt-3 font-semibold'>To make a new withdraw request a user have to follow the steps below:</p>
                <ul className='list-disc'>
                    <li><span className='font-bold'>Step 1: </span>Click on the withdraw button</li>
                    <li><span className='font-bold'>Step 2: </span>Fill out the withdraw request form</li>
                    <li><span className='font-bold'>Step 3: </span>Submit and wait for the admin to process the request</li>
                </ul>
                <p>On submitting the request, the default status will be <span className='text-yellow-500'>Pending</span>.</p>
                <p>After processing the request by the admin, the status will be changed to <span className='text-green-500'>Completed</span>.</p>
                <img className='h-auto w-auto mx-auto mt-2' src="/images/driver-panel/withdraw-request.png" alt="" />
                <p className='mt-3 font-bold'>While choosing the payment gateway, the user can add their own if the preferred gateway is not listed. The user must ensure correct detailed account information in the Account Details field</p>
                <img className='h-auto w-auto mx-auto mt-2' src="/images/driver-panel/withdraw-method.png" alt="" />
                <p className='mt-3 font-bold text-white bg-[#FFA525] rounded px-4 py-2'>NOTE: If the user already has made a withdrawal request that has not been resolved by the admin yet, then the user can not make another withdrawal request</p>
            </div>
        </AdminLayout>
    );
};

export default Withdraw;