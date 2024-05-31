import React, { useState } from 'react'
import Product from '../Components/Product'
import productsData from '../data/products'
import { motion } from 'framer-motion'
import NewArrivals from '../Components/NewArrivals'
import { List, ListItem } from '@material-tailwind/react'
import MenProds from '../Components/MenProds'
import WomenProds from '../Components/WomenProds'
import ChildrenProds from '../Components/ChildrenProds'
function Products() {
  const[prodsData,setProdsData]=useState(productsData)
  const[filterdProds,SetFilteredProds]=useState([])

  const filterProducts=(category)=>{
    console.log(category)
   const fd= productsData.filter((p,i)=> category=='ALL' ? productsData: p.category.includes(category.toLowerCase()))
   console.log(fd)
   setProdsData(fd)
  }

  return (
    <>
    <NewArrivals filterProducts={filterProducts}/>

    <motion.div className='mt-10 flex flex-wrap justify-center gap-x-10 gap-y-20  ' >
      {
        prodsData.map((p,i)=>(
          <Product product={p} index={i}/>
        ))
      }
    </motion.div>

    <div className=' mt-10  '>
      <List>
      <ListItem className=''>
        Men section
      </ListItem>
      </List>
      <MenProds/>
    </div>

    <div className=' mt-10 '>
      <List>
      <ListItem className=''>
        Women section
      </ListItem>
      </List>
      <WomenProds/>
    </div>

    <div className=' mt-10 '>
      <List>
      <ListItem className=''>
        Children section
      </ListItem>
      </List>
      <ChildrenProds/>
    </div>
    </>
  )
}

export default Products