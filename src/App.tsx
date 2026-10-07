import SignUp from './components/authentication/SignUp'
import Login from './components/authentication/LogIn'
import Home from './assets/pages/Home'
import { supabase } from './lib/supabase'
import { Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import './App.css'
import CreatePost from './components/CreatePost'
import ProfilePage from './components/ProfilePage'
import BlogPostPage from './components/BlogPostPage'
import Explore from './components/explore/Explore'


function App() {
  useEffect(() => {
    async function fetchData() {
      const { data, error } = await supabase.from('posts').select('*')
      if (error) {
        console.error('Error fetching data:', error)
      } else {
        console.log('Fetched data:', data)
      }
    }
    fetchData()
  }, [])
    return (
    <>
      <Routes>
        <Route path="/" element={<SignUp />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/createPost" element={<CreatePost />} />
        <Route path='/profilePage/:userId' element={<ProfilePage/>}/>
        <Route path='/blogPost/:postId' element={<BlogPostPage/>}/>
        
      </Routes>
    </>
  )
}

export default App
