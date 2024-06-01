import React from 'react'
import productsData from '../data/products'
function NewProducts() {
  return (
    <>
<h1 className='mt-10 text-center text-2xl font-semibold'>NEW DROP</h1>

    <main className='container  mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center'>
     {
        productsData.slice(1,9).map((p,i)=>(
            <div className=' ' key={i}>
                <img src={p.prodImg} alt="" className='h-64 w-64 object-cover' />
                <h1>{p.prodTitle}</h1>
                <h1>{p.price}.00 Rs</h1>
            </div>
        ))
     }
    </main>

    </>
  )
}

export default NewProducts