import {
  FaGraduationCap,
  FaLaptopCode,
  FaHandsHelping,
  FaRobot,
} from "react-icons/fa";

const About = () => {
  return (
    <section
      id="about"
      className="bg-white py-24"
    >
      <div className="mx-auto max-w-7xl px-8 lg:px-12">

        {/* Heading */}

        <div className="mb-20 text-center">

          <p className="font-semibold uppercase tracking-[0.25em] text-blue-700">
            About Me
          </p>

          <h2 className="mt-4 text-4xl font-extrabold text-slate-900">
            Building Technology that Strengthens Humanitarian Action
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            I am a Disaster Management graduate, Software Engineer, and
            humanitarian technology professional passionate about applying
            artificial intelligence, software engineering, and data-driven
            innovation to improve disaster resilience, humanitarian response,
            and sustainable development.
          </p>

        </div>

        <div className="grid items-center gap-20 lg:grid-cols-2">

          {/* Story */}

          <div className="space-y-8">

            <p className="text-lg leading-9 text-slate-600">

              My passion for disaster management began in 2004 after witnessing
              the devastating Kihuri landslide in Nyeri County, Kenya, which
              claimed the life of one of my classmates. That experience
              profoundly shaped my understanding of the human cost of disasters
              and inspired my lifelong commitment to building safer and more
              resilient communities.

            </p>

            <p className="text-lg leading-9 text-slate-600">

              I pursued a Bachelor's degree in Disaster Management and
              International Diplomacy, where I developed expertise in disaster
              risk reduction, emergency preparedness, humanitarian response,
              and sustainable development. While working in humanitarian
              operations, I became increasingly interested in how technology
              could solve many of the operational challenges facing emergency
              response organisations.

            </p>

            <p className="text-lg leading-9 text-slate-600">

              To bridge this gap, I trained as a Software Engineer through ALX
              Africa. Today, I design scalable backend systems and develop
              AI-powered solutions such as <strong>ReliefTrack AI</strong>, a
              humanitarian resource management platform that improves
              transparency, accountability, and evidence-based decision-making
              for non-governmental organisations.

            </p>

            <p className="text-lg leading-9 text-slate-600">

              My long-term vision is to become a leader in humanitarian
              innovation by integrating disaster management, artificial
              intelligence, and public policy to develop intelligent systems
              that help governments and humanitarian organisations anticipate
              risks, optimise resource allocation, and protect vulnerable
              communities across Africa.

            </p>

          </div>

          {/* Highlights */}

          <div className="grid gap-6 sm:grid-cols-2">

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 transition duration-300 hover:-translate-y-2 hover:border-blue-300 hover:shadow-xl">

              <FaGraduationCap className="mb-5 text-5xl text-blue-700" />

              <h3 className="text-xl font-bold text-slate-900">
                Disaster Management
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Bachelor's degree in Disaster Management and International
                Diplomacy with expertise in disaster risk reduction,
                humanitarian coordination, and sustainable development.
              </p>

            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 transition duration-300 hover:-translate-y-2 hover:border-blue-300 hover:shadow-xl">

              <FaLaptopCode className="mb-5 text-5xl text-blue-700" />

              <h3 className="text-xl font-bold text-slate-900">
                Software Engineering
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Building scalable backend systems using Python, FastAPI,
                PostgreSQL, React, Docker, REST APIs, and modern cloud-native
                development practices.
              </p>

            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 transition duration-300 hover:-translate-y-2 hover:border-blue-300 hover:shadow-xl">

              <FaHandsHelping className="mb-5 text-5xl text-blue-700" />

              <h3 className="text-xl font-bold text-slate-900">
                Humanitarian Practice
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Experience in emergency preparedness, humanitarian response,
                community resilience, disaster risk reduction, and emergency
                response training.
              </p>

            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 transition duration-300 hover:-translate-y-2 hover:border-blue-300 hover:shadow-xl">

              <FaRobot className="mb-5 text-5xl text-blue-700" />

              <h3 className="text-xl font-bold text-slate-900">
                Humanitarian AI
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Developing AI-powered solutions that improve humanitarian
                logistics, transparency, resource allocation, and disaster
                preparedness through intelligent decision support.
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
