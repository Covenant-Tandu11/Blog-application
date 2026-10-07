import { create } from 'zustand'
import { supabase } from '../lib/supabase'
import type { postForm } from '../types/postForm'
import type { Posts } from '../types/posts'

export interface PostStore {
    posts: Posts[]
    fetchPost: (postId: string) => Promise<void>
    fetchPosts: () => Promise<void>
    createPost: (formData: postForm) => Promise<void>
}

export const usePostStore = create<PostStore>((set) => ({
    posts: [],

    fetchPost: async (postId: string) => {
    const { data, error } = await supabase
        .from('posts')
        .select(`
            *,
            profiles (
                display_name,
                avatar_url
            )
        `)
        .eq('id', postId)
        .single()

    if (error) {
        console.log(error)
        throw error
    }

    set({
        posts: [data]
    })
},

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
            .order('created_at', { ascending: false })

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
        posts: [data, ...state.posts]
    }))
}
}))
