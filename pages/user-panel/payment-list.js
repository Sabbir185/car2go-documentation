import React from 'react';
import AdminLayout from '../../layout/adminLayout';
import { SectionHeading } from '../../components/dashboard/common/common';
import Link from 'next/link';

const PaymentList = () => {
    return (
        <AdminLayout>
            <div className='bg-yellow-50 bg-opacity-20 h-auto m-6 w-[90%] text-[16px] p-4 rounded'>
                <SectionHeading heading="Trip History" />
                <div>
                    <div>In this page, the user has access to all of his / her payments and information about their current status:
                        <ul className='list-disc'>
                            <li><span className='font-bold'>Trip Id: </span>The trip that the payment is related to. The user will be redirected to the <Link href="/user-panel/trip-details"><a className='underline'>trip-details</a></Link> page by clicking on the Trip ID.</li>
                            <li><span className='font-bold'>Transaction Id: </span> The payment&apos;s transaction id</li>
                            <li><span className='font-bold'>Driver Name: </span> The name of the driver who took the trip</li>
                            <li><span className='font-bold'>Driver Email: </span>The driver&apos;s email address</li>
                            <li><span className='font-bold'>Date: </span>Date of the trip.</li>
                            <li><span className='font-bold'>Time: </span>Time of the trip.</li>
                            <li><span className='font-bold'>Distance: </span>The total distance of the trip.</li>
                            <li><span className='font-bold'>Total Fare: </span>The total cost of the trip.</li>
                            <li><span className='font-bold'>Paid: </span>The amount paid by the user.</li>
                            <li><span className='font-bold'>payment_method: </span>The method of the payment</li>
                            <li><span className='font-bold'>Payment Status: </span>The current status of the payment. Several statuses may occur, including:
                                <ul className='list-disc'>
                                    <li>
                                        <span className='text-green-500 font-semi-bold'>Success: </span> The transaction was successful.
                                    </li>
                                    <li>
                                        <span className='text-red-500 font-semi-bold'>Failed: </span>The transaction has failed.
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                <img className='h-auto w-auto mx-auto mt-2' src="/images/user-panel/payment-history.png" alt="" />
            </div>
        </AdminLayout >
    );
};

export default PaymentList;