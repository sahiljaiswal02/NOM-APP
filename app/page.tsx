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
  TrendingUp,
  Zap,
  Layers,
  Target,
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
            Food That Understands Your{" "}
            <span className="relative inline-block">
              <span className="text-orange-500">Mind, Body & Moments</span>
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
            The world's first intent-based meal recommendation engine. Tell us
            how you feel, what you need, or what moment you're in—and we'll
            deliver the perfect meal.
          </p>

          {/* Interactive Example / Terminal */}
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
              <div className="bg-white rounded-2xl p-4 mb-3 border border-slate-200 shadow-sm">
                <p className="text-base font-mono text-slate-700">
                  "I'm anxious—what should I eat?"
                </p>
              </div>

              <div className="flex items-center text-orange-600 bg-orange-50 rounded-2xl p-4 border border-orange-100">
                <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0" />
                <span className="text-sm font-medium">
                  Understanding your state • Finding calming foods • Delivery
                  ready
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

      {/* Problem Section */}
      <section className="py-24 px-4 relative">
        {/* Decorative Elements */}
        <div className="absolute top-20 right-20 w-24 h-24 border-2 border-orange-100 rounded-full opacity-50"></div>
        <div className="absolute bottom-20 left-16 w-16 h-16 border-2 border-slate-100 rounded-full opacity-40"></div>
        <div className="absolute top-32 left-1/4 w-2 h-2 bg-orange-300 rounded-full opacity-60"></div>
        <div className="absolute bottom-32 right-1/4 w-3 h-3 bg-slate-300 rounded-full opacity-40"></div>

        <svg
          className="absolute top-16 left-10 w-24 h-8 text-orange-200 opacity-60"
          viewBox="0 0 100 20"
        >
          <path
            d="M0,10 Q12,0 25,10 T50,10 T75,10 T100,10"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>

        <div className="container mx-auto max-w-6xl relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-orange-100 to-orange-50 rounded-2xl mb-6">
              <Target className="w-7 h-7 text-orange-500" />
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-4 tracking-tight">
              Food Discovery Is Fundamentally Broken
            </h2>
            <p className="text-lg text-slate-500 font-light max-w-2xl mx-auto">
              The way we choose what to eat is stuck in the past—endless
              options, zero understanding.
            </p>
          </div>

          {/* Problem Cards Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* Problem 1 - Endless Scrolling */}
            <div className="group relative">
              <div className="absolute inset-0 bg-orange-400 rounded-3xl opacity-0 group-hover:opacity-10 transition-all duration-300"></div>
              <div className="relative bg-white rounded-3xl p-6 border-2 border-slate-100 group-hover:border-orange-200 group-hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                {/* Visual Container - Fixed Height */}
                <div className="mb-5 relative h-[140px]">
                  <div className="bg-slate-50 rounded-2xl p-4 h-full flex flex-col justify-center">
                    <div className="space-y-2">
                      {[...Array(4)].map((_, i) => (
                        <div
                          key={i}
                          className={`flex items-center gap-2.5 transition-all duration-300 ${
                            i > 2
                              ? "opacity-30"
                              : i > 1
                              ? "opacity-50"
                              : "opacity-100"
                          } group-hover:translate-y-[-2px]`}
                          style={{ transitionDelay: `${i * 50}ms` }}
                        >
                          <div
                            className={`w-7 h-7 rounded-lg flex items-center justify-center ${
                              i === 0 ? "bg-orange-100" : "bg-slate-200"
                            }`}
                          >
                            <div
                              className={`w-3.5 h-3.5 rounded ${
                                i === 0 ? "bg-orange-300" : "bg-slate-300"
                              }`}
                            ></div>
                          </div>
                          <div className="flex-1 space-y-1">
                            <div
                              className={`h-1.5 rounded-full ${
                                i === 0
                                  ? "bg-orange-200 w-3/4"
                                  : "bg-slate-200 w-full"
                              }`}
                            ></div>
                            <div
                              className={`h-1 rounded-full ${
                                i === 0
                                  ? "bg-orange-100 w-1/2"
                                  : "bg-slate-100 w-2/3"
                              }`}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Emoji indicator */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 scale-90 group-hover:scale-100">
                    <span className="text-sm">😩</span>
                  </div>
                </div>

                {/* Title - Fixed Height */}
                <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-orange-600 transition-colors">
                  Endless Scrolling
                </h3>

                {/* Description - Fixed Height */}
                <p className="text-slate-500 font-light text-sm leading-relaxed mb-4 flex-1">
                  Infinite lists and categories. We compare endlessly but choose
                  reactively.
                </p>

                {/* Stat badge - Always at bottom */}
                <div className="mt-auto">
                  <div className="inline-flex items-center gap-2 bg-slate-50 group-hover:bg-orange-50 rounded-full px-3 py-1.5 transition-colors duration-300">
                    <span className="text-sm font-bold text-slate-600 group-hover:text-orange-600 transition-colors">
                      ∞
                    </span>
                    <span className="text-xs text-slate-500 group-hover:text-orange-600 transition-colors">
                      options, zero clarity
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Problem 2 - Decision Fatigue */}
            <div className="group relative">
              <div className="absolute inset-0 bg-slate-500 rounded-3xl opacity-0 group-hover:opacity-10 transition-all duration-300"></div>
              <div className="relative bg-white rounded-3xl p-6 border-2 border-slate-100 group-hover:border-slate-300 group-hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                {/* Visual Container - Fixed Height */}
                <div className="mb-5 relative h-[140px]">
                  <div className="bg-slate-50 rounded-2xl p-4 h-full flex flex-col justify-center">
                    <div className="flex items-center justify-center gap-2">
                      {["🍕", "🍜", "🥗", "🍔"].map((emoji, i) => (
                        <div
                          key={i}
                          className={`transition-all duration-300 ${
                            i === 1 ? "scale-110 z-10" : "scale-100 opacity-50"
                          } group-hover:scale-105`}
                          style={{ transitionDelay: `${i * 60}ms` }}
                        >
                          <div
                            className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                              i === 1
                                ? "bg-slate-200 shadow-md"
                                : "bg-slate-100"
                            } group-hover:rotate-6 transition-transform duration-300`}
                          >
                            <span className="text-xl">{emoji}</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Thinking dots */}
                    <div className="flex justify-center mt-4 gap-1">
                      <div
                        className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0ms" }}
                      ></div>
                      <div
                        className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"
                        style={{ animationDelay: "150ms" }}
                      ></div>
                      <div
                        className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"
                        style={{ animationDelay: "300ms" }}
                      ></div>
                    </div>
                  </div>

                  {/* Emoji indicator */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 scale-90 group-hover:scale-100">
                    <span className="text-sm">🤯</span>
                  </div>
                </div>

                {/* Title - Fixed Height */}
                <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-slate-700 transition-colors">
                  Decision Fatigue
                </h3>

                {/* Description - Fixed Height */}
                <p className="text-slate-500 font-light text-sm leading-relaxed mb-4 flex-1">
                  Too many choices cause paralysis. You pick what's familiar,
                  not what's right.
                </p>

                {/* Stat badge - Always at bottom */}
                <div className="mt-auto">
                  <div className="inline-flex items-center gap-2 bg-slate-50 group-hover:bg-slate-100 rounded-full px-3 py-1.5 transition-colors duration-300">
                    <span className="text-sm font-bold text-slate-600">
                      3+ min
                    </span>
                    <span className="text-xs text-slate-500">to decide</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Problem 3 - Zero Emotional Awareness */}
            <div className="group relative">
              <div className="absolute inset-0 bg-orange-400 rounded-3xl opacity-0 group-hover:opacity-10 transition-all duration-300"></div>
              <div className="relative bg-white rounded-3xl p-6 border-2 border-slate-100 group-hover:border-orange-200 group-hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                {/* Visual Container - Fixed Height */}
                <div className="mb-5 relative h-[140px]">
                  <div className="bg-slate-50 rounded-2xl p-4 h-full flex flex-col justify-center">
                    {/* Macro numbers */}
                    <div className="grid grid-cols-3 gap-2 mb-3">
                      {[
                        { value: "542", label: "cal" },
                        { value: "23g", label: "protein" },
                        { value: "18g", label: "fat" },
                      ].map((macro, i) => (
                        <div
                          key={i}
                          className="bg-white rounded-lg p-2 text-center group-hover:scale-105 transition-transform duration-300"
                          style={{ transitionDelay: `${i * 80}ms` }}
                        >
                          <div className="text-base font-bold text-slate-400">
                            {macro.value}
                          </div>
                          <div className="text-[9px] text-slate-400 uppercase">
                            {macro.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Emotion indicators */}
                    <div className="flex justify-center gap-2">
                      {["😔", "😤", "😴"].map((emoji, i) => (
                        <div
                          key={i}
                          className="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center opacity-30 group-hover:opacity-70 transition-all duration-300 grayscale group-hover:grayscale-0"
                          style={{ transitionDelay: `${i * 60}ms` }}
                        >
                          <span className="text-base">{emoji}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Emoji indicator */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 scale-90 group-hover:scale-100">
                    <span className="text-sm">🙈</span>
                  </div>
                </div>

                {/* Title - Fixed Height */}
                <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-orange-600 transition-colors">
                  Zero Emotional Awareness
                </h3>

                {/* Description - Fixed Height */}
                <p className="text-slate-500 font-light text-sm leading-relaxed mb-4 flex-1">
                  Apps track macros but ignore mood, energy, and what your body
                  craves.
                </p>

                {/* Stat badge - Always at bottom */}
                <div className="mt-auto">
                  <div className="inline-flex items-center gap-2 bg-slate-50 group-hover:bg-orange-50 rounded-full px-3 py-1.5 transition-colors duration-300">
                    <span className="text-sm font-bold text-slate-600 group-hover:text-orange-600 transition-colors">
                      0%
                    </span>
                    <span className="text-xs text-slate-500 group-hover:text-orange-600 transition-colors">
                      emotional context
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Insight */}
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl p-8 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl font-semibold text-white mb-2">
                  Your emotional state matters as much as macros
                </h3>
                <p className="text-orange-100 font-light text-sm">
                  NOM understands what your mind and body need—not just what's
                  nearby.
                </p>
              </div>

              <div className="flex items-center gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">87%</div>
                  <div className="text-xs text-orange-200 font-light">
                    feel overwhelmed
                  </div>
                </div>
                <div className="w-px h-12 bg-white/20"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">12+</div>
                  <div className="text-xs text-orange-200 font-light">
                    apps abandoned
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Opportunity Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-slate-50 to-white relative">
        {/* Decorative elements */}
        <svg
          className="absolute top-10 right-10 w-24 h-24 text-orange-100"
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
          className="absolute bottom-20 left-16 w-16 h-16 text-slate-200"
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

        <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-orange-400 rounded-full opacity-50"></div>
        <div className="absolute top-1/3 left-1/3 w-3 h-3 bg-slate-300 rounded-full opacity-30"></div>

        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-slate-100 to-slate-50 rounded-2xl mb-6">
              <TrendingUp className="w-7 h-7 text-slate-600" />
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-4 tracking-tight">
              A £500B+ Opportunity at the Intersection of Food, Emotion & AI
            </h2>
            <p className="text-lg text-slate-500 font-light max-w-2xl mx-auto">
              Food delivery is a massive global market with almost no innovation
              in how people discover what to eat.
            </p>
          </div>

          {/* Converging Forces */}
          <div className="grid md:grid-cols-5 gap-4">
            <div className="bg-white rounded-2xl p-6 border border-slate-100 hover:border-orange-200 hover:shadow-lg transition-all duration-300 text-center group">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-orange-50 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Brain className="w-6 h-6 text-orange-500" />
              </div>
              <h4 className="font-semibold text-slate-900 text-sm mb-2">
                AI Breakthroughs
              </h4>
              <p className="text-xs text-slate-500 font-light">
                LLMs understand human intent
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-100 hover:border-orange-200 hover:shadow-lg transition-all duration-300 text-center group">
              <div className="w-12 h-12 bg-gradient-to-br from-slate-100 to-slate-50 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Sparkles className="w-6 h-6 text-slate-600" />
              </div>
              <h4 className="font-semibold text-slate-900 text-sm mb-2">
                Wellness Boom
              </h4>
              <p className="text-xs text-slate-500 font-light">
                Health-conscious consumers
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-100 hover:border-orange-200 hover:shadow-lg transition-all duration-300 text-center group">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-orange-50 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Target className="w-6 h-6 text-orange-500" />
              </div>
              <h4 className="font-semibold text-slate-900 text-sm mb-2">
                Intentional Living
              </h4>
              <p className="text-xs text-slate-500 font-light">
                Mindful consumption shift
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-100 hover:border-orange-200 hover:shadow-lg transition-all duration-300 text-center group">
              <div className="w-12 h-12 bg-gradient-to-br from-slate-100 to-slate-50 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-6 h-6 text-slate-600" />
              </div>
              <h4 className="font-semibold text-slate-900 text-sm mb-2">
                Platform Demand
              </h4>
              <p className="text-xs text-slate-500 font-light">
                Hunger for conversion
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-100 hover:border-orange-200 hover:shadow-lg transition-all duration-300 text-center group">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-orange-50 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Zap className="w-6 h-6 text-orange-500" />
              </div>
              <h4 className="font-semibold text-slate-900 text-sm mb-2">
                User Fatigue
              </h4>
              <p className="text-xs text-slate-500 font-light">
                Wanting clarity, not chaos
              </p>
            </div>
          </div>

          {/* Bottom highlight */}
          <div className="mt-12 bg-gradient-to-r from-orange-50 via-white to-orange-50 rounded-2xl p-6 border border-orange-100 text-center">
            <p className="text-slate-600 font-light">
              <span className="font-semibold text-slate-900">
                Emotion, context, and human intent
              </span>{" "}
              are missing from every meal decision.
              <span className="text-orange-500 font-medium">
                {" "}
                NOM fills this gap.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-4 bg-gradient-to-b from-white to-slate-50 relative">
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
              Three simple steps to your perfect meal, powered by a universal
              meal intelligence engine.
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
                Express Your Intent
              </h3>
              <p className="text-slate-500 font-light leading-relaxed">
                Share your emotional state, physical needs, or situational
                context—our AI understands what your body and mind truly need.
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
                Intent Interpretation
              </h3>
              <p className="text-slate-500 font-light leading-relaxed">
                AI analyzes mood, cravings, nutrition needs, preferences and
                context to curate meals that match your moment perfectly.
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
                Seamless Fulfillment
              </h3>
              <p className="text-slate-500 font-light leading-relaxed">
                Connected directly to delivery platforms like Uber Eats and
                DoorDash for instant ordering and delivery.
              </p>
            </div>
          </div>

          {/* Additional context */}
          <p className="text-center mt-12 text-slate-500 font-light max-w-3xl mx-auto">
            Under the hood, NOM operates as a lightweight intelligence plugin:
            turning emotional, physical, and situational prompts into precise
            meal recommendations inside existing delivery flows.
          </p>

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
            <p className="text-lg text-slate-500 font-light max-w-2xl mx-auto">
              The universal meal intelligence engine that transforms emotional,
              physical, and situational prompts into personalised
              meals—seamlessly routed into existing delivery platforms.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white border-2 border-slate-100 shadow-none hover:shadow-xl hover:border-orange-200 transition-all duration-300 rounded-3xl overflow-hidden group">
              <CardHeader className="pb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-100 to-orange-50 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Brain className="w-7 h-7 text-orange-500" />
                </div>
                <CardTitle className="text-slate-900 font-semibold text-xl">
                  Emotional Intelligence
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-500 font-light leading-relaxed text-base">
                  AI interprets emotional states and translates them into
                  nourishment—understanding what you need beyond just calories.
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
                  Natural Language Understanding
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-500 font-light leading-relaxed text-base">
                  Conversational prompts that capture nuanced human needs—from
                  "I'm tired and bloated" to "something uplifting for a sad
                  day."
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
                  Deep Personalization
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-500 font-light leading-relaxed text-base">
                  LLM-powered learning that evolves with your preferences, body,
                  mood, and goals for increasingly perfect recommendations.
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

      {/* B2B Platform Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-slate-50 to-white relative">
        <svg
          className="absolute bottom-10 left-10 w-16 h-16 text-orange-100"
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

        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left: B2B Info */}
            <div>
              <div className="inline-flex items-center justify-center w-14 h-14 bg-orange-100 rounded-2xl mb-6">
                <Zap className="w-7 h-7 text-orange-500" />
              </div>
              <h3 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-6">
                Built for Food Delivery Platforms
              </h3>
              <p className="text-slate-500 font-light leading-relaxed mb-6">
                NOM is a B2B SaaS API that plugs directly into platforms like
                Uber Eats, DoorDash, and Grab—powering personalised,
                emotion-aware food recommendations.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <CheckCircle className="w-3.5 h-3.5 text-orange-500" />
                  </div>
                  <span className="text-slate-600 font-light">
                    Higher conversion through intent-based matching
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <CheckCircle className="w-3.5 h-3.5 text-orange-500" />
                  </div>
                  <span className="text-slate-600 font-light">
                    Increased basket size via contextual suggestions
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <CheckCircle className="w-3.5 h-3.5 text-orange-500" />
                  </div>
                  <span className="text-slate-600 font-light">
                    Better retention from "they get me" experiences
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <CheckCircle className="w-3.5 h-3.5 text-orange-500" />
                  </div>
                  <span className="text-slate-600 font-light">
                    A differentiated intelligence layer in a crowded space
                  </span>
                </li>
              </ul>
            </div>

            {/* Right: Category Creation */}
            <div className="bg-white rounded-3xl p-8 border-2 border-slate-100 shadow-lg relative">
              {/* Corner decoration */}
              <svg
                className="absolute -top-3 -right-3 w-8 h-8 text-orange-400"
                viewBox="0 0 30 30"
              >
                <path
                  d="M5,15 L15,5 M5,25 L25,5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>

              <div className="inline-flex items-center justify-center w-14 h-14 bg-slate-100 rounded-2xl mb-6">
                <Layers className="w-7 h-7 text-slate-600" />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-slate-900 mb-4">
                A New Category
              </h3>
              <p className="text-orange-500 font-medium text-sm mb-4">
                Emotional + Intent-Based Meal Intelligence
              </p>
              <p className="text-slate-500 font-light leading-relaxed mb-4">
                Delivery apps focus on logistics. Diet apps focus on macros. AI
                chatbots can talk but aren't connected to real menus. NOM
                bridges all four worlds.
              </p>
              <p className="text-slate-500 font-light leading-relaxed">
                We combine emotion, intent, real-time menu intelligence, and
                fulfilment to deliver the right meal for the right moment.
              </p>
            </div>
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
                Eat With Intention
              </h2>
              <p className="text-slate-300 text-lg mb-4 font-light max-w-xl mx-auto">
                Not just what's available. Not just what's nearby. What your
                mind, body, and soul truly need.
              </p>
              <p className="text-slate-400 text-sm mb-8 font-light max-w-2xl mx-auto">
                Today, NOM launches its MVP with delivery partners. Soon, we'll
                expand across fitness, health, and wellness ecosystems—on the
                path to becoming the universal API for intentional eating.
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
                The intelligence layer that helps humanity eat with intention.
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
