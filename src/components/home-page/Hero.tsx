import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import '../../assets/styles/hero.css'
import { useEffect } from 'react'
import Navbar from '../navbar/Navbar'
import heroImage from '../../assets/images/hero-img.jpg'
import { Link } from 'react-router-dom'
import { usePostStore } from '../../zustand/usePostStore'

const Hero = () => {
    const { posts, fetchPosts } = usePostStore()
    const fetchedPost = posts[0]
    useEffect(() => {
        fetchPosts();
    }, [fetchPosts]);

    if (!fetchedPost) {
    return <p>Loading featured post...</p>
}

    return (
        <>
            <Navbar variant='home'/>
            <section className='hero-section'>
                <img src={heroImage} alt=''/>
                <div className='hero-overlay'></div>
                <div className='hero-content'>
                    <p className='featured-title'>Featured</p>
                    <h1>{fetchedPost.title}</h1>
                    <p>{fetchedPost.excerpt}</p>
                </div>
                <Link
                    className='hero-read-link'
                    to={`/blogPost/${fetchedPost.id}`}
                    aria-label={`Read ${fetchedPost.title}`}
                >
                    <FontAwesomeIcon icon={faArrowRight} />
                </Link>
            </section>
        </>
    )
}

export default Hero
