import React from 'react';
import AdminLayout from '../../../layout/adminLayout';

const Feedback = () => {
    return (
        <div>
            <AdminLayout>
                <div className='bg-yellow-50 bg-opacity-20 h-auto m-6 w-[90%] text-[16px] p-4 rounded'>
                    <div>
                        <h5 className='border-b-[1px] border-[#FFA525] pb-2'>User Feedback</h5>
                        <p className='text-base mt-2'>Here, the admin can view all feedback given by users. The administrator can approve or block it by changing its status and can also delete any feedback using the action buttons on the right side.</p>
                        <img className='h-auto w-auto mx-auto mt-2' src="/images/admin/feedback/user-feedback.png" alt="" />
                    </div>
                </div>
            </AdminLayout>
        </div>
    );
};

export default Feedback;