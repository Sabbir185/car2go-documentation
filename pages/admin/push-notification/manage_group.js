import React from 'react';

const ManageGroup = () => {
    return (
        <div>
            <h4 className='text-center border-b-[1px] py-2 border-black'>Manage push-notification Group</h4>
            <div className='m-4'>
                <ul className='list-disc'>
                    <li className='my-4'>
                        <p className='border-b-[1px] border-black font-semibold text-[18px]'>Descriptions</p>
                        you can manage your push-notification groups here. you can create, edit and delete
                        groups.add users to groups and remove users from groups.also you can and multiple users to a
                        group at once.
                        <ul className='list-disc'>
                            <li className='my-4'>
                                <p className='border-b-[1px] border-black font-semibold text-[18px]'>step 1: Create
                                    Group</p>
                                <p> Click to the add new Notification Group button in the right up corner to create
                                    new push-notification group</p>
                            </li>
                            <li className='my-4'>
                                <p className='border-b-[1px] border-black font-semibold text-[18px]'>step 2: Manage
                                    Group</p>
                                <p> After creating the group , click the manage group button for each group , to
                                    manage the users of that group.</p>
                                <img className='h-[500px] w-auto mt-4' src="/images/push_notifications/group.png"/>
                            </li>

                            <li className='my-4'>
                                <p className='border-b-[1px] border-black font-semibold text-[18px]'>step 3: Add
                                    users to the group</p>
                                <p> There are two way , you can add user to a group.</p>
                                <img className='h-[500px] w-auto mt-4'
                                     src="/images/push_notifications/add_user_to_group.png"/>
                                <ul className={'list-disc'}>
                                    <li className={'my-4'}>
                                        <p className='border-b-[1px] border-black font-semibold text-[18px]'>Add
                                            single users to the group</p>
                                        <p>Click the add user button .This will popup a window containing all the
                                            available users available to be added to this group.to a single
                                            user , click add user, it wil add the user , to this group. This will
                                            remove the user from the available users list</p>
                                        <img className='h-[500px] w-auto mt-4'
                                             src={'/images/push_notifications/add_user_to_group2.png'}/>
                                    </li>
                                    <li className={'my-4'}>
                                        <p className='border-b-[1px] border-black font-semibold text-[18px]'>Add
                                            Multiple users to the group</p>
                                        <p>Select the users , by checking the checkbox. You can see, after selecting
                                            multiple user, a save button appear up in the modal.Click save to add
                                            users to the group</p>
                                        <img className='h-[500px] w-auto mt-4'
                                             src={'/images/push_notifications/multiple.png'}/>
                                    </li>
                                    <li>
                                        <p>Selected users will be added to the group</p>
                                        <img className='h-[500px] w-auto mt-4'
                                             src={'/images/push_notifications/confirmation.png'}/>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
);
};

export default ManageGroup;
