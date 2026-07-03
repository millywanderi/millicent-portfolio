import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";

const Navbar = () => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-gray-200 bg-white/90 backdrop-blur dark:border-slate-700 dark:bg-slate-900/90">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}

        <div>
          <h1 className="text-2xl font-bold text-blue-700">
            Millicent Wanderi
          </h1>

          <p className="text-sm text-gray-500 dark:text-gray-400">
            Disaster Management • Software Engineering
          </p>
        </div>

        {/* Navigation */}

        <div className="flex items-center gap-8">

          <nav>
            <ul className="hidden md:flex items-center gap-8 font-medium text-gray-700 dark:text-gray-200">

              <li>
                <a href="#about" className="hover:text-blue-700 transition">
                  About
                </a>
              </li>

              <li>
                <a href="#skills" className="hover:text-blue-700 transition">
                  Skills
                </a>
              </li>

              <li>
                <a href="#experience" className="hover:text-blue-700 transition">
                  Experience
                </a>
              </li>

              <li>
                <a href="#projects" className="hover:text-blue-700 transition">
                  Projects
                </a>
              </li>

              <li>
                <a href="#contact" className="hover:text-blue-700 transition">
                  Contact
                </a>
              </li>

            </ul>
          </nav>

          {/* Dark Mode */}

          <button
            onClick={toggleTheme}
            className="rounded-full bg-gray-100 p-3 transition hover:scale-110 dark:bg-slate-700"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>

        </div>

      </div>
    </header>
  );
};

export default Navbar;
