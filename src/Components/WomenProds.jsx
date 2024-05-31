import React from 'react'
import { Card, CardBody, CardHeader, CardFooter, Button, Typography, Slider } from '@material-tailwind/react'
import { womenProducts } from '../data/products'


console.log(womenProducts)

function WomenProds() {

  return (
    <div className='men flex gap-5 overflow-scroll overflow-y-hidden   '>
    {
        womenProducts.map((product, i) => (
            <div className=' inline-block '>
                <Card className='h-[400px] w-[300px] bg-gray-200 shadow-md shadow-black' >
                    <CardHeader color='blue-gray' className='hover:scale-110 transition mt-3'>
                        <img src={product.prodImg} alt="" className='w-full h-full object-contain rounded-md' />
                    </CardHeader>
                    <CardBody>
                        <Typography className='font-bold  font-[]'>
                          Title:  {product.prodTitle}
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

export default WomenProds