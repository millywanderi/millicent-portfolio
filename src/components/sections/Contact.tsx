import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-white py-24"
    >
      <div className="max-w-6xl mx-auto px-8">

        {/* Heading */}

        <div className="text-center mb-16">

          <p className="text-blue-700 font-semibold uppercase tracking-widest">
            Contact
          </p>

          <h2 className="mt-3 text-4xl font-extrabold text-gray-900">
            Let's Build Resilient Communities Together
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-600 leading-8">
            I'm always interested in discussing humanitarian innovation, AI for disaster management, software engineering, research collaborations, and graduate study opportunities.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-16">

          {/* Left */}

          <div className="space-y-8">

            <div className="flex items-center gap-5">

              <div className="bg-blue-700 text-white p-4 rounded-full">
                <FaEnvelope />
              </div>

              <div>

                <p className="font-semibold">
                  Email
                </p>

                <a
                  href="mailto:wanderimillicent5@gmail.com"
                  className="text-gray-600 hover:text-blue-700"
                >
                  wanderimillicent5@gmail.com
                </a>

              </div>

            </div>

            <div className="flex items-center gap-5">

              <div className="bg-blue-700 text-white p-4 rounded-full">
                <FaLinkedin />
              </div>

              <div>

                <p className="font-semibold">
                  LinkedIn
                </p>

                <a
                  href="https://www.linkedin.com/in/millicent-wanderi-9aa894206/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-600 hover:text-blue-700"
                >
                  https://www.linkedin.com/in/millicent-wanderi-9aa894206/
                </a>

              </div>

            </div>

            <div className="flex items-center gap-5">

              <div className="bg-blue-700 text-white p-4 rounded-full">
                <FaGithub />
              </div>

              <div>

                <p className="font-semibold">
                  GitHub
                </p>

                <a
                  href="https://github.com/millywanderi"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-600 hover:text-blue-700"
                >
                  https://github.com/millywanderi
                </a>

              </div>

            </div>

            <div className="flex items-center gap-5">

              <div className="bg-blue-700 text-white p-4 rounded-full">
                <FaMapMarkerAlt />
              </div>

              <div>

                <p className="font-semibold">
                  Location
                </p>

                <p className="text-gray-600">
                  Nairobi, Kenya
                </p>

              </div>

            </div>

          </div>

          {/* Right */}

          <div className="rounded-3xl bg-gray-50 p-10 shadow-lg">

            <h3 className="text-2xl font-bold mb-8">
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
                className="flex items-center gap-3 rounded-xl bg-blue-700 px-8 py-4 font-semibold text-white hover:bg-blue-800 transition"
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
