import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <h1 className="text-emerald font-bold pt-48 text-center flex flex-col gap-4 leading-none">
        <span className="text-9xl relative">
          <span className="flex justify-center relative">
            <span className="relative">
            Hi. I&apos;m François.
            <Image
              src="/assets/star.svg"
              className="absolute -right-24 -top-12 hover:animate-[spin_1s_ease_infinite]"
              alt='Star'
              width={95}
              height={95}
            />
            </span>
          </span>
        </span>
        <span className="text-9xl relative">
          <span className="flex justify-center relative">
            <span className="relative">
            A Web Developer.
            <Image
              src="/assets/star.svg"
              className="absolute -left-24 -bottom-12 hover:animate-[spin_1s_ease_infinite]"
              alt='Star'
              width={95}
              height={95}
            />
            </span>
          </span>
        </span>
      </h1>

      <h2 className="text-center text-xl w-1/3 m-auto pt-8 text-emerald">I develop complete web applications, with as much attention to the interface as to what happens behind the scenes.</h2>
    </div>
  );
}
