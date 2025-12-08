"use client";
import { GITHUB_PROFILE_URL, LINKEDIN_PROFILE_URL } from "@/utils/constants";
import {
  ArrowUpRight,
  Copy,
  Github,
  Linkedin,
  Mail,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import Button from "../common/Button";
import { WhatsAppBrandIcon } from "../common/WhatsappBrandIcon";
import { useToast } from "../common/Toast"; // added import

const ContactSection = () => {
  const toast = useToast();

  return (
    <main id="contact" className="min-h-screen flex items-center py-4 px-4">
      <div className="max-w-4xl mx-auto text-center w-full">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
          Let&apos;s Work Together
        </h2>
        <p className="text-xl text-slate-600 mb-12 dark:text-slate-200">
          I&apos;m always open to discussing new projects, creative ideas, or
          opportunities to be part of your vision.
        </p>
        <section className="bg-white/80 backdrop-blur-sm p-8 rounded-lg max-w-3xl mx-auto shadow-md dark:bg-slate-800/70 dark:border dark:border-slate-700/70 space-y-6">
          <article className="relative overflow-hidden rounded-xl border border-emerald-100 bg-gradient-to-r from-emerald-500/70 via-emerald-600/70 to-teal-600/70 p-[1px] shadow-lg dark:border-emerald-900/70">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 rounded-[10px] bg-white/95 p-5 dark:bg-slate-900/80">
              <div className="flex items-center gap-3 text-left">
                <div className="p-3 rounded-full bg-emerald-50 text-emerald-700 shadow-inner dark:bg-emerald-950/50 dark:text-emerald-200">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div className="max-w-sm">
                  <p className="text-sm uppercase tracking-[0.08em] font-semibold text-emerald-700 dark:text-emerald-200">
                    Fiverr engagements
                  </p>
                  <p className="text-base md:text-lg font-medium text-slate-700 dark:text-slate-100">
                    Hire me for quick-turn design and frontend help on Fiverr.
                  </p>
                </div>
              </div>
              <Link
                target="_blank"
                href="https://www.fiverr.com/s/8z8b1aq"
                className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-emerald-600 text-white font-semibold shadow-lg shadow-emerald-500/40 transition-all hover:-translate-y-0.5 hover:shadow-emerald-500/60 dark:bg-emerald-500"
              >
                View Fiverr Gig
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </article>
          <article className="flex items-center justify-center gap-4 p-4 bg-emerald-50 rounded-lg hover:bg-emerald-100 transition-all dark:bg-emerald-900/40 dark:hover:bg-emerald-800/60">
            <WhatsAppBrandIcon className="w-6 h-6 text-emerald-600 ml-auto dark:text-emerald-300" />
            <Link
              className="text-sm md:text-lg text-slate-700 dark:text-slate-100"
              href="https://wa.me/923478663296"
            >
              +923478663296{" "}
            </Link>
            <Copy
              className="w-5 h-5 text-slate-500 cursor-pointer hover:text-slate-700 transition-colors ml-auto mr-0 dark:text-slate-300 dark:hover:text-slate-100"
              onClick={() => {
                navigator.clipboard.writeText("+923478663296");
                toast.show("Phone number copied to clipboard");
              }}
            />
          </article>
          <article className="flex items-center justify-center gap-4 p-4 bg-emerald-50 rounded-lg hover:bg-emerald-100 transition-all dark:bg-emerald-900/40 dark:hover:bg-emerald-800/60">
            <Mail className="w-6 h-6 text-emerald-600 ml-auto dark:text-emerald-300" />
            <Link
              className="text-sm md:text-lg text-slate-700 dark:text-slate-100"
              href="mailto:amirsuliman01@gmail.com"
            >
              amirsuliman01@gmail.com{" "}
            </Link>
            <Copy
              className="w-5 h-5 text-slate-500 cursor-pointer hover:text-slate-700 transition-colors ml-auto mr-0 dark:text-slate-300 dark:hover:text-slate-100"
              onClick={() => {
                navigator.clipboard.writeText("amirsuliman01@gmail.com");
                toast.show("Email copied to clipboard");
              }}
            />
          </article>

          <footer className="flex gap-4 justify-center">
            <Link target="_blank" href={GITHUB_PROFILE_URL}>
              <Button>
                <Github className="w-5 h-5" />
                GitHub
              </Button>
            </Link>
            <Link target="_blank" href={LINKEDIN_PROFILE_URL}>
              <Button>
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </Button>
            </Link>
          </footer>
        </section>
      </div>
    </main>
  );
};

export default ContactSection;
