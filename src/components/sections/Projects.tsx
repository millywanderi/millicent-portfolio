import {
  FaGithub,
  FaExternalLinkAlt,
  FaBrain,
  FaDatabase,
  FaReact,
  FaDocker,
} from "react-icons/fa";
import { SiFastapi, SiPostgresql } from "react-icons/si";

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-white py-24"
    >
      <div className="max-w-7xl mx-auto px-8 lg:px-12">

        {/* Heading */}

        <div className="text-center mb-20">

          <p className="text-blue-700 font-semibold uppercase tracking-widest">
            Projects
          </p>

          <h2 className="mt-3 text-4xl font-extrabold text-gray-900">
            Building Technology for Humanitarian Impact
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600 leading-8">
            My projects combine software engineering, artificial intelligence,
            and disaster management to improve humanitarian operations,
            transparency, and decision-making.
          </p>

        </div>

        {/* Featured Project */}

        <div className="rounded-3xl border border-gray-200 shadow-lg overflow-hidden">

          <div className="grid lg:grid-cols-2">

            {/* Left */}

            <div className="bg-gradient-to-br from-blue-700 to-blue-900 text-white p-12">

              <p className="uppercase tracking-widest text-blue-200 font-semibold">
                Featured Project
              </p>

              <h3 className="mt-4 text-4xl font-bold">
                ReliefTrack AI
              </h3>

              <p className="mt-6 leading-8 text-blue-100">
                An AI-powered humanitarian resource management platform that
                helps NGOs manage inventory, track aid distribution,
                forecast humanitarian needs, detect fraud, and support
                evidence-based decision-making.
              </p>

              <div className="mt-10 flex flex-wrap gap-3">

                <span className="rounded-full bg-white/20 px-4 py-2">
                  AI
                </span>

                <span className="rounded-full bg-white/20 px-4 py-2">
                  Humanitarian Tech
                </span>

                <span className="rounded-full bg-white/20 px-4 py-2">
                  Disaster Management
                </span>

              </div>

            </div>

            {/* Right */}

            <div className="p-12">

              <h4 className="text-2xl font-bold text-gray-900">
                Technology Stack
              </h4>

              <div className="grid grid-cols-2 gap-6 mt-8">

                <div className="flex items-center gap-3">
                  <SiFastapi className="text-3xl text-green-600" />
                  FastAPI
                </div>

                <div className="flex items-center gap-3">
                  <FaReact className="text-3xl text-blue-500" />
                  React
                </div>

                <div className="flex items-center gap-3">
                  <SiPostgresql className="text-3xl text-blue-700" />
                  PostgreSQL
                </div>

                <div className="flex items-center gap-3">
                  <FaDatabase className="text-3xl text-gray-700" />
                  SQLAlchemy
                </div>

                <div className="flex items-center gap-3">
                  <FaBrain className="text-3xl text-purple-600" />
                  Machine Learning
                </div>

                <div className="flex items-center gap-3">
                  <FaDocker className="text-3xl text-sky-600" />
                  Docker
                </div>

              </div>

              <div className="mt-12 flex gap-5">

                <a
                  href="https://github.com/millywanderi/ReliefTrackAI"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-xl bg-gray-900 px-6 py-3 text-white hover:bg-black transition"
                >
                  <FaGithub />
                  GitHub
                </a>

                <a
                  href="#"
                  className="flex items-center gap-2 rounded-xl border border-blue-700 px-6 py-3 text-blue-700 hover:bg-blue-700 hover:text-white transition"
                >
                  <FaExternalLinkAlt />
                  Live Demo
                </a>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Projects;
