import React from 'react'
import{CartFooter,Typography, Card, CardHeader, CardBody, CardFooter, Button} from '@material-tailwind/react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCart } from '../store/cartReducers'

function Product({product,index}) {

    const navigate=useNavigate()
    const dispatch=useDispatch()


    const showProduct=(prodId)=>{
        
        navigate(`/product/${prodId}`)

    }

  return (
    <>
   <motion.div initial={{y:100,opacity:0}}  whileInView={{y:0,opacity:1}} viewport={{once:true}} transition={{delay:0.5, duration:0.5}} className='cursor-pointer'>
    
    <Card  className='h-[300px] w-[300px] bg-gray-200 shadow-md shadow-black'  >
        <CardHeader color='blue-gray' className='hover:scale-110 transition' onClick={()=>showProduct(product.id)}>
        <img src={product.prodImg} alt="" className='w-full h-full object-cover rounded-md' />
        </CardHeader>
        <CardBody>
            <Typography className='font-bold'>
               Title: {product.prodTitle}
            </Typography>
            <Typography className='font-semibold'>
               Price: {product.price}
            </Typography>
        </CardBody>
        <CardFooter>
            <Button color='light-blue' onClick={()=>dispatch(addToCart(product.id))}>Add To Cart</Button>
        </CardFooter>
    </Card>
    </motion.div>

    </>
  )
}

export default Product