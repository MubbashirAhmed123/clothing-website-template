import React from 'react'
import Nav from '../Components/Nav'
import Header from '../Components/Header'
import NewArrivals from '../Components/NewArrivals'
import Products from './Products'
import Footer from '../Components/Footer'
import { List, ListItem } from '@material-tailwind/react'
import NewProducts from '../Components/NewProducts'
import Sale from '../Components/Sale'

function Home() {
  return (
    <div className=' font-[] select-none'>
      <Header />
      <NewProducts/>
      <Sale/>
      <Footer/>
    </div>
  )
}

export default Home