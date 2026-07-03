import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-8">

        {/* Heading */}
        <div className="mb-16 text-center">

          <p className="font-semibold uppercase tracking-widest text-blue-700">
            Contact
          </p>

          <h2 className="mt-3 text-4xl font-extrabold text-gray-900">
            Let's Build Resilient Communities Together
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            I'm always interested in discussing humanitarian innovation,
            AI for disaster management, software engineering,
            research collaborations, and graduate study opportunities.
          </p>

        </div>

        <div className="grid gap-16 lg:grid-cols-2">

          {/* Left Side */}
          <div className="space-y-6">

            {/* Email */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-lg">

              <div className="flex items-start gap-5">

                <div className="rounded-full bg-blue-700 p-4 text-white">
                  <FaEnvelope />
                </div>

                <div className="flex-1">

                  <h3 className="text-xl font-semibold text-gray-900">
                    Email
                  </h3>

                  <p className="mt-2 text-gray-600">
                    Let's discuss opportunities, collaborations,
                    or graduate studies.
                  </p>

                  <a
                    href="mailto:wanderimillicent5@gmail.com"
                    className="mt-4 inline-block font-semibold text-blue-700 hover:underline"
                  >
                    Contact Me →
                  </a>

                </div>

              </div>

            </div>

            {/* LinkedIn */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-lg">

              <div className="flex items-start gap-5">

                <div className="rounded-full bg-blue-700 p-4 text-white">
                  <FaLinkedin />
                </div>

                <div className="flex-1">

                  <h3 className="text-xl font-semibold text-gray-900">
                    LinkedIn
                  </h3>

                  <p className="mt-2 text-gray-600">
                    Connect with me professionally and follow my journey.
                  </p>

                  <a
                    href="https://www.linkedin.com/in/millicent-wanderi-9aa894206/"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-block font-semibold text-blue-700 hover:underline"
                  >
                    Connect →
                  </a>

                </div>

              </div>

            </div>

            {/* GitHub */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-lg">

              <div className="flex items-start gap-5">

                <div className="rounded-full bg-blue-700 p-4 text-white">
                  <FaGithub />
                </div>

                <div className="flex-1">

                  <h3 className="text-xl font-semibold text-gray-900">
                    GitHub
                  </h3>

                  <p className="mt-2 text-gray-600">
                    Explore my software engineering and AI projects.
                  </p>

                  <a
                    href="https://github.com/millywanderi"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-block font-semibold text-blue-700 hover:underline"
                  >
                    View Projects →
                  </a>

                </div>

              </div>

            </div>

            {/* Location */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-lg">

              <div className="flex items-start gap-5">

                <div className="rounded-full bg-blue-700 p-4 text-white">
                  <FaMapMarkerAlt />
                </div>

                <div className="flex-1">

                  <h3 className="text-xl font-semibold text-gray-900">
                    Location
                  </h3>

                  <p className="mt-2 text-gray-600">
                    Based in Nairobi, Kenya and available for remote
                    collaborations worldwide.
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* Right Side */}
          <div className="rounded-3xl bg-gray-50 p-10 shadow-lg">

            <h3 className="mb-8 text-2xl font-bold">
              Send a Message
            </h3>

            <form className="space-y-6">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-xl border border-gray-300 px-5 py-4 outline-none focus:border-blue-700"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-xl border border-gray-300 px-5 py-4 outline-none focus:border-blue-700"
              />

              <textarea
                rows={5}
                placeholder="Your Message"
                className="w-full rounded-xl border border-gray-300 px-5 py-4 outline-none focus:border-blue-700"
              />

              <button
                type="submit"
                className="flex items-center gap-3 rounded-xl bg-blue-700 px-8 py-4 font-semibold text-white transition hover:bg-blue-800"
              >
                <FaPaperPlane />
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
