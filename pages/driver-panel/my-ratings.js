import React from 'react';
import AdminLayout from '../../layout/adminLayout';
import { SectionHeading } from '../../components/dashboard/common/common';
import Link from 'next/link';

const MyRatings = () => {
    return (
        <AdminLayout>
            <div className='bg-yellow-50 bg-opacity-20 h-auto m-6 w-[90%] text-[16px] p-4 rounded'>
                <SectionHeading heading="My Ratings" />
                <p>Drivers receive ratings from the user when a trip is finished through the app </p>
                <p>This section shows:</p>
                <ul className='list-disc'>
                    <li>The total number of rating the driver got</li>
                    <li>Average rating based on all the ratings</li>
                    <li>A table containing all the ratings earned from different trips</li>
                </ul>
                <p className='mt-3'>Clicking on the Trip Id will redirect the user to the <Link href="/trip-details"><a target='blank'>trip-details</a></Link> page</p>
                <img className='h-auto w-auto mx-auto mt-2' src="/images/driver-panel/my-ratings.png" alt="" />
                <p className='mt-3'>Sometimes the comment might be big to fit in the table. In that case, hovering over the comment cell will show a pop over of the entire comment</p>
                <img className='h-auto w-auto mx-auto mt-2' src="/images/driver-panel/my-ratings-details.png" alt="" />
            </div>
        </AdminLayout>
    );
};

export default MyRatings;