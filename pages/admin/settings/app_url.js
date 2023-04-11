import React from 'react';

const AppUrl = () => {
    return (
            <div>
                <h4 className='text-center border-b-[1px] py-2 border-black'>
                    Application URL
                </h4>
                <div className='m-4'>
                    <ul className='list-disc'>
                        <li className='my-4'>
                            <p className='border-b-[1px] border-black font-semibold text-[18px]'>Part 1 : Application
                                Url</p>
                            Link android and ios app to your website.
                            <img className=' w-auto mt-4' src="/images/setting/application_url/appUrl.png" alt=""/>
                        </li>
                        <li className='my-4'>
                            <p className='border-b-[1px] border-black font-semibold text-[18px]'>Part 2 : Site Url</p>
                            site url is the url of your website.
                            <img className=' w-auto mt-4' src="/images/setting/application_url/sitesetting.png" alt=""/>
                        </li>


                    </ul>
                </div>
            </div>

    );
};

export default AppUrl;
