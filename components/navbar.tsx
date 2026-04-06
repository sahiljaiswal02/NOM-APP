"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowRight } from "lucide-react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const handleMenuToggle = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/how-it-works", label: "How it Works" },
    { href: "/features", label: "Features" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  const isActiveLink = (href: string) => pathname === href;

  return (
    <>
      <header
        className={`sticky top-0 z-[100] transition-all duration-500 ${
          isScrolled
            ? "bg-white/70 backdrop-blur-xl saturate-150 shadow-[0_1px_3px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.03)] border-b border-white/50"
            : "bg-white/95 backdrop-blur-md border-b border-transparent"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-16 md:h-[72px]">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center space-x-2 relative z-10 group"
            >
              <img
                src="/logo.png"
                className="w-20 h-12 object-contain transition-transform duration-300 group-hover:scale-105"
                alt="NOM"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1 bg-slate-50/80 rounded-full px-2 py-1.5 border border-slate-100/80">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 text-[13px] font-medium transition-all duration-300 rounded-full ${
                    isActiveLink(link.href)
                      ? "text-orange-600 bg-white shadow-sm"
                      : "text-slate-500 hover:text-slate-900 hover:bg-white/60"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA Button */}
            <div className="hidden md:flex items-center space-x-4">
              <Link href="/contact">
                <Button
                  size="sm"
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-full px-6 py-2.5 font-medium shadow-lg shadow-orange-500/20 hover:shadow-orange-500/30 transition-all duration-300 hover:scale-[1.02] group"
                >
                  Join Waitlist
                  <ArrowRight className="ml-1.5 w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-slate-700 hover:bg-slate-100 rounded-full w-10 h-10 relative z-10"
              onClick={handleMenuToggle}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              <span className="sr-only">
                {isMenuOpen ? "Close menu" : "Open menu"}
              </span>
              {isMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      <div
        className={`fixed inset-0 bg-black/20 backdrop-blur-sm z-[90] md:hidden transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMenu}
      />

      {/* Mobile Navigation Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-sm bg-white/95 backdrop-blur-xl z-[95] md:hidden transform transition-transform duration-300 ease-out shadow-2xl ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Mobile Menu Header */}
        <div className="flex items-center justify-between p-4 border-b border-slate-100">
          <Link href="/" onClick={closeMenu}>
            <img
              src="/logo.png"
              className="w-16 h-10 object-contain"
              alt="NOM"
            />
          </Link>
          <Button
            variant="ghost"
            size="icon"
            className="text-slate-700 hover:bg-slate-100 rounded-full w-10 h-10"
            onClick={closeMenu}
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        {/* Mobile Menu Content */}
        <div className="flex flex-col h-[calc(100%-80px)]">
          <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center justify-between px-4 py-4 rounded-2xl transition-all duration-200 ${
                  isActiveLink(link.href)
                    ? "bg-orange-50 text-orange-600"
                    : "text-slate-700 hover:bg-slate-50"
                }`}
                onClick={closeMenu}
                style={{
                  animationDelay: `${index * 50}ms`,
                }}
              >
                <span className="font-medium">{link.label}</span>
                {isActiveLink(link.href) && (
                  <span className="w-2 h-2 bg-orange-500 rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Footer */}
          <div className="p-4 border-t border-slate-100 space-y-3">
            <Link href="/contact" onClick={closeMenu}>
              <Button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full py-6 font-medium group shadow-lg shadow-orange-500/20">
                Join Waitlist
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Button>
            </Link>
            <div className="flex items-center justify-center gap-2 pt-2">
              <div className="w-1.5 h-1.5 bg-orange-300 rounded-full" />
              <div className="w-1.5 h-1.5 bg-slate-300 rounded-full" />
              <div className="w-1.5 h-1.5 bg-orange-300 rounded-full" />
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-20 right-4 w-20 h-20 border-2 border-orange-100 rounded-full opacity-50" />
        <div className="absolute top-32 right-8 w-3 h-3 bg-orange-200 rounded-full opacity-60" />
      </div>
    </>
  );
}
