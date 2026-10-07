import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'
import { supabase } from '../../lib/supabase';
import { useState, useEffect } from 'react';
import '../../assets/styles/navbar.css'
import defaultAvatar from '../../assets/images/avatar.jpg'

type NavbarVariant = 'auth' | 'home'
interface NavbarProps {
  variant: NavbarVariant
}

const Navbar = ({variant}: NavbarProps) => {
  const [userId, setUserId] = useState<string | null>(null)
  useEffect(() => {
    async function getCurrentUser(){
      const { data: {user} } = await supabase.auth.getUser()
      if(user){
        setUserId(
          user.id
        )
      }
    }
     getCurrentUser()

  }, [])
  return (
    <header>
      <nav className='navigation-bar'>
        <Link to={variant === 'auth' ? '/' : '/home'} className='left-nav' aria-label='WriteSpace home'>
          <span className='logo'>W</span>
          <h2>WriteSpace</h2>
        </Link>
        <div className='right-nav'>
          {variant === 'auth' ? (
            <ul className='nav-links'>
              <li>
                <Link to='/home' className='nav-link back-link'>
                  <FontAwesomeIcon icon={faArrowLeft} />
                  <span>Back to stories</span>
                </Link>
              </li>
            </ul>
          ) : (
            <>
              <ul className='nav-links'>
                <li>
                  <NavLink to='/home' className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/explore' className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                    Explore
                  </NavLink>
                </li>
              </ul>
              <Link to="/createPost">
                <button className='write-btn'>
                  <FontAwesomeIcon icon={faPenToSquare} />
                  <span>Write</span>
                </button>
              </Link>
              <Link to={userId ? `/profilePage/${userId}` : '/login'} className='profile-link' aria-label='Open profile'>
                <img src={defaultAvatar} alt="" className='profile-picture'/>
              </Link>
            </>)}
        </div>
      </nav>
    </header>
  )
}

export default Navbar
