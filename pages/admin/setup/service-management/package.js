import React from 'react';

const Package = () => {
    return (
        <div>
            <h6 className='mb-4'>
                Service packages are define the value of your business type. Perhaps, you want to categorize some vehicle under golden package and this package maybe some expensive than your economic package.
            </h6>
            <img src="/pictures/service/package-list.png" alt="package-list" />

            <h6 className='my-4'>
                * To add a new service package click on the <span className="bg-amber-500">Add package</span> button and give necessary information. Like this - 
            </h6>
            <img src="/pictures/service/package-add.png" alt="package-add" />

            <h6 className='my-4'>
                * You can edit it from action of the table (pen icon button). Like this - 
            </h6>
            <img src="/pictures/service/package-edit.png" alt="package-edit" />

        </div>
    );
};

export default Package;