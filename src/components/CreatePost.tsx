import Navbar from './navbar/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faPaperPlane,
  faEye,
  faImage
} from '@fortawesome/free-regular-svg-icons'
import '../assets/styles/createPost.css'
import { usePostStore } from '../zustand/usePostStore'
import type { postForm } from '../types/postForm'

const CreatePost = () => {
  const { createPost } = usePostStore()
    function handleSubmit(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        const formData = new FormData(e.currentTarget)
        const postData: postForm = {
          title: formData.get('title') as string,
          excerpt: formData.get('excerpt') as string,
          cover_img: formData.get('image') as File,
          category: 'Technology',
          content: formData.get('content') as string
        }
        createPost(postData)
    }
  return (
    <>
      <Navbar variant="home" />

      <div className="create-post-container">

        <div className="create-post-header">
          <div className="create-post-title">
            <h1>Create a New Post</h1>
            <p>Share something useful, honest or delightfully unexpected</p>
          </div>

          <div className="create-post-actions">
            <button className="save-draft-btn">
              <FontAwesomeIcon icon={faEye} /> Save Draft
            </button>

            <button
              className="publish-btn"
              type='submit'
              form='create-post-form'
            >
              <FontAwesomeIcon icon={faPaperPlane} /> Publish
            </button>
          </div>
        </div>

        <div>
          <form id="create-post-form" className="create-post-form" onSubmit={handleSubmit}>

            {/* Title */}
            <div className="form-group">
              <div className="form-group-header">
                <label htmlFor="title">Post Title</label>
                <p>
                  <span>100</span> characters remaining
                </p>
              </div>

              <input
                type="text"
                id="title"
                name="title"
                placeholder="Enter your post title"
              />
            </div>


            {/* Excerpt */}
            <div className="form-group">
              <div className="form-group-header">
                <label htmlFor="excerpt">Excerpt</label>
                <p>Short introduction to your story</p>
              </div>

              <textarea
                id="excerpt"
                name="excerpt"
                placeholder="Write a short introduction to your story..."
              ></textarea>
            </div>


            {/* Cover Image */}
            <div className="form-group">
              <div className="form-group-header">
                <label htmlFor="image">Cover Image</label>
                <p>Recommended 1600 x 1900 px</p>
              </div>

              <input
                type="file"
                id="image"
                accept="image/png, image/jpeg, image/webp"
                name="image"
                className="visually-hidden-input"
              />

              <label htmlFor="image" className="custom-dropzone">
                <div className="dropzone-content">

                  <div className="dropzone-icon">
                    <FontAwesomeIcon icon={faImage} />
                  </div>

                  <div className="dropzone-text">
                    <span className="bold-text">
                      Drop a cover image here
                    </span>

                    <span className="sub-text">
                      or click to browse · JPG, PNG, or WebP up to 10 MB
                    </span>
                  </div>

                </div>
              </label>
            </div>


            {/* Category */}
            <div className="form-group category">
              <div className="form-group-header">
                <label htmlFor="category-btn">Category</label>
                <p>Choose One</p>
              </div>

              <div className="category-buttons">
                <button
                  type="button"
                  className="category-btn"
                  name="category-btn"
                >
                  Technology
                </button>

                <button
                  type="button"
                  className="category-btn"
                  name="category-btn"
                >
                  Design
                </button>

                <button
                  type="button"
                  className="category-btn"
                  name="category-btn"
                >
                  Lifestyle
                </button>

                <button
                  type="button"
                  className="category-btn"
                  name="category-btn"
                >
                  Education
                </button>

                <button
                  type="button"
                  className="category-btn"
                  name="category-btn"
                >
                  Business
                </button>
              </div>
            </div>


            {/* Story */}
            <div className="form-group">
              <div className="form-group-header">
                <label htmlFor="content">Story</label>
                <p>613 words · about 3 min read</p>
              </div>

              <textarea
                id="content"
                name="content"
                placeholder="Write your story here..."
              ></textarea>
            </div>

          </form>
        </div>

      </div>
    </>
  )
}

export default CreatePost