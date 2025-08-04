import Layout2 from "@/components/Layout2";
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  return (
    <Layout2>
      <section className="space-y-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="w-full aspect-video relative">
            <Image
              src="/images/project1.jpg"
              alt="IBPS of Ottawa Website"
              fill
              className="object-cover rounded-md"
              priority
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-2">IBPS of Ottawa Website Redesign</h2>
            <p className="text-gray-700 mb-4">
              I participated in the redesign of the IBPS Ottawa website. I contributed to user research,
              visual design, and built the site using WordPress. The project emphasizes accessibility,
              bilingual support, and community engagement.
            </p>
            <Link
              href="https://dev-ibpsottawa.pantheonsite.io/"
              target="_blank"
              className="inline-block text-sm font-semibold underline underline-offset-4 hover:text-gray-500 transition"
            >
              Visit Live Site →
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="w-full aspect-video relative">
            <Image
              src="/images/project2.jpg"
              alt="YORlive App"
              fill
              className="object-cover rounded-md"
              priority
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-2">YORlive – Virtual Character AI App</h2>
            <p className="text-gray-700 mb-4">
              YORlive is a concept app that allows users to interact with AI-driven virtual characters
              from games and anime. Users can view lifelike posts, stories, and updates created by
              characters, as if they were real people living in a social feed.
            </p>
            <Link
              href="https://www.figma.com/design/5wG93K1MaDYyw1jtCoju23/YORlive-Hi-fi-Wireframe?node-id=0-1&p=f&t=sLZAk7qDtNOvhinD-0"
              target="_blank"
              className="inline-block text-sm font-semibold underline underline-offset-4 hover:text-gray-500 transition"
            >
              View Figma Prototype →
            </Link>
          </div>
        </div>
      </section>
    </Layout2>
  );
}
