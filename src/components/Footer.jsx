import React from "react";
import { Github, Linkedin, Twitter, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      name: "GitHub",
      href: "https://github.com/ehtesham",
      color: "hover:text-gray-900 dark:hover:text-gray-100",
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      href: "https://linkedin.com/in/ehtesham",
      color: "hover:text-blue-600 dark:hover:text-blue-400",
    },
    {
      icon: Twitter,
      name: "Twitter",
      href: "https://twitter.com/ehtesham",
      color: "hover:text-blue-500 dark:hover:text-blue-400",
    },
    {
      icon: Mail,
      name: "Email",
      href: "mailto:ehtesham@example.com",
      color: "hover:text-red-500 dark:hover:text-red-400",
    },
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    { name: "Web Development", href: "#" },
    { name: "UI/UX Design", href: "#" },
    { name: "Consulting", href: "#" },
    { name: "Mentoring", href: "#" },
  ];

  return (
    <footer className="w-full bg-background dark:bg-background-dark border-t border-secondary-light dark:border-secondary-dark">
      <div className="w-11/12 2xl:w-5/6 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 md:py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2 space-y-4">
              <div>
                <h3 className="text-2xl font-bold text-text1-light dark:text-text1-dark">
                  Ehtesham{" "}
                  <span className="text-primary-light dark:text-primary-dark">
                    Zahid
                  </span>
                </h3>
                <p className="mt-2 text-text2 dark:text-text1-dark/80 max-w-md">
                  Frontend Developer crafting clean, performant, and accessible
                  experiences. Let's build something amazing together.
                </p>
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className={`group h-10 w-10 rounded-lg grid place-items-center bg-secondary-light/60 dark:bg-secondary-dark/40 text-text1-light dark:text-text1-dark hover:bg-secondary-light dark:hover:bg-secondary-dark transition-all duration-200 hover:-translate-y-0.5 ${social.color}`}
                    aria-label={social.name}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-text1-light dark:text-text1-dark mb-4">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-text2 dark:text-text1-dark/80 hover:text-primary-light dark:hover:text-primary-dark transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold text-text1-light dark:text-text1-dark mb-4">
                Services
              </h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <a
                      href={service.href}
                      className="text-text2 dark:text-text1-dark/80 hover:text-primary-light dark:hover:text-primary-dark transition-colors duration-200"
                    >
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-secondary-light dark:border-secondary-dark">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-text2 dark:text-text1-dark/80">
              <span>© {currentYear} Ehtesham Zahid. All rights reserved.</span>
            </div>

            <div className="flex items-center gap-2 text-text2 dark:text-text1-dark/80">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span>and lots of coffee</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
