import React from 'react'
import { useTranslation } from 'react-i18next';
import { Button } from './layout';

const Contacts = () => {

    const { t, i18n } = useTranslation();
    function TranslateClick(lang) {
        i18n.changeLanguage(lang);
    }

    return (
        <div className='dark:bg-black dark:text-white'>
            <p className='text-[30px] font-semibold text-center'>Whilist</p>

            <div className="w-[100%] xs:w-[80%] xs:ml-[60px] m-auto mt-[50px]">
                <div className="flex justify-between flex-wrap">

                    <div className="p-[20px] mt-[20px] w-[320px]">
                        <img src="/src/assets/Cart (3).png" alt="" />
                        <p className='text-[25px] font-semibold'>{t('home.16')}</p>
                        <div className="flex ">
                            <p className=' text-[red]'>$120</p>
                            <p className='ml-[30px]'>$240</p>
                        </div>
                        <img src="/src/assets/Frame 566.png" alt="" />
                    </div>

                    <div className="p-[20px] mt-[20px] w-[320px]">
                        <img src="/src/assets/Cart (4).png" alt="" />
                        <p className='text-[25px] font-semibold'>{t('home.16')}</p>
                        <div className="flex ">
                            <p className=' text-[red]'>$120</p>
                            <p className='ml-[30px]'>$240</p>
                        </div>
                        <img src="/src/assets/Frame 566.png" alt="" />
                    </div>

                    <div className="p-[20px] mt-[20px] w-[320px]">
                        <img src="/src/assets/Cart (5).png" alt="" />
                        <p className='text-[25px] font-semibold'>{t('home.16')}</p>
                        <div className="flex ">
                            <p className=' text-[red]'>$120</p>
                            <p className='ml-[30px]'>$240</p>
                        </div>
                        <img src="/src/assets/Frame 566.png" alt="" />
                    </div>

                    <div className="p-[20px] mt-[20px] w-[320px]">
                        <img src="/src/assets/Cart (3).png" alt="" />
                        <p className='text-[25px] font-semibold'>{t('home.16')}</p>
                        <div className="flex ">
                            <p className=' text-[red]'>$120</p>
                            <p className='ml-[30px]'>$240</p>
                        </div>
                        <img src="/src/assets/Frame 566.png" alt="" />
                    </div>

                    <div className="p-[20px] mt-[20px] w-[320px]">
                        <img src="/src/assets/Cart (2).png" alt="" />
                        <p className='text-[25px] font-semibold'>{t('home.16')}</p>
                        <div className="flex ">
                            <p className=' text-[red]'>$120</p>
                            <p className='ml-[30px]'>$240</p>
                        </div>
                        <img src="/src/assets/Frame 566.png" alt="" />
                    </div>

                    <div className="p-[20px] mt-[20px] w-[320px]">
                        <img src="/src/assets/Cart (1).png" alt="" />
                        <p className='text-[25px] font-semibold'>{t('home.16')}</p>
                        <div className="flex ">
                            <p className=' text-[red]'>$120</p>
                            <p className='ml-[30px]'>$240</p>
                        </div>
                        <img src="/src/assets/Frame 566.png" alt="" />
                    </div>

                    <div className="p-[20px] mt-[20px] w-[320px]">
                        <img src="/src/assets/Cart (2).png" alt="" />
                        <p className='text-[25px] font-semibold'>{t('home.16')}</p>
                        <div className="flex ">
                            <p className=' text-[red]'>$120</p>
                            <p className='ml-[30px]'>$240</p>
                        </div>
                        <img src="/src/assets/Frame 566.png" alt="" />
                    </div>

                    <div className="p-[20px] mt-[20px] w-[320px]">
                        <img src="/src/assets/Cart (1).png" alt="" />
                        <p className='text-[25px] font-semibold'>{t('home.16')}</p>
                        <div className="flex ">
                            <p className=' text-[red]'>$120</p>
                            <p className='ml-[30px]'>$240</p>
                        </div>
                        <img src="/src/assets/Frame 566.png" alt="" />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Contacts
