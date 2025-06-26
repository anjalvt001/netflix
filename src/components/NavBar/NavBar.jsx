import React, { useRef , useEffect } from 'react'
import './NavBar.css';
import logo from '../../assets/logo.png';
import searchIcon from '../../assets/search_icon.svg';
import bellIcon from '../../assets/bell_icon.svg';
import profileIcon from '../../assets/profile_img.png';
import caretIcon from '../../assets/caret_icon.svg';
import { signOut } from 'firebase/auth';
import { auth } from '../../config/firebase';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {

  const navRef = useRef();
  const navigate = useNavigate();

  const SignOut = async () => {
    try {
      await signOut(auth);
      navigate('/login');

    } catch (error) {
      console.log(error.message); 
    }
  }

  useEffect(() => {

    window.addEventListener('scroll', () => {
      if(window.scrollY >= 80){
        navRef.current.classList.add('nav-dark');
      }else{
        navRef.current.classList.remove('nav-dark');
      }
    })

  }, []);

  return (
    <div ref={navRef} className='navbar'>
      <div className="navbar-left">
        <img src={logo} alt="" />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by language</li>
        </ul>

      </div>
      <div className="navbar-right">
        <img src={searchIcon} className='icons' alt='search'/>
        <p>children</p>
         <img src={bellIcon} className='icons' alt='bell'/>
         <div className='navbar-profile'>
          <img src={profileIcon} className='profile' alt='profile'/>
          <img src={caretIcon} alt='bell'/>
          <div className='dropdown'>
            <p onClick={SignOut}>Sign Out of Netflix</p>
          </div>
         </div>
      </div>

    </div>
  )
}

export default NavBar
