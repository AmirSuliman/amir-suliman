"use client";
import { GITHUB_PROFILE_URL, LINKEDIN_PROFILE_URL } from "@/utils/constants";
import { Copy, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import Button from "../common/Button";
import { WhatsAppBrandIcon } from "../common/WhatsappBrandIcon";
import { useToast } from "../common/Toast"; // added import

const ContactSection = () => {
  const toast = useToast();

  return (
    <section id="contact" className="min-h-screen flex items-center py-4 px-4">
      <div className="max-w-4xl mx-auto text-center w-full">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
          Let&apos;s Work Together
        </h2>
        <p className="text-xl text-slate-600 mb-12 dark:text-slate-200">
          I&apos;m always open to discussing new projects, creative ideas, or
          opportunities to be part of your vision.
        </p>
        <div className="bg-white/80 backdrop-blur-sm p-8 rounded-lg max-w-2xl mx-auto shadow-md dark:bg-slate-800/70 dark:border dark:border-slate-700/70">
          <div className="space-y-6">
            <div className="flex items-center justify-center gap-4 p-4 bg-emerald-50 rounded-lg hover:bg-emerald-100 transition-all dark:bg-emerald-900/40 dark:hover:bg-emerald-800/60">
              {/* <MessageCircleCode className="w-6 h-6 text-emerald-600 ml-auto" /> */}
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
            </div>
            <div className="flex items-center justify-center gap-4 p-4 bg-emerald-50 rounded-lg hover:bg-emerald-100 transition-all dark:bg-emerald-900/40 dark:hover:bg-emerald-800/60">
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
            </div>

            <div className="flex gap-4 justify-center">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
