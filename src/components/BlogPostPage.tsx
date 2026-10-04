import Navbar from './navbar/Navbar'
import '../assets/styles/blogPost.css'

const BlogPostPage = () => {
  return (
    <>
        <Navbar variant='home'/>
        <div className="blog-post-container">
            <div className='blog-post-header'>
                <span className='category'>LifeStyle</span>
                <h1 className='post-title'>The quiet courage of changing your mind</h1>
                <p>nen</p>
                <div>
                    <img src="" alt="Profile image" />
                    <p><span>Covenant Tandu</span> . <span >OCtober 2</span> . 7 min</p> 
                </div>
                <img src="" alt="Cover image"  className='cover-image'/>
                <p className='story'>
                    Hi
                </p>
            </div>
        </div>
    </>
  )
}

export default BlogPostPage
