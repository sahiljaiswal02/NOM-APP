"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Brain, Menu, X, User, LogOut } from "lucide-react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="border-b-4 border-orange-200 bg-white/95 backdrop-blur-sm sticky top-0 z-[100]">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <img src="/logo.png" className="w-20 h-12 bg-cover" alt="NOM" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="/how-it-works"
              className="text-slate-600 hover:text-orange-500 transition-colors font-medium"
            >
              How it Works
            </Link>
            <Link
              href="/features"
              className="text-slate-600 hover:text-orange-500 transition-colors font-medium"
            >
              Features
            </Link>

            <Link
              href="/about"
              className="text-slate-600 hover:text-orange-500 transition-colors font-medium"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-slate-600 hover:text-orange-500 transition-colors font-medium"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-slate-700 hover:bg-orange-100 rounded-full"
            onClick={handleMenuToggle}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t-2 border-orange-200 relative z-[100]">
            <nav className="container mx-auto px-4 py-4 space-y-4">
              <Link
                href="/how-it-works"
                className="block text-slate-600 hover:text-orange-500 transition-colors font-medium py-2"
                onClick={closeMenu}
              >
                How it Works
              </Link>
              <Link
                href="/features"
                className="block text-slate-600 hover:text-orange-500 transition-colors font-medium py-2"
                onClick={closeMenu}
              >
                Features
              </Link>

              <Link
                href="/about"
                className="block text-slate-600 hover:text-orange-500 transition-colors font-medium py-2"
                onClick={closeMenu}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="block text-slate-600 hover:text-orange-500 transition-colors font-medium py-2"
                onClick={closeMenu}
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
