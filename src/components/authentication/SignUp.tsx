import React, { useState } from 'react'
import Navbar from '../navbar/Navbar'
import '../../assets/styles/signup.css'
import signUpImage from '../../assets/images/signup-img.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faEnvelope, faEye, } from '@fortawesome/free-regular-svg-icons'
import { faLock, faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import { supabase} from '../../lib/supabase'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const SignUp = () => {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [displayname, setDisplayname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault()

  if (password !== confirmPassword) {
    alert("Passwords don't match")
    return
  }

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        username,
        display_name: displayname
      }
    }
  })

  if (error) {
    console.error(error)
    alert(error.message)
    return
  }

  navigate('/home')
}
  return (
      <>
        <Navbar variant='auth'/>
        <section className='signup-section'>
            <div className='signup-form'>
              <div>
                <div className='signup-header'>
                  <span className='signup-banner'>Start Writing Today</span>
                  <h1>Create Your Write Space</h1>
                  <p>Join a welcoming community, save stories you love, and publish your own when you are ready</p>
                </div>

                <form onSubmit={handleSignUp}>
                  <div className='form-group'>
                    <label htmlFor="username">Username</label>
                    <div className='input-wrapper'>
                      <FontAwesomeIcon icon={faUser} className='input-icon'/>
                      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} id="username" name="username" required placeholder='Your username'/>
                    </div>
                  </div>
                  <div className='form-group'>
                    <label htmlFor="displayName">Display Name</label>
                    <div className='input-wrapper'>
                      <FontAwesomeIcon icon={faUser} className='input-icon'/>
                      <input type="text" value={displayname} onChange={(e) => setDisplayname(e.target.value)} id="displayName" name="displayName" required placeholder='Your display name'/>
                    </div>
                  </div>

                  <div className='form-group'>
                    <label htmlFor="email">Email</label>
                    <div className='input-wrapper'>
                      <FontAwesomeIcon icon={faEnvelope} className='input-icon'/>
                      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} id="email" name="email" required placeholder='you@example.com'/>
                    </div>
                  </div>

                  <div className='form-group'>
                    <label htmlFor="password">Password</label>
                    <div className='input-wrapper'>
                      <FontAwesomeIcon icon={faLock} className='input-icon'/>
                      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} id="password" name="password" required placeholder='At least 8 characters'/>
                      <FontAwesomeIcon icon={faEye} className='input-icon eye-icon'/>
                    </div>
                  </div>

                  <div className='form-group'>
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <div className='input-wrapper'>
                      <FontAwesomeIcon icon={faLock} className='input-icon'/>
                      <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} id="confirmPassword" name="confirmPassword" required />
                      <FontAwesomeIcon icon={faEye} className='input-icon eye-icon'/>
                    </div>
                  </div>
                  <p className='form-text'>Your Password must be up to 8 characters long.</p>
                  <div className='form-group terms'>
                    <input type="checkbox" id="terms" name="terms" required />
                    <label htmlFor="terms">I agree to the <a href="">Terms of Service</a> and <a href="">Privacy Policy</a></label>
                  </div>
                  <button type="submit" className='sign-up-btn'>Create Account</button>
                  <p className='form-text continue'>or continue with</p>
                  <button className='google-signup'>Sign Up with Google</button>
                </form>
                <p className='signup-footer'>
                  Already have an account? <Link to="/login">Sign In</Link>
                </p>
              </div>
            </div>
            <div className='signup-image'>
              <span className='signup-banner signup-image-banner'>A place for curious minds</span>
              <div className='overlay'></div>
              <img src={signUpImage} alt="Sign Up" />
              <div className='signup-image-quote'>
                <FontAwesomeIcon icon={faQuoteLeft} className='quote-icon'/>
                <p>Every meaningful story begins with a first sentence</p>
                <p className="author">- WhiteSpace Community</p>
              </div>
            </div>
        </section>
      </>
  )
}

export default SignUp
