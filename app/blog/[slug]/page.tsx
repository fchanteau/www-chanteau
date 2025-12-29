import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { remark } from "remark";
import html from "remark-html";

import Image from "next/image";

export async function generateStaticParams() {
    return getAllPosts().map((post) => ({
        slug: post.slug,
    }));
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }){
    const {slug} = await params;

    const post = getPostBySlug(slug);

    // convert markdown -> html
    const processed = await remark().use(html).process(post.content);
    const contentHtml = processed.toString();

    return (
        <section className="pb-12 pt-24 h-full fixed top-0 left-0 w-full overflow-x-hidden z-40">
            <div className="bg-[rgba(255,255,255,0.5)] backdrop-blur-2xl w-11/12 m-auto rounded-2xl h-full overflow-y-scroll overflow-x-hidden">
                <div className="flex justify-end sticky mt-4">
                    <a href="/blog" className="text-emerald underline m-4">← Back to blog</a>
                </div>

                <article className="flex flex-col gap-6">
                    <header className="w-3/4 m-auto flex flex-col items-center">
                        <h1 className="text-6xl text-center font-bold mb-4 text-emerald">{post.title}</h1>
                        <p>By {post.author} / {post.date}</p>
                    </header>

                    <Image className="w-1/2 m-auto rounded-2xl" src={post.coverImage} alt={post.title} width={'1000'} height={'400'} />

                    <div className="markdown w-5/12 m-auto" dangerouslySetInnerHTML={{ __html: contentHtml }} />
                </article>
            </div>
        </section>
    );
}