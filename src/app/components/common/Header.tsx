"use client";

import { Menu, Moon, Sun, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useTheme } from "../ThemeProvider";

const Header = ({
  isMenuOpen,
  activeSection,
  setIsMenuOpen,
  scrollToSection,
}: {
  isMenuOpen: boolean;
  activeSection: string;
  setIsMenuOpen: (open: boolean) => void;
  scrollToSection: (section: string) => void;
}) => {
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/40 backdrop-blur-sm shadow-lg dark:bg-slate-950/70 dark:shadow-emerald-900/40"
          : "bg-transparent"
      }`}
    >
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
          {"<Dev />"}
        </h1>

        {/* Profile image */}
        <Image
          src={"/images/amir-suliman-profile.jpg"}
          width={400}
          height={200}
          alt="Amir's profile picture"
          className="size-14 rounded-full object-cover mr-auto ml-4 hover:scale-110 transition-transform duration-300 ease-in-out"
        />

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 list-none items-center">
          {["home", "about", "projects", "skills", "contact"].map((item) => (
            <li key={item} className="">
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`capitalize hover:text-emerald-600 transition-colors dark:hover:text-emerald-300 ${
                  activeSection === item
                    ? "text-emerald-600 font-semibold dark:text-emerald-300"
                    : "text-slate-700 dark:text-slate-200"
                }`}
              >
                {item}
              </button>
            </li>
          ))}
          <li>
            <button
              className="flex items-center justify-center size-10 rounded-full border border-slate-200/80 bg-white/80 hover:bg-slate-100 transition-colors dark:border-slate-700 dark:bg-slate-900/70 dark:hover:bg-slate-800"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5 text-amber-400" />
              ) : (
                <Moon className="h-5 w-5 text-slate-700" />
              )}
            </button>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </section>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <section className="md:hidden bg-white/95 backdrop-blur-sm dark:bg-slate-900/90">
          <ul className="px-2 pt-2 pb-3 space-y-1 list-none">
            {["home", "about", "projects", "skills", "contact"].map((item) => (
              <li key={item} className="">
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left px-3 py-2 capitalize hover:bg-emerald-50 rounded text-slate-700 dark:text-slate-100 dark:hover:bg-emerald-900/50"
                >
                  {item}
                </button>
              </li>
            ))}
            <li>
              <button
                className="flex w-full items-center justify-center gap-2 rounded-lg border border-slate-200/80 bg-white/80 px-3 py-2 text-sm font-semibold hover:bg-slate-100 transition-colors dark:border-slate-700 dark:bg-slate-800 dark:hover:bg-slate-700 "
                onClick={toggleTheme}
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <>
                    <Sun className="h-4 w-4 text-amber-400" />
                    Light Mode
                  </>
                ) : (
                  <>
                    <Moon className="h-4 w-4 text-slate-700" />
                    Dark Mode
                  </>
                )}
              </button>
            </li>
          </ul>
        </section>
      )}
    </nav>
  );
};

export default Header;
