import Layout2 from "@/components/Layout2";
import Image from "next/image";

export default function About() {
  return (
    <Layout2>
      <section className="space-y-16">
        <div className="flex flex-col lg:flex-row items-center gap-10">
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
          <div className="space-y-4 max-w-2xl">
            <h1 className="text-4xl font-bold">About Me</h1>
            <p className="text-gray-700 text-lg">
              I'm Yuyue Liu, a UI/UX designer and front-end developer based in Ottawa. I bring together strong design principles, technical skills, and a psychology background to create thoughtful, human-centered digital experiences.
            </p>
            <p className="text-gray-700 text-lg">
              I focus on flexible problem-solving, clear communication, and building intuitive, accessible interfaces. I’m currently seeking a role as a Junior Front-End Developer or UI/UX Designer where I can turn user insights into elegant solutions.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-semibold mb-2">Education</h2>
            <ul className="text-gray-700 space-y-3">
              <li>
                <strong>Algonquin College</strong><br />
                Diploma in Interactive Media Design, 2023 – 2025<br />
                GPA: 3.5 / 4.0
              </li>
              <li>
                <strong>Beijing Normal University</strong><br />
                Master of Psychology (M.A.), 2019 – 2022<br />
                GPA: 3.0 / 4.0
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">Skills</h2>
            <ul className="text-gray-700 space-y-1">
              <li><strong>Web Development:</strong> HTML, CSS, JavaScript, React, jQuery, PHP, Python, MySQL, MongoDB</li>
              <li><strong>Design:</strong> Adobe Photoshop, Illustrator, Figma</li>
              <li><strong>UX:</strong> Interactive web design, wireframing, layout, color theory</li>
            </ul>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">My Background</h2>
          <p className="text-gray-700">
            My unique blend of technical knowledge and behavioral science allows me to approach design problems with empathy and logic. From building donation platforms and user research projects to UI prototyping and game-based assessments, I’ve worked across diverse formats to deliver engaging digital products.
          </p>
        </div>
      </section>
    </Layout2>
  );
}
