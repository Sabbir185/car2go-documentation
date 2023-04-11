import React from 'react';

const Language = () => {
    return (
            <div>
                <h4 className='text-center border-b-[1px] py-2 border-black'>
                    Language Setting
                </h4>
                This page is used to set the language of your website.You can see all the available languages and their
                status.
                you can add new language and set the default
                language.You can also delete the language.
                <div className='m-4'>
                    <ul className='list-disc'>

                        <li className='my-4'>
                            <p className='border-b-[1px] border-black font-semibold text-[18px]'>Part 1 : Language &
                                Translation Page</p>
                            This page is used to set the language of your website.You can see all the available
                            languages and their status.
                            you can add new language and set the default.Also you can delete the language.
                            <img className=' w-auto mt-4' src="/images/setting/language/1.%20language_translation.png"
                                 alt=""/>
                        </li>
                        <li className='my-4'>
                            <p className='border-b-[1px] border-black font-semibold text-[18px]'>Part 2 : Add
                                Language</p>
                            To add a new language, click on the add language button. Enter the language name and select
                            the flag.
                            rtl is used for right to left language like Arabic, Persian, Urdu etc.
                            <img className=' w-auto mt-4' src="/images/setting/language/2.add%20language.png"
                                 alt=""/>
                        </li>
                        <li className='my-4'>
                            <p className='border-b-[1px] border-black font-semibold text-[18px]'>Part 3 : Status</p>
                            Status is used to enable or disable the language.Only the enabled language will be shown in the System.
                            <img className=' w-auto mt-4' src="/images/setting/language/3.status.png"
                                 alt=""/>
                        </li>
                        <li className='my-4'>
                            <p className='border-b-[1px] border-black font-semibold text-[18px]'>Part 4: Default</p>
                            Only one language can be set as default. When a new user visits the website, the default language will be shown.
                            <img className=' w-auto mt-4' src="/images/setting/language/4.default.png"
                                 alt=""/>
                        </li>
                        <li className='my-4'>
                            <p className='border-b-[1px] border-black font-semibold text-[18px]'>Part 5: Edit & Delete</p>
                            You can edit or delete the language from here.
                            <img className=' w-auto mt-4' src="/images/setting/language/5.edit_del.png"
                                 alt=""/>
                        </li>
                        <li className='my-4'>
                            <p className='border-b-[1px] border-black font-semibold text-[18px]'>Part 6: Translation</p>
                            You can translate the language from here.
                            Enter the value in the text box and click on the save button.
                            <img className=' w-auto mt-4' src="/images/setting/language/6.translation.png"
                                 alt=""/>
                        </li>
                    </ul>
                </div>
            </div>
    );
};

export default Language;
