import {
  FaPython,
  FaReact,
  FaGitAlt,
  FaDocker,
  FaLinux,
} from "react-icons/fa";

import {
  SiFastapi,
  SiJavascript,
  SiTypescript,
  SiPostgresql,
  SiMysql,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiC,
} from "react-icons/si";

const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-gray-50 py-24"
    >
      <div className="max-w-7xl mx-auto px-8 lg:px-12">

        <div className="text-center mb-20">

          <p className="text-blue-700 font-semibold uppercase tracking-widest">
            Skills
          </p>

          <h2 className="text-4xl font-extrabold mt-3">
            Technologies & Expertise
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600 leading-8">
            My experience spans disaster management, humanitarian
            innovation, software engineering, artificial intelligence,
            and backend systems.
          </p>

        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

          {/* Programming */}

          <div className="bg-white rounded-3xl p-8 shadow-lg">

            <h3 className="font-bold text-xl mb-8">
              Programming
            </h3>

            <div className="space-y-5">

              <div className="flex items-center gap-3">
                <FaPython className="text-2xl text-blue-600" />
                Python
              </div>

              <div className="flex items-center gap-3">
                <SiJavascript className="text-2xl text-yellow-500" />
                JavaScript
              </div>

              <div className="flex items-center gap-3">
                <SiTypescript className="text-2xl text-blue-500" />
                TypeScript
              </div>

              <div className="flex items-center gap-3">
                <SiC className="text-2xl text-blue-700" />
                C Programming
              </div>

            </div>

          </div>

          {/* Frontend */}

          <div className="bg-white rounded-3xl p-8 shadow-lg">

            <h3 className="font-bold text-xl mb-8">
              Frontend
            </h3>

            <div className="space-y-5">

              <div className="flex items-center gap-3">
                <FaReact className="text-2xl text-sky-500" />
                React
              </div>

              <div className="flex items-center gap-3">
                <SiTailwindcss className="text-2xl text-cyan-500" />
                Tailwind CSS
              </div>

              <div className="flex items-center gap-3">
                <SiHtml5 className="text-2xl text-orange-500" />
                HTML5
              </div>

              <div className="flex items-center gap-3">
                <SiCss3 className="text-2xl text-blue-500" />
                CSS3
              </div>

            </div>

          </div>

          {/* Backend */}

          <div className="bg-white rounded-3xl p-8 shadow-lg">

            <h3 className="font-bold text-xl mb-8">
              Backend
            </h3>

            <div className="space-y-5">

              <div className="flex items-center gap-3">
                <SiFastapi className="text-2xl text-green-600" />
                FastAPI
              </div>

              <div className="flex items-center gap-3">
                <SiPostgresql className="text-2xl text-blue-700" />
                PostgreSQL
              </div>

              <div className="flex items-center gap-3">
                <SiMysql className="text-2xl text-blue-500" />
                MySQL
              </div>

              <div className="flex items-center gap-3">
                <FaDocker className="text-2xl text-blue-600" />
                Docker
              </div>

            </div>

          </div>

          {/* Professional */}

          <div className="bg-white rounded-3xl p-8 shadow-lg">

            <h3 className="font-bold text-xl mb-8">
              Professional
            </h3>

            <div className="space-y-5">

              <div>Disaster Risk Reduction</div>

              <div>Emergency Response</div>

              <div>AI for Humanitarian Action</div>

              <div>Research & Data Analysis</div>

              <div>Leadership</div>

              <div className="flex items-center gap-3">
                <FaGitAlt className="text-2xl text-red-600" />
                Git & GitHub
              </div>

              <div className="flex items-center gap-3">
                <FaLinux className="text-2xl" />
                Linux
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Skills;
