import React from 'react';
import AdminLayout from '../../layout/adminLayout';
import { Tabs } from 'antd';

const Wallet = () => {
    return (
        <AdminLayout>
            <div className='bg-yellow-50 bg-opacity-20 h-auto m-6 w-[90%] text-[16px] p-4 rounded '>
                <Tabs defaultActiveKey='0' centered>
                    {/* Summary section  */}
                    <Tabs.TabPane tab="Summary" key={0}>
                        <div className='text-base'>
                            <p>Users can deposit money through various payment gateways. The summary page shows a glance at the user&apos;s wallet:</p>
                            <ul className='list-disc'>
                                <li><span className='font-bold'>Total Deposits: </span>The total amount of money that has been deposited by the user so far</li>
                                <li><span className='font-bold'>Total Expense: </span>The total amount of money that has been spent by the user so far</li>
                                <li><span className='font-bold'>Available Balance: </span>The money that is still available to spend</li>
                            </ul>
                            <p>A table is also here which is showing the latest deposit information. </p>
                            <img className='h-auto w-auto mx-auto mt-2' src="/images/user-panel/wallet-summary.png" alt="wallet-summary" />
                            <p className='my-3'>By clicking the <strong>Add Money</strong> button, the user will be redirected to a page with a list of active payment gateways.</p>
                            <ul className='list-disc'>
                                <li>User will choose his/her preferred gateway.</li>
                                <li>Input the amount in the input box</li>
                                <li>Submit and fill the credential form according to gateway</li>
                                <li>After successful deposit the user will be redirected to the summary home page.</li>
                            </ul>
                            <img className='h-auto w-auto mx-auto mt-2' src="/images/user-panel/payment-gateways.png" alt="payment-gateways" />
                            <img className='h-auto w-auto mx-auto mt-5' src="/images/user-panel/payment.png" alt="payment" />
                        </div>
                    </Tabs.TabPane>
                    {/* Transaction section  */}
                    <Tabs.TabPane tab="Transactions" key={1}>
                        <p>The wallet transactions page shows the payment details only paid from the wallet.</p>
                        <img className='h-auto w-auto mx-auto mt-2' src="/images/user-panel/wallet-transactions.png" alt="wallet-transactions" />
                    </Tabs.TabPane>
                </Tabs>
            </div>
        </AdminLayout>
    );
};

export default Wallet;