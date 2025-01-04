import React from 'react'

const About = () => {
    return (
        <div className='dark:bg-black dark:text-white'>

            <div className="m-auto items-center justify-evenly flex mt-[50px] w-[90%]">
                <div className="w-[550px]">
                    <p className='font-semibold text-[40px]'>Our story</p>
                     <p className='mt-[20px] text-[20px]'>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
                    <p className='mt-[20px]  text-[20px]'>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
                </div>
                <img src="/src/assets/Side Image.png" alt="" />
            </div>

            <div className="blocks">
                <div className="boxs">
                    <div className="boxOne">
                        <img src="/src/assets/Services (1).png" alt="" />
                        <h2>10.5k</h2>
                        <h5>Sallers active our site</h5>
                    </div>
                    <div className="boxTwo">
                        <img src="/src/assets/Services (1).png" alt="" />
                        <h2>33k</h2>
                        <h5>Mopnthly Produduct Sale</h5>
                    </div>
                    <div className="boxThree">
                        <img src="/src/assets/Services (1).png" alt="" />
                        <h2>45.5k</h2>
                        <h5>Customer active in our site</h5>
                    </div>
                    <div className="boxFour">
                        <img src="/src/assets/Services (1).png" alt="" />
                        <h2>25k</h2>
                        <h5>Anual gross sale in our site</h5>
                    </div>
                </div>

                <div className="imgs">
                    <div className="imgLeft">
                        <img src="https://avatars.mds.yandex.net/i?id=fecbd4fa255d7ce35f6ae0908e97768a-5132308-images-thumbs&n=13" alt="" />
                        <h2  >Tom Cruise</h2>
                        <h5  >Founder & Chairman</h5>
                        <img src="../img/Frame 877.png" />
                    </div>
                    <div className="imgCenter">
                        <img src="https://avatars.mds.yandex.net/i?id=9d26000ab6313f5d5bf946ad8b898ce3f9c1e731-9461051-images-thumbs&n=13" alt="" />
                        <h2  >Emma Watson</h2>
                        <h5  >Managing Director</h5>
                        <img src="../img/Frame 877.png" alt="" />
                    </div>
                    <div className="imgRight">
                        <img src="https://avatars.mds.yandex.net/i?id=9536444b50d4a70404ff3676bb336ab9b38d8e67-11623870-images-thumbs&n=13" alt="" />
                        <h2 >Will Smith</h2>
                        <h5 >Product Designer</h5>
                        <img src="../img/Frame 877.png" alt="" />
                    </div>
                </div>

                <img src="../img/Frame 883.png" alt="" />


                <div className="blockEnd">
                    <div className="blockOne">
                        <img src="../Frame 701.png" alt="" />
                    </div>
                    <div className="blockTwo">
                        <img src="../Frame 702.png" alt="" />
                    </div>
                    <div className="blockThree">
                        <img src="../Frame 704.png" alt="" />
                    </div>
                </div>
            </div>

            <div className="w-[90%] xs:flex-wrap m-auto flex justify-evenly mt-[70px]">
                <div className="text-center mt-[30px] w-[350px]">
                    <img className='ml-[130px]' src="/src/assets/Services.png" alt="" />
                    <p className='text-[25px] font-semibold'> AND FAST DELIVERY</p>
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

export default About
