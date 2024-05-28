import React, { useState } from 'react';
import { Button, Card, CardBody, CardHeader, Typography } from '@material-tailwind/react';
import { useDispatch, useSelector } from 'react-redux';
import { increaseQty,decreaseQty } from '../store/cartReducers';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';


const ProductCart = () => {

  const {cartItems}=useSelector(state=>state.cart)
  console.log(cartItems)
 
  const dispatch=useDispatch()


  const total = cartItems.reduce((acc, item) => acc + Number(item.price) * item.qty, 0);

  return (
    <>
     <Typography  variant="h3" color="blue-gray " className=' flex justify-center items-center gap-2'>
       <FaShoppingCart /> Shopping Cart
      </Typography>
    {cartItems.length >0 ?<div className="container mx-auto p-4">
     
      <div className="flex flex-col gap-10">
        {cartItems.map((item) => (
          <Card key={item.id} className='h-fit w-full'>
           <CardBody className='flex flex-col sm:flex-row justify-between items-center lg:justify-around'>
            <div>
            <img src={item.prodImg} alt="" className='h-[150px] object-contain rounded-md' />
            <Typography className='font-semibold'>{item.prodTitle}</Typography>
            <Typography className='font-semibold'>RS {item.price}.00</Typography>
            </div>
            <div className='mt-5 flex items-center gap-5 sm:mt-0'>
              <Button onClick={()=>dispatch(increaseQty(item.id))}>+</Button>
              <Typography className='font-semibold'>Qty:{item.qty}</Typography>
              <Button onClick={()=>dispatch(decreaseQty(item.id))}>-</Button>
            </div>
           </CardBody>
          </Card>
        ))}
      </div>
      <div className="mt-4">
        <Card>
          <CardBody className="flex justify-between items-center">
            <Typography variant="h5">Total</Typography>
            <Typography variant="h5">RS {total.toFixed(2)}</Typography>
          </CardBody>
        </Card>
        <Button size="lg" color="green" className="mt-4">
          Checkout
        </Button>
      </div>
    </div>:<p className='text-center mt-5 bg-red-200 p-2'>No Prodcut in the cart <Link to='/' className='font-bold'>Continue Shopping</Link> </p>}
    </>
  );
};

export default ProductCart;
