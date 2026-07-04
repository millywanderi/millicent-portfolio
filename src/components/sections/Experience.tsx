import {
  FaAmbulance,
  FaChartLine,
  FaLaptopCode,
} from "react-icons/fa";

const Experience = () => {
  return (
    <section
      id="experience"
      className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 py-24"
    >
      <div className="mx-auto max-w-6xl px-8 lg:px-12">

        {/* Heading */}

        <div className="mb-20 text-center">

          <p className="font-semibold uppercase tracking-[0.25em] text-blue-400">
            Experience
          </p>

          <h2 className="mt-4 text-4xl font-extrabold text-white">
            Professional Journey
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            My career has evolved from emergency response and humanitarian
            operations to business performance analysis and software
            engineering. These experiences have equipped me with a unique
            interdisciplinary perspective, enabling me to develop
            technology-driven solutions that strengthen disaster resilience,
            improve organisational performance, and support sustainable
            development.
          </p>

        </div>

        {/* Timeline */}

        <div className="relative ml-6 border-l-4 border-blue-500">

          {/* Commudle */}

          <div className="relative mb-14 pl-12">

            <div className="absolute -left-[22px] top-4 flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 shadow-lg shadow-blue-600/40">
              <FaLaptopCode className="text-white" />
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-blue-400 hover:bg-white/10">

              <span className="text-sm font-semibold uppercase tracking-widest text-blue-300">
                July 2024 – Present
              </span>

              <h3 className="mt-3 text-2xl font-bold text-white">
                Backend Software Engineer
              </h3>

              <p className="mt-1 font-semibold text-slate-300">
                Commudle Limited
              </p>

              <ul className="mt-6 space-y-3 leading-7 text-slate-300">

                <li>
                  • Designed and developed scalable backend applications,
                  RESTful APIs, and secure database-driven systems.
                </li>

                <li>
                  • Improved system performance, security, and application
                  scalability through modern software engineering practices.
                </li>

                <li>
                  • Collaborated with multidisciplinary engineering teams to
                  build reliable and maintainable software solutions.
                </li>

                <li>
                  • Designed and developed <strong>ReliefTrack AI</strong>, an
                  AI-powered humanitarian resource management platform that
                  enhances transparency, accountability, and evidence-based
                  decision-making for humanitarian organisations.
                </li>

              </ul>

            </div>

          </div>

          {/* Eagle Innovation */}

          <div className="relative mb-14 pl-12">

            <div className="absolute -left-[22px] top-4 flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 shadow-lg shadow-blue-600/40">
              <FaChartLine className="text-white" />
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-blue-400 hover:bg-white/10">

              <span className="text-sm font-semibold uppercase tracking-widest text-blue-300">
                July 2022 – July 2024
              </span>

              <h3 className="mt-3 text-2xl font-bold text-white">
                Business Performance Analyst
              </h3>

              <p className="mt-1 font-semibold text-slate-300">
                Eagle Innovation Limited
              </p>

              <ul className="mt-6 space-y-3 leading-7 text-slate-300">

                <li>
                  • Analysed business performance data to support strategic
                  planning and evidence-based decision-making.
                </li>

                <li>
                  • Produced performance reports, dashboards, and analytical
                  insights for management.
                </li>

                <li>
                  • Identified operational trends and opportunities to improve
                  organisational efficiency and service delivery.
                </li>

                <li>
                  • Collaborated with cross-functional teams to strengthen
                  business processes through data-driven analysis.
                </li>

              </ul>

            </div>

          </div>

          {/* St John */}

          <div className="relative pl-12">

            <div className="absolute -left-[22px] top-4 flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 shadow-lg shadow-blue-600/40">
              <FaAmbulance className="text-white" />
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-blue-400 hover:bg-white/10">

              <span className="text-sm font-semibold uppercase tracking-widest text-blue-300">
                April 2018 – April 2022
              </span>

              <h3 className="mt-3 text-2xl font-bold text-white">
                Emergency Response Analyst
              </h3>

              <p className="mt-1 font-semibold text-slate-300">
                St John Ambulance Kakamega
              </p>

              <ul className="mt-6 space-y-3 leading-7 text-slate-300">

                <li>
                  • Coordinated emergency preparedness and humanitarian response
                  activities across diverse operational environments.
                </li>

                <li>
                  • Conducted emergency incident analysis and contributed to
                  disaster preparedness planning.
                </li>

                <li>
                  • Led emergency preparedness and first aid training for
                  community volunteers.
                </li>

                <li>
                  • Trained students at Kenya Medical Training College (KMTC)
                  and Administrative Police officers in emergency response and
                  first aid.
                </li>

                <li>
                  • Strengthened community resilience through disaster risk
                  reduction awareness and practical capacity-building
                  initiatives.
                </li>

              </ul>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Experience;
