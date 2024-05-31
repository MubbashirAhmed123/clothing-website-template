import React from 'react'
import { menProducts } from '../data/products'
import { Card, CardBody, CardHeader, CardFooter, Button, Typography, Slider, Rating } from '@material-tailwind/react'

function MenProds() {

    return (
        <div className='men flex gap-5 overflow-scroll overflow-y-hidden '>
            {
                menProducts.map((product, i) => (
                    <div className=' inline-block '>
                        <Card className='h-[400px] w-[300px] bg-gray-200 shadow-md shadow-black ' >
                            <CardHeader color='blue-gray' className='hover:scale-110 transition mt-3 '>
                                <img src={product.prodImg} alt="" className='w-full h-full object-contain rounded-md' />
                            </CardHeader>
                            <CardBody>
                                <Typography className='font-bold  font-[]'>
                                    Title: {product.prodTitle}
                                </Typography>
                                <Typography className='font-semibold  font-[]'>
                                    Price:  {product.price}
                                </Typography>
                                <Typography className='font-semibold  font-[]'>
                                    Size:  {product.size}
                                </Typography>
                            </CardBody>

                        </Card>
                    </div>
                ))
            }
        </div>
    )
}

export default MenProds