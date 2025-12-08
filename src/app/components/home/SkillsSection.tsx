import { SKILLS } from "@/utils/constants";

const SkillsSection = () => {
  return (
    <section id="skills" className="min-h-screen flex items-center py-4 px-4">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
          Technical Skills
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-md dark:bg-slate-800/70 dark:border dark:border-slate-700/70">
            <h3 className="text-2xl font-bold mb-6 text-emerald-600">
              Frontend
            </h3>
            <div className="flex flex-wrap gap-3">
              {SKILLS.frontend.map((skill, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-emerald-100 text-emerald-700 rounded-lg hover:bg-emerald-200 transition-colors dark:bg-emerald-900/60 dark:text-emerald-200 dark:hover:bg-emerald-800/70"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-md dark:bg-slate-800/70 dark:border dark:border-slate-700/70">
            <h3 className="text-2xl font-bold mb-6 text-teal-600">Backend</h3>
            <div className="flex flex-wrap gap-3">
              {SKILLS.backend.map((skill, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-teal-100 text-teal-700 rounded-lg hover:bg-teal-200 transition-colors dark:bg-teal-900/60 dark:text-teal-200 dark:hover:bg-teal-800/70"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-md dark:bg-slate-800/70 dark:border dark:border-slate-700/70">
            <h3 className="text-2xl font-bold mb-6 text-emerald-600">
              Database
            </h3>
            <div className="flex flex-wrap gap-3">
              {SKILLS.database.map((skill, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-emerald-100 text-emerald-700 rounded-lg hover:bg-emerald-200 transition-colors dark:bg-emerald-900/60 dark:text-emerald-200 dark:hover:bg-emerald-800/70"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-md dark:bg-slate-800/70 dark:border dark:border-slate-700/70">
            <h3 className="text-2xl font-bold mb-6 text-teal-600">
              Tools & Others
            </h3>
            <div className="flex flex-wrap gap-3">
              {SKILLS.tools.map((skill, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-teal-100 text-teal-700 rounded-lg hover:bg-teal-200 transition-colors dark:bg-teal-900/60 dark:text-teal-200 dark:hover:bg-teal-800/70"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
