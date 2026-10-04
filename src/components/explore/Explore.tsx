import Navbar from '../navbar/Navbar'
import StoryCard from './StoryCard'
import { usePostStore } from '../../zustand/usePostStore'
import { useEffect } from 'react'
import defaultAvatar from '../../assets/images/avatar.jpg'
import '../../assets/styles/explore.css'

const Explore = () => {
  const { posts, fetchPosts } = usePostStore()
  useEffect(() => {
    fetchPosts()
  }, [])
  console.log(posts)
  return (
    <>
      <Navbar variant='home'/>
      <section className='explore-section'>
        <div className="explore-heading">
          <div>
          <p className="explore-eyebrow">Explore WriteSpace</p>
          <h1>Find an idea worth carrying with you.</h1>
          <p className="explore-intro">Search thoughtful stories across design, life, technology, education and business.</p>
          </div>
        </div>
        <input className="explore-search" type="search" aria-label="Search stories" placeholder="Search stories, topics or writers" />
        <div className="explore-topics">
          <button className="explore-topic is-active" type="button">
            All
          </button>
          <button className="explore-topic" type="button">
            Technology
          </button>
          <button className="explore-topic" type="button">
            Lifestyle
          </button>
          <button className="explore-topic" type="button">
            Business
          </button>
          <button className="explore-topic" type="button">
            Education
          </button>
        </div>
        <div className="story-grid">
          {
            posts.map((post) => (
              <StoryCard key={post.id} category={post.category} cover_img={post.cover_image} title={post.title} excerpt={post.excerpt} displayName={post.profiles?.display_name || 'Unknown author'} avatar_url={post.profiles?.avatar_url || defaultAvatar} date={post.created_at}/>
            ))
          }
        </div>
      </section>
    </>
  )
}

export default Explore
