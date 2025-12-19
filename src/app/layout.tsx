import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { ToastProvider } from "./components/common/Toast";
import ThemeProvider from "./components/ThemeProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Amir Suliman - Full-Stack Developer",
  description:
    "Portfolio of Amir Suliman, a skilled full-stack developer specializing in MERN stack and Next.js. Explore projects, skills, and contact information.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="transition-colors duration-300">
        <ThemeProvider>
          <ToastProvider>{children}</ToastProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
