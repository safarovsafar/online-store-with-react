import React from 'react'
import { Button, Button2 } from './layout'
import { Link } from 'react-router-dom'

const Cart = () => {
    return (
        <div className='w-[100%] dark:bg-black dark:text-white dark:border-white'>
            <p className='text-gray-400 text-[14px] ml-[80px] mt-[60px]'>Home / <span className='text-gray-400 '>Contact</span></p>

            <div className="mt-[50px] m-auto w-[90%]">
                <div className="flex justify-between">
                    <p>Product</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Subtotal</p>
                </div>

                <div className="mt-[50px] rounded-md shadow-[0.3px_0.3px_3px] p-[10px] flex items-center ">
                    <div className="flex items-center w-[430px]">
                        <img src="/src/assets/Monitor-Cart-Small.png" alt="" />
                        <p className='text-[20px] xs:text-[15px] font-semibold'>LCD Monitor</p>
                    </div>
                    <p className='text-[20px] w-[430px] xs:hidden font-semibold'>$650</p>
                    <img src="/src/assets/Quantity.png" alt="" />
                    <p className='text-[20px] ml-[380px] xs:hidden font-semibold'>$650</p>
                </div>

                <div className="mt-[50px] rounded-md shadow-[0.3px_0.3px_3px] p-[10px] flex items-center ">
                    <div className="flex items-center w-[430px]">
                        <img src="/src/assets/Monitor-Cart-Small.png" alt="" />
                        <p className='text-[20px] font-semibold'>LCD Monitor</p>
                    </div>
                    <p className='text-[20px] w-[430px] xs:hidden font-semibold'>$650</p>
                    <img src="/src/assets/Quantity.png" alt="" />
                    <p className='text-[20px] ml-[380px] xs:hidden font-semibold'>$650</p>
                </div>
            </div>

            <div className="flex xs:w-[100%] justify-between w-[90%] m-auto mt-[70px]">
                <Button children={"Return to shop"} />
                <div className="w-[300px] xs:w-[60%] flex justify-between">
                    <Button children={"Update Cart"} />
                    <Button children={"Remove all"} />
                </div>
            </div>


            <div className="w-[90%] xs:flex-wrap xs:text-center m-auto mt-[70px] flex justify-between">
                <div className="">
                    <input className='h-[40px] rounded-md w-[300px] text-[25px] border-2 border-black' type="text" placeholder='Coupon Code' />
                    <input type="text" placeholder='Apply' className='w-[200px] xs:mt-[20px] h-[40px] text-[red] rounded-md border-red-800 border-2 text-[25px] text-center' />
                </div>

                <div className="border-2 xs:mt-[30px] xs:ml-[40px] border-gray-600 w-[300px] p-[20px] rounded-md">
                    <p className='text-[25px] font-semibold'>Cart Total</p>

                    <div className="flex mt-[15px] justify-between">
                        <p>Subtotal</p>
                        <p>$1750</p>
                    </div>

                    <div className="flex mt-[15px] justify-between">
                        <p>Sheeping</p>
                        <p>free</p>
                    </div>

                    <hr className='mt-[20px]' />

                    <div className="flex mt-[15px] justify-between">
                        <p className='text-[25px] font-semibold'>Total</p>
                        <p className='text-[25px] font-semibold'>$1750</p>
                    </div>
                    <div className="text-center mt-[30px]">
                        <Link to={"/pay"}>
                            <Button2 children={"Process to checkout"} />
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Cart
