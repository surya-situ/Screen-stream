import { Link } from 'react-router-dom'

import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import TvOutlinedIcon from '@mui/icons-material/TvOutlined';
import LocalMoviesOutlinedIcon from '@mui/icons-material/LocalMoviesOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';

import logo from '../images/logo.png'
import '../styles/Header.css'

const Header = () => {

  return (
    <div  className=''>
        
        <div>
            <li>
                <Link to="/subscriptionPage">
                    <img className='' src={logo} alt='logo'/>
                </Link>
            </li>
        </div>

        <ul className=''>
            <li>
                <Link to="/userPage">
                    <div className=''>
                        <AccountCircleOutlinedIcon />
                        <span className=''>Account</span>
                    </div>
                </Link>
            </li>
            <li>
                <Link to="/" title='Home'>
                    <div className=''>
                        <HomeOutlinedIcon />
                        <span className=''>Home</span>
                    </div>
                </Link>
            </li>
            <li>
                <Link to="/searchPage">
                    <div className=''>
                        <SearchOutlinedIcon />
                        <span className=''>Search</span>
                    </div>
                </Link>
            </li>
            <li>
                <Link to="/tvPage">
                    <div className=''>
                        <TvOutlinedIcon />
                        <span className=''>TV</span>
                    </div>
                </Link>
            </li>
            <li>
                <Link to="/moviePage">
                    <div className=''>
                        <LocalMoviesOutlinedIcon  className=''/>
                        <span className=''>Movies</span>
                    </div>
                </Link>
            </li>
            <li>
                <Link to="/categoryPage">
                    {/* <CategoryOutlinedIcon /> */}
                    <div className="">
                        <CategoryOutlinedIcon />
                        <span className="">Categories</span>
                    </div>
                </Link>
            </li>
        </ul>

    </div>
  )
}

export default Header
