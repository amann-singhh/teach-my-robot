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

  // ✅ Cognito auth state
  const { user, authStatus, signOut } = useAuthenticator();

  const handleLogout = async () => {
    await signOut();
    navigate("/login");
  };

  useEffect(() => {
    setIsOpen(false);
    setDropdownOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const closeOnEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    const closeOnClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        !target.closest("#mobile-menu") &&
        !target.closest("#menu-button") &&
        !target.closest("#solutions-dropdown")
      ) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("keydown", closeOnEscape);
    document.addEventListener("mousedown", closeOnClickOutside);
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.removeEventListener("mousedown", closeOnClickOutside);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const navLinks = [
    { name: "Home", path: "/" },
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
            className="flex items-center gap-2 text-xl font-bold text-primary-600 hover:text-primary-700"
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
                  `px-4 py-2 mx-1 rounded-md transition-colors ${
                    isActive
                      ? "text-primary-600 font-medium bg-primary-50"
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
                className={`px-4 py-2 mx-1 rounded-md flex items-center gap-1 transition-colors ${
                  dropdownOpen
                    ? "text-primary-600 font-medium bg-primary-50"
                    : "text-gray-700 hover:text-primary-600 hover:bg-gray-100"
                }`}
                onClick={() => setDropdownOpen((open) => !open)}
                type="button"
              >
                Solutions <ChevronDown size={16} />
              </button>

              {dropdownOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-50 py-2">
                  {solutionsLinks.map((link) => (
                    <NavLink
                      key={link.path}
                      to={link.path}
                      className={({ isActive }) =>
                        `block px-4 py-2 rounded-md transition-colors ${
                          isActive
                            ? "bg-primary-50 text-primary-700 font-medium"
                            : "text-gray-700 hover:bg-primary-50 hover:text-primary-700"
                        }`
                      }
                      onClick={() => setDropdownOpen(false)}
                    >
                      {link.name}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>

            {/* ✅ AUTH SECTION (DESKTOP) */}
            {authStatus === "authenticated" ? (
              <div className="flex items-center gap-3 ml-4">
                <span className="text-sm text-gray-700">
                  {user?.signInDetails?.loginId}
                </span>
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 rounded-md bg-red-500 text-white hover:bg-red-600"
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

          {/* Mobile Menu Button */}
          <button
            id="menu-button"
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-primary-600 hover:bg-gray-100"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="md:hidden">
            <motion.div
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              id="mobile-menu"
              className="fixed right-0 top-16 w-full max-w-sm bg-white h-[calc(100vh-4rem)] z-40 shadow-xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              <div className="flex flex-col h-full">
                <div className="flex-1 overflow-y-auto p-4">
                  {navLinks.map((link) => (
                    <NavLink
                      key={link.path}
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className="block px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-50"
                    >
                      {link.name}
                    </NavLink>
                  ))}
                </div>

                {/* ✅ AUTH SECTION (MOBILE) */}
                <div className="p-4 border-t">
                  {authStatus === "authenticated" ? (
                    <>
                      <p className="text-sm text-gray-700 mb-3 text-center">
                        {user?.signInDetails?.loginId}
                      </p>
                      <button
                        onClick={() => {
                          handleLogout();
                          setIsOpen(false);
                        }}
                        className="w-full px-4 py-3 rounded-lg bg-red-500 text-white"
                      >
                        Logout
                      </button>
                    </>
                  ) : (
                    <NavLink
                      to="/login"
                      onClick={() => setIsOpen(false)}
                      className="block w-full px-4 py-3 text-center rounded-lg bg-primary-600 text-white"
                    >
                      Login
                    </NavLink>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
