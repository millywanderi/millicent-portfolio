import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6">

        <p className="text-blue-600 font-semibold mb-4">
          Hello, I'm
        </p>

        <h1 className="text-6xl font-extrabold mb-6">
          Millicent Nyambura Wanderi
        </h1>

        <h2 className="text-2xl text-gray-600 mb-6">
          Disaster Management Professional • Software Engineer • Humanitarian Innovation
        </h2>

        <p className="text-lg text-gray-600 max-w-2xl leading-8 mb-10">
          Building intelligent technologies that strengthen disaster resilience,
          humanitarian response, and sustainable development across Africa.
        </p>

        <div className="flex gap-4 mb-8">
          <a
            href="#projects"
            className="bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800"
          >
            View My Work
          </a>

          <a
            href="#contact"
            className="border border-blue-700 text-blue-700 px-6 py-3 rounded-lg hover:bg-blue-700 hover:text-white"
          >
            Contact Me
          </a>
        </div>

        <div className="flex gap-6 text-2xl">
          <FaGithub />
          <FaLinkedin />
          <FaEnvelope />
        </div>

      </div>
    </section>
  );
};

export default Hero;
