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
  Brain,
  Users,
  Target,
  Heart,
  Lightbulb,
  Sparkles,
  Check,
} from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="py-24 px-4 relative">
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-24 h-24 border-2 border-orange-200 rounded-full opacity-50"></div>
        <div className="absolute top-32 right-16 w-3 h-3 bg-orange-400 rounded-full"></div>
        <div className="absolute top-24 right-24 w-2 h-2 bg-slate-300 rounded-full"></div>
        <div className="absolute top-48 right-20 w-1.5 h-1.5 bg-orange-300 rounded-full"></div>

        {/* Hand-drawn style circle */}
        <svg
          className="absolute top-16 right-1/4 w-16 h-16 text-orange-200 opacity-60"
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
          className="absolute bottom-10 left-16 w-32 h-8 text-slate-200"
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

        {/* Grid pattern */}
        <div className="absolute bottom-20 right-10 grid grid-cols-3 gap-2 opacity-30">
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
            <Heart className="w-4 h-4 mr-2" />
            Our Story
          </Badge>

          <h1 className="text-5xl md:text-6xl font-semibold mb-6 leading-tight text-slate-900 tracking-tight">
            We Help You{" "}
            <span className="relative inline-block">
              <span className="text-orange-500">Eat Better</span>
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
            </span>{" "}
            Every Day
          </h1>

          <p className="text-lg md:text-xl text-slate-500 mb-8 leading-relaxed max-w-2xl mx-auto font-light">
            Not just what's available. Not just what's nearby. What your mind,
            body, and soul truly need. We're on a mission to make healthy,
            intentional eating effortless for everyone.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-slate-50 to-white relative">
        {/* Decorative elements */}
        <svg
          className="absolute top-10 right-10 w-20 h-20 text-orange-100"
          viewBox="0 0 100 100"
        >
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="8 6"
          />
        </svg>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 mb-6">
                <Target className="w-6 h-6 text-orange-500" />
                <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight">
                  Our Mission
                </h2>
              </div>
              <p className="text-lg text-slate-500 mb-6 font-light leading-relaxed">
                To help humanity eat with intention by understanding what your
                mind, body, and soul truly need—not just what's available or
                nearby.
              </p>
              <p className="text-lg text-slate-500 mb-8 font-light leading-relaxed">
                We're pioneering Emotional + Intent-Based Meal Intelligence.
                Understanding how you feel and translating that into the perfect
                meal for you.
              </p>
              <div className="space-y-4">
                <div className="flex items-center text-slate-600">
                  <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Check className="w-3.5 h-3.5 text-orange-500" />
                  </div>
                  <span>Understands your mood, energy & cravings</span>
                </div>
                <div className="flex items-center text-slate-600">
                  <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Check className="w-3.5 h-3.5 text-orange-500" />
                  </div>
                  <span>Recommends meals tailored to your unique needs</span>
                </div>
                <div className="flex items-center text-slate-600">
                  <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Check className="w-3.5 h-3.5 text-orange-500" />
                  </div>
                  <span>
                    Eliminates decision fatigue so you can focus on living
                  </span>
                </div>
              </div>
            </div>

            <div className="relative">
              {/* Corner decorations */}
              <svg
                className="absolute -top-4 -right-4 w-8 h-8 text-orange-400"
                viewBox="0 0 30 30"
              >
                <path
                  d="M5,15 L15,5 M5,25 L25,5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>

              <Card className="bg-white border-2 border-slate-100 rounded-3xl shadow-xl shadow-slate-100/50 overflow-hidden">
                <CardContent className="p-10">
                  <div className="text-center">
                    <div className="relative inline-block mb-8">
                      <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg shadow-orange-200">
                        <Lightbulb className="w-10 h-10 text-white" />
                      </div>
                      {/* Sparkle decoration */}
                      <svg
                        className="absolute -top-3 -right-3 w-6 h-6 text-orange-300"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12,0 L13,9 L24,12 L13,15 L12,24 L11,15 L0,12 L11,9 Z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                      The Idea
                    </h3>
                    <p className="text-slate-500 font-light leading-relaxed">
                      "What if food understood your mind, body, and moments?"
                      This question sparked the creation of NOM—the world's
                      first intent-based meal recommendation engine.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-4 relative">
        {/* Decorative elements */}
        <div className="absolute top-20 left-1/4 w-2 h-2 bg-orange-300 rounded-full opacity-40"></div>
        <div className="absolute top-40 right-1/4 w-3 h-3 bg-slate-300 rounded-full opacity-30"></div>
        <div className="absolute bottom-32 left-1/3 w-2 h-2 bg-orange-400 rounded-full opacity-30"></div>

        <svg
          className="absolute bottom-20 right-16 w-16 h-16 text-slate-200"
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

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-4">
              <svg
                className="w-5 h-5 text-orange-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <circle cx="10" cy="10" r="8" />
              </svg>
              <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight">
                Our Values
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
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white border-2 border-slate-100 shadow-none hover:shadow-xl hover:border-orange-200 transition-all duration-300 rounded-3xl overflow-hidden group relative text-center">
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-orange-200 rounded-tr-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <CardHeader className="pb-2">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-50 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Brain className="w-8 h-8 text-orange-500" />
                </div>
                <CardTitle className="text-slate-900 font-semibold text-xl">
                  Your Wellbeing First
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-500 font-light leading-relaxed">
                  We believe food is more than fuel. Every recommendation
                  considers emotional state, physical needs, and personal goals
                  to support overall wellbeing.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-white border-2 border-slate-100 shadow-none hover:shadow-xl hover:border-orange-200 transition-all duration-300 rounded-3xl overflow-hidden group relative text-center">
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-slate-200 rounded-tr-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <CardHeader className="pb-2">
                <div className="w-16 h-16 bg-gradient-to-br from-slate-100 to-slate-50 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Users className="w-8 h-8 text-slate-600" />
                </div>
                <CardTitle className="text-slate-900 font-semibold text-xl">
                  Built Around You
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-500 font-light leading-relaxed">
                  NOM learns your preferences, dietary needs and habits over
                  time. The more you use it, the better it understands you—like
                  a personal food concierge in your pocket.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-white border-2 border-slate-100 shadow-none hover:shadow-xl hover:border-orange-200 transition-all duration-300 rounded-3xl overflow-hidden group relative text-center">
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-orange-200 rounded-tr-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <CardHeader className="pb-2">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-50 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Heart className="w-8 h-8 text-orange-500" />
                </div>
                <CardTitle className="text-slate-900 font-semibold text-xl">
                  Joy in Every Meal
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-500 font-light leading-relaxed">
                  Eating should bring joy, not stress. We're eliminating
                  decision fatigue and replacing it with delight—helping you
                  discover meals you never knew you needed.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
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
          className="absolute bottom-20 right-10 w-16 h-16 text-slate-200"
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

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block relative">
              <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-4">
                Meet Our Team
              </h2>
              {/* Decorative star */}
              <svg
                className="absolute -right-8 -top-4 w-6 h-6 text-orange-400"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12,0 L13,9 L24,12 L13,15 L12,24 L11,15 L0,12 L11,9 Z" />
              </svg>
            </div>
            <p className="text-lg text-slate-500 font-light">
              The brilliant minds behind NOM
            </p>
          </div>

          {/* Top Row - 3 Members */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center mb-8">
            {/* Arjun */}
            <Card className="bg-white border-2 border-slate-100 shadow-none hover:shadow-xl hover:border-orange-200 transition-all duration-300 rounded-3xl overflow-hidden group relative text-center w-full max-w-sm">
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-orange-200 rounded-tr-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <CardHeader className="pb-2">
                <div className="relative inline-block mx-auto mb-4">
                  <div className="w-24 h-24 rounded-2xl overflow-hidden border-4 border-orange-100 group-hover:border-orange-200 transition-colors">
                    <img
                      src="/Arjun.png"
                      className="w-full h-full object-cover"
                      alt="Arjun"
                    />
                  </div>
                  {/* Role badge */}
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-xs font-medium px-3 py-1 rounded-full whitespace-nowrap">
                    CEO
                  </div>
                </div>
                <CardTitle className="text-slate-900 font-semibold text-lg mt-2">
                  Arjun
                </CardTitle>
                <CardDescription className="text-orange-500 font-medium text-sm">
                  Co-Founder
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-2">
                <p className="text-slate-500 font-light text-sm leading-relaxed">
                  Designs with purpose and always finds the "why" behind every
                  pixel.
                </p>
              </CardContent>
            </Card>

            {/* Sahil */}
            <Card className="bg-white border-2 border-slate-100 shadow-none hover:shadow-xl hover:border-orange-200 transition-all duration-300 rounded-3xl overflow-hidden group relative text-center w-full max-w-sm">
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-slate-200 rounded-tr-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <CardHeader className="pb-2">
                <div className="relative inline-block mx-auto mb-4">
                  <div className="w-24 h-24 rounded-2xl overflow-hidden border-4 border-slate-100 group-hover:border-slate-200 transition-colors">
                    <img
                      src="/Sahil.jpeg"
                      className="w-full h-full object-cover"
                      alt="Sahil"
                    />
                  </div>
                  {/* Role badge */}
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-xs font-medium px-3 py-1 rounded-full whitespace-nowrap">
                    CPO
                  </div>
                </div>
                <CardTitle className="text-slate-900 font-semibold text-lg mt-2">
                  Sahil
                </CardTitle>
                <CardDescription className="text-orange-500 font-medium text-sm">
                  Co-Founder
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-2">
                <p className="text-slate-500 font-light text-sm leading-relaxed">
                  The brain behind the code and the strategy. Dream big, build
                  bigger.
                </p>
              </CardContent>
            </Card>

            {/* Ahmad */}
            <Card className="bg-white border-2 border-slate-100 shadow-none hover:shadow-xl hover:border-orange-200 transition-all duration-300 rounded-3xl overflow-hidden group relative text-center w-full max-w-sm">
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-orange-200 rounded-tr-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <CardHeader className="pb-2">
                <div className="relative inline-block mx-auto mb-4">
                  <div className="w-24 h-24 rounded-2xl overflow-hidden border-4 border-orange-100 group-hover:border-orange-200 transition-colors">
                    <img
                      src="/Ahmad.jpeg"
                      className="w-full h-full object-cover"
                      alt="Ahmad"
                    />
                  </div>
                  {/* Role badge */}
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-xs font-medium px-3 py-1 rounded-full whitespace-nowrap">
                    CTO
                  </div>
                </div>
                <CardTitle className="text-slate-900 font-semibold text-lg mt-2">
                  Ahmad
                </CardTitle>
                <CardDescription className="text-orange-500 font-medium text-sm">
                  Co-Founder
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-2">
                <p className="text-slate-500 font-light text-sm leading-relaxed">
                  Obsessed with algorithms, neural nets, and late-night
                  breakthroughs.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Bottom Row - Centered 2 Members */}
          <div className="flex flex-col sm:flex-row justify-center gap-8">
            {/* Aniket */}
            <Card className="bg-white border-2 border-slate-100 shadow-none hover:shadow-xl hover:border-orange-200 transition-all duration-300 rounded-3xl overflow-hidden group relative text-center w-full max-w-sm">
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-slate-200 rounded-tr-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <CardHeader className="pb-2">
                <div className="relative inline-block mx-auto mb-4">
                  <div className="w-24 h-24 rounded-2xl overflow-hidden border-4 border-slate-100 group-hover:border-slate-200 transition-colors">
                    <img
                      src="/Aniket.jpeg"
                      className="w-full h-full object-cover"
                      alt="Aniket"
                    />
                  </div>
                  {/* Role badge */}
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-xs font-medium px-3 py-1 rounded-full whitespace-nowrap">
                    CSO
                  </div>
                </div>
                <CardTitle className="text-slate-900 font-semibold text-lg mt-2">
                  Aniket
                </CardTitle>
                <CardDescription className="text-orange-500 font-medium text-sm">
                  Co-Founder
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-2">
                <p className="text-slate-500 font-light text-sm leading-relaxed">
                  Turns ideas into beautiful and intuitive user experiences.
                </p>
              </CardContent>
            </Card>

            {/* Vishnu */}
            <Card className="bg-white border-2 border-slate-100 shadow-none hover:shadow-xl hover:border-orange-200 transition-all duration-300 rounded-3xl overflow-hidden group relative text-center w-full max-w-sm">
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-orange-200 rounded-tr-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <CardHeader className="pb-2">
                <div className="relative inline-block mx-auto mb-4">
                  <div className="w-24 h-24 rounded-2xl overflow-hidden border-4 border-orange-100 group-hover:border-orange-200 transition-colors bg-gradient-to-br from-orange-400 to-orange-300 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">VI</span>
                  </div>
                  {/* Role badge */}
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-xs font-medium px-3 py-1 rounded-full whitespace-nowrap">
                    CMO
                  </div>
                </div>
                <CardTitle className="text-slate-900 font-semibold text-lg mt-2">
                  Vishnu
                </CardTitle>
                <CardDescription className="text-orange-500 font-medium text-sm">
                  Co-Founder
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-2">
                <p className="text-slate-500 font-light text-sm leading-relaxed">
                  From campaigns to conversions, he's the growth engine.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-12 md:p-16 text-center relative overflow-hidden shadow-2xl">
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
                Get Early Access
              </h2>
              <p className="text-slate-300 text-lg mb-4 font-light max-w-xl mx-auto">
                See NOM in action. Contact us for more details. We are currently
                onboarding beta clients
              </p>

              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-base px-10 py-6 rounded-full font-medium shadow-lg shadow-orange-500/30 group transition-all hover:scale-[1.02] animate-pulse-glow"
                >
                  Join the Waitlist
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
