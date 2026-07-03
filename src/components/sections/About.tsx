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
      <div className="max-w-7xl mx-auto px-8 lg:px-12">

        {/* Heading */}

        <div className="text-center mb-16">

          <p className="text-blue-700 font-semibold uppercase tracking-widest">
            About Me
          </p>

          <h2 className="mt-3 text-4xl font-extrabold text-gray-900">
            Bridging Disaster Management and Technology
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-lg leading-8 text-gray-600">
            I am a Disaster Management professional and Software Engineer
            passionate about applying artificial intelligence, software
            engineering, and data-driven technologies to strengthen disaster
            resilience, humanitarian response, and sustainable development.
          </p>

        </div>

        {/* Content */}

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}

          <div className="space-y-6 text-gray-600 leading-8 text-lg">

            <p>
              My journey began after witnessing the devastating effects of a
              landslide that claimed the life of one of my classmates in Kenya.
              That experience inspired me to dedicate my career to reducing
              disaster risk and protecting vulnerable communities.
            </p>

            <p>
              I later earned a Bachelor's degree in Disaster Management and
              International Diplomacy before expanding my expertise into
              software engineering through ALX Africa. Today, I combine these
              disciplines to build intelligent digital solutions that improve
              humanitarian operations and emergency decision-making.
            </p>

            <p>
              My long-term vision is to become a global leader in humanitarian
              technology by integrating artificial intelligence, digital
              innovation, and evidence-based disaster management to create more
              resilient communities across Africa and beyond.
            </p>

          </div>

          {/* Right */}

          <div className="grid sm:grid-cols-2 gap-6">

            <div className="rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-lg transition">

              <FaGraduationCap className="text-4xl text-blue-700 mb-4" />

              <h3 className="text-xl font-bold mb-3">
                Education
              </h3>

              <p className="text-gray-600">
                BSc Disaster Management &
                International Diplomacy
              </p>

            </div>

            <div className="rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-lg transition">

              <FaLaptopCode className="text-4xl text-blue-700 mb-4" />

              <h3 className="text-xl font-bold mb-3">
                Software Engineering
              </h3>

              <p className="text-gray-600">
                Backend development, APIs,
                databases, AI systems and cloud
                technologies.
              </p>

            </div>

            <div className="rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-lg transition">

              <FaHandsHelping className="text-4xl text-blue-700 mb-4" />

              <h3 className="text-xl font-bold mb-3">
                Humanitarian Impact
              </h3>

              <p className="text-gray-600">
                Emergency response, community
                resilience and disaster
                preparedness.
              </p>

            </div>

            <div className="rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-lg transition">

              <FaRobot className="text-4xl text-blue-700 mb-4" />

              <h3 className="text-xl font-bold mb-3">
                AI Innovation
              </h3>

              <p className="text-gray-600">
                Developing intelligent
                humanitarian solutions for
                NGOs and disaster management.
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
