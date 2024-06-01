import React, { useState } from 'react'
import { Button, Carousel, Typography } from '@material-tailwind/react';
import { motion } from 'framer-motion';
import bg1 from "../assets/bg_img/bg4.jpg"
import bg2 from "../assets/bg_img/bg2.jpg"
import bg3 from "../assets/bg_img/bg3.jpg"

import img1 from '../assets/men_img/mimg3.jpeg'

import img2 from '../assets/women_img/wimg16.jpg'

import img3 from '../assets/children_img/chimg11.jpg'
import Card from './Card';

function Header() {

    const [currentIndex, setCurrentIndex] = useState(0);


  // const prevSlide = () => {
  //   const isFirstSlide = currentIndex === 0;
  //   const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
  //   setCurrentIndex(newIndex);
  // };

  // const nextSlide = () => {
  //   const isLastSlide = currentIndex === slides.length - 1;
  //   const newIndex = isLastSlide ? 0 : currentIndex + 1;
  //   setCurrentIndex(newIndex);
  // };

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    //     }, 5000);

    //     return () => clearInterval(interval);
    // }, []);

    const slides = [
        {
            img: bg1,
        },
        {
            img: bg2,
        },
        {
            img: bg3,
        },
       
    ]

    const  categories=[
      {
        img:img1,
        title:'Men'
      },
      {
        img:img2,
        title:'Women'
      },
      {
        img:img3,
        title:'Children'
      },
      
    ]
    return (
 <>
      <motion.div className=" relative w-full max-w-6xl mx-auto flex bg-black" initial={{x:-100,opacity:0}} animate={{x:0,opacity:1}} transition={{ease:'easeInOut', duration:0.7,delay:0.5}}>
      
     
          <Carousel  autoplay  className='w-full h-[600px] opacity-60 ' color='blue' style={{color:'black'}} >
            {
              slides.map((img)=>(
                <img src={img.img} alt="" className='h-full w-full  object-cover   ' />

              ))
            }
    
          </Carousel>

          <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white' >
            
            <motion.div initial={{opacity:0,scale:0}} whileInView={{opacity:1,scale:1}} transition={{delay:1,duration:0.5, ease:'easeInOut'}} >
            <p className='text-7xl'>Lorem ipsum dolor sit amet consectetur</p>
            <Button className='mt-3'>SHOP NOW</Button>
            </motion.div>

          </div>

        
      
    
    </motion.div>

<div className='container mx-auto mt-5'>
<h1 className='text-3xl '>PRODUCTS OVERVIEW</h1>

</div>

    <motion.main className='mt-10 flex justify-center gap-10 flex-wrap gap-y-5' initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1,delay:0.5,ease:'easeInOut'}}>
      {

        categories.map((img,i)=>(

          <Card key={i} image={img} text={img.title}/>

        ))
      }

    </motion.main>
   
    </>
        );
      }
    



export default Header
