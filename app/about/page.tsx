import Image from "next/image";
import { Experiences } from "./components/Experiences";

export default function Page(){
    return (
        <div className="flex flex-col gap-18 w-3/4 mx-auto">
            <h1 className="text-emerald font-bold pt-48 text-center text-9xl">
                I&apos;m François.
            </h1>

            <div className="flex justify-center items-center gap-40">
                <Image src="/assets/me.jpg" width={400} height={400} alt="François Chanteau" className="rounded-t-full" />
                <div className="flex flex-col gap-6">
                    <h2 className="text-6xl font-bold">I&apos;m a Fullstack Web Developer working in Nantes, France.</h2>
                    <p className="text-2xl text-emerald">Experienced full-stack web developer, specialized in designing business web applications, I work end to end on projects built with .NET and JavaScript (C#, React).</p>
                    <p className="text-2xl text-emerald">I also have a strong understanding of DevOps practices, particularly around Kubernetes and GitHub, and make daily use of AI tools such as GitHub Copilot to improve development quality and efficiency, all within Azure cloud environments.</p>
                </div>
            </div>

            <div className="flex flex-col gap-8">
                <h2 className="text-6xl font-bold text-center">My Experiences</h2>
                <Experiences />
            </div>
        </div>
    )
}