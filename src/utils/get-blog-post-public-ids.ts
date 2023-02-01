import { cache } from "react";
import supabase from "./supabase";

export const getBlogPostPublicIds = cache(async () => {
    const { data, error } = await supabase
        .from('blog_posts')
        .select('public_id');

    if (!data || error) {
        throw error;
    }

    return data.map(_ => _.public_id);
})