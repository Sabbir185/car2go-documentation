import React from 'react';
import AdminLayout from '../../../layout/adminLayout';

const Withdraw = () => {
    return (
        <div>
            <AdminLayout>
                <div className='bg-yellow-50 bg-opacity-20 h-auto m-6 w-[90%] text-[16px] p-4 rounded'>
                    <div>
                        <h5 className='border-b-[1px] border-[#FFA525] pb-2'>All Withdraw Request</h5>
                        <p className='text-base mt-2'>Here, the admin can view all withdraw requests created by drivers. The administrator can delete any withdrawal request using the action buttons on the right side.</p>
                        <img className='h-auto w-auto mx-auto mt-2' src="/images/admin/withdraw/withdraw-list.png" alt="" />
                    </div>
                    <div className='my-6'>
                        <h5 className='border-b-[1px] border-[#FFA525] pb-2'>Selected Method</h5>
                        <p className='text-base mt-2'>If you click on the selected method icon, you will see a drawer where you can see the withdrawal method and account details.</p>
                        <img className='h-auto w-auto mx-auto mt-2' src="/images/admin/withdraw/withdraw-method.png" alt="" />
                    </div>
                    <div className='my-6'>
                        <h5 className='border-b-[1px] border-[#FFA525] pb-2'>Manage Withdraw Request</h5>
                        <p className='text-base mt-2'>The admin can manage any withdrawal request by marking it as approved or disapproved. The admin can also manage status by changing it to completed, pending, cancelled, or processing.</p>
                        <img className='h-auto w-auto mx-auto mt-2' src="/images/admin/withdraw/withdraw-action.png" alt="" />
                    </div>
                </div>
            </AdminLayout>
        </div>
    );
};

export default Withdraw;