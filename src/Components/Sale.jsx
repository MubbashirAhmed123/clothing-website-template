import React from 'react'
import { motion } from 'framer-motion'
import wimg9 from '../assets/women_img/wimg9.jpg'
import { BsFillLightningChargeFill } from 'react-icons/bs'
function Sale() {
    return (
        <div className='mt-20 sm:flex justify-center container mx-auto'>

            <div className="sale w-full h-[500px] bg-gradient-to-b from-white to-yellow-300 flex flex-col justify-center items-center md:w-[400px]">

                <motion.div className='flex flex-col justify-center items-center' initial={{scale:0,opacity:0}} whileInView={{scale:1,opacity:1}} transition={{delay:0.2,duration:0.2,ease:'easeInOut'}}>
                    <BsFillLightningChargeFill size={30} />

                    <h1 className='text-2xl'>SALE IS ON!</h1>

                    <h1 className='mt-3 text-5xl font-semibold'>25% OFF</h1>
                </motion.div>

            </div>
            <div className="image w-full h-full sm:h-[500px]   bg-gray-900 sm:w-[400px]">
                <img src={wimg9} alt="img" className='w-full h-full object-cover' />
            </div>
        </div>
    )
}

export default Sale