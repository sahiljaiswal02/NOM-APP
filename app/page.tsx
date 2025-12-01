import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  MapPin,
  Clock,
  Brain,
  CheckCircle,
  Sparkles,
} from "lucide-react";
import { Navbar } from "@/components/navbar";
import Link from "next/link";
import type { JSX } from "react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Navbar />

      {/* SVG Doodle Definitions */}
      <svg className="hidden">
        <defs>
          {/* Squiggly Line */}
          <pattern
            id="squiggle"
            patternUnits="userSpaceOnUse"
            width="40"
            height="10"
          >
            <path
              d="M0,5 Q10,0 20,5 T40,5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            />
          </pattern>
        </defs>
      </svg>

      {/* Hero Section */}
      <section className="py-24 px-4 relative">
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 border-2 border-orange-200 rounded-full opacity-60"></div>
        <div className="absolute top-40 right-16 w-3 h-3 bg-orange-400 rounded-full"></div>
        <div className="absolute top-32 right-24 w-2 h-2 bg-slate-300 rounded-full"></div>
        <div className="absolute top-48 right-20 w-1.5 h-1.5 bg-orange-300 rounded-full"></div>

        {/* Hand-drawn style circle */}
        <svg
          className="absolute top-16 right-1/4 w-16 h-16 text-orange-200 opacity-70"
          viewBox="0 0 100 100"
        >
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="6 4"
          />
        </svg>

        {/* Squiggly line decoration */}
        <svg
          className="absolute bottom-20 left-20 w-32 h-8 text-slate-200"
          viewBox="0 0 120 20"
        >
          <path
            d="M0,10 Q15,0 30,10 T60,10 T90,10 T120,10"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>

        {/* Floating dots pattern */}
        <div className="absolute bottom-40 right-10 grid grid-cols-3 gap-2 opacity-40">
          {[...Array(9)].map((_, i) => (
            <div
              key={i}
              className={`w-1.5 h-1.5 rounded-full ${
                i % 2 === 0 ? "bg-orange-400" : "bg-slate-300"
              }`}
            ></div>
          ))}
        </div>

        <div className="container mx-auto text-center max-w-4xl relative z-10">
          <Badge className="mb-8 bg-orange-50 text-orange-600 border border-orange-200 rounded-full px-5 py-2 font-medium">
            <Sparkles className="w-4 h-4 mr-2" />
            AI-Powered Meal Curation
          </Badge>

          <h1 className="text-5xl md:text-6xl font-semibold mb-6 leading-tight text-slate-900 tracking-tight">
            Your Perfect Meal,{" "}
            <span className="relative inline-block">
              <span className="text-orange-500">One Prompt Away</span>
              {/* Underline doodle */}
              <svg
                className="absolute -bottom-2 left-0 w-full h-3 text-orange-300"
                viewBox="0 0 200 12"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,8 Q50,0 100,8 T200,8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-500 mb-12 leading-relaxed max-w-2xl mx-auto font-light">
            Describe what you want to eat, and our AI crafts the perfect meal
            from local restaurant menus—delivered to your door in harmony.
          </p>

          {/* Interactive Example */}
          <div className="bg-slate-50 rounded-3xl p-8 mb-12 max-w-2xl mx-auto border border-slate-200 relative">
            {/* Corner doodles */}
            <svg
              className="absolute -top-3 -left-3 w-8 h-8 text-orange-400"
              viewBox="0 0 30 30"
            >
              <path
                d="M5,15 L15,5 M5,25 L25,5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <svg
              className="absolute -bottom-3 -right-3 w-8 h-8 text-slate-300"
              viewBox="0 0 30 30"
            >
              <circle
                cx="15"
                cy="15"
                r="8"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
              <circle cx="15" cy="15" r="3" fill="currentColor" />
            </svg>

            <div className="flex items-center mb-6">
              <div className="flex space-x-1.5">
                <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                <div className="w-3 h-3 bg-orange-300 rounded-full"></div>
                <div className="w-3 h-3 bg-orange-200 rounded-full"></div>
              </div>
              <span className="ml-4 text-slate-400 text-sm font-medium tracking-wide">
                NOM AI Terminal
              </span>
            </div>
            <div className="text-left">
              <p className="text-slate-400 text-sm mb-3">Example prompt:</p>
              <div className="bg-white rounded-2xl p-4 mb-4 border border-slate-200 shadow-sm">
                <p className="text-base font-mono text-slate-700">
                  "Alkaline meal under 2k calories with lean protein and
                  Mediterranean flavors"
                </p>
              </div>
              <div className="flex items-center text-orange-600 bg-orange-50 rounded-2xl p-4 border border-orange-100">
                <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0" />
                <span className="text-sm font-medium">
                  Analyzing 200+ restaurants • Match found • Delivery
                  coordinated
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-slate-900 text-white hover:bg-slate-800 text-base px-8 py-6 rounded-full font-medium group"
            >
              Coming Soon
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white text-slate-700 border-2 border-slate-200 hover:bg-slate-50 hover:border-slate-300 text-base px-8 py-6 rounded-full font-medium"
            >
              Watch Demo
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-4 bg-gradient-to-b from-slate-50 to-white relative">
        {/* Decorative elements */}
        <svg
          className="absolute top-10 left-10 w-24 h-24 text-orange-100"
          viewBox="0 0 100 100"
        >
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="8 6"
          />
        </svg>

        <svg
          className="absolute bottom-20 right-16 w-20 h-20 text-slate-200"
          viewBox="0 0 80 80"
        >
          <rect
            x="10"
            y="10"
            width="60"
            height="60"
            rx="12"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="5 5"
          />
        </svg>

        {/* Connecting line between steps */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3 h-0.5 bg-gradient-to-r from-orange-200 via-slate-200 to-orange-200 hidden md:block"
          style={{ top: "45%" }}
        ></div>

        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="text-center mb-20">
            <div className="inline-block relative">
              <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-slate-900 tracking-tight">
                How NOM Works
              </h2>
              {/* Decorative star */}
              <svg
                className="absolute -right-8 -top-4 w-6 h-6 text-orange-400"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12,0 L14,10 L24,12 L14,14 L12,24 L10,14 L0,12 L10,10 Z" />
              </svg>
            </div>
            <p className="text-lg text-slate-500 font-light">
              Three simple steps to your perfect meal
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {/* Step 1 */}
            <div className="text-center relative">
              <div className="relative inline-block mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg shadow-orange-200">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                {/* Orbiting dot */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-slate-800 rounded-full border-4 border-white"></div>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                Describe Your Craving
              </h3>
              <p className="text-slate-500 font-light leading-relaxed">
                Tell our AI exactly what you want using natural language—dietary
                needs, calories, cuisine, mood, anything.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center relative">
              <div className="relative inline-block mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl flex items-center justify-center shadow-lg shadow-slate-200">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                {/* Decorative ring */}
                <div className="absolute -inset-3 border-2 border-dashed border-slate-200 rounded-3xl"></div>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                AI Crafts Your Meal
              </h3>
              <p className="text-slate-500 font-light leading-relaxed">
                Our AI analyzes hundreds of local menus and nutritional data to
                create your perfect meal combination.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center relative">
              <div className="relative inline-block mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg shadow-orange-200">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                {/* Sparkle decoration */}
                <svg
                  className="absolute -bottom-2 -left-4 w-6 h-6 text-orange-300"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12,0 L13,9 L24,12 L13,15 L12,24 L11,15 L0,12 L11,9 Z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                Perfectly Delivered
              </h3>
              <p className="text-slate-500 font-light leading-relaxed">
                We coordinate with restaurants to prepare and deliver everything
                together, perfectly timed.
              </p>
            </div>
          </div>

          <div className="text-center mt-16">
            <Link href="/how-it-works">
              <Button
                variant="outline"
                className="bg-white text-slate-700 border-2 border-slate-200 hover:bg-slate-50 hover:border-orange-300 rounded-full px-8 py-4 font-medium group"
              >
                Learn More
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-4 relative">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-1/4 w-2 h-2 bg-orange-300 rounded-full"></div>
          <div className="absolute top-40 left-1/3 w-1 h-1 bg-slate-400 rounded-full"></div>
          <div className="absolute top-32 right-1/4 w-2 h-2 bg-slate-300 rounded-full"></div>
          <div className="absolute bottom-40 right-1/3 w-1.5 h-1.5 bg-orange-400 rounded-full"></div>
          <div className="absolute bottom-20 left-1/4 w-1 h-1 bg-orange-300 rounded-full"></div>
        </div>

        {/* Squiggly decoration */}
        <svg
          className="absolute top-10 right-10 w-24 h-12 text-orange-200"
          viewBox="0 0 100 40"
        >
          <path
            d="M0,20 Q25,0 50,20 T100,20"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>

        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-4">
              {/* Small decorative element */}
              <svg
                className="w-5 h-5 text-orange-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <circle cx="10" cy="10" r="8" />
              </svg>
              <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight">
                Powered by Advanced AI
              </h2>
              <svg
                className="w-5 h-5 text-slate-300"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <circle cx="10" cy="10" r="8" />
              </svg>
            </div>
            <p className="text-lg text-slate-500 font-light">
              Features that make meal planning effortless
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white border-2 border-slate-100 shadow-none hover:shadow-xl hover:border-orange-200 transition-all duration-300 rounded-3xl overflow-hidden group">
              <CardHeader className="pb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-100 to-orange-50 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Brain className="w-7 h-7 text-orange-500" />
                </div>
                <CardTitle className="text-slate-900 font-semibold text-xl">
                  Smart Meal Composition
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-500 font-light leading-relaxed text-base">
                  AI understands complex dietary requirements and creates
                  balanced meals that meet your exact specifications.
                </CardDescription>
              </CardContent>
              {/* Decorative corner */}
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-orange-200 rounded-tr-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </Card>

            <Card className="bg-white border-2 border-slate-100 shadow-none hover:shadow-xl hover:border-orange-200 transition-all duration-300 rounded-3xl overflow-hidden group relative">
              <CardHeader className="pb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-slate-100 to-slate-50 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <MapPin className="w-7 h-7 text-slate-600" />
                </div>
                <CardTitle className="text-slate-900 font-semibold text-xl">
                  Local Restaurant Network
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-500 font-light leading-relaxed text-base">
                  Access to 200+ local restaurants with real-time menu data,
                  availability, and quality ratings.
                </CardDescription>
              </CardContent>
              {/* Decorative corner */}
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-slate-200 rounded-tr-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </Card>

            <Card className="bg-white border-2 border-slate-100 shadow-none hover:shadow-xl hover:border-orange-200 transition-all duration-300 rounded-3xl overflow-hidden group relative">
              <CardHeader className="pb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-100 to-orange-50 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Clock className="w-7 h-7 text-orange-500" />
                </div>
                <CardTitle className="text-slate-900 font-semibold text-xl">
                  Synchronized Delivery
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-500 font-light leading-relaxed text-base">
                  Coordinated pickup and delivery from multiple restaurants so
                  everything arrives fresh.
                </CardDescription>
              </CardContent>
              {/* Decorative corner */}
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-orange-200 rounded-tr-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </Card>
          </div>

          <div className="text-center mt-16">
            <Link href="/features">
              <Button
                variant="outline"
                className="bg-white text-slate-700 border-2 border-slate-200 hover:bg-orange-50 hover:border-orange-300 rounded-full px-8 py-4 font-medium group"
              >
                Explore All Features
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
              <div className="absolute top-10 left-10 w-32 h-32 border border-white rounded-full"></div>
              <div className="absolute bottom-10 right-10 w-24 h-24 border border-white rounded-full"></div>
              <div className="absolute top-1/2 right-1/4 w-16 h-16 border border-white rounded-full"></div>
            </div>

            {/* Orange accent blob */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-orange-500 rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-orange-400 rounded-full opacity-10 blur-2xl"></div>

            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4 tracking-tight">
                Ready to Transform Your Meals?
              </h2>
              <p className="text-slate-300 text-lg mb-8 font-light max-w-xl mx-auto">
                Join thousands of food lovers who've discovered the perfect way
                to eat.
              </p>
              <a href="/contact">
                <Button
                  size="lg"
                  className="bg-orange-500 text-white hover:bg-orange-600 text-base px-10 py-6 rounded-full font-medium shadow-lg shadow-orange-500/25 group"
                >
                  Start Your Journey
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-50 border-t border-slate-200 py-16 px-4 relative">
        {/* Subtle decorations */}
        <svg
          className="absolute top-8 right-20 w-12 h-12 text-orange-200 opacity-50"
          viewBox="0 0 50 50"
        >
          <circle
            cx="25"
            cy="25"
            r="20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />
        </svg>

        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-12">
            {/* Column 1 */}
            <div className="flex-1">
              <Link href="/" className="inline-block mb-6">
                <img src="/logo.png" className="w-20 h-12 bg-cover" alt="NOM" />
              </Link>
              <p className="text-slate-500 mb-6 font-light leading-relaxed">
                AI-powered meal creation and delivery for the modern lifestyle.
              </p>
              <Link
                href="https://www.linkedin.com/company/nom-app/?viewAsMember=true"
                target="_blank"
                className="inline-block"
              >
                <div className="w-10 h-10 bg-white border border-slate-200 rounded-xl flex items-center justify-center hover:border-orange-300 hover:bg-orange-50 transition-all">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-slate-600"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </div>
              </Link>
            </div>

            {/* Column 2 */}
            <div className="flex-1">
              <h3 className="font-semibold mb-6 text-slate-900">Product</h3>
              <ul className="space-y-3 text-slate-500">
                <li>
                  <Link
                    href="/how-it-works"
                    className="hover:text-orange-500 transition-colors font-light"
                  >
                    How it Works
                  </Link>
                </li>
                <li>
                  <Link
                    href="/features"
                    className="hover:text-orange-500 transition-colors font-light"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="hover:text-orange-500 transition-colors font-light"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-orange-500 transition-colors font-light"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3 */}
            <div className="flex-1">
              <h3 className="font-semibold mb-6 text-slate-900">Company</h3>
              <ul className="space-y-3 text-slate-500">
                <li>
                  <Link
                    href="/privacy"
                    className="hover:text-orange-500 transition-colors font-light"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="hover:text-orange-500 transition-colors font-light"
                  >
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-slate-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 font-light text-sm">
              © 2026 NomApp. All rights reserved.
            </p>
            <p className="text-slate-500 font-light text-sm">
              Currently raising pre-seed.{" "}
              <Link
                href="/contact"
                className="text-orange-500 hover:text-orange-600 transition-colors font-medium"
              >
                Reach out
              </Link>{" "}
              for investment opportunities.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
