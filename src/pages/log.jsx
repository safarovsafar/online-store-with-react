import React from 'react'
import { useTranslation } from 'react-i18next';
import google from "../assets/Icon-Google.png"

const Log = () => {
      const { t, i18n } = useTranslation();
        function TranslateClick(lang) {
            i18n.changeLanguage(lang);
        }

    return (
        <div>
            <div className='h-[100vh] dark:bg-slate-900 pt-[60px] pb-[70px] '>
                <div className="w-[400px] pt-[60px] m-[0px_auto] border-gray-400 rounded-[5px] h-[550px] p-[0px_10px] dark:bg-slate-900 dark:text-[white] ">
                    <h1 className='text-[36px] font-semibold '>{t("Login.9")}</h1>
                    <p>{t("Login.10")}</p>
                    <input className='border border-solid border-gray-400 p-[15px_12px] m-[10px_auto] w-[380px] h-[40px] rounded-[5px] dark:bg-gray-500 ' placeholder='Name' type="text" />
                    <input className='border border-solid border-gray-400 p-[15px_12px] m-[10px_auto] w-[380px] h-[40px] rounded-[5px] dark:bg-gray-500 ' placeholder='Email or phone number' type="text" />
                    <input className='border border-solid border-gray-400 p-[15px_12px] m-[10px_auto] w-[380px] h-[40px] rounded-[5px] dark:bg-gray-500 ' placeholder='Password' type="text" />
                    <button className='bg-[#DB4444] text-[white] w-[380px] h-[45px] mt-[30px] m-[5px_auto] '>Create Account</button>
                    <button className='flex items-center gap-[15px] m-[10px_0px] border border-solid border-gray-400 w-[380px] h-[45px] p-[5px_10px] text-center pl-[80px] '><img src={google} alt="" /> Sign Up with Google</button>
                    <p className='m-[30px_80px] '>{t("Login.11")}</p>
                </div>
            </div>
        </div>
    )
}

export default Log
