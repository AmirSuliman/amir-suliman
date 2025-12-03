import { Code, Database, Palette, Server } from "lucide-react";

const AboutSection = () => {
  const skillsCards = [
    {
      name: "Frontend Dev",
      icon: Code,
      desc: "React, Next.js, TypeScript",
    },
    {
      name: "Backend Dev",
      icon: Server,
      desc: "Node.js, Express, APIs",
    },
    {
      name: "Database",
      icon: Database,
      desc: "MongoDB, PostgreSQL",
    },
    {
      name: "UI/UX Design",
      icon: Palette,
      desc: "Responsive, Modern Design - Figma",
    },
  ];

  const stats = [
    { heading: "Projects", value: "6+" },
    { heading: "Years Exp", value: "2+" },
    { heading: "Dedication", value: "100%" },
  ];

  return (
    <section id="about" className="min-h-screen flex items-center py-4 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              I&apos;m a passionate full-stack developer specializing in the
              MERN stack and Next.js. With a strong foundation in both frontend
              and backend development, I create seamless, performant web
              applications that solve real-world problems.
            </p>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              My expertise spans across modern JavaScript frameworks, RESTful
              API design, database architecture, and cloud deployment. I&apos;m
              committed to writing clean, maintainable code and staying updated
              with the latest web technologies.
            </p>
            <div className="flex gap-4">
              {stats.map((item, index) => (
                <article key={index} className="text-center">
                  <h3 className="text-3xl font-bold text-emerald-600">
                    {item.value}
                  </h3>
                  <p className="text-sm text-slate-500">{item.heading}</p>
                </article>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {
              /* Skills Cards */
              skillsCards.map(({ name, icon: Icon, desc }, index) => (
                <article
                  key={index}
                  className="bg-white/80 backdrop-blur-sm p-6 rounded-lg hover:bg-white transition-all shadow-sm"
                >
                  <Icon className="w-12 h-12 text-emerald-600 mb-4" />
                  <h3 className="font-semibold mb-2">{name}</h3>
                  <p className="text-sm text-slate-600">{desc}</p>
                </article>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
