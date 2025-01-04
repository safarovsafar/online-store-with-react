import React from 'react'
import { Button2 } from './layout';


const Input = ({ label, placeholder }) => {
    return (
        <div className="w-full max-w-sm mx-auto">
            {/* Label */}
            {label && (
                <label className="block text-lg font-medium text-gray-700 mb-2">
                    {label}
                </label>
            )}

            {/* Input Field */}
            <input
                type="text"
                placeholder={placeholder}
                className="w-full mt-[15px] px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-800"
            />

            <p className="mt-2 text-sm text-gray-500">
            </p>
        </div>
    );
};

const Pay = () => {
    return (
        <div className='w-[100%] dark:bg-black dark:text-white'>
            <p className='text-gray-400 text-[14px] ml-[80px] mt-[60px]'>Home / <span className='text-gray-400 '>Contact</span></p>
            <p className='text-[30px] font-semibold ml-[79px] mt-[30px]'>Billing Details</p>

            <div className="w-[88%] m-auto flex justify-between ">
                <div className="w-[450px] mt-[30px] p-[15px] shadow-[1px_1px_5px]">
                    <Input placeholder={"First name"} />
                    <Input placeholder={"Last name"} />
                    <Input placeholder={"Street address"} />
                    <Input placeholder={"Apartment, floor, etc(optional)"} />
                    <Input placeholder={"City/Town"} />
                    <Input placeholder={"Phone number"} />
                    <Input placeholder={"Email address"} />

                    <div className="flex items-center text-center mt-[40px]">
                        <input type="checkbox" className='w-[20px] h-[20px]' />
                        <p>Save this is information for faster check-out next time</p>
                    </div>
                </div>

                <div className="w-[470px]">
                    <div className="flex justify-between mt-[30px] p-[15px] items-center">
                        <div className="flex items-center">
                            <img src="/src/assets/Monitor-Cart-Small.png" alt="" />
                            <p className='text-[20px] xs:text-[15px] font-semibold'>LCD Monitor</p>
                        </div>
                        <p className='text-[20px] xs:hidden font-semibold'>$650</p>
                    </div>

                    <div className="flex justify-between w-[470px] mt-[0px] p-[15px] items-center">
                        <div className="flex items-center">
                            <img src="/src/assets/Monitor-Cart-Small.png" alt="" />
                            <p className='text-[20px] xs:text-[15px] font-semibold'>LCD Monitor</p>
                        </div>
                        <p className='text-[20px] xs:hidden font-semibold'>$650</p>
                    </div>

                    <div className="flex px-[14px] text-[20px] mt-[20px] justify-between">
                        <p>Subtitle</p>
                        <p>$1750</p>
                    </div>

                    <div className="flex px-[14px] text-[20px] mt-[20px] justify-between">
                        <p>Sheeping</p>
                        <p>free</p>
                    </div>

                    <hr className='mt-[30px]' />

                    <div className="flex px-[14px] text-[30px] font-semibold mt-[20px] justify-between">
                        <p>Total</p>
                        <p>$1750</p>
                    </div>
                    <img src="/src/assets/Frame 927.png" className='w-[100%] mt-[30px] ml-[20px]' alt="" />
                  <div className="text-center mt-[40px]">
                   <Button2  children={"Place Older"}/>
                  </div>
                </div>
            </div>

        </div>
    )
}

export default Pay
