import React from 'react'
import{Typography, Card, CardHeader, CardBody, CardFooter, Button} from '@material-tailwind/react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCart } from '../store/cartReducers'
import { IoDiscOutline } from 'react-icons/io5'
import { RiDiscountPercentFill } from 'react-icons/ri'

function Product({product,index}) {

    const navigate=useNavigate()
    const dispatch=useDispatch()


    const showProduct=(prodId)=>{
        
        navigate(`/product/${prodId}`)

    }

  return (
    <>
   <motion.div initial={{y:100,opacity:0}}  whileInView={{y:0,opacity:1}} viewport={{once:true}} transition={{delay:0.5, duration:0.5}} >
    
    <Card  className='h-[400px] w-[300px] bg-gray-200 shadow-md shadow-black'  >
        <CardHeader color='blue-gray' className=' hover:scale-110 transition cursor-pointer ' onClick={()=>showProduct(product.id)}>
        <img src={product.prodImg} alt="" className='w-full h-full object-cover rounded-md' />
        </CardHeader>
        <CardBody className='flex justify-between gap-x-5 flex-wrap '>
            <Typography className='font-bold  font-[]'>
               Title: {product.prodTitle}
            </Typography>
            <Typography className='font-semibold  font-[]'>
               Price: {product.price}
            </Typography>
            <Typography className='font-semibold  font-[]'>
                Size:  {product.size}
            </Typography>
            <Typography className='font-semibold flex items-center  font-[]'>
                Discount:  {product.price} <RiDiscountPercentFill/>
            </Typography>
           
        </CardBody>
        <CardFooter>
            <Button color='light-blue' className=' font-[]' onClick={()=>dispatch(addToCart(product.id))}>Add To Cart</Button>
        </CardFooter>
    </Card>
    </motion.div>

    </>
  )
}

export default Product