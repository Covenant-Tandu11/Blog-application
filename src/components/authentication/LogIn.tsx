import Navbar from '../navbar/Navbar'
import loginImage from '../../assets/images/login-img.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faEye, } from '@fortawesome/free-regular-svg-icons'
import { faLock, faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import '../../assets/styles/login.css'
import { supabase } from '../../lib/supabase'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const LogIn = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
    })

    if (error) {
        console.log('Login error:', error.message)
        return
    }

    console.log('Logged in user:', data.user)
    console.log('Session:', data.session)

    if (data.user) {
        navigate('/home')
    }
}
  return (
        <>
            <Navbar variant='auth'/>
            <section className='login-section'>
                <div className='login-form'>
                <div>
                    <div className='login-header'>
                    <span className='login-banner'>Good to see you again</span>
                    <h1>Welcome back</h1>
                    <p>Login to continue reading, writing and going ideas with your community.</p>
                    </div>

                    <form onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <label htmlFor="email">Email Address</label>
                        <div className='input-wrapper'>
                        <FontAwesomeIcon icon={faEnvelope} className='input-icon'/>
                        <input type="text" id="email" name="name" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder='you@example.com'/>
                        </div>
                    </div>
                    <div className='form-group'>
                        <label htmlFor="password">Password</label>
                        <div className='input-wrapper'>
                        <FontAwesomeIcon icon={faLock} className='input-icon'/>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} id="password" name="password" required placeholder='Enter your password'/>
                        <FontAwesomeIcon icon={faEye} className='input-icon eye-icon'/>
                        </div>
                    </div>
                    <div className='form-options'>
                        <div className='form-group remember'>
                            <input type="checkbox" id="terms" name="remember" required />
                            <label htmlFor="remember">Remember me</label>
                        </div>
                        <p>Forgot Password?</p>
                    </div>
                    
                    <button type="submit">Login</button>
                    <p className='form-text continue'>or continue with</p>
                    <button className='google-login'>Continue with Google</button>
                    </form>
                    <p className='login-footer'>
                    New to WriteSpace? <Link to="/">Create An Account</Link>
                    </p>
                </div>
                </div>
                <div className='login-image'>
                <span className='login-banner login-image-banner'>Welcome back to your ideas</span>
                <div className='overlay'></div>
                <img src={loginImage} alt="Sign Up" />
                <div className='login-image-quote'>
                    <FontAwesomeIcon icon={faQuoteLeft} className='quote-icon'/>
                    <p>Come back to the stories that only you can tell</p>
                    <p className="author">- WhiteSpace Community</p>
                </div>
                </div>
            </section>
        </>
    )
}

export default LogIn
