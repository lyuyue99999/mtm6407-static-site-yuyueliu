import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-[#F8F6F2] min-h-screen font-sans text-[#111]">
      <header className="flex justify-between items-center px-6 py-5">
        <h1 className="text-xl font-semibold">Yuyue Liu</h1>
        <nav className="flex gap-6 text-sm font-medium">
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </header>

      <section className="flex flex-col-reverse lg:flex-row items-center justify-between max-w-6xl mx-auto px-6 py-20 gap-12">
   
        <div className="max-w-xl">
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
            UI/UX & Front-End that <span className="underline">brings clarity</span> and <span className="underline">elegance</span> to digital spaces.
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            I'm a designer & developer passionate about building accessible, inclusive, and thoughtful user experiences. I transform ideas into well-crafted interfaces.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/projects">
              <button className="border border-black text-black px-6 py-3 rounded-md text-sm font-semibold hover:bg-black hover:text-white transition">
                View Projects
              </button>
            </Link>
            <Link href="/contact">
              <button className="border border-black text-black px-6 py-3 rounded-md text-sm font-semibold hover:bg-black hover:text-white transition">
                Contact Me
              </button>
            </Link>
          </div>
        </div>


        <div className="w-[200px] h-auto relative shadow-md">
  <Image
    src="/images/avatar.jpg"
    alt="Yuyue Liu Avatar"
    width={200}
    height={260}
    className="object-cover"
    priority
  />
</div>

      </section>
    </main>
  );
}
