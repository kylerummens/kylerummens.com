import { blogPostDateFormat } from "@/utils/blog-post-date-format";
import { getBlogPosts } from "@/utils/get-blog-posts"
import Link from "next/link";

const HomePublications = async () => {

    const blog_posts = await getBlogPosts();

    return (
        <div className="mb-20">
            <div className="text-xl font-medium label m-6">Blog posts</div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-5 lg:gap-10">
                {blog_posts.map(post =>
                    <Link key={post.id} href={`/publications/${post.public_id}`}
                        className="card hover:bg-slate-50 dark:bg-slate-50/5 dark:hover:bg-slate-50/10">
                        <div className="mb-2">
                            <time className="date secondary-label text-sm" dateTime={post.published_at}>{ blogPostDateFormat(post.published_at) }</time>
                        </div>
                        <h1 className="label">{ post.title }</h1>
                        <h2 className="text-sm font-light secondary-label whitespace-nowrap overflow-hidden text-ellipsis">
                            <span>{ post.description }</span>
                        </h2>
                    </Link>  
                )}
            </div>
        </div>
    )
}

export default HomePublications