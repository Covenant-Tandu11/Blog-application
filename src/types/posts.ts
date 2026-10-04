export interface Posts{
    id: string,
    created_at: string,
    author_id: string,
    title: string,
    slug: string,
    excerpt: string,
    content: string,
    cover_image: string,
    category: string,
    status: string,
    updated_at: string
    profiles: {
        display_name: string
        username: string
        avatar_url: string 
        
    }
}