import React from 'react'
import { useTranslation } from 'react-i18next';
import Contacts from './contacts';

const Sign = () => {
    const { t, i18n } = useTranslation();
    function TranslateClick(lang) {
        i18n.changeLanguage(lang);
    }

    return (
        <div>
            <div className="w-[100%] flex xs:flex-wrap pt-[20px] pl-[50px]">
                <div className="w-[25%]">
                    <p className='mt-[20px] font-semibold'>{t('home.17')}</p>
                    <p className='mt-[20px]'>{t('home.14')}</p>
                    <p className='mt-[20px]'>{t('home.3')}</p>
                    <p className='mt-[20px]'>{t('home.4')}</p>
                    <p className='mt-[20px]'>{t('home.5')}</p>
                    <p className='mt-[20px]'>{t('home.6')}</p>
                    <p className='mt-[20px]'>See all</p>

                    <hr className='mt-[30px]'/>

                    <p className='mt-[20px] font-semibold'>{t('home.17')}</p>
                    <p className='mt-[20px]'>{t('home.14')}</p>
                    <p className='mt-[20px]'>{t('home.3')}</p>
                    <p className='mt-[20px]'>{t('home.4')}</p>
                    <p className='mt-[20px]'>{t('home.5')}</p>
                    <p className='mt-[20px]'>{t('home.6')}</p>
                    <p className='mt-[20px]'>See all</p>

                    <hr className='mt-[30px]'/>

                    <img src="/src/assets/Frame 996.png" alt="" />
                   
                   <hr className='mt-[30px]'/>

                   <img src="/src/assets/dnvjwdnv.png" alt="" />
                </div>
             <Contacts />
            </div>



        </div>
    )
}

export default Sign
