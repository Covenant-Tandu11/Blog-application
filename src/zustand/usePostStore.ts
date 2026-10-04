import { create } from 'zustand'
import { supabase } from '../lib/supabase'
import type { postForm } from '../types/postForm'
import type { Posts } from '../types/posts'

export interface PostStore {
    posts: Posts[]
    fetchPosts: () => Promise<void>
    createPost: (formData: postForm) => Promise<void>
}

export const usePostStore = create<PostStore>((set) => ({
    posts: [],

    fetchPosts: async () => {
        const { data, error } = await supabase
            .from('posts')
            .select(`
                *,
                profiles (
                
                    display_name,
                    avatar_url
                )
            `)

        if (error) {
            console.log(error)
            return
        }

        set({
            posts: data
        })
    },

    createPost: async (formData: postForm) => {
    const {
        data: { user }
    } = await supabase.auth.getUser()

    if (!user) {
        console.log('No user is logged in')
        return
    }

    

    const { data, error } = await supabase
    .from('posts')
    .insert({
        author_id: user.id,
        title: formData.title,
        slug: formData.title.toLowerCase().replace(/\s+/g, '-'),
        excerpt: formData.excerpt,
        category: formData.category,
        cover_image: formData.cover_img,
        content: formData.content
    })
    .select()
    .single()

    if (error) {
        console.log(error)
        return
    }

    if (!data) {
        return
    }

    set((state) => ({
        posts: [...state.posts, data]
    }))
}
}))