import Image from "next/image";
import Link from "next/link";

export type PostPreviewProps ={
    title: string;
    excerpt: string;
    categoryImage: string;
    slug: string;
}

export function PostPreview(props: PostPreviewProps) {
    return (
        <Link href={`/blog/${props.slug}`}>
            <article className="bg-white/50 backdrop-blur-lg p-12 rounded-lg flex justify-between items-center hover:bg-white hover:cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out">
                <div className="flex flex-col gap-2">
                    <header>
                        <h3 className="font-bold text-emerald text-xl">{props.title}</h3>
                    </header>
                    <p className="text-emerald">{props.excerpt}</p>
                </div>
                <Image src={props.categoryImage} alt={props.title} width={100} height={100} />
            </article>
        </Link>
    );
}