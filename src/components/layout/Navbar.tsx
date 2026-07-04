import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-slate-200/60 bg-white/80 backdrop-blur-xl transition-all duration-300 dark:border-slate-700 dark:bg-slate-900/80">

      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">

        {/* Logo */}

        <a href="#home" className="select-none">

          <h1 className="text-2xl font-bold tracking-tight text-blue-700">
            Millicent Wanderi
          </h1>

          <p className="text-sm text-gray-500 dark:text-gray-400">
            Disaster Management • Software Engineering
          </p>

        </a>

        {/* Navigation */}

        <nav className="hidden lg:block">

          <ul className="flex items-center gap-8">

            {navLinks.map((link) => (

              <li key={link.name}>

                <a
                  href={link.href}
                  className="group relative font-medium text-gray-700 transition hover:text-blue-700 dark:text-gray-200"
                >
                  {link.name}

                  <span className="absolute -bottom-1 left-0 h-0.5 w-0 rounded-full bg-blue-700 transition-all duration-300 group-hover:w-full"></span>

                </a>

              </li>

            ))}

          </ul>

        </nav>

        {/* Dark Mode */}

        <button
          onClick={toggleTheme}
          aria-label="Toggle dark mode"
          className="rounded-full bg-gray-100 p-3 text-gray-700 shadow-sm transition duration-300 hover:scale-110 hover:bg-blue-100 dark:bg-slate-800 dark:text-yellow-300 dark:hover:bg-slate-700"
        >
          {darkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
        </button>

      </div>

    </header>
  );
};

export default Navbar;
