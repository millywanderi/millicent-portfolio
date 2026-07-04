import {
  FaArrowRight,
  FaDownload,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaLaptopCode,
  FaRobot,
  FaShieldAlt,
} from "react-icons/fa";

import profileImage from "../../assets/millicent.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative isolate bg-gradient-to-br from-white via-slate-50 to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950"
    >
      {/* Background Decorations */}
      <div className="pointer-events-none absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-blue-400/20 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-sky-300/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid min-h-[calc(100vh-80px)] items-center gap-16 lg:grid-cols-2">

          {/* LEFT SIDE */}
          <div>

            <p className="mb-6 inline-flex rounded-full bg-blue-100 px-6 py-3 text-lg font-semibold text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">
              👋 Hello, I'm
            </p>

            <h1 className="text-5xl font-black leading-tight text-slate-900 dark:text-white md:text-6xl lg:text-7xl">
              Millicent
            </h1>

            <h1 className="mt-2 text-5xl font-black leading-tight text-slate-900 dark:text-white md:text-6xl lg:text-7xl">
              Nyambura Wanderi
            </h1>

            <p className="mt-8 text-lg font-semibold uppercase tracking-[0.25em] text-blue-600 dark:text-blue-400">
              Humanitarian Technologist
            </p>

            <div className="mt-10 space-y-5">

              <div className="flex items-center gap-4 text-xl text-slate-700 dark:text-slate-300">
                <FaShieldAlt className="text-2xl text-blue-600" />
                <span>Disaster Management Professional</span>
              </div>

              <div className="flex items-center gap-4 text-xl text-slate-700 dark:text-slate-300">
                <FaLaptopCode className="text-2xl text-blue-600" />
                <span>Software Engineer</span>
              </div>

              <div className="flex items-center gap-4 text-xl text-slate-700 dark:text-slate-300">
                <FaRobot className="text-2xl text-blue-600" />
                <span>Humanitarian Innovator</span>
              </div>

            </div>

            <p className="mt-10 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-400">
              Building intelligent technologies that improve disaster
              resilience, humanitarian response, and sustainable development
              through artificial intelligence and software engineering.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">

              <a
                href="#projects"
                className="flex items-center gap-3 rounded-xl bg-blue-700 px-8 py-4 font-semibold text-white transition hover:bg-blue-800 hover:shadow-xl"
              >
                View Projects
                <FaArrowRight />
              </a>

              <a
                href="/Millicent_Wanderi_CV.pdf"
                download
                className="flex items-center gap-3 rounded-xl border-2 border-blue-700 px-8 py-4 font-semibold text-blue-700 transition hover:bg-blue-700 hover:text-white"
              >
                <FaDownload />
                Download CV
              </a>

            </div>

            {/* Social Icons */}
            <div className="mt-10 flex items-center gap-5">

              <a
                href="https://github.com/millywanderi"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="rounded-full bg-white p-4 text-2xl text-slate-700 shadow-lg transition hover:-translate-y-1 hover:bg-blue-700 hover:text-white dark:bg-slate-800 dark:text-white"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/millicent-wanderi-9aa894206/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="rounded-full bg-white p-4 text-2xl text-slate-700 shadow-lg transition hover:-translate-y-1 hover:bg-blue-700 hover:text-white dark:bg-slate-800 dark:text-white"
              >
                <FaLinkedin />
              </a>

              <a
                href="mailto:wanderimillicent5@gmail.com"
                aria-label="Email"
                className="rounded-full bg-white p-4 text-2xl text-slate-700 shadow-lg transition hover:-translate-y-1 hover:bg-blue-700 hover:text-white dark:bg-slate-800 dark:text-white"
              >
                <FaEnvelope />
              </a>

            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="flex justify-center">

            <div className="relative">

              <div className="pointer-events-none absolute inset-0 scale-110 rounded-full bg-blue-400/30 blur-3xl" />

              <div className="overflow-hidden rounded-full border-[10px] border-white shadow-2xl dark:border-slate-800">

                <img
                  src={profileImage}
                  alt="Millicent Wanderi"
                  className="h-[430px] w-[430px] object-cover object-top lg:h-[480px] lg:w-[480px]"
                />

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
