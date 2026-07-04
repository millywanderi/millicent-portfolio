import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";

const Navbar = () => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-slate-200/50 bg-white/80 backdrop-blur-xl transition dark:border-slate-700 dark:bg-slate-900/80">

      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}

        <a
          href="#home"
          className="group"
        >
          <h1 className="text-2xl font-bold text-blue-700">
            Millicent Wanderi
          </h1>

          <p className="text-sm text-gray-500 dark:text-gray-400">
            Disaster Management • Software Engineering
          </p>
        </a>

        {/* Navigation */}

        <nav className="hidden lg:block">

          <ul className="flex items-center gap-8 font-medium">

            {[
              "Home",
              "About",
              "Skills",
              "Experience",
              "Projects",
              "Contact",
            ].map((item) => (

              <li key={item}>

                <a
                  href={`#${item.toLowerCase()}`}
                  className="relative text-gray-700 transition hover:text-blue-700 dark:text-gray-200"
                >
                  {item}

                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-700 transition-all duration-300 hover:w-full"></span>

                </a>

              </li>

            ))}

          </ul>

        </nav>

        {/* Right Side */}

        <div className="flex items-center gap-4">

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
