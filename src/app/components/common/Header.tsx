import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

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
        scrolled ? "bg-white/40 backdrop-blur-sm shadow-lg" : "bg-transparent"
      }`}
    >
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
            {"<Dev />"}
          </div>

          {/* Profile image */}
          <Image
            src={"/images/amir-suliman-profile.jpg"}
            width={400}
            height={200}
            alt="Amir's profile picture"
            className="size-14 rounded-full object-cover mr-auto ml-4 hover:scale-110 transition-transform duration-300 ease-in-out"
          />

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8 list-none">
            {["home", "about", "projects", "skills", "contact"].map((item) => (
              <li key={item} className="">
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize hover:text-emerald-600 transition-colors ${
                    activeSection === item
                      ? "text-emerald-600 font-semibold"
                      : "text-slate-700"
                  }`}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </section>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <section className="md:hidden bg-white/95 backdrop-blur-sm">
          <ul className="px-2 pt-2 pb-3 space-y-1 list-none">
            {["home", "about", "projects", "skills", "contact"].map((item) => (
              <li key={item} className="">
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left px-3 py-2 capitalize hover:bg-emerald-50 rounded text-slate-700"
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </section>
      )}
    </nav>
  );
};

export default Header;
