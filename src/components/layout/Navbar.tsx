const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-blue-700">
            Millicent Wanderi
          </h1>

          <p className="text-sm text-gray-500">
            Disaster Management • Software Engineering
          </p>
        </div>

        <nav>
          <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
            <li>
              <a href="#about" className="hover:text-blue-700">
                About
              </a>
            </li>

            <li>
              <a href="#experience" className="hover:text-blue-700">
                Experience
              </a>
            </li>

            <li>
              <a href="#projects" className="hover:text-blue-700">
                Projects
              </a>
            </li>

            <li>
              <a href="#contact" className="hover:text-blue-700">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
