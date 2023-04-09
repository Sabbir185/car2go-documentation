import React from 'react';
import AdminLayout from '../../layout/adminLayout';
import { SectionHeading } from '../../components/dashboard/common/common';
import Link from 'next/link';

const Offers = () => {
    return (
        <AdminLayout>
            <div className='bg-yellow-50 bg-opacity-20 h-auto m-6 w-[90%] text-[16px] p-4 rounded'>
                <SectionHeading heading="Offers" />
                <div>
                    <ul className='list-disc'>
                        <li className='list-disc'>The available offers uploaded by the admin are listed on this page. The offer may be made as a fixed amount of cash or as a percentage.</li>
                        <li className='list-none'><img className='h-auto w-auto mx-auto mt-2' src="/images/user-panel/offer.png" alt="" /></li>
                        <li className='list-disc'>After pressing the collect button, the code will be shown and immediately transferred to the device clipboard.</li>
                        <li className='list-none'><img className='h-auto w-auto mx-auto mt-2' src="/images/user-panel/offer-detail.png" alt="" /></li>
                    </ul>
                </div>
            </div>
        </AdminLayout>
    );
};

export default Offers;