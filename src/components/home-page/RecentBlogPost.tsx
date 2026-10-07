import '../../assets/styles/featuredStory.css'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { usePostStore } from '../../zustand/usePostStore'
import defaultAvatar from '../../assets/images/avatar.jpg'

const RecentBlogPost = () => {
    const { posts, fetchPosts } = usePostStore()
    const recentPosts = posts.slice(0, 9)

    useEffect(() => {
        fetchPosts()
    }, [fetchPosts])

    if (!recentPosts.length) {
        return <p>No posts to see here yet</p>
    }

    const formatDate = (date: string) => {
        return new Intl.DateTimeFormat('en', {
            day: 'numeric',
            month: 'short',
            year: 'numeric'
        }).format(new Date(date))
    }

    return (
        <section className="recent-posts-section">
            <h2>Recent blog posts</h2>

            <div className="recent-posts-grid">
                {recentPosts.map((post) => (
                    <article className="recent-post-card" key={post.id}>
                        <Link to={`/blogPost/${post.id}`} className="recent-post-image-link" aria-label={`Read ${post.title}`}>
                            <img className="recent-post-image" src={post.cover_image} alt="" />
                        </Link>

                        <div className="recent-post-content">
                            <h3>
                                <Link to={`/blogPost/${post.id}`}>{post.title}</Link>
                            </h3>

                            <p>{post.excerpt}</p>

                            <div className="recent-post-author">
                                <img
                                    src={post.profiles?.avatar_url || defaultAvatar}
                                    alt=""
                                />
                                <span>{post.profiles?.display_name || 'Unknown author'} &bull; {formatDate(post.created_at)}</span>
                            </div>
                        </div>
                    </article>
                ))}
            </div>

            <Link to="/explore" className="recent-posts-more">Loading more...</Link>
        </section>
    )
}

export default RecentBlogPost
