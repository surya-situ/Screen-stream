import React from 'react';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';

// IMAGE FOR APP {android & ios}
import androidStore from '../images/app/google-playstore.png'
import appleStore from '../images/app/ios-appstore.png'

const Footer = () => {
    const currentYear = new Date().getFullYear()

  return (
    <>
        <div className='flex justify-between w-full h-full mx-auto mb-10 text-white pr-[120px] pl-[150px]'>
        
                {/* COMPANY DETAILS */}
                <div>
                    <h1 className='pb-10 text-xl'>Company</h1>
                    <div className='opacity-50 '>
                        <p className='mb-3 cursor-pointer'>About Us</p>
                        <p className='cursor-pointer'>Careers</p>
                    </div>
                </div>
                
                {/* LANGUAGE */}
                <div>
                    <h1 className='pb-10 text-xl'>View website in</h1>
                    <p className='opacity-50 '> <CheckOutlinedIcon /> English</p>
                </div>

                {/* HELP */}
                <div>
                    <h1 className='pb-10 text-xl'>Need Help ?</h1>
                    <div className='opacity-50 cursor-pointer'>
                        <p className='mb-3'>Visit Help Center</p>
                        <p>Share Feedback</p>
                    </div>
                </div>

                {/* CONTACTS */}
                <div>
                    <h1 className='pb-10 text-xl'>Contact us</h1>
                    <div className='flex flex-row gap-10 opacity-50 cursor-pointer'>
                        <p> <FacebookOutlinedIcon/> </p>
                        <p> <LocalPhoneOutlinedIcon /> </p>
                    </div>
                </div>

            </div>

        {/* OTHER DETAILS OF THE COMPANY AND APP LINKS */}
        <div className='flex items-center justify-between pt-5 pb-10 pr-[120px] pl-[150px]'>

            <div className='opacity-50'>
                <h1> &copy; {currentYear} SCREEN. All rights reserves.</h1>
                <div className='flex flex-row gap-4 cursor-pointer'>
                    <p>Terms of use</p>
                    <p>F&Q</p>
                    <p>Privacy policy</p>
                </div>
            </div>

            <div className='flex opacity-50'>
                <div className='flex flex-row cursor-pointer'>
                    <img src={androidStore} alt="playstore" className='w-[120px]'/>
                    <img src={appleStore} alt="apple store" className='w-[120px]'/>
                </div>
            </div>

        </div>
    </>
  )
}

export default Footer