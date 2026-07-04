import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(() => {
        alert("Message sent successfully!");
        form.current?.reset();
      })
      .catch(() => {
        alert("Failed to send message. Please try again.");
      });
  };

  return (
    <section
      id="contact"
      className="bg-gradient-to-br from-slate-100 via-white to-blue-50 py-24"
    >
      <div className="mx-auto max-w-7xl px-8 lg:px-12">

        {/* Heading */}

        <div className="mb-16 text-center">

          <p className="font-semibold uppercase tracking-widest text-blue-700">
            Contact
          </p>

          <h2 className="mt-3 text-4xl font-extrabold text-slate-900">
            Let's Build Resilient Communities Together
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            I'm always interested in discussing humanitarian innovation,
            AI for disaster management, software engineering,
            research collaborations, and graduate study opportunities.
          </p>

        </div>

        <div className="grid gap-16 lg:grid-cols-2">

          {/* LEFT */}

          <div className="space-y-6">

            {/* Email */}

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">

              <div className="flex items-start gap-5">

                <div className="rounded-full bg-blue-700 p-4 text-white">
                  <FaEnvelope size={20} />
                </div>

                <div>

                  <h3 className="text-xl font-bold text-slate-900">
                    Email
                  </h3>

                  <p className="mt-2 text-slate-600">
                    Let's discuss opportunities, collaborations and graduate studies.
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

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">

              <div className="flex items-start gap-5">

                <div className="rounded-full bg-blue-700 p-4 text-white">
                  <FaLinkedin size={20} />
                </div>

                <div>

                  <h3 className="text-xl font-bold text-slate-900">
                    LinkedIn
                  </h3>

                  <p className="mt-2 text-slate-600">
                    Connect with me professionally and follow my journey.
                  </p>

                  <a
                    href="https://www.linkedin.com/in/millicent-wanderi-9aa894206/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block font-semibold text-blue-700 hover:underline"
                  >
                    Connect →
                  </a>

                </div>

              </div>

            </div>

            {/* GitHub */}

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">

              <div className="flex items-start gap-5">

                <div className="rounded-full bg-blue-700 p-4 text-white">
                  <FaGithub size={20} />
                </div>

                <div>

                  <h3 className="text-xl font-bold text-slate-900">
                    GitHub
                  </h3>

                  <p className="mt-2 text-slate-600">
                    Explore my software engineering and AI projects.
                  </p>

                  <a
                    href="https://github.com/millywanderi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block font-semibold text-blue-700 hover:underline"
                  >
                    View Projects →
                  </a>

                </div>

              </div>

            </div>

            {/* Location */}

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">

              <div className="flex items-start gap-5">

                <div className="rounded-full bg-blue-700 p-4 text-white">
                  <FaMapMarkerAlt size={20} />
                </div>

                <div>

                  <h3 className="text-xl font-bold text-slate-900">
                    Nairobi, Kenya
                  </h3>

                  <p className="mt-2 text-slate-600">
                    Available for remote collaborations, research and humanitarian technology projects worldwide.
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-xl">

            <h3 className="mb-8 text-2xl font-bold text-slate-900">
              Send a Message
            </h3>

            <form
              ref={form}
              onSubmit={sendEmail}
              className="space-y-6"
            >

              <input
                name="user_name"
                type="text"
                placeholder="Your Name"
                required
                className="w-full rounded-xl border border-slate-300 px-5 py-4 outline-none transition focus:border-blue-700"
              />

              <input
                name="user_email"
                type="email"
                placeholder="Email Address"
                required
                className="w-full rounded-xl border border-slate-300 px-5 py-4 outline-none transition focus:border-blue-700"
              />

              <textarea
                name="message"
                rows={6}
                placeholder="Your Message"
                required
                className="w-full rounded-xl border border-slate-300 px-5 py-4 outline-none transition focus:border-blue-700"
              />

              <button
                type="submit"
                className="flex items-center gap-3 rounded-xl bg-blue-700 px-8 py-4 font-semibold text-white transition hover:bg-blue-800 hover:shadow-lg"
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
