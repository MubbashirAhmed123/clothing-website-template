
import React from 'react';
import 'react-toastify/ReactToastify.css'
import Nav from './Components/Nav';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Products from './Pages/Products';
import ProductCart from './Pages/ProductCart';
import SingleProduct from './Pages/SingleProduct';
import { ToastContainer } from 'react-toastify';
import Signup from './Pages/Signup';
import SignIn from './Pages/SignIn';
import About from './Pages/About';
import Contact from './Pages/Contact';




function App() {
  console.log('hello')

  return (
    <>
      <ToastContainer/> 
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products/>}/>
        <Route path='/product/:prodId' element={<SingleProduct/>}/>
        <Route path='/cart' element={<ProductCart/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<SignIn/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>

    </>
  );

}

export default App;
