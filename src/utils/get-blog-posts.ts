import { cache } from "react";
import supabase from "./supabase";

export const getBlogPosts = cache(async () => {
    const { data } = await supabase
        .from('blog_posts')
        .select('*, author:blog_authors(id, name, photo_url, title)')

    return data ?? [];
})