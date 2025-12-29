import { getAllPosts } from "@/lib/blog"

import { PostPreview } from "./components/PostPreview";

export default function PageBlog() {
    const posts = getAllPosts();

    return (
        <section>
            <header>
                <h1 className="font-(family-name:--title-font) text-emerald font-bold pt-48 text-center text-9xl">Blog</h1>
                <h2 className="text-center text-xl w-1/3 m-auto pt-8 text-emerald">Sharing insights and best practices from my journey in web development.</h2>
            </header>

            <div className="container m-auto mt-16 flex flex-col gap-8">

            {posts.map((post) => 
                [1,2,3,4,5,6].map((n) =><PostPreview key={post.slug + n} title={post.title} excerpt={post.excerpt} categoryImage={post.categoryImage} slug={post.slug} />)
            )}
            </div>
        </section>
    );
}