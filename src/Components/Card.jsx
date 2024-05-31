import React from 'react'
import { Button } from '@material-tailwind/react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

function Cart({image,text}) {
  const navigate=useNavigate()

  return (
    
      <motion.div className='w-[300px] h-[300px] relative overflow-hidden cursor-pointer  hover:scale-110 transition  '  >

        <img src={image.img} alt="" className='w-full h-auto block object-cover rounded-md  '/>

        <div  className='rounded-md absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black w-full h-full flex justify-center items-center bg-opacity-30 hover:bg-opacity-40 transition-opacity delay-1000 duration-1000 ease-in-out shadow-md shadow-black/70'>

        <Button onClick={()=>navigate('/products')} translate='yes'  color='white'   className='border hover:scale-x-110  font-[]' size='sm'>{text}</Button>

        </div>
      </motion.div>
      
  )
}

export default Cart