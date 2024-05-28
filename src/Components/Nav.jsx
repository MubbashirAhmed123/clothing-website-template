import React, { useState } from 'react';
import { FaHome, FaTshirt, FaShoppingCart, FaUser, FaBars, FaTimes, FaSignInAlt } from 'react-icons/fa';
import { Navbar, Typography, Button, Collapse, Card } from '@material-tailwind/react';
import { Link } from 'react-router-dom';

export default function Nav() {
  const [openNav, setOpenNav] = useState(false);

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth >= 960) {
//         setOpenNav(false);
//       }
//     };
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

  return (
    <Navbar className="mx-auto sticky top-0 z-10  py-2 px-4 lg:px-8 lg:py-4 bg-white shadow-md mb-5">
      <div className="container mx-auto flex justify-between items-center">
        <Typography as="Link"  variant="h5" className="mr-4 cursor-pointer py-1.5 text-black" >
          <Link to='/'>Clothing Brand</Link>
        </Typography>
        <div className="hidden md:flex gap-6">
          <Link to='/' className="flex items-center text-gray-700 hover:text-gray-900 transition-colors">
            <FaHome className="mr-2" />
            Home
          </Link>
          <Link to='/products' className="flex items-center text-gray-700 hover:text-gray-900 transition-colors">
            <FaTshirt className="mr-2" />
            Products
          </Link>
          <Link to='/cart' className="relative flex items-center text-gray-700 hover:text-gray-900 transition-colors">
            <FaShoppingCart className="mr-2"  />
            Cart 
          </Link>
          {/* <Link to='/profile'  className="flex items-center text-gray-700 hover:text-gray-900 transition-colors">
            <FaUser className="mr-2" />
            Profile
          </Link> */}
          <Link to='/login'  className="flex items-center text-gray-700 hover:text-gray-900 transition-colors"><FaSignInAlt className='mr-2' /> SignIn</Link>
        </div>
        <Button
          variant="text"
          size="sm"
          className="ml-auto md:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
            {openNav ? <FaTimes size={25} /> : <FaBars size={25} />}
        </Button>
      </div>
      <Collapse open={openNav} className="md:hidden ">
        <Card className="flex flex-col gap-2 mt-2 list-none">
          <li>
            <Link to='/'  className="flex items-center text-gray-700 hover:text-gray-900 transition-colors">
              <FaHome className="mr-2" />
              Home
            </Link>
          </li>
          <li>
            <Link to='/products'  className="flex items-center text-gray-700 hover:text-gray-900 transition-colors">
              <FaTshirt className="mr-2" />
              Products
            </Link>
          </li>
          <li>
            <Link to='/cart'  className="flex items-center text-gray-700 hover:text-gray-900 transition-colors">
              <FaShoppingCart className="mr-2" />
              Cart
            </Link>
          </li>
          {/* <li>
            <Link to='/profile'  className="flex items-center text-gray-700 hover:text-gray-900 transition-colors">
              <FaUser className="mr-2" />
              Profile
            </Link>
          </li> */}
          <li>
          <Link to='/login'  className="flex items-center text-gray-700 hover:text-gray-900 transition-colors"><FaSignInAlt className='mr-2' /> SignIn</Link>
          </li>
        </Card>
      </Collapse>
    </Navbar>
  );
}
