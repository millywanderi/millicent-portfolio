import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        <div>

          <p className="text-blue-700 font-semibold mb-6">
            Hello, I'm
          </p>

          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-snug">
            Millicent
            <br />
            Nyambura Wanderi
          </h1>

          <h2 className="text-2xl text-gray-600 mt-6">
            Disaster Management Professional
            <br />
            Software Engineer
            <br />
            Humanitarian Innovator
          </h2>

          <p className="mt-8 text-lg leading-8 text-gray-600 max-w-xl">
            Building intelligent technologies that improve disaster resilience,
            humanitarian response, and sustainable development through
            artificial intelligence and software engineering.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-12">

            <button className="bg-blue-700 text-white px-8 py-3 rounded-lg hover:bg-blue-800">
              View Projects
            </button>

            <button className="border border-blue-700 text-blue-700 px-8 py-3 rounded-lg hover:bg-blue-700 hover:text-white">
              Download CV
            </button>

          </div>

          <div className="flex gap-8 text-2xl mt-14 text-gray-700">
            <FaGithub className="cursor-pointer hover:text-blue-700" />
            <FaLinkedin className="cursor-pointer hover:text-blue-700" />
            <FaEnvelope className="cursor-pointer hover:text-blue-700" />
          </div>

        </div>

        <div className="flex justify-center">

          <div className="w-96 h-96 rounded-full bg-blue-100 flex items-center justify-center text-7xl font-bold text-blue-700 shadow-xl">
            MW
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;
