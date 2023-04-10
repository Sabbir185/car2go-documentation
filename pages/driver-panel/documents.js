import React from 'react';
import AdminLayout from '../../layout/adminLayout';
import { SectionHeading } from '../../components/dashboard/common/common';

const Documents = () => {
    return (
        <AdminLayout>
            <div className='bg-yellow-50 bg-opacity-20 h-auto m-6 w-[90%] text-[16px] p-4 rounded'>
                <SectionHeading heading="Documents" />
                <p>User can view and update the uploaded documents here</p>
                <img className='h-auto w-auto mx-auto mt-2' src="/images/driver-panel/documents.png" alt="" />
                <p className='font-bold mt-3'>To update the documents click on the <strong>Update Documents</strong> button and fill the form with appropriate information and click <strong>Update</strong></p>
                <img className='h-auto w-auto mx-auto mt-2' src="/images/driver-panel/document-update.png" alt="" />
            </div>
        </AdminLayout>
    );
};

export default Documents;