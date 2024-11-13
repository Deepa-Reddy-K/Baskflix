import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { LogOut, Menu, Search } from "lucide-react";
import { useAuthStore } from "../store/authUser";
import { useContentStore } from "../store/content";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, logout } = useAuthStore();
  const { setContentType } = useContentStore();
  
  // Reference for the mobile menu
  const mobileMenuRef = useRef(null);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  // Close mobile menu if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    <header className="max-w-8xl mx-auto flex flex-wrap items-center justify-between p-6 h-20">
      <div className="flex items-center gap-10 z-50">
        <Link to="/">
          <img src="/baskflix-logo.png" alt="Baskflix Logo" className="w-32 sm:w-40" />
        </Link>

        {/* desktop navbar items */}
        <div className="hidden sm:flex gap-6 items-center">
          <Link to="/" className="hover:underline" onClick={() => setContentType("movie")}>
            Movies
          </Link>
          <Link to="/" className="hover:underline" onClick={() => setContentType("tv")}>
            Tv Shows
          </Link>
          <Link to="/history" className="hover:underline">
            Search History
          </Link>
        </div>
      </div>

      <div className="flex gap-4 items-center z-50">
        <Link to={"/search"}>
          <Search className="size-6 cursor-pointer" />
        </Link>
        <img src={user.image} alt="Avatar" className="h-8 rounded cursor-pointer" />
        <LogOut className="size-6 cursor-pointer" onClick={logout} />
        <div className="sm:hidden">
          <Menu className="size-6 cursor-pointer" onClick={toggleMobileMenu} />
        </div>
      </div>

      {/* mobile navbar items */}
      {isMobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          className="w-full sm:hidden mt-4 z-50 bg-black border rounded border-gray-800"
        >
          <Link
            to={"/"}
            className="block hover: p-2 transition-colors duration-300 ease-in-out hover:bg-gray-800"
            onClick={toggleMobileMenu}
            aria-label="Movies"
          >
            Movies
          </Link>
          <Link
            to={"/"}
            className="block hover: p-2 transition-colors duration-300 ease-in-out hover:bg-gray-800"
            onClick={toggleMobileMenu}
            aria-label="TV Shows"
          >
            Tv Shows
          </Link>
          <Link
            to={"/history"}
            className="block hover: p-2 transition-colors duration-300 ease-in-out hover:bg-gray-800"
            onClick={toggleMobileMenu}
            aria-label="Search History"
          >
            Search History
          </Link>
          {/* Close button */}
          <button
            className="absolute top-2 right-2 text-white"
            onClick={toggleMobileMenu}
            aria-label="Close Menu"
          >
            X
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
