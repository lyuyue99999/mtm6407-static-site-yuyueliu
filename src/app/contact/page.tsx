import Layout2 from "@/components/Layout2";

export default function Contact() {
  return (
    <Layout2>
      <section className="max-w-xl mx-auto px-6 py-16 space-y-10">
        <h1 className="text-4xl font-bold text-center">Contact Me</h1>
        <p className="text-gray-700 text-center">
          If you’d like to collaborate, have a project in mind, or just want to connect—feel free to reach out using the form below.
        </p>

        <form
          className="space-y-6"
          action="mailto:lyuyue1997@gmail.com"
          method="POST"
          encType="text/plain"
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-sm font-medium">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm font-medium">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-black text-white px-6 py-3 rounded-full text-sm font-medium hover:opacity-90 transition"
          >
            Send Message
          </button>
        </form>
      </section>
    </Layout2>
  );
}
