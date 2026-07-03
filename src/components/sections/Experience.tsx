import { FaBriefcase, FaAmbulance } from "react-icons/fa";

const Experience = () => {
  return (
    <section
      id="experience"
      className="bg-gray-50 py-24"
    >
      <div className="max-w-6xl mx-auto px-8 lg:px-12">

        {/* Heading */}

        <div className="text-center mb-20">

          <p className="text-blue-700 font-semibold uppercase tracking-widest">
            Experience
          </p>

          <h2 className="mt-3 text-4xl font-extrabold text-gray-900">
            My Professional Journey
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-lg leading-8 text-gray-600">
            My career combines humanitarian practice with software engineering,
            allowing me to develop technology that supports disaster
            preparedness, emergency response, and sustainable development.
          </p>

        </div>

        <div className="relative border-l-4 border-blue-600 ml-6">

          {/* Commudle */}

          <div className="relative mb-16 pl-12">

            <div className="absolute -left-[18px] top-2 flex h-8 w-8 items-center justify-center rounded-full bg-blue-700 text-white">
              <FaBriefcase size={14} />
            </div>

            <span className="text-sm font-semibold uppercase tracking-wider text-blue-700">
              Present
            </span>

            <h3 className="mt-2 text-2xl font-bold text-gray-900">
              Backend Software Engineer
            </h3>

            <p className="font-semibold text-gray-700">
              Commudle Limited
            </p>

            <ul className="mt-6 space-y-3 text-gray-600 leading-7">

              <li>
                • Designed and developed scalable backend systems and REST APIs.
              </li>

              <li>
                • Improved application performance, security, and database architecture.
              </li>

              <li>
                • Collaborated with multidisciplinary teams to build reliable software solutions.
              </li>

              <li>
                • Developed an AI-powered humanitarian resource management platform
                that improves transparency, accountability, and evidence-based
                decision-making for NGOs.
              </li>

            </ul>

          </div>

          {/* St John */}

          <div className="relative pl-12">

            <div className="absolute -left-[18px] top-2 flex h-8 w-8 items-center justify-center rounded-full bg-blue-700 text-white">
              <FaAmbulance size={14} />
            </div>

            <span className="text-sm font-semibold uppercase tracking-wider text-blue-700">
              4 Years
            </span>

            <h3 className="mt-2 text-2xl font-bold text-gray-900">
              Emergency Response Analyst
            </h3>

            <p className="font-semibold text-gray-700">
              St. John Ambulance Kakamega
            </p>

            <ul className="mt-6 space-y-3 text-gray-600 leading-7">

              <li>
                • Coordinated emergency preparedness and humanitarian response activities.
              </li>

              <li>
                • Conducted emergency incident analysis and disaster preparedness planning.
              </li>

              <li>
                • Delivered first aid and emergency preparedness training to
                volunteers, KMTC students, and Administrative Police officers.
              </li>

              <li>
                • Strengthened community resilience through practical disaster
                preparedness and capacity-building programmes.
              </li>

            </ul>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Experience;
