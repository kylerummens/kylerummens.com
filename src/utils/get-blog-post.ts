import { cache } from "react";
import supabase from "./supabase";

export const getBlogPost = cache(async (public_id: string) => {
    const { data } = await supabase
        .from('blog_posts')
        .select('*, author:blog_authors(id, name, photo_url, title)')
        .match({ public_id })
        .maybeSingle();

    return data ?? null;
})