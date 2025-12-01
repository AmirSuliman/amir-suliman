"use client";
import React, { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Server,
  Database,
  Palette,
  ChevronDown,
  Menu,
  X,
  Copy,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { GITHUB_PROFILE_URL, LINKEDIN_PROFILE_URL } from "@/utils/constants";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce solution with real-time inventory, payment integration, and admin dashboard",
      tech: ["Next.js", "Node.js", "MongoDB", "Stripe"],
      image:
        "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=500&fit=crop",
      github: "#",
      live: "#",
    },
    {
      title: "Real-Time Chat Application",
      description:
        "WebSocket-based chat app with authentication, private rooms, and file sharing capabilities",
      tech: ["React", "Express", "Socket.io", "PostgreSQL"],
      image:
        "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=800&h=500&fit=crop",
      github: "#",
      live: "#",
    },
    {
      title: "Project Management Tool",
      description:
        "Collaborative workspace with kanban boards, task tracking, and team analytics",
      tech: ["Next.js", "Node.js", "MongoDB", "Redis"],
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop",
      github: "#",
      live: "#",
    },
    {
      title: "Social Media Dashboard",
      description:
        "Analytics platform aggregating data from multiple social media APIs with visualization",
      tech: ["React", "Express", "MongoDB", "Chart.js"],
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
      github: "#",
      live: "#",
    },
  ];

  const skills = {
    frontend: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Redux",
      "HTML/CSS",
    ],
    backend: ["Node.js", "Express", "REST APIs", "GraphQL", "Socket.io", "JWT"],
    database: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Mongoose", "Prisma"],
    tools: ["Git", "Docker", "AWS", "Vercel", "Postman", "Jest"],
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 text-slate-900">
      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-white/40 backdrop-blur-sm shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              {"<Dev />"}
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {["home", "about", "projects", "skills", "contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`capitalize hover:text-emerald-600 transition-colors ${
                      activeSection === item
                        ? "text-emerald-600"
                        : "text-slate-700"
                    }`}
                  >
                    {item}
                  </button>
                )
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-sm">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {["home", "about", "projects", "skills", "contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="block w-full text-left px-3 py-2 capitalize hover:bg-emerald-50 rounded text-slate-700"
                  >
                    {item}
                  </button>
                )
              )}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-4"
      >
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
              Full Stack Developer
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-8">
              Building scalable web applications with the MERN stack & Next.js
            </p>
            <div className="flex gap-4 justify-center mb-12">
              <Link
                target="_blank"
                href={GITHUB_PROFILE_URL}
                className="p-3 bg-emerald-100 rounded-full hover:bg-emerald-200 transition-all hover:scale-110"
              >
                <Github className="w-6 h-6 text-emerald-700" />
              </Link>
              <Link
                target="_blank"
                href={LINKEDIN_PROFILE_URL}
                className="p-3 bg-emerald-100 rounded-full hover:bg-emerald-200 transition-all hover:scale-110"
              >
                <Linkedin className="w-6 h-6 text-emerald-700" />
              </Link>
              <Link
                href="mailto:amirsuliman01@gmail.com"
                className="p-3 bg-emerald-100 rounded-full hover:bg-emerald-200 transition-all hover:scale-110"
              >
                <Mail className="w-6 h-6 text-emerald-700" />
              </Link>
            </div>
            <button
              onClick={() => scrollToSection("projects")}
              className="px-8 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-emerald-500/50 transition-all hover:scale-105"
            >
              View My Work
            </button>
          </div>
          <div className="animate-bounce mt-16">
            <ChevronDown className="w-8 h-8 mx-auto text-emerald-600" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                I&apos;m a passionate full-stack developer specializing in the
                MERN stack and Next.js. With a strong foundation in both
                frontend and backend development, I create seamless, performant
                web applications that solve real-world problems.
              </p>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                My expertise spans across modern JavaScript frameworks, RESTful
                API design, database architecture, and cloud deployment.
                I&apos;m committed to writing clean, maintainable code and
                staying updated with the latest web technologies.
              </p>
              <div className="flex gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600">10+</div>
                  <div className="text-sm text-slate-500">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600">3+</div>
                  <div className="text-sm text-slate-500">Years Exp</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600">
                    100%
                  </div>
                  <div className="text-sm text-slate-500">Dedication</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg hover:bg-white transition-all shadow-sm">
                <Code className="w-12 h-12 text-emerald-600 mb-4" />
                <h3 className="font-semibold mb-2">Frontend Dev</h3>
                <p className="text-sm text-slate-600">
                  React, Next.js, TypeScript
                </p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg hover:bg-white transition-all shadow-sm">
                <Server className="w-12 h-12 text-teal-600 mb-4" />
                <h3 className="font-semibold mb-2">Backend Dev</h3>
                <p className="text-sm text-slate-600">Node.js, Express, APIs</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg hover:bg-white transition-all shadow-sm">
                <Database className="w-12 h-12 text-emerald-600 mb-4" />
                <h3 className="font-semibold mb-2">Database</h3>
                <p className="text-sm text-slate-600">MongoDB, PostgreSQL</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg hover:bg-white transition-all shadow-sm">
                <Palette className="w-12 h-12 text-teal-600 mb-4" />
                <h3 className="font-semibold mb-2">UI/UX</h3>
                <p className="text-sm text-slate-600">
                  Responsive, Modern Design
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 hover:shadow-xl shadow-md"
              >
                <div className="h-48 overflow-hidden">
                  <Image
                    width={800}
                    height={500}
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-slate-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      className="flex items-center gap-2 text-emerald-600 hover:text-emerald-700 transition-colors"
                    >
                      <Github className="w-5 h-5" />
                      Code
                    </a>
                    <a
                      href={project.live}
                      className="flex items-center gap-2 text-teal-600 hover:text-teal-700 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="min-h-screen flex items-center py-20 px-4"
      >
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-6 text-emerald-600">
                Frontend
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.frontend.map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-emerald-100 text-emerald-700 rounded-lg hover:bg-emerald-200 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-6 text-teal-600">Backend</h3>
              <div className="flex flex-wrap gap-3">
                {skills.backend.map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-teal-100 text-teal-700 rounded-lg hover:bg-teal-200 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-6 text-emerald-600">
                Database
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.database.map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-emerald-100 text-emerald-700 rounded-lg hover:bg-emerald-200 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-6 text-teal-600">
                Tools & Others
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.tools.map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-teal-100 text-teal-700 rounded-lg hover:bg-teal-200 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="min-h-screen flex items-center py-20 px-4"
      >
        <div className="max-w-4xl mx-auto text-center w-full">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
            Let&apos;s Work Together
          </h2>
          <p className="text-xl text-slate-600 mb-12">
            I&apos;m always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-lg max-w-2xl mx-auto shadow-md">
            <div className="space-y-6">
              <div className="flex items-center justify-center gap-4 p-4 bg-emerald-50 rounded-lg hover:bg-emerald-100 transition-all">
                <Mail className="w-6 h-6 text-emerald-600 ml-auto" />
                <Link
                  className="text-lg text-slate-700"
                  href="mailto:amirsuliman01@gmail.com"
                >
                  amirsuliman01@gmail.com{" "}
                </Link>
                <Copy
                  className="w-5 h-5 text-slate-500 cursor-pointer hover:text-slate-700 transition-colors ml-auto mr-0"
                  onClick={() => {
                    navigator.clipboard.writeText("amirsuliman01@gmail.com");
                    alert("Email copied to clipboard!");
                  }}
                />
              </div>
              <div className="flex gap-4 justify-center">
                <Link
                  target="_blank"
                  href={GITHUB_PROFILE_URL}
                  className="px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-emerald-500/50 transition-all hover:scale-105 flex items-center gap-2"
                >
                  <Github className="w-5 h-5" />
                  GitHub
                </Link>
                <Link
                  target="_blank"
                  href={LINKEDIN_PROFILE_URL}
                  className="px-6 py-3 bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-teal-500/50 transition-all hover:scale-105 flex items-center gap-2"
                >
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-100 border-t border-slate-200 py-8 px-4">
        <div className="max-w-7xl mx-auto text-center text-slate-600">
          <p>
            &copy; {new Date().getFullYear()} Full Stack Developer. Built By{" "}
            <b>Amir Suliman</b> With ❤️.
          </p>
        </div>
      </footer>
    </div>
  );
}
