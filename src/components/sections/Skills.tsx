import {
  FaPython,
  FaReact,
  FaGitAlt,
  FaDocker,
  FaLinux,
  FaCode,
  FaDatabase,
  FaServer,
  FaShieldAlt,
} from "react-icons/fa";

import {
  SiFastapi,
  SiJavascript,
  SiTypescript,
  SiPostgresql,
  SiMysql,
  SiTailwindcss,
  SiHtml5,
} from "react-icons/si";

const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 py-24"
    >
      <div className="mx-auto max-w-7xl px-8 lg:px-12">

        {/* Heading */}

        <div className="mb-20 text-center">

          <p className="font-semibold uppercase tracking-[0.25em] text-blue-700">
            Skills
          </p>

          <h2 className="mt-4 text-4xl font-extrabold text-slate-900">
            Technologies & Expertise
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            My expertise combines disaster management, humanitarian innovation,
            software engineering, artificial intelligence, and modern backend
            technologies to build impactful digital solutions.
          </p>

        </div>

        {/* Skill Cards */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {/* Programming */}

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-300 hover:shadow-2xl">

            <h3 className="mb-8 text-xl font-bold text-slate-900">
              Programming
            </h3>

            <div className="space-y-6">

              <div className="flex items-center gap-4">
                <FaPython className="text-2xl text-blue-600" />
                <span>Python</span>
              </div>

              <div className="flex items-center gap-4">
                <SiJavascript className="text-2xl text-yellow-500" />
                <span>JavaScript</span>
              </div>

              <div className="flex items-center gap-4">
                <SiTypescript className="text-2xl text-blue-600" />
                <span>TypeScript</span>
              </div>

              <div className="flex items-center gap-4">
                <FaCode className="text-2xl text-gray-700" />
                <span>C Programming</span>
              </div>

            </div>

          </div>

          {/* Frontend */}

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-300 hover:shadow-2xl">

            <h3 className="mb-8 text-xl font-bold text-slate-900">
              Frontend
            </h3>

            <div className="space-y-6">

              <div className="flex items-center gap-4">
                <FaReact className="text-2xl text-cyan-500" />
                <span>React</span>
              </div>

              <div className="flex items-center gap-4">
                <SiTailwindcss className="text-2xl text-sky-500" />
                <span>Tailwind CSS</span>
              </div>

              <div className="flex items-center gap-4">
                <SiHtml5 className="text-2xl text-orange-500" />
                <span>HTML5</span>
              </div>

              <div className="flex items-center gap-4">
                <FaCode className="text-2xl text-blue-500" />
                <span>CSS3</span>
              </div>

            </div>

          </div>

          {/* Backend */}

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-300 hover:shadow-2xl">

            <h3 className="mb-8 text-xl font-bold text-slate-900">
              Backend
            </h3>

            <div className="space-y-6">

              <div className="flex items-center gap-4">
                <SiFastapi className="text-2xl text-green-600" />
                <span>FastAPI</span>
              </div>

              <div className="flex items-center gap-4">
                <SiPostgresql className="text-2xl text-blue-700" />
                <span>PostgreSQL</span>
              </div>

              <div className="flex items-center gap-4">
                <SiMysql className="text-2xl text-blue-500" />
                <span>MySQL</span>
              </div>

              <div className="flex items-center gap-4">
                <FaDatabase className="text-2xl text-gray-700" />
                <span>SQLAlchemy</span>
              </div>

              <div className="flex items-center gap-4">
                <FaDocker className="text-2xl text-blue-600" />
                <span>Docker</span>
              </div>

            </div>

          </div>

          {/* Professional */}

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-300 hover:shadow-2xl">

            <h3 className="mb-8 text-xl font-bold text-slate-900">
              Professional
            </h3>

            <div className="space-y-6">

              <div className="flex items-center gap-4">
                <FaShieldAlt className="text-2xl text-blue-700" />
                <span>Disaster Risk Reduction</span>
              </div>

              <div className="flex items-center gap-4">
                <FaShieldAlt className="text-2xl text-red-600" />
                <span>Emergency Response</span>
              </div>

              <div className="flex items-center gap-4">
                <FaServer className="text-2xl text-purple-600" />
                <span>AI for Humanitarian Action</span>
              </div>

              <div className="flex items-center gap-4">
                <FaGitAlt className="text-2xl text-orange-600" />
                <span>Git & GitHub</span>
              </div>

              <div className="flex items-center gap-4">
                <FaLinux className="text-2xl text-black" />
                <span>Linux</span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Skills;
