import Link from 'next/link';
import React from 'react';
import AdminLayout from '../../../layout/adminLayout';

const Payment = () => {
    return (
        <div>
            <h4 className='text-center border-b-[1px] py-2 border-black'>
                Payment settings
            </h4>
            <div className='m-4'>
                payment settings will be here . First you need to select the payment gateway. Then you need to fill
                the credential of the payment gateway.
                we are providing 5 payment gateway option.Choose the payment gateway that you want to use.
                <ul className='list-disc'>

                    <li className='my-4'>
                        <p className='border-b-[1px] border-black font-semibold text-[18px]'>SSLCOMMERZ</p>
                        <img className=' w-auto mt-4' src="/images/setting/payment/ssl.png" alt=""/>
                    </li>
                    <li className='my-4'>
                        <p className='border-b-[1px] border-black font-semibold text-[18px]'>Stripe</p>
                        <img className=' w-auto mt-4' src="/images/setting/payment/stripe.png" alt=""/>
                    </li>
                    <li className='my-4'>
                        <p className='border-b-[1px] border-black font-semibold text-[18px]'>Paypal</p>
                        <img className=' w-auto mt-4' src="/images/setting/payment/paypal.png" alt=""/>
                    </li>
                    <li className='my-4'>
                        <p className='border-b-[1px] border-black font-semibold text-[18px]'>RazorPay</p>
                        <img className=' w-auto mt-4' src="/images/setting/payment/rz.png" alt=""/>
                    </li>
                    <li className='my-4'>
                        <p className='border-b-[1px] border-black font-semibold text-[18px]'>Mollie</p>
                        <img className=' w-auto mt-4' src="/images/setting/payment/moll.png" alt=""/>
                    </li>


                </ul>
            </div>
        </div>
);
};

export default Payment;
