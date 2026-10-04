import { create } from 'zustand'
import { supabase } from '../lib/supabase'
import type { profile } from '../types/profile'
import type { Posts } from '../types/posts'

interface ProfileStore{
    profile: profile | null
    fetchProfile: (userId: string) => Promise<void>
    posts: Posts[]
    fetchUserPosts: (userId: string) => Promise<void>
}   

export const useProfileStore = create<ProfileStore>((set) =>  ({
    profile: null,
    posts: [],
    fetchProfile: async (userId: string) => {
        const { data, error } = await supabase
        .from('profiles')
            .select(`
                id,
                display_name,
                username,
                avatar_url,
                bio
            `).eq('id', userId).single()
            if(error){
                console.log(error)
            }
            set({profile: data})
    },
    fetchUserPosts: async (userId: string) => {
    const { data, error } = await supabase
        .from('posts')
        .select('*')
        .eq('author_id', userId)

    if (error) {
        console.log(error)
        return
    }

    set({ posts: data })
}
}))