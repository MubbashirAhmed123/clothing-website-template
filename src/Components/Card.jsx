import React from 'react'
import { Button } from '@material-tailwind/react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

function Cart({image,text}) {
  const navigate=useNavigate()

  return (
    <>



      <motion.div className='w-[300px] h-[300px] relative overflow-hidden cursor-pointer  hover:scale-110 transition group '  >

        <img src={image.img} alt="" className='w-full h-auto block object-cover rounded-md  '/>

        <motion.div  className='absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 ' initial={{x:100,opacity:0,}} whileHover={{x:0,opacity:1,width:'100%'}} transition={{delay:0.1,duration:0.2,ease:'easeInOut'}}>

        <Button onClick={()=>navigate('/products')} translate='yes'  color='white'   className='border hover:scale-x-110  font-[]' size='sm'>{text}</Button>

        </motion.div>
      </motion.div>
      </>
      
  )
}

export default Cart