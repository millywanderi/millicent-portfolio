import { useState } from "react";
import { FaMoon, FaSun, FaDownload } from "react-icons/fa";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">

        {/* Logo */}
        <div>
          <h1 className="text-2xl font-bold text-blue-700">
            Millicent Wanderi
          </h1>

          <p className="text-sm text-gray-500">
            Disaster Management • Software Engineering
          </p>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-8">

          {/* Navigation */}
          <nav>
            <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">

              <li>
                <a
                  href="#about"
                  className="hover:text-blue-700 transition"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#experience"
                  className="hover:text-blue-700 transition"
                >
                  Experience
                </a>
              </li>

              <li>
                <a
                  href="#projects"
                  className="hover:text-blue-700 transition"
                >
                  Projects
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="hover:text-blue-700 transition"
                >
                  Contact
                </a>
              </li>

            </ul>
          </nav>

          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="rounded-full p-3 text-gray-700 hover:bg-gray-100 transition"
          >
            {darkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
          </button>

        </div>
      </div>
    </header>
  );
};

export default Navbar;
