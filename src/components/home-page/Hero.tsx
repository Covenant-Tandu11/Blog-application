import sparkle  from '../../assets/images/sparkle.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import '../../assets/styles/hero.css'
import Navbar from '../navbar/Navbar'

const Hero = () => {


  return (
    <>
        <Navbar variant='home'/>
        <section className='hero-section'>
            <div className='right-hero'>
                <div className='welcome-badge'>
                    <img src={sparkle} alt="" />
                    <span>A place for curious minds</span>
                </div>
                <h1>Good ideas deserve room to grow</h1>
                <p>Read thoughtful stories from independent writers, or start sharing your own perspective with a welcoming community</p>
            </div>
            <div className="search-pannel">
                <h2>What do you want to read today?</h2>
                <div className='search-input'>
                    <FontAwesomeIcon icon={faMagnifyingGlass}/>
                    <input type="text" placeholder='Search posts, topics or writers'/>
                </div>
                <div className='popular-topics'>
                    <p>Popular:</p>
                    <ul>
                        <li>Design</li>
                        <li>Habits</li>
                        <li>Ai</li>
                    </ul>
                </div>
            </div>
        </section>
    </>
  )
}

export default Hero
