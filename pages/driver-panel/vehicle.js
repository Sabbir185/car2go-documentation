import React from 'react';
import AdminLayout from '../../layout/adminLayout';
import { SectionHeading } from '../../components/dashboard/common/common';

const Vehicle = () => {
    return (
        <AdminLayout>
            <div className='bg-yellow-50 bg-opacity-20 h-auto m-6 w-[90%] text-[16px] p-4 rounded'>
                <SectionHeading heading="Vehicles" />
                <p>Vehicle page shows the detailed information about the vehicle that the driver registered with</p>
                <img className='h-auto w-auto mx-auto mt-2' src="/images/driver-panel/vehicle.png" alt="" />
                <p className='font-bold mt-5'>Update Vehicle Information: </p>
                <p>The user will be redirected to another page by clicking the <strong>Update Vehicle</strong> button. The page has already been filled form with the previous information. If any modification is needed, the user can make it and submit the form by clicking <strong>Update</strong> button</p>
                <img className='h-auto w-auto mx-auto mt-2' src="/images/driver-panel/update-vehicle.png" alt="" />
            </div>
        </AdminLayout>
    );
};

export default Vehicle;