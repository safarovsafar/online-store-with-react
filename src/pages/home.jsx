import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import { Button } from './layout';
import { Link } from 'react-router-dom';

const Home = () => {

    const { t, i18n } = useTranslation();
    function TranslateClick(lang) {
        i18n.changeLanguage(lang);
    }

    return (
        <div className='w-[100%] dark:bg-black dark:text-white'>
            <div className="w-[90%] xs:flex-wrap justify-between items-center m-auto flex mt-[50px]">
                <div className="xs:flex xs:flex-wrap xs:justify-evenly text-[20px]">
                    <p>{t('home.1')}</p>
                    <p className='mt-[20px]'>{t('home.2')}</p>
                    <p className='mt-[20px]'>{t('home.3')}</p>
                    <p className='mt-[20px]'>{t('home.4')}</p>
                    <p className='mt-[20px]'>{t('home.5')}</p>
                    <p className='mt-[20px]'>{t('home.6')}</p>
                    <p className='mt-[20px]'>{t('home.7')}</p>
                    <p className='mt-[20px]'>{t('home.8')}</p>
                    <p className='mt-[20px]'>{t('home.9')}</p>
                </div>

                <div className="w-[85%] xs:w-[100%] border-2 h-[500px] text-center">
                    <Swiper navigation={false} loop={true} modules={[Navigation, Autoplay]} className="mySwiper"
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}>
                        <SwiperSlide><img className='w-[100%] h-[490px]' src="/src/assets/Frame 560.png" alt="" /></SwiperSlide>
                        <SwiperSlide><img className='w-[100%] h-[490px]' src="/src/assets/Frame 600.png" alt="" /></SwiperSlide>
                        <SwiperSlide><img className='w-[100%] h-[490px]' src="/src/assets/Frame 685.png" alt="" /></SwiperSlide>
                    </Swiper>
                </div>
            </div>

            <img className='ml-[50px] mt-[100px]' src="/src/assets/Frame 626.png" alt="" />
            <div className="w-[500px] xs:w-[100%]  justify-evenly xs:ml-[0px] xs:mt-[50px] ml-[400px]  flex items-end m-auto xs:flex-wrap">
                <div>
                    <p className='text-[20px] font-semibold'>{t('home.11')}</p>
                    <span className='text-[45px] font-bold'>03</span>
                    <span className='text-[red] text-[30px] font-semibold'>:</span>
                </div>
                <div>
                    <p className='text-[20px] font-semibold'>{t('home.10')}</p>
                    <span className='text-[45px] font-bold'>23</span>
                    <span className='text-[red] text-[30px] font-semibold'>:</span>
                </div>

                <div>
                    <p className='text-[20px] font-semibold'>{t('home.12')}</p>
                    <span className='text-[45px] font-bold'>19</span>
                    <span className='text-[red] text-[30px] font-semibold'>:</span>
                </div>

                <div>
                    <p className='text-[20px] font-semibold'>{t('home.13')}</p>
                    <span className='text-[45px] font-bold'>19</span>
                </div>
            </div>

            <div className="w-[90%] xs:w-[80%] xs:flex-wrap xs:ml-[50px] mt-[50px] m-auto flex justify-between">
                <div className="p-[20px] mt-[20px] w-[320px]">
                    <img src="/src/assets/Frame 570.png" alt="" />
                    <p className='text-[25px] font-semibold'>HAVIT HV-G92 Gamepad</p>
                    <div className="flex ">
                        <p className=' text-[red]'>$120</p>
                        <p className='ml-[30px]'>$240</p>
                    </div>
                    <img src="/src/assets/Frame 566.png" alt="" />
                </div>

                <div className="p-[20px] mt-[20px] w-[320px]">
                    <img src="/src/assets/Frame 570 (1).png" alt="" />
                    <p className='text-[25px] font-semibold'>HAVIT HV-G92 Gamepad</p>
                    <div className="flex ">
                        <p className=' text-[red]'>$120</p>
                        <p className='ml-[30px]'>$240</p>
                    </div>
                    <img src="/src/assets/Frame 566.png" alt="" />
                </div>

                <div className="p-[20px] mt-[20px] w-[320px]">
                    <img src="/src/assets/Frame 570 (2).png" alt="" />
                    <p className='text-[25px] font-semibold'>HAVIT HV-G92 Gamepad</p>
                    <div className="flex ">
                        <p className=' text-[red]'>$120</p>
                        <p className='ml-[30px]'>$240</p>
                    </div>
                    <img src="/src/assets/Frame 566.png" alt="" />
                </div>

                <div className="p-[20px] mt-[20px] w-[320px]">
                    <img src="/src/assets/Frame 570 (3).png" alt="" />
                    <p className='text-[25px] font-semibold'>HAVIT HV-G92 Gamepad</p>
                    <div className="flex ">
                        <p className=' text-[red]'>$120</p>
                        <p className='ml-[30px]'>$240</p>
                    </div>
                    <img src="/src/assets/Frame 566.png" alt="" />
                </div>
            </div>
            <div className="text-center mt-[50px]">
                <Link to={"/sign"}>
                    <Button children={t('home.14')} />
                </Link>
            </div>

            <div className="w-[90%] xs:mt-[70px] m-auto">
                <img src="/src/assets/Frame 623.png" alt="" />
                <p className='text-[40px] font-semibold'>{t('home.15')}</p>

                <div className="flex mt-[50px] xs:items-center flex-wrap justify-between items-center">
                    <img src="/src/assets/Category-Phone.png" alt="" />
                    <img src="/src/assets/Category-Phone (1).png" alt="" />
                    <img src="/src/assets/Category-Phone (2).png" alt="" />
                    <img src="/src/assets/Category-Phone (2).png" alt="" />
                    <img src="/src/assets/Category-Phone.png" alt="" />
                    <img src="/src/assets/Category-Phone (2).png" alt="" />
                </div>
            </div>

            <div className="w-[90%] m-auto mt-[50px]">
                <img src="/src/assets/Frame 623.png" alt="" />
                <div className="flex xs:w-[80%] xs:flex-wrap xs:ml-[30px] justify-between">

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

            <div className="rounded-md mt-[50px] flex-wrap bg-black w-[90%] flex items-center justify-evenly m-auto p-[20px]">
                <div className="">
                    <p className='text-[20px] text-green-600'>{t('home.17')}</p>
                    <p className='mt-[30px] text-[40px] font-semibold text-white'>{t('home.18')}</p>
                    <img className='mt-[50px]' src="/src/assets/Frame 601.png" alt="" />
                    <button className='mt-[30px] p-[10px] text-[20px] rounded-md bg-green-600 text-white'>{t('home.19')}</button>
                </div>
                <img src="/src/assets/Frame 694.png" alt="" />
            </div>



            <div className="w-[90%] m-auto mt-[50px]">
                <img src="/src/assets/Frame 623.png" alt="" />
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
                <div className="text-center mt-[50px]">
                    <Link to={"/info"}>
                        <Button children={t('home.14')} />
                    </Link>
                </div>
            </div>


            <div className="w-[90%] m-auto">
                <img src="/src/assets/Frame 623.png" alt="" />
                <p className='text-[40px] font-semibold'>{t('home.20')}</p>
                <img src="/src/assets/Frame 739.png" className='w-[100%] mt-[30px]' alt="" />
            </div>

            <div className="w-[90%] xs:flex-wrap m-auto flex justify-evenly mt-[70px]">
                <div className="text-center mt-[30px] w-[350px]">
                    <img className='ml-[130px]' src="/src/assets/Services.png" alt="" />
                    <p className='text-[25px] font-semibold'>FREE AND FAST DELIVERY</p>
                    <p className='text-[20px]'>Free delivery for all orders over $140</p>
                </div>

                <div className="text-center mt-[30px] w-[350px]">
                    <img className='ml-[130px]' src="/src/assets/Services.png" alt="" />
                    <p className='text-[25px] font-semibold'>FREE AND FAST DELIVERY</p>
                    <p className='text-[20px]'>Free delivery for all orders over $140</p>
                </div>

                <div className="text-center mt-[30px] w-[350px]">
                    <img className='ml-[130px]' src="/src/assets/Services.png" alt="" />
                    <p className='text-[25px] font-semibold'>FREE AND FAST DELIVERY</p>
                    <p className='text-[20px]'>Free delivery for all orders over $140</p>
                </div>
            </div>




        </div>
    )
}

export default Home
