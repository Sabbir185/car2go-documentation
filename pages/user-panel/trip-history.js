import React from 'react';
import AdminLayout from '../../layout/adminLayout';
import { SectionHeading } from '../../components/dashboard/common/common';
import Link from 'next/link';

const TripHistory = () => {

    return (
        <AdminLayout>
            <div className='bg-yellow-50 bg-opacity-20 h-auto m-6 w-[90%] text-[16px] p-4 rounded'>
                <SectionHeading heading="Trip History" />
                <div>
                    <div>The user can access various trip-related information in this section:
                        <ul className='list-disc'>
                            <li><span className='font-bold'>Driver Name: </span> The name of the driver who will be handling this trip.</li>
                            <li><span className='font-bold'>Date: </span>Date of the Trip</li>
                            <li><span className='font-bold'>Time: </span>Time of the Trip</li>
                            <li><span className='font-bold'>Total Fare: </span>The total cost of the journey.</li>
                            <li><span className='font-bold'>Status: </span>The Trip&apos;s present state. There are various statuses that can exist:
                                <ul className='list-disc'>
                                    <li>
                                        <span className='text-yellow-500 font-semi-bold'>Pending: </span> The user has submitted a trip request, but no drivers have yet accepted it.
                                    </li>
                                    <li>
                                        <span className='text-blue-500 font-semi-bold'>Accepted: </span>A driver has agreed to take the trip.
                                    </li>
                                    <li>
                                        <span className=' font-semi-bold'>Moving: </span>The Trip has begun, and the car is moving.
                                    </li>
                                    <li>
                                        <span className='text-red-500 font-semi-bold'>Declined: </span>The driver has denied to take the passengers.
                                    </li>

                                </ul>
                            </li>
                            <li><span className='font-bold'>Action: </span>The user may examine additional information about the trip by clicking the eye icon in the Action column. The user will be sent to the &ldquo;trip-details&rdquo; page after clicking the eye icon.More details can be found in <Link href="/user-panel/trip-details"><a className='underline'>trip-details</a></Link> page.</li>
                        </ul>
                    </div>
                </div>
                <img className='h-auto w-auto mx-auto mt-2' src="/images/user-panel/trip-history.png" alt="" />
            </div>
        </AdminLayout>
    );
};

export default TripHistory;