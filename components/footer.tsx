import Link from "next/link";
import React from "react";
import { ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-slate-950 text-white overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 pointer-events-none" />

      {/* Decorative ambient glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-orange-400/3 rounded-full blur-[100px] pointer-events-none" />

      {/* Main Footer Content */}
      <div className="relative container mx-auto max-w-5xl px-4 py-14">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-12">
          {/* Brand Column */}
          <div className="flex-1 max-w-xs">
            <Link href="/" className="inline-block mb-6 group">
              <img
                src="/logo.png"
                className="w-20 h-12 object-contain brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity"
                alt="NOM"
              />
            </Link>
            <p className="text-slate-400 mb-6 font-light leading-relaxed text-sm">
              AI powered meal recommendation engine for food delivery platforms
            </p>
            <Link
              href="https://www.linkedin.com/company/nom-app/?viewAsMember=true"
              target="_blank"
              className="inline-block group"
            >
              <div className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center hover:border-orange-500/30 hover:bg-orange-500/10 transition-all duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-slate-400 group-hover:text-orange-400 transition-colors"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </div>
            </Link>
          </div>

          {/* Product Links */}
          <div className="flex-1">
            <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500 mb-5">
              Product
            </h4>
            <ul className="space-y-3">
              {[
                { href: "/how-it-works", label: "How it Works" },
                { href: "/features", label: "Features" },
                { href: "/about", label: "About" },
                { href: "/contact", label: "Join Waitlist" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-orange-400 transition-colors duration-300 font-light text-sm inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="flex-1">
            <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500 mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              {[
                { href: "/contact", label: "Contact Us" },
                { href: "/privacy", label: "Privacy Policy" },
                { href: "/terms", label: "Terms of Service" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-orange-400 transition-colors duration-300 font-light text-sm inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-white/5">
        <div className="container mx-auto max-w-5xl px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 font-light text-xs">
            © {new Date().getFullYear()} Nom Technologies Sdn Bhd. All rights
            reserved.
          </p>
          <p className="text-slate-500 font-light text-xs flex items-center gap-1.5">
            Designed for better living
            <span className="inline-block w-1 h-1 bg-orange-500 rounded-full" />
            Powered by AI
          </p>
        </div>
      </div>
    </footer>
  );
}
