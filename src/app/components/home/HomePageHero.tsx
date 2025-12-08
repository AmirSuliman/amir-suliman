import { GITHUB_PROFILE_URL, LINKEDIN_PROFILE_URL } from "@/utils/constants";
import { ChevronDown, Eye, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import Button from "../common/Button";

const HomePageHero = ({
  scrollToSection,
}: {
  scrollToSection: (sectionId: string) => void;
}) => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4"
    >
      <div className="text-center max-w-4xl mx-auto">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
            Full Stack Developer
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-8 dark:text-slate-200">
            Building scalable web applications with the MERN stack & Next.js
          </p>
          <div className="flex gap-4 justify-center mb-12">
            <Link
              target="_blank"
              href={GITHUB_PROFILE_URL}
              className="p-3 bg-emerald-100 rounded-full hover:bg-emerald-200 transition-all hover:scale-110 dark:bg-emerald-900/50 dark:hover:bg-emerald-800/70"
            >
              <Github className="w-6 h-6 text-emerald-700 dark:text-emerald-200" />
            </Link>
            <Link
              target="_blank"
              href={LINKEDIN_PROFILE_URL}
              className="p-3 bg-emerald-100 rounded-full hover:bg-emerald-200 transition-all hover:scale-110 dark:bg-emerald-900/50 dark:hover:bg-emerald-800/70"
            >
              <Linkedin className="w-6 h-6 text-emerald-700 dark:text-emerald-200" />
            </Link>
            <Link
              href="mailto:amirsuliman01@gmail.com"
              className="p-3 bg-emerald-100 rounded-full hover:bg-emerald-200 transition-all hover:scale-110 dark:bg-emerald-900/50 dark:hover:bg-emerald-800/70"
            >
              <Mail className="w-6 h-6 text-emerald-700 dark:text-emerald-200" />
            </Link>
          </div>
          <Button className="mx-auto" props={{ onClick: () => scrollToSection("projects") }}>
            <Eye className="w-5 h-5" />
            View My Work
          </Button>
        </div>
        <div className="animate-bounce mt-16">
          <ChevronDown className="w-8 h-8 mx-auto text-emerald-600 dark:text-emerald-300" />
        </div>
      </div>
    </section>
  );
};

export default HomePageHero;
