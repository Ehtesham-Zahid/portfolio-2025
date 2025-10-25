import React, { useState } from "react";
import { Button } from "@/shadcn-components/ui/button";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "ehteshamzahid313@gmail.com",
      href: "mailto:ehteshamzahid313@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+92 345 4808884",
      href: "tel:+923454808884",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Lahore, Pakistan",
      href: "#",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      name: "GitHub",
      href: "https://github.com/Ehtesham-Zahid",
      color: "hover:text-gray-900 dark:hover:text-gray-100",
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/ehtesham-zahid/",
      color: "hover:text-blue-600 dark:hover:text-blue-400",
    },
    {
      icon: Twitter,
      name: "Twitter",
      href: "#",
      color: "hover:text-blue-500 dark:hover:text-blue-400",
    },
  ];

  return (
    <section
      id="contact"
      className="w-full bg-background dark:bg-background-dark"
    >
      <div className="w-11/12 2xl:w-5/6 mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-text1-light dark:text-text1-dark">
            Get In Touch
          </h2>
          <p className="mt-3 text-text2 dark:text-text1-dark/80">
            Have a project in mind or want to collaborate? I'd love to hear from
            you.
          </p>
        </div>

        <div className="mt-16 grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Contact Form */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-text1-light dark:text-text1-dark mb-4">
                Send me a message
              </h3>
              <p className="text-text2 dark:text-text1-dark/80">
                Fill out the form below and I'll get back to you as soon as
                possible.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-text1-light dark:text-text1-dark mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-secondary-light dark:border-secondary-dark bg-background/70 dark:bg-background-dark/60 text-text1-light dark:text-text1-dark placeholder-text2 dark:placeholder-text1-dark/60 focus:outline-none focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-text1-light dark:text-text1-dark mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-secondary-light dark:border-secondary-dark bg-background/70 dark:bg-background-dark/60 text-text1-light dark:text-text1-dark placeholder-text2 dark:placeholder-text1-dark/60 focus:outline-none focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-text1-light dark:text-text1-dark mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-secondary-light dark:border-secondary-dark bg-background/70 dark:bg-background-dark/60 text-text1-light dark:text-text1-dark placeholder-text2 dark:placeholder-text1-dark/60 focus:outline-none focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark transition-colors"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-text1-light dark:text-text1-dark mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-secondary-light dark:border-secondary-dark bg-background/70 dark:bg-background-dark/60 text-text1-light dark:text-text1-dark placeholder-text2 dark:placeholder-text1-dark/60 focus:outline-none focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-primary-light dark:bg-primary-dark text-white hover:opacity-90 h-12 text-base font-medium"
              >
                <Send className="h-5 w-5 mr-2" />
                Send Message
              </Button>
            </form>
          </div>

          {/* Right: Contact Info & Social */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-text1-light dark:text-text1-dark mb-4">
                Let's connect
              </h3>
              <p className="text-text2 dark:text-text1-dark/80">
                I'm always open to discussing new opportunities and interesting
                projects.
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className="group flex items-center gap-4 p-4 rounded-xl border border-secondary-light dark:border-secondary-dark bg-background/70 dark:bg-background-dark/60 hover:bg-secondary-light/50 dark:hover:bg-secondary-dark/50 transition-all duration-200 hover:-translate-y-0.5"
                >
                  <div className="h-12 w-12 rounded-lg grid place-items-center bg-primary-light/15 dark:bg-primary-dark/15 text-primary-light dark:text-primary-dark ring-1 ring-primary-light/25 dark:ring-primary-dark/25 group-hover:bg-primary-light/20 group-hover:dark:bg-primary-dark/20 transition-colors">
                    <info.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-text1-light dark:text-text1-dark">
                      {info.title}
                    </p>
                    <p className="text-text2 dark:text-text1-dark/80">
                      {info.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-text1-light dark:text-text1-dark mb-4">
                Follow me
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className={`group h-12 w-12 rounded-lg grid place-items-center bg-secondary-light/60 dark:bg-secondary-dark/40 text-text1-light dark:text-text1-dark hover:bg-secondary-light dark:hover:bg-secondary-dark transition-all duration-200 hover:-translate-y-0.5 ${social.color}`}
                    aria-label={social.name}
                  >
                    <social.icon className="h-6 w-6" />
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <div className="p-6 rounded-xl border border-secondary-light dark:border-secondary-dark bg-background/70 dark:bg-background-dark/60">
              <div className="flex items-center gap-3 mb-2">
                <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm font-medium text-text1-light dark:text-text1-dark">
                  Available for work
                </span>
              </div>
              <p className="text-sm text-text2 dark:text-text1-dark/80">
                I'm currently accepting new projects and collaborations. Let's
                build something amazing together!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
