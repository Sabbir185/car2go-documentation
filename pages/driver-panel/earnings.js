import React from 'react';
import AdminLayout from '../../layout/adminLayout';
import { SectionHeading } from '../../components/dashboard/common/common';
import Link from 'next/link';

const Earnings = () => {
    return (
        <AdminLayout>
            <div className='bg-yellow-50 bg-opacity-20 h-auto m-6 w-[90%] text-[16px] p-4 rounded'>
                <SectionHeading heading="Earnings" />
                <p>Earnings page shows a summary of the drivers&apos; earning related information.</p>
                <ul className='list-disc'>
                    <li><span className='font-bold'>Total Earning: </span>Total earnings by the driver till now</li>
                    <li><span className='font-bold'>Total Withdraw: </span>Total withdraw by the driver till now</li>
                    <li><span className='font-bold'>Balance: </span>Current balance available to withdraw</li>
                </ul>
                <p>The table that shows all the payments that has been added to the driver wallet</p>
                <p className='mt-3'>Clicking on the Trip Id will redirect the user to the <Link href="/trip-details"><a target='blank'>trip-details</a></Link> page</p>
                <img className='h-auto w-auto mx-auto mt-2' src="/images/driver-panel/earnings.png" alt="" />
            </div>
        </AdminLayout>
    );
};

export default Earnings;