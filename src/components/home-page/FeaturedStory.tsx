import '../../assets/styles/featuredStory.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { usePostStore } from '../../zustand/usePostStore'
import defaultAvatar from '../../assets/images/avatar.jpg'

const FeaturedStory = () => {
    const { posts, fetchPosts } = usePostStore()
    const fetchedPost = posts[0]
    console.log('Featured post:', fetchedPost)
    useEffect(() => {
        fetchPosts();
    }, []);
    if (!fetchedPost) {
        return <p>No posts to see here yet</p>
    }
    return (
    <section className="featured-story-section">

        {/* Section heading */}
        <div className="section-header">
            <h3>editor's pick</h3>

            <div className="section-title-row">
                <h1>Featured Story</h1>

                <p>
                    <a href="">
                        Browse all stories
                        <FontAwesomeIcon icon={faArrowRight} />
                    </a>
                </p>
            </div>
        </div>


        {/* Featured story card */}
        <div className="featured-story-card">

            <img
                className="featured-story-image"
                src={fetchedPost.cover_image}
                alt="Smiling woman"
            />

            <div className="featured-story-content">

                <span className="featured-story-category">
                    {fetchedPost.category}
                </span>

                <h1 className="featured-story-title">
                    {fetchedPost.title}
                </h1>

                <p className="featured-story-excerpt">
                    {fetchedPost.excerpt}
                </p>


                {/* Bottom section */}
                <div className="featured-story-footer">

                    <div className="featured-story-author">

                        <img
                            className="author-image"
                            src={fetchedPost.profiles?.avatar_url || defaultAvatar}
                            alt="Profile image"
                        />

                        <p>
                            {fetchedPost.profiles?.display_name || 'Unknown author'} ·
                            <span>
                                {fetchedPost.created_at}
                            </span>
                        </p>

                    </div>

                    <Link to={'/blogPost'}>
                    <button className="read-story-btn">
                        Read Story
                        <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                    </Link>
                </div>

            </div>
        </div>

    </section>
)
}

export default FeaturedStory
