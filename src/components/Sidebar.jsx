import React from "react";

const Sidebar = ({ open, onClose }) => {
  return (
    <div
      className={`fixed inset-0 z-50 transition-opacity ${
        open
          ? "pointer-events-auto opacity-100"
          : "pointer-events-none opacity-0"
      } md:hidden`}
      role="dialog"
      aria-modal="true"
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/40 dark:bg-black/60"
        onClick={onClose}
      />

      {/* Panel */}
      <aside
        className={`absolute left-0 top-0 h-full w-72 max-w-[85%] bg-background dark:bg-background-dark border-r border-secondary dark:border-secondary-dark shadow-xl transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Top bar */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-secondary dark:border-secondary-dark">
          <div className="text-lg font-semibold tracking-tight text-text1 dark:text-text1-dark">
            Ehtesham{" "}
            <span className="text-primary dark:text-primary-dark">Zahid</span>
          </div>
          <button
            onClick={onClose}
            aria-label="Close sidebar"
            className="p-2 rounded-md text-text1 dark:text-text1-dark hover:bg-secondary/70 dark:hover:bg-secondary-dark/70"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Nav */}
        <nav className="px-3 py-4">
          <ul className="space-y-1">
            {[
              { href: "#about", label: "About" },
              { href: "#skills", label: "Skills" },
              { href: "#projects", label: "Projects" },
              { href: "#blogs", label: "Blogs" },
              { href: "#contact", label: "Contact" },
            ].map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={onClose}
                  className="flex items-center justify-between rounded-lg px-3 py-2 text-sm font-medium text-text1 dark:text-text1-dark hover:text-primary dark:hover:text-primary-dark hover:bg-secondary/70 dark:hover:bg-secondary-dark/60 transition-colors"
                >
                  {link.label}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    className="h-4 w-4 opacity-60"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer spacing */}
        <div className="h-6" />
      </aside>
    </div>
  );
};

export default Sidebar;
