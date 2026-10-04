
import { Link } from 'react-router-dom'

interface StoryCardProps{
  category: string, 
  cover_img: string,
  title: string,
  avatar_url: string | null,
  displayName: string,
  excerpt: string,
  date: string
} 

const StoryCard = ({category, cover_img, title, date, excerpt, displayName, avatar_url}: StoryCardProps) => {
  return (
    <div className='story-card'>
      <Link className="story-card-image-link" to="/blogPost" aria-label={`Read ${title}`}>
        <img className="story-card-image" src={cover_img} alt="" />
      </Link>
      <div className="story-card-content">
        <span className="story-card-category">{category}</span>
        <h2 className="story-card-title">
          <Link to="/blogPost">{title}</Link>
        </h2>
        <p className="story-card-excerpt">{excerpt}</p>
        <div className="story-card-footer">
          <div className="story-card-byline">
            <img className="story-card-author-avatar" src={avatar_url || undefined} alt="" />
            <div>
              <p className="story-card-author">{displayName}</p>
              <p className="story-card-meta">{date}</p>
            </div>
          </div>
          <Link className="story-card-read-link" to="/blogPost" aria-label={`Read ${title}`}>
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default StoryCard
