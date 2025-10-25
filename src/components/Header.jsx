import React, { useEffect, useRef, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import Sidebar from "./Sidebar";
import { Button } from "../shadcn-components/ui/button";

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [navFixed, setNavFixed] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      const headerEl = headerRef.current;
      if (!headerEl) return;
      const threshold = headerEl.offsetTop + headerEl.offsetHeight;
      setNavFixed(window.scrollY > threshold);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header ref={headerRef} className="w-full   ">
      <div className="w-11/12 2xl:w-5/6 mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex items-center justify-between h-16 md:grid md:grid-cols-3">
          {/* Left side - Name */}
          <div className="flex-shrink-0 md:justify-self-start">
            <h1 className="text-2xl font-bold tracking-tight text-text1-light dark:text-text1-dark">
              Ehtesham{" "}
              <span className="text-primary-light dark:text-primary-dark">
                Zahid
              </span>
            </h1>
          </div>

          {/* Center - Navigation (normal position) */}
          <nav
            className={`hidden md:flex items-center md:justify-self-center ${
              navFixed ? "md:hidden" : ""
            }`}
          >
            <div className="flex items-center gap-1 bg-secondary-light dark:bg-secondary-dark  rounded-full px-3 py-1.5 shadow-sm">
              <button
                onClick={() => scrollToSection("about")}
                className="px-3 py-1.5 text-sm font-medium rounded-full text-text1-light dark:text-text1-dark hover:text-primary-light dark:hover:text-primary-dark transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="px-3 py-1.5 text-sm font-medium rounded-full text-text1-light dark:text-text1-dark hover:text-primary-light dark:hover:text-primary-dark transition-colors"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="px-3 py-1.5 text-sm font-medium rounded-full text-text1-light dark:text-text1-dark hover:text-primary-light dark:hover:text-primary-dark transition-colors"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="px-3 py-1.5 text-sm font-medium rounded-full text-text1-light dark:text-text1-dark hover:text-primary-light dark:hover:text-primary-dark transition-colors"
              >
                Contact
              </button>
            </div>
          </nav>

          {/* Right side - Controls */}
          <div className="flex items-center gap-2 md:justify-self-end ">
            {/* Desktop theme toggle */}
            <div className="hidden md:block">
              <ThemeToggle />
            </div>
            {/* Mobile theme toggle */}
            <div className="md:hidden">
              <ThemeToggle />
            </div>
            {/* Mobile hamburger */}
            <Button
              aria-label="Open menu"
              variant="outline"
              size="icon"
              className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md border border-secondary-light dark:border-secondary-dark text-text1-light dark:text-text1-dark hover:bg-secondary-light/70 dark:hover:bg-secondary-dark/70"
              onClick={() => setSidebarOpen(true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </Button>
          </div>
        </div>
      </div>
      {/* Fixed nav that appears after scrolling past header */}
      {navFixed ? (
        <div className="hidden md:block fixed top-0 left-0 right-0 z-40    ">
          <div className="w-11/12 2xl:w-5/6 mx-auto px-4 sm:px-6 lg:px-8 py-2">
            <div className="flex justify-center">
              <div className="flex items-center gap-1 rounded-full px-3 py-1.5 shadow-sm  bg-secondary-light dark:bg-secondary-dark">
                <button
                  onClick={() => scrollToSection("about")}
                  className="px-3 py-1.5 text-sm font-medium rounded-full text-text1-light dark:text-text1-dark hover:text-primary-light dark:hover:text-primary-dark transition-colors"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("skills")}
                  className="px-3 py-1.5 text-sm font-medium rounded-full text-text1-light dark:text-text1-dark hover:text-primary-light dark:hover:text-primary-dark transition-colors"
                >
                  Skills
                </button>
                <button
                  onClick={() => scrollToSection("projects")}
                  className="px-3 py-1.5 text-sm font-medium rounded-full text-text1-light dark:text-text1-dark hover:text-primary-light dark:hover:text-primary-dark transition-colors"
                >
                  Projects
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="px-3 py-1.5 text-sm font-medium rounded-full text-text1-light dark:text-text1-dark hover:text-primary-light dark:hover:text-primary-dark transition-colors"
                >
                  Contact
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
      {/* Mobile Sidebar */}
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </header>
  );
};

export default Header;
