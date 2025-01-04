import React, { useState } from 'react'
import Switcher from '../darkMode/switcher'
import { Link, Outlet } from 'react-router-dom'
import { useTranslation } from 'react-i18next';

export const Button = ({ children, onClick }) => {
    return (
        <button
            onClick={onClick}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
            {children}
        </button>
    );
};

export const Button2 = ({ children, onClick }) => {
    return (
        <button
            onClick={onClick}
            className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
            {children}
        </button>
    );
};


const Drawer = () => {

    const { t, i18n } = useTranslation();
    function TranslateClick(lang) {
        i18n.changeLanguage(lang);
    }

    const [isOpen, setIsOpen] = useState(false);

    const toggleDrawer = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative">
            {/* Кнопка для открытия/закрытия дравера */}
            <button
                onClick={toggleDrawer}
                className="px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700"
            >
                {isOpen ? "=" : "="}
            </button>
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40"
                    onClick={toggleDrawer}
                ></div>
            )}
            <div
                className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="p-4 text-[20px] text-start">
                    <img src="/src/assets/Group 1116606595.png" alt="" />
                    <Link className='' to={"/"}>{t('section1.home')}</Link>
                    <Link to={"/contacts"} className='block'>{t('section1.contact')}</Link>
                    <Link to={"/about"} className='block'>{t('section1.about')}</Link>
                    <Link to={"/log"} className='block'>{t('section1.sign')}</Link>
                    <Link className='block' to={"/category"}>{t('section1.category')}</Link>
                    <Link className='xs:hidden' to={"/cart"}>Cart</Link>
                    <button
                        onClick={toggleDrawer}
                        className="mt-4 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700">
                        Close Drawer
                    </button>
                </div>
            </div>
        </div>
    );
};


const Layout = () => {

    const { t, i18n } = useTranslation();
    function TranslateClick(lang) {
        i18n.changeLanguage(lang);
    }

    return (
        <div className='dark:bg-black dark:text-white w-[100%]'>
            <header className=' text-25px xs:w-[99%] w-[90%] m-auto flex justify-between items-center'>
                <img src="/src/assets/Group 1116606595.png" alt="" />
                <Link className='xs:hidden' to={"/"}>{t('section1.home')}</Link>
                <Link to={"/contacts"} className='xs:hidden'>{t('section1.contact')}</Link>
                <Link to={"/about"} className='xs:hidden'>{t('section1.about')}</Link>
                <Link to={"/log"} className='xs:hidden'>{t('section1.sign')}</Link>
                <Link className='xs:hidden' to={"/category"}>{t('section1.category')}</Link>
                <Link className='xs:hidden' to={"/cart"}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>
                </Link>
                <Switcher />
                <div className="">
                    <Button children={"Ru"} onClick={() => TranslateClick("ru")} />
                    <Button children={"En"} onClick={() => TranslateClick("en")} />
                </div>
                <p className='hidden xs:block'>
                    <Drawer />
                </p>
            </header>

            <Outlet />

            <footer className='p-[20px] xs:pl-[90px] flex justify-between flex-wrap xs:text-center w-[100%] bg-black text-white mt-[70px]'>
                <div className="">
                    <p className='text-[30px] font-semibold'>{t('home.21')}</p>
                    <p className='text-[20px] mt-[20px]'>Subscribe</p>
                    <p className='text-[20px] mt-[20px]'>Get 10% off your first order</p>
                    <input type="text" placeholder='Enter your email' className='mt-[20px] w-[250px] border-2 h-[40px] rounded-md' />
                </div>

                <div className="">
                    <p className='text-[30px] font-semibold'>{t('home.22')}</p>
                    <p className='text-[20px] mt-[20px]'>Subscribe</p>
                    <p className='text-[20px] mt-[20px]'>Get 10% off your first order</p>
                    <p className='text-[20px] mt-[20px]'>+8 18726 298</p>
                </div>

                <div className="">
                    <p className='text-[30px] font-semibold'>{t('home.23')}</p>
                    <p className='text-[20px] mt-[20px]'>My account</p>
                    <p className='text-[20px] mt-[20px]'>Subscribe</p>
                    <p className='text-[20px] mt-[20px]'>Get 10% off your first order</p>
                    <p className='text-[20px] mt-[20px]'>+8 18726 298</p>
                </div>

                <div className="">
                    <p className='text-[30px] font-semibold'>{t('home.24')}</p>
                    <p className='text-[20px] mt-[20px]'>Privacy Policy</p>
                    <p className='text-[20px] mt-[20px]'>Get 10% off your first order</p>
                    <p className='text-[20px] mt-[20px]'>+8 18726 298</p>
                </div>

                <div className="">
                    <p className='text-[30px] font-semibold'>{t('home.25')}</p>
                    <img src="/src/assets/Frame 741.png" alt="" />
                </div>
            </footer>

        </div>

    )
}

export default Layout
