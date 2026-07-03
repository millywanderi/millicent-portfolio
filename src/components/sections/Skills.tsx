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
    <section id="skills" className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-8 lg:px-12">

        {/* Heading */}

        <div className="text-center mb-20">
          <p className="text-blue-700 font-semibold uppercase tracking-widest">
            Skills
          </p>

          <h2 className="mt-3 text-4xl font-extrabold text-gray-900">
            Technologies & Expertise
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-lg leading-8 text-gray-600">
            My expertise spans disaster management, humanitarian innovation,
            software engineering, artificial intelligence, and backend systems.
          </p>
        </div>

        {/* Skill Cards */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {/* Programming */}

          <div className="rounded-2xl bg-white p-8 shadow-lg hover:shadow-xl transition">
            <h3 className="mb-8 text-xl font-bold">Programming</h3>

            <div className="space-y-5">

              <div className="flex items-center gap-3">
                <FaPython className="text-2xl text-blue-600" />
                <span>Python</span>
              </div>

              <div className="flex items-center gap-3">
                <SiJavascript className="text-2xl text-yellow-500" />
                <span>JavaScript</span>
              </div>

              <div className="flex items-center gap-3">
                <SiTypescript className="text-2xl text-blue-600" />
                <span>TypeScript</span>
              </div>

              <div className="flex items-center gap-3">
                <FaCode className="text-2xl text-gray-700" />
                <span>C Programming</span>
              </div>

            </div>
          </div>

          {/* Frontend */}

          <div className="rounded-2xl bg-white p-8 shadow-lg hover:shadow-xl transition">
            <h3 className="mb-8 text-xl font-bold">Frontend</h3>

            <div className="space-y-5">

              <div className="flex items-center gap-3">
                <FaReact className="text-2xl text-cyan-500" />
                <span>React</span>
              </div>

              <div className="flex items-center gap-3">
                <SiTailwindcss className="text-2xl text-sky-500" />
                <span>Tailwind CSS</span>
              </div>

              <div className="flex items-center gap-3">
                <SiHtml5 className="text-2xl text-orange-500" />
                <span>HTML5</span>
              </div>

              <div className="flex items-center gap-3">
                <FaCode className="text-2xl text-blue-500" />
                <span>CSS3</span>
              </div>

            </div>
          </div>

          {/* Backend */}

          <div className="rounded-2xl bg-white p-8 shadow-lg hover:shadow-xl transition">
            <h3 className="mb-8 text-xl font-bold">Backend</h3>

            <div className="space-y-5">

              <div className="flex items-center gap-3">
                <SiFastapi className="text-2xl text-green-600" />
                <span>FastAPI</span>
              </div>

              <div className="flex items-center gap-3">
                <SiPostgresql className="text-2xl text-blue-700" />
                <span>PostgreSQL</span>
              </div>

              <div className="flex items-center gap-3">
                <SiMysql className="text-2xl text-blue-500" />
                <span>MySQL</span>
              </div>

              <div className="flex items-center gap-3">
                <FaDatabase className="text-2xl text-gray-700" />
                <span>SQLAlchemy</span>
              </div>

              <div className="flex items-center gap-3">
                <FaDocker className="text-2xl text-blue-600" />
                <span>Docker</span>
              </div>

            </div>
          </div>

          {/* Professional */}

          <div className="rounded-2xl bg-white p-8 shadow-lg hover:shadow-xl transition">
            <h3 className="mb-8 text-xl font-bold">
              Professional
            </h3>

            <div className="space-y-5">

              <div className="flex items-center gap-3">
                <FaShieldAlt className="text-2xl text-blue-700" />
                <span>Disaster Risk Reduction</span>
              </div>

              <div className="flex items-center gap-3">
                <FaShieldAlt className="text-2xl text-red-600" />
                <span>Emergency Response</span>
              </div>

              <div className="flex items-center gap-3">
                <FaServer className="text-2xl text-purple-600" />
                <span>AI for Humanitarian Action</span>
              </div>

              <div className="flex items-center gap-3">
                <FaGitAlt className="text-2xl text-orange-600" />
                <span>Git & GitHub</span>
              </div>

              <div className="flex items-center gap-3">
                <FaLinux className="text-2xl" />
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
