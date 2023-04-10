import React from 'react';
import { SectionHeading } from '../../components/dashboard/common/common';
import AdminLayout from '../../layout/adminLayout';

const ReceivedPayments = () => {
    return (
        <AdminLayout>
            <div className='bg-yellow-50 bg-opacity-20 h-auto m-6 w-[90%] text-[16px] p-4 rounded'>
                <SectionHeading heading="Received Payments" />
                <p>The table shows the a total payment associated with a trip</p>
                <img className='h-auto w-auto mx-auto mt-2' src="/images/driver-panel/received-payments.png" alt="" />
            </div>
        </AdminLayout>
    );
};

export default ReceivedPayments;