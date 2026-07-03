import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowRight,
  FaShieldAlt,
  FaLaptopCode,
  FaRobot,
} from "react-icons/fa";
import profileImage from "../../assets/millicent.jpg";

const Hero = () => {
  return (
    <section className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-8 lg:px-12 py-10">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] lg:gap-24 items-center min-h-[80vh]">
          {/* LEFT SIDE */}
          <div className="flex flex-col">

            {/* Greeting */}
            <p className="mb-6 text-lg font-semibold text-blue-700">
              👋 Hello, I'm
            </p>

            {/* Name */}
            <h1 className="text-5xl md:text-6xl lg:text-[4.2rem] font-extrabold leading-tight text-gray-900">
              Millicent
            </h1>

            <h1 className="mt-2 text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-gray-900 whitespace-nowrap">
              Nyambura Wanderi
            </h1>

            {/* Titles */}
            <div className="mt-10 space-y-5 text-xl text-gray-700">

              <div className="flex items-center gap-4">
                <FaShieldAlt className="text-blue-700 text-2xl" />
                <span>Disaster Management Professional</span>
              </div>

              <div className="flex items-center gap-4">
                <FaLaptopCode className="text-blue-700 text-2xl" />
                <span>Software Engineer</span>
              </div>

              <div className="flex items-center gap-4">
                <FaRobot className="text-blue-700 text-2xl" />
                <span>Humanitarian Innovator</span>
              </div>

            </div>

            {/* Description */}
            <p className="mt-10 max-w-xl text-lg leading-8 text-gray-600">
              Building intelligent technologies that improve disaster
              resilience, humanitarian response, and sustainable development
              through artificial intelligence and software engineering.
            </p>

            {/* Buttons */}
            <div className="mt-12 flex flex-wrap gap-5">

              <button className="flex items-center gap-2 rounded-xl bg-blue-700 px-8 py-4 font-semibold text-white transition hover:bg-blue-800">
                View Projects
                <FaArrowRight />
              </button>

              <a
                href="/Millicent_Wanderi_CV.pdf"
                download
                className="inline-flex items-center justify-center rounded-xl border-2 border-blue-700 px-8 py-4 font-semibold text-blue-700 transition hover:bg-blue-700 hover:text-white"
              >
                Download CV
              </a>
              

            </div>

            {/* Social Icons */}
            <div className="mt-12 flex items-center gap-8 text-3xl text-gray-600">

              <a href="#" className="hover:text-blue-700 transition">
                <FaGithub />
              </a>

              <a href="#" className="hover:text-blue-700 transition">
                <FaLinkedin />
              </a>

              <a href="#" className="hover:text-blue-700 transition">
                <FaEnvelope />
              </a>

            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="flex justify-center lg:-mt-24">
            <div className="relative">

              {/* Glow */}
              <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-3xl"></div>

              {/* Image */}
              <img
                src={profileImage}
                alt="Millicent Wanderi"
                className="flex h-72 w-72 lg:h-[380px] lg:w-[380px] items-center justify-center rounded-full bg-blue-100 shadow-2xl overflow-hidden"
              />

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
