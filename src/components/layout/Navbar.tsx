const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <h1 className="text-xl font-bold text-blue-700">
          MW
        </h1>

        <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
          <li><a href="#about" className="hover:text-blue-600">About</a></li>
          <li><a href="#experience" className="hover:text-blue-600">Experience</a></li>
          <li><a href="#projects" className="hover:text-blue-600">Projects</a></li>
          <li><a href="#research" className="hover:text-blue-600">Research</a></li>
          <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
