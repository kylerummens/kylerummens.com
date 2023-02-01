import { blogPostDateFormat } from "@/utils/blog-post-date-format";
import Image from "next/image";
import Link from "next/link";
import { Converter } from 'showdown';
import { HiArrowNarrowLeft } from 'react-icons/hi';
import { getBlogPost } from "@/utils/get-blog-post";
import { getBlogPostPublicIds } from "@/utils/get-blog-post-public-ids";

export const generateStaticParams = async () => {
    const public_ids = await getBlogPostPublicIds();
    return public_ids.map(public_id => ({ public_id }));
}


const Publication = async ({ params: { public_id } }: { params: { public_id: string } }) => {

    const post = await getBlogPost(public_id);

    if(!post) {
        return <div>No post found</div>
    }
    else {

        const converter = new Converter();

        const postMarkdownContent = () => {
            return { __html: converter.makeHtml(post.content) };
        }

        return (
            <>

                <Link href="/publications" className="btn btn-text btn-secondary !no-underline group">
                    <HiArrowNarrowLeft className="transition-transform group-hover:-translate-x-1" />
                    <span>Back to all publications</span>
                </Link>

                <article
                    className="pt-12 pb-24 prose prose-slate max-w-none dark:prose-invert prose-headings:text-slate-700 prose-headings:dark:text-slate-200 prose-a:text-blue-500">
                    <header className="not-prose mb-24">
                        <time className="date secondary-label" dateTime={post.published_at}>{ blogPostDateFormat(post.published_at) }</time>
                        <h1 className="text-3xl sm:text-6xl mb-3">{ post.title }</h1>
                        <h2 className="text-xl sm:text-2xl font-light mb-6">{ post.description }</h2>

                        <address className="flex items-center gap-2">
                            <Image src={post.author.photo_url} alt={post.title} height="48" width="48" className="rounded-full" />
                            <div>
                                <div className="font-medium not-italic">{ post.author.name }</div>
                                <div className="font-light secondary-label leading-4">{ post.author.title }</div>
                            </div>
                        </address>
                    </header>

                    <div dangerouslySetInnerHTML={postMarkdownContent()}></div>
                </article>
            </>
        )
    }
}

export default Publication;