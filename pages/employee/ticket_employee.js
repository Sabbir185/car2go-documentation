import Link from 'next/link';
import React from 'react';
import AdminLayout from '../../layout/adminLayout';

const backend = () => {
    return (<AdminLayout>
            <div className='bg-gray-50 h-auto m-6 w-[90%] text-[16px] p-2'>
                <h4 className='text-center border-b-[1px] py-2 border-black'> Employee Panel </h4>
                <div className='m-4'>
                    <ul className='list-disc'>
                        <li className={'my-4'}>
                            <p className='border-b-[1px] border-black font-semibold text-[18px]'>All ticket</p>
                            <p className='my-4'>This is the page where employee can see the
                                total number of tickets, total number of open tickets, total number of closed tickets,
                                total number of pending tickets, total number of tickets assigned to him/her, total
                                number of open tickets assigned to him/her, total number of closed tickets assigned
                                to him/her, total number of pending tickets assigned to him/her.</p>
                            <img className='h-[500px] w-auto mt-4' src="/images/employee/ticket-employee/details.png "
                                    alt=""/>
                        </li>
                        <li className='my-4'>
                            <p className='border-b-[1px] border-black font-semibold text-[18px]'>Ticket-details page</p>
                            Each employee can see the tickets assigned to him/her. He can view the details of the
                            ticket, close the ticket, add notes and reply to the ticket,see the files of the ticket.
                            <img className='h-[500px] w-auto mt-4' src="/images/employee/ticket-employee/panel.png "
                                 alt=""/>

                            <ul className='list-disc'>
                                <li className='my-4'>
                                    <p className='border-b-[1px] border-black font-semibold text-[18px]'>1. Replay to
                                        ticket</p>
                                    Replay to ticket is marked by number 1 . employee can reply to the ticket by typing
                                    the reply in the text area and click on the send button.
                                </li>
                                <li className='my-4'>
                                    <p className='border-b-[1px] border-black font-semibold text-[18px]'>2. Add notes</p>
                                    Replay to ticket is marked by number 1 . employee can reply to the ticket by typing
                                    the reply in the text area and click on the send button.
                                    < img  className='h-[500px] w-auto mt-4' src="/images/employee/ticket-employee/notes.png " />
                                </li>

                                <li className='my-4'>
                                    <p className='border-b-[1px] border-black font-semibold text-[18px]'>3. Ticket Descriptions</p>
                                    Basic information of the ticket is marked by number 3. employee can see the ticket details.
                                </li>
                                <li className='my-4'>
                                    <p className='border-b-[1px] border-black font-semibold text-[18px]'>4.Ticket Status</p>
                                    Ticket status is marked by number 4. employee can change the status of the ticket.
                                    <p className={'text-red-400 font-semibold'}>**If ticket status is open then only user can reply to the ticket.**</p>
                                </li>
                            </ul>
                        </li>
                    </ul>

                </div>
            </div>
        </AdminLayout>
    )
        ;
};

export default backend;
