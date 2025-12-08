import { PROJECTS } from "@/utils/constants";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ProjectsSection = () => {
  return (
    <main
      id="projects"
      className="min-h-screen py-20 px-[5%] max-w-7xl mx-auto"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
        Featured Projects
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {PROJECTS.map((project, index) => (
          <section
            key={index}
            className="bg-white/80 backdrop-blur-sm rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 hover:shadow-xl shadow-md dark:bg-slate-800/70 dark:border dark:border-slate-700/70 dark:hover:shadow-emerald-900/40"
          >
            <header className="h-50 overflow-hidden">
              <Image
                width={800}
                height={500}
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover object-top"
              />
            </header>
            <article className="p-6">
              <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-slate-100">
                {project.title}
              </h3>
              <p className="text-slate-600 mb-4 dark:text-slate-300">
                {project.description}
              </p>
              <p className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm dark:bg-emerald-900/60 dark:text-emerald-200"
                  >
                    {tech}
                  </span>
                ))}
              </p>
              <nav className="flex gap-4">
                <Link
                  target="_blank"
                  href={project.github}
                  className="flex items-center gap-2 text-emerald-600 hover:text-emerald-700 transition-colors dark:text-emerald-300 dark:hover:text-emerald-200"
                >
                  <Github className="w-5 h-5" />
                  Code
                </Link>
                <Link
                  target="_blank"
                  href={project.live}
                  className="flex items-center gap-2 text-teal-600 hover:text-teal-700 transition-colors dark:text-teal-300 dark:hover:text-teal-200"
                >
                  <ExternalLink className="w-5 h-5" />
                  Live Demo
                </Link>
              </nav>
            </article>
          </section>
        ))}
      </div>
    </main>
  );
};

export default ProjectsSection;
