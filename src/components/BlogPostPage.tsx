import Navbar from './navbar/Navbar'
import '../assets/styles/blogPost.css'
import { usePostStore } from '../zustand/usePostStore'
import Footer from './footer/Footer'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import defaultAvatar from '../assets/images/avatar.jpg'

const BlogPostPage = () => {
    const { postId } = useParams();
    const [isLoading, setIsLoading] = useState(true)
    const [hasLoadError, setHasLoadError] = useState(false)
    const { posts, fetchPost } = usePostStore()

    useEffect(() => {
        let isActive = true

        async function loadPost() {
            setIsLoading(true)
            setHasLoadError(false)

            if (!postId) {
                setHasLoadError(true)
                setIsLoading(false)
                return
            }

            try {
                await fetchPost(postId)
            } catch (error) {
                console.error('Failed to load blog post:', error)
                if (isActive) {
                    setHasLoadError(true)
                }
            } finally {
                if (isActive) {
                    setIsLoading(false)
                }
            }
        }

        void loadPost()

        return () => {
            isActive = false
        }
    }, [postId, fetchPost])

    const post = posts.find((post) => post.id === postId)

    if(isLoading){
        return<h1>Loading...</h1>
    }
    if (hasLoadError || !post) {
        return <h1>Oops. Something went wrong</h1>
    }

    const formatDate = (date: string) => new Intl.DateTimeFormat('en', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
    }).format(new Date(date))

  return (
    <>
   
        <Navbar variant='home'/>
        <div className="blog-post-container">
            <div className='blog-post-header'>
                <span className='category'>{post?.category}</span>
                <h1 className='post-title'>{post?.title}</h1>
                <p>{post?.excerpt}</p>
                <div>
                    <img src={post.profiles?.avatar_url || defaultAvatar} alt="Profile image" />
                    <p><span>{post.profiles?.display_name}</span> . <span>{formatDate(post.created_at)}</span></p>
                </div>
                <img src={post?.cover_image} alt="Cover image"  className='cover-image'/>
                <p className='story'>
                    {post?.content}
                </p>
            </div>
        </div>
        <Footer />
    </>
  )
}

export default BlogPostPage
