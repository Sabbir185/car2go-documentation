import React from 'react';

const Category = () => {
    return (
        <div>
            <h6 className='mb-4'>
                Service categories are actually your business type. Maybe be you want to add some vehicle which are only for delivery service or transport etc. You can add multiple service categories. For example below this picture.
            </h6>
            <img src="/pictures/service/category-list.png" alt="category-list" />

            <h6 className='my-4'>
                * To add a new service category click on the <span className="bg-amber-500">Add Category</span> button and give necessary information. Like this - 
            </h6>
            <img src="/pictures/service/category-add.png" alt="category-add" />

            <h6 className='my-4'>
                * You can edit it from action of the table (pen icon button). Like this - 
            </h6>
            <img src="/pictures/service/category-update.png" alt="category-edit" />

            <h6 className='my-4'>
                * You can add category information from action of the table (plus icon button). Service Category Information: It is dynamic, so you can add information as needed. This information will display in you project frontend side. Like this - 
            </h6>
            <img src="/pictures/service/category-info.png" alt="category-info" />
        </div>
    );
};

export default Category;