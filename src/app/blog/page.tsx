import Layout2 from "@/components/Layout2";
import Image from "next/image";
import Link from "next/link";

export default function Blog() {
  return (
    <Layout2>
      <section className="max-w-4xl mx-auto px-6 py-16 space-y-12">
        <h1 className="text-4xl font-bold text-center">Blog</h1>

        <article className="space-y-6">
        <div className="w-full flex justify-center">
  <Image
    src="/images/blog.jpg"
    alt="Psychology and Interaction Design"
    width={800}
    height={500}
    className="rounded-md object-contain shadow"
    priority
  />
</div>


          <h2 className="text-2xl font-semibold">
            The Psychology Behind Interaction Design
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Interaction design is not just about creating something that looks good—it's about building systems that feel intuitive, accessible, and human. This is where psychology plays a critical role.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Cognitive load, affordances, feedback loops, and memory constraints all inform how users behave when interacting with digital interfaces. By understanding these principles, designers can guide users toward desired actions without confusion or frustration.
          </p>
          <p className="text-gray-700 leading-relaxed">
            For example, Hick's Law explains how increasing the number of choices can slow down decision-making. Fitts’s Law tells us that button size and distance impact usability. And gestalt principles reveal how users naturally group visual elements.
          </p>
          <p className="text-gray-700 leading-relaxed">
            In my design process, I often apply psychological insights—such as progressive disclosure, hierarchy, and intuitive gesture-based input (as shown above)—to make digital experiences smoother, more predictable, and more human.
          </p>

          <div>
            <Link
              href="/contact"
              className="inline-block mt-4 text-sm font-medium underline underline-offset-4 hover:text-gray-500"
            >
              Want to discuss this topic? Get in touch →
            </Link>
          </div>
        </article>
      </section>
    </Layout2>
  );
}
