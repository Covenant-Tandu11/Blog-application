import { useEffect } from 'react'
import Navbar from './navbar/Navbar'
import '../assets/styles/profilePage.css'
import { useParams } from 'react-router-dom'
import { useProfileStore } from '../zustand/useProfileStore'
import defaultAvatar from '../assets/images/avatar.jpg'
import StoryCard from './explore/StoryCard'
const ProfilePage = () => {
  const { userId } = useParams()
  const { profile, posts, fetchProfile, fetchUserPosts } = useProfileStore()
  useEffect(() => {
    if(userId){
      fetchProfile(userId)
      fetchUserPosts(userId)
    }
  }, [userId])
  if (!profile) {
    return <p>Loading profile...</p>
}
  return (
    <>
        <Navbar variant='home'/>
        <div className='profile-page-container'>
          <div className='profile-header'>
            <img  src={profile.avatar_url || defaultAvatar} alt={profile.display_name} className='profile-image'/>
            <div className='profile-details'>
              <h1>{profile.display_name}</h1>
              <p>@{profile.username}</p>
              <p>{profile.bio}</p>
            </div>
            <div className='profile-stats'>
              <div className="profile-stat">
                <h2 className='posts' id='posts'>1</h2>
                <label htmlFor="posts">Posts</label>
              </div>
              <div className="profile-stat">
                <h2 className='posts' id='followers'>500</h2>
                <label htmlFor="followers">Followers</label>
              </div>
              <div className="profile-stat">
                <h2 className='posts' id='following'>400</h2>
                <label htmlFor="following">Following</label>
              </div>
            </div>
            <div className="profile-actions">
              <button className='follow-btn'>Follow</button>
              <button className='more-btn'>...</button>
            </div>
          </div>
          <div className='published-posts'>
            <div>
              <h1>Published Posts</h1>
              <p><span>24</span> stories . latest first</p>
            </div>
            <div className='story-grid'>
              {
                posts.map((post) => (
                  <StoryCard
                key={post.id}
                category={post.category}
                  cover_img={post.cover_image}
                  title={post.title}
                  excerpt={post.excerpt}
                  displayName={post.profiles.display_name}
                  avatar_url={post.profiles.avatar_url}
                  date={post.created_at}
                />
                ))
              }
            </div>
          </div>
        </div>
    </>
  )
}

export default ProfilePage
