import { Link } from 'react-router-dom'
import '../../assets/styles/footer.css'

const Footer = () => {
  return (
    <footer className='site-footer'>
      <div className='footer-inner'>
        <div className='footer-brand'>
          <Link to='/home' className='footer-logo' aria-label='WriteSpace home'>
            <span>W</span>
            <strong>WriteSpace</strong>
          </Link>
          <p>Thoughtful stories, essays, and ideas from writers finding their voice.</p>
        </div>

        <div className='footer-links'>
          <div>
            <h2>Explore</h2>
            <Link to='/home'>Home</Link>
            <Link to='/explore'>Stories</Link>
            <Link to='/createPost'>Write</Link>
          </div>

          <div>
            <h2>Community</h2>
            <a href='mailto:hello@writespace.com'>Contact</a>
            <a href='mailto:hello@writespace.com'>Support</a>
            <a href='mailto:hello@writespace.com'>Collaborate</a>
          </div>
        </div>
      </div>

      <div className='footer-bottom'>
        <p>&copy; 2026 WriteSpace. All rights reserved.</p>
        <div>
          <a href='mailto:privacy@writespace.com'>Privacy</a>
          <a href='mailto:terms@writespace.com'>Terms</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
