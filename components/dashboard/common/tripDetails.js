import React from 'react';
import { SectionHeading } from './common';

const DetailsTrip = () => {
    return (
        <div className='bg-yellow-50 bg-opacity-20 h-auto m-6 w-[90%] text-[16px] p-4 rounded'>
            <SectionHeading heading="Trip Details" />
            <p>The user can view detailed information about a trip from here.</p>
            <img className='h-auto w-auto mx-auto mt-2' src="/images/user-panel/trip-details.png" alt="trip-details" />
            <ul className='list-disc mt-3 space-y-6'>
                <div>
                    <li className='list-disc'><span className='font-semibold'>Trip Details section: </span>The pickup and drop location of the trip with google map</li>
                    <li className='list-none'><img className='h-auto w-auto mx-auto mt-2' src="/images/user-panel/trip-details-pickup.png" alt="" /></li>
                </div>
                <div>
                    <li className='list-disc'><span className='font-semibold'>Rating section: </span>Rating and comment given by the user. this section might be blank it there is no rating.</li>
                    <li className='list-none'><img className='h-auto w-auto mx-auto mt-2' src="/images/user-panel/rating.png" alt="" /></li>
                </div>
                <div>
                    <li className='list-disc'><span className='font-semibold'>Driver Details: </span>Details of the trip&apos;s driver</li>
                    <li className='list-none'><img className='h-auto w-auto mx-auto mt-2' src="/images/user-panel/driver-details.png" alt="" /></li>
                </div>
                <div>
                    <li className='list-disc'><span className='font-semibold'>User Details: </span>Details of the User</li>
                    <li className='list-none'><img className='h-auto w-auto mx-auto mt-2' src="/images/user-panel/user-details.png" alt="" /></li>
                </div>
                <div>
                    <li className='list-disc'><span className='font-semibold'>Payment Details: </span>Payment details of the trip. User can split the payment in different methods. In the payment breakdown section, the user can view in which method the user has paid how much money.</li>
                    <li className='list-none'><img className='h-auto w-auto mx-auto mt-2' src="/images/user-panel/payment-details.png" alt="" /></li>
                </div>
                <div>
                    <li className='list-disc'><span className='font-semibold'>Vehicle Details: </span>Details of the vehicle</li>
                    <li className='list-none'><img className='h-auto w-auto mx-auto mt-2' src="/images/user-panel/vehicle-details.png" alt="" /></li>
                </div>
            </ul>
        </div>
    );
};

export default DetailsTrip;