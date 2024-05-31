import { Typography } from '@material-tailwind/react'
import React from 'react'
import { CgWebsite } from 'react-icons/cg'
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa'
import { TbWorld } from 'react-icons/tb'

function Footer() {
    return (
        <>
            <footer className='container mx-auto bg-gray-600/20 mt-20 p-5  '>
                <ul className='flex gap-10 p-2'>
                    <li>
                        <Typography>
                            About Us
                        </Typography>
                    </li>
                    <li>
                        <Typography>
                            Contact Us
                        </Typography>
                    </li>
                </ul>
                <hr className='h-[1.5px] bg-black' />
                <Typography className='text-center mt-3'>
                    &copy; 2024 Falcon org. All Rights Reserved.
                </Typography>
                <div className='flex justify-center gap-10 mt-5'>

                <Typography >
                   <a href="https://www.google.com" target='_blank' > <FaFacebook size={20} /></a>
                </Typography>
                <Typography>
                    <a href=""><FaTwitter size={20}  /></a>
                </Typography>
                <Typography>
                   <a href=""> <FaGithub size={20} /></a>

                </Typography>
                <Typography>
                    <a href=""><FaInstagram size={20} /></a>

                </Typography>
                <Typography>
                    <a href=""><TbWorld size={20} /></a>

                </Typography>
                </div>
            </footer>
        </>
    )
}

export default Footer