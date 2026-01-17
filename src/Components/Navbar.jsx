import { useState, useEffect } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "About", link: "#about" },
    { name: "Features", link: "#features" },
    { name: "Pricing", link: "#pricing" },
    { name: "Testimonials", link: "#testimonial" },
  ];

  return (
    <>
      {/* Header */}
      <Motion.section
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? "fixed top-0 left-0 z-50 bg-white border-b border-gray-200"
            : "relative"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-7">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#">
              <Motion.img
                src="/Logo.svg"
                alt="logo"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="cursor-pointer"
              />
            </a>

            {/* Desktop Menu */}
            <ul className="hidden lg:flex gap-6 text-p">
              {navItems.map((item, index) => (
                <Motion.li
                  key={item.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <a
                    href={item.link}
                    onClick={() => setActive(item.name.toLowerCase())}
                    className={`transition ${
                      active === item.name.toLowerCase()
                        ? "text-secondary"
                        : "text-p hover:text-secondary"
                    }`}
                  >
                    {item.name}
                  </a>
                </Motion.li>
              ))}
            </ul>

            {/* Hamburger */}
            <button
              className="lg:hidden text-3xl"
              onClick={() => setMenuOpen(true)}
            >
              &#9776;
            </button>

            {/* Desktop Auth */}
            <div className="hidden lg:flex items-center gap-4">
              <Motion.a
                href="#"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="font-medium"
              >
                Sign In
              </Motion.a>

              <Motion.a
                href="#"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
                className="font-medium text-primary border-2 px-8 py-2 rounded-4xl"
              >
                Sign Up
              </Motion.a>
            </div>
          </div>
        </div>
      </Motion.section>

      {/* Spacer for fixed navbar */}
      {isScrolled && <div className="h-22" />}

      {/* Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <Motion.div
            className="fixed inset-0 bg-black/50 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {menuOpen && (
          <Motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-64 bg-white shadow-lg lg:hidden z-50"
          >
            <div className="flex justify-between items-center px-6 py-4">
              <img src="/Logo.svg" alt="logo" />
              <button className="text-2xl" onClick={() => setMenuOpen(false)}>
                &times;
              </button>
            </div>

            <ul className="flex flex-col gap-4 px-6 text-p">
              {navItems.map((item, index) => (
                <Motion.li
                  key={item.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a
                    href={item.link}
                    onClick={() => {
                      setActive(item.name.toLowerCase());
                      setMenuOpen(false);
                    }}
                    className="block hover:text-secondary transition"
                  >
                    {item.name}
                  </a>
                </Motion.li>
              ))}

              <li className="font-medium mt-4">
                <a href="#">Sign In</a>
              </li>

              <li>
                <a
                  href="#"
                  className="inline-block mt-2 text-primary border-2 px-6 py-2 rounded-4xl"
                >
                  Sign Up
                </a>
              </li>
            </ul>
          </Motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
