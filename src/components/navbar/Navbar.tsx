import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { supabase } from '../../lib/supabase';
import { useState, useEffect } from 'react';
import '../../assets/styles/navbar.css'

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
        <div className='left-nav'>
          <span className='logo'>W</span>
          <h2>WriteSpace</h2>
        </div>
        <div className='right-nav'>
          {variant === 'auth' ? (
            <ul className='nav-links'>
              <li className='nav-link'>
                <FontAwesomeIcon icon={faArrowLeft} />
                <span>Back to stories</span>
              </li>
            </ul>
          ) : (
            <>
              <ul className='nav-links'>
                <Link to={'/home'}>
                  <li className='nav-link'>Home</li>
                </Link>
                <Link to={'/explore'}>
                  <li className='nav-link'>Explore</li>
                </Link>
              </ul>
              <Link to="/createPost">
                <button className='write-btn'>
                  <FontAwesomeIcon icon={faPenToSquare} />
                  <span>Write</span>
                </button>
              </Link>
              <Link to={`/profilePage/${userId}`}>
                <img src="" alt="Profile Picture" className='profile-picture'/>
              </Link>
            </>)}
        </div>
      </nav>
    </header>
  )
}

export default Navbar
