import React from 'react'
import call from "../assets/icons-phone.png"
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Category = () => {

    const { t, i18n } = useTranslation();
    function TranslateClick(lang) {
        i18n.changeLanguage(lang);
    }

    return (
        <div>
            <div className='dark:bg-slate-900 relative z-[-1] p-[80px] pb-[240px] dark:text-[white] '>
                <p className='text-gray-400 text-[14px] '>Home / <span className='text-gray-400 '>Contact</span></p>

                <div className="flex mt-[70px] items-center gap-[30px] xs:flex-col ">
                    <div className="w-[330px] h-[380px] p-[40px] shadow-[0px_0px_10px_gray] rounded-[10px] ">
                        <div className="flex items-center gap-[10px] ">
                            <img src={call} alt="" />
                            <h3 className='mt-[10px] text-[20px] font-semibold '>{t("Contact.1")}</h3>
                        </div>
                        <p className='mt-[20px] text-[14px] '>{t("Contact.1")}</p>
                        <p className='mt-[20px] '>{t("Contact.1")}</p>
                        <p className='w-[100%] m-[15px_auto] h-[2px] bg-gray-400 '></p>
                        <div className="flex items-center gap-[10px] ">
                            <img src={call} alt="" />
                            <h3 className='mt-[15px] text-[20px] font-semibold '>{t("Contact.2")}</h3>
                        </div>
                        <p className='mt-[20px] text-[14px] '>{t("Contact.2")}</p>
                        <p className='mt-[20px] '>{t("Contact.2")}</p>
                        <p className=''>{t("Contact.7")}</p>
                    </div>
                    <div className="w-[750px] xs:w-[420px] xs:ml-[35px] h-[380px] sm:h-[470px] p-[50px_40px] xs:p-[10px_5px] shadow-[0px_0px_15px_gainsboro] rounded-[10px]">
                        <div className="flex items-center gap-[10px] sm:flex-col ">
                            <input className='w-[220px] xs:w-[95%] h-[45px] border border-solid border-gray-400 p-[5px_15px] rounded-[5px] '     placeholder='Name' type="text" />
                            <input className='w-[220px] xs:w-[95%] h-[45px] border border-solid border-gray-400 p-[5px_15px] rounded-[5px] '     placeholder='Email' type="text" />
                            <input className='w-[220px] xs:w-[95%] h-[45px] border border-solid border-gray-400 p-[5px_15px] rounded-[5px] '     placeholder='Phone' type="text" />
                        </div>
                        <textarea className='w-[680px] h-[200px] xs:mt-[30px] xs:w-[95%] xs:ml-[5px] border border-solid border-gray-400 p-[15px_15px] rounded-[5px] mt-[10px] ' placeholder='Your Massage' name="" id=""></textarea>
                        <button className='text-[white] bg-[#DB4444] w-[200px] h-[45px] p-[5px_10px] rounded-[5px] ml-[70%] xs:ml-[48%] mt-[10px] '>Send Massage</button>
                    </div>
                </div>
            </div>


            <div className='dark:bg-slate-900 pt-[70px] mt-[0px] relative z-[-1] pb-[50px] '>
                <div className="w-[400px] pt-[25px] m-[0px_auto] border-[2px] border-solid border-gray-400 rounded-[5px] h-[350px] p-[0px_10px] dark:bg-slate-900 dark:text-[white] ">
                    <h1 className='text-[36px] font-semibold '>{t("Register.1")}</h1>
                    <p>{t("Login.10")}</p>
                    <input className='border border-solid border-gray-400 p-[15px_12px] m-[10px_auto] w-[380px] h-[40px] rounded-[5px] ' placeholder='Name' type="text" />
                    <input className='border border-solid border-gray-400 p-[15px_12px] m-[10px_auto] w-[380px] h-[40px] rounded-[5px] ' placeholder='Password' type="text" />
                    <p className='text-[#db4444] w-[170px] m-[0px_auto] text-center '>{t("Register.2")}</p>
                    <Link to={"/errorFile"}>
                        <button className='bg-[#DB4444] text-[white] w-[380px] h-[45px] mt-[30px] m-[5px_auto] '>Create Account</button>
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default Category
