import React, {useEffect} from 'react';
import { Link, useLocation } from 'react-router-dom';

// ICONS
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import TvOutlinedIcon from '@mui/icons-material/TvOutlined';
import LocalMoviesOutlinedIcon from '@mui/icons-material/LocalMoviesOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';

import logo from '../images/logo.png'
import './styles/Header.css'

const Header = () => {

    const location = useLocation();

    // Feature: to stick the nav to the right
    useEffect(() => {
        const sidebar = document.getElementById('sidebar');
        const handleScroll = () => {
          const scrollY = window.scrollY;

          if (scrollY > sidebar.offsetTop) {
            sidebar.style.position = 'fixed';
            sidebar.style.left = '0';
            sidebar.style.top = '0';
          } else {
            sidebar.style.position = 'absolute';
            sidebar.style.left = '0';
            sidebar.style.top = `${sidebar.offsetTop}px`;
          }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
    }, []);

  return (
    <div id="sidebar" className='h-screen flex pt-10 w-[120px] text-white px-2 relative'>

        {/* Makes a background when hover on the nav bar */}
        <div className='sidebar-background'></div>

        <ul className='flex flex-col items-center space-y-12 cursor-pointer'>

            <li>
                <Link to="/subscriptionPage">
                    <div className='relative'>
                        <img src={logo} alt='logo'/>
                    </div>
                </Link>
            </li>

            <div className='space-y-12'>
                {/* className='glow' is from the styles/heder.css to make the background glow on hover */}
                <li className={`glow ${location.pathname === '/userPage' ? 'opacity-100' : 'opacity-40'} hover:opacity-100`}>
                    <Link to="/userPage">
                        <div className='relative'>
                            <AccountCircleOutlinedIcon />
                            <span className='tooltip'>Account</span>
                        </div>
                    </Link>
                </li>

                <li className={`glow ${location.pathname === '/' ? 'opacity-100' : 'opacity-40'} hover:opacity-100`}>
                    <Link to="/" title='Home'>
                        <div className='relative'>
                            <HomeOutlinedIcon />
                            <span className='tooltip'>Home</span>
                        </div>
                    </Link>
                </li>

                <li className={`glow ${location.pathname === '/searchPage' ? 'opacity-100' : 'opacity-40'} hover:opacity-100`}>
                    <Link to="/searchPage">
                        <div className='relative'>
                            <SearchOutlinedIcon />
                            <span className='tooltip'>Search</span>
                        </div>
                    </Link>
                </li>

                <li className={`glow ${location.pathname === '/tvPage' ? 'opacity-100' : 'opacity-40'} hover:opacity-100`}>
                    <Link to="/tvPage">
                        <div className='relative'>
                            <TvOutlinedIcon />
                            <span className='tooltip'>TV</span>
                        </div>
                    </Link>
                </li>

                <li className={`glow ${location.pathname === '/moviePage' ? 'opacity-100' : 'opacity-40'} hover:opacity-100`}>
                    <Link to="/moviePage">
                        <div className='relative'>
                            <LocalMoviesOutlinedIcon />
                            <span className='tooltip'>Movies</span>
                        </div>
                    </Link>
                </li>

                <li className={`glow ${location.pathname === '/categoryPage' ? 'opacity-100' : 'opacity-40'} hover:opacity-100`}>
                    <Link to="/categoryPage">
                        <div className="relative">
                            <CategoryOutlinedIcon />
                            <span className="tooltip">Categories</span>
                        </div>
                    </Link>
                </li>
            </div>
        </ul>

    </div>
  )
}

export default Header

