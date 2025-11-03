const Header = () => {
  return (
    <header className="flex justify-between items-center w-full px-6 md:px-16 py-4 bg-slate-900 text-white border-b border-slate-800 shadow-md">
      {/* Left: Logo + Title */}
      <nav className="flex items-center gap-2 md:gap-4">
        {/* Custom Chef Hat Logo (SVG) */}
        <a href="/" className="flex items-center gap-3 group">
          <div className="p-2 bg-indigo-600 rounded-xl shadow-lg group-hover:scale-105 transition-transform duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.6}
              stroke="white"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 14s1-4 7-4 7 4 7 4M5 14v5a1 1 0 001 1h12a1 1 0 001-1v-5M9 10V6a3 3 0 016 0v4"
              />
            </svg>
          </div>
          <h1 className="font-extrabold text-2xl md:text-3xl tracking-wide">
            Claude <span className="text-indigo-400">Chef</span>
          </h1>
        </a>
      </nav>

      {/* Right: Nav Links */}
      <ul className="flex gap-6 md:gap-10 font-medium text-lg text-slate-300">
        <li>
          <a
            href="#About"
            className="hover:text-indigo-400 transition-colors duration-300"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#SavedRecipes"
            className="hover:text-indigo-400 transition-colors duration-300"
          >
            My Saved Recipes
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
