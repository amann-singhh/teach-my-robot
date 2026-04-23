import React, { useState, useEffect } from "react";
import { NavLink, Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Bot, Menu, X, ChevronDown } from "lucide-react";
import { useAuthenticator } from "@aws-amplify/ui-react";

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const { user, authStatus, signOut } = useAuthenticator();

  const handleLogout = async () => {
    await signOut();
    navigate("/login");
  };

  // Close menus on route change
  useEffect(() => {
    setIsOpen(false);
    setDropdownOpen(false);
  }, [location.pathname]);

  // Escape + outside click
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        !target.closest("#mobile-menu") &&
        !target.closest("#menu-button") &&
        !target.closest("#solutions-dropdown")
      ) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Lock scroll on mobile open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // ✅ UPDATED NAV LINKS (Products added)
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" }, // 🔥 NEW
    { name: "Services", path: "/services" },
    { name: "News", path: "/news" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const solutionsLinks = [
    { name: "Smart Anganwadi", path: "/smart-anganwadi" },
    { name: "Courses", path: "/courses" },
    { name: "Robot Maze", path: "/robot-maze" },
    { name: "Blog", path: "/blog" },
  ];

  const navbarClass = isScrolled
    ? "bg-white shadow-md py-3 transition-all duration-300"
    : "bg-transparent backdrop-blur-sm py-4 transition-all duration-300";

  return (
    <header className={`sticky top-0 z-50 ${navbarClass}`}>
      <nav className="container-custom">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 text-xl font-bold text-primary-600"
          >
            <Bot size={28} />
            <span>TeachMyRobot</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-md transition ${
                    isActive
                      ? "text-primary-600 bg-primary-50 font-medium"
                      : "text-gray-700 hover:text-primary-600 hover:bg-gray-100"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            {/* Solutions Dropdown */}
            <div className="relative" id="solutions-dropdown">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className={`px-4 py-2 rounded-md flex items-center gap-1 ${
                  dropdownOpen
                    ? "text-primary-600 bg-primary-50"
                    : "text-gray-700 hover:text-primary-600 hover:bg-gray-100"
                }`}
              >
                Solutions <ChevronDown size={16} />
              </button>

              {dropdownOpen && (
                <div className="absolute mt-2 w-48 bg-white rounded-lg shadow-lg py-2">
                  {solutionsLinks.map((link) => (
                    <NavLink
                      key={link.path}
                      to={link.path}
                      onClick={() => setDropdownOpen(false)}
                      className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-700"
                    >
                      {link.name}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>

            {/* Auth */}
            {authStatus === "authenticated" ? (
              <div className="flex items-center gap-3 ml-4">
                <span className="text-sm text-gray-700">
                  {user?.signInDetails?.loginId}
                </span>
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 bg-red-500 text-white rounded-md"
                >
                  Logout
                </button>
              </div>
            ) : (
              <NavLink to="/login" className="btn btn-primary ml-4">
                Login
              </NavLink>
            )}
          </div>

          {/* Mobile Button */}
          <button
            id="menu-button"
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="md:hidden">
            <motion.div
              className="fixed inset-0 bg-black/40 z-30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              id="mobile-menu"
              className="fixed right-0 top-16 w-full max-w-sm bg-white h-[calc(100vh-4rem)] z-40 shadow-xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
            >
              <div className="p-4">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg"
                  >
                    {link.name}
                  </NavLink>
                ))}
              </div>

              {/* Auth Mobile */}
              <div className="p-4 border-t">
                {authStatus === "authenticated" ? (
                  <>
                    <p className="text-sm text-center mb-2">
                      {user?.signInDetails?.loginId}
                    </p>
                    <button
                      onClick={() => {
                        handleLogout();
                        setIsOpen(false);
                      }}
                      className="w-full bg-red-500 text-white py-3 rounded-lg"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <NavLink
                    to="/login"
                    onClick={() => setIsOpen(false)}
                    className="block text-center bg-primary-600 text-white py-3 rounded-lg"
                  >
                    Login
                  </NavLink>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
