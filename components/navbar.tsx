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

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
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

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

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
        className={`bg-white/95 backdrop-blur-md sticky top-0 z-[100] transition-all duration-300 ${
          isScrolled
            ? "shadow-sm border-b border-slate-100"
            : "border-b border-transparent"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center space-x-2 relative z-10"
            >
              <img
                src="/logo.png"
                className="w-20 h-12 object-contain"
                alt="NOM"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors rounded-full ${
                    isActiveLink(link.href)
                      ? "text-orange-600 bg-orange-50"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  {link.label}
                  {isActiveLink(link.href) && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-orange-500 rounded-full" />
                  )}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA Button */}
            <div className="hidden md:flex items-center space-x-4">
              <Button
                size="sm"
                className="bg-slate-900 hover:bg-slate-800 text-white rounded-full px-5 py-2 font-medium group"
              >
                Coming Soon
                {/* <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 transition-transform" /> */}
              </Button>
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
        className={`fixed top-0 right-0 h-full w-full max-w-sm bg-white z-[95] md:hidden transform transition-transform duration-300 ease-out shadow-2xl ${
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
          {/* Navigation Links */}
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
            <Button
              className="w-full bg-slate-900 hover:bg-slate-800 text-white rounded-full py-6 font-medium group"
              onClick={closeMenu}
            >
              Coming Soon
              {/* <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 transition-transform" /> */}
            </Button>
            {/* Decorative element */}
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
