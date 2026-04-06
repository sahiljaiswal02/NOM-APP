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
import { Footer } from "@/components/footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white overflow-hidden scroll-smooth">
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
      <section className="pt-24 pb-12 px-4 relative mesh-gradient flex flex-col items-center justify-start min-h-[85vh] overflow-hidden">
        {/* Ambient decorative blurs */}
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-orange-200/20 rounded-full blur-[100px] pointer-events-none animate-float-slow" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-orange-100/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-orange-100/10 to-transparent rounded-full blur-[80px] pointer-events-none" />

        <div className="container mx-auto text-center max-w-5xl relative z-10 font-sans">
          {/* Top Pill Badge */}
          <div className="mb-8 mx-auto w-fit bg-white/80 backdrop-blur-sm border border-orange-200/60 rounded-full px-5 py-2 flex items-center justify-center shadow-sm animate-fade-in-up">
            <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 animate-pulse" />
            <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-slate-700">
              AI-Powered Meal Curation
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-serif font-medium mb-6 leading-[1.1] text-slate-900 tracking-tight animate-blur-in">
            Food That Understands{" "}
            <span className="text-gradient">Your Mind</span>, Body & Moments
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-slate-500 mb-10 leading-relaxed max-w-2xl mx-auto font-sans font-light animate-fade-in-up delay-200">
            The world's first intent-based meal recommendation engine. Tell us
            how you feel, what you need, or what moment you're in—and we'll
            deliver the perfect meal.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up delay-400">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-base px-8 py-6 rounded-full font-semibold transition-all shadow-xl shadow-orange-500/25 hover:shadow-orange-500/35 hover:scale-[1.02] animate-pulse-glow"
              >
                Join the Waitlist
              </Button>
            </Link>
            <Link href="/how-it-works">
              <Button
                size="lg"
                variant="outline"
                className="bg-white/70 backdrop-blur-sm text-slate-900 border border-slate-200 hover:bg-white hover:border-slate-300 text-base px-8 py-6 rounded-full font-semibold transition-all shadow-sm hover:shadow-md"
              >
                See How It Works
              </Button>
            </Link>
          </div>

          {/* Browser Mockup / Interactive Terminal */}
          <div className="mt-16 max-w-4xl mx-auto w-full relative animate-fade-in-up delay-600">
            {/* Floating "Uplift" stat badge */}
            <div className="hidden lg:flex absolute left-[-60px] top-1/2 -translate-y-1/2 bg-gradient-to-br from-[#f0f8a8] to-[#e8f090] p-5 rounded-2xl flex-col items-start shadow-xl max-w-[150px] transform rotate-[-2deg] transition-all duration-500 hover:rotate-0 hover:scale-105 border border-[#e2ed8c] z-20">
              <span className="text-[10px] font-bold tracking-wider text-slate-800 uppercase mb-2 block">
                — Accuracy
              </span>
              <div className="text-3xl font-extrabold text-[#111] mb-1">
                98%
              </div>
              <div className="text-xs font-semibold text-slate-700 leading-snug">
                Match with your cravings
              </div>
            </div>

            <div className="bg-[#1c1c1c] rounded-2xl shadow-[0_25px_60px_-12px_rgba(0,0,0,0.35)] border border-slate-700/30 relative overflow-hidden">
              {/* Browser Header Bar */}
              <div className="bg-[#2a2a2a] px-4 py-3 rounded-t-2xl flex items-center relative gap-2 border-b border-white/5">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 bg-[#1a1a1a] px-4 py-1 rounded-md max-w-[200px] w-full flex items-center justify-center opacity-80 border border-white/5">
                  <div className="w-3 h-3 rounded-sm border inline-flex items-center justify-center mr-2 opacity-50 border-white"></div>
                  <span className="text-[10px] text-zinc-400 font-mono tracking-wider">
                    nom.ai/terminal
                  </span>
                </div>
                <div className="ml-auto flex gap-3 text-zinc-500">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                    <polyline points="16 6 12 2 8 6" />
                    <line x1="12" y1="2" x2="12" y2="15" />
                  </svg>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                    <line x1="12" y1="8" x2="12" y2="16" />
                    <line x1="8" y1="12" x2="16" y2="12" />
                  </svg>
                </div>
              </div>

              {/* Browser Content Area (Video) */}
              <div className="relative w-full bg-black rounded-b-2xl overflow-hidden aspect-video">
                <video
                  src="/demo.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      {/* Divider gradient */}
      <div className="h-px bg-gradient-to-r from-transparent via-orange-200/40 to-transparent" />
      <section className="py-24 px-4 relative section-gradient-warm">
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
            <h2 className="text-3xl md:text-4xl font-serif font-medium text-slate-900 mb-4 tracking-tight">
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
              <div className="relative bg-white rounded-3xl p-6 border border-slate-100 group-hover:border-orange-200 group-hover:shadow-xl transition-all duration-500 h-full flex flex-col card-hover-lift">
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
              <div className="relative bg-white rounded-3xl p-6 border border-slate-100 group-hover:border-slate-300 group-hover:shadow-xl transition-all duration-500 h-full flex flex-col card-hover-lift">
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
              <div className="relative bg-white rounded-3xl p-6 border border-slate-100 group-hover:border-orange-200 group-hover:shadow-xl transition-all duration-500 h-full flex flex-col card-hover-lift">
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
          <div className="bg-gradient-to-r from-orange-500 via-orange-500 to-orange-600 rounded-3xl p-8 relative overflow-hidden shadow-xl shadow-orange-500/15">
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

      {/* How It Works */}
      <section className="py-32 px-4 bg-gradient-to-b from-[#faf9f7] via-white to-[#faf9f7] relative overflow-hidden">
        {/* Divider */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200/60 to-transparent" />
        {/* Subtle Flow Indicators (Desktop Only) */}
        <div className="hidden lg:block absolute top-[60%] left-0 w-full -translate-y-1/2 z-0 opacity-[0.03]">
          <div className="flex justify-around items-center px-48">
            <ArrowRight className="w-24 h-24 text-slate-900" />
            <ArrowRight className="w-24 h-24 text-slate-900" />
          </div>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-24 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif font-medium mb-6 text-slate-900 tracking-tight">
              How NOM Works
            </h2>
            <p className="text-lg text-slate-600 font-light leading-relaxed max-w-xl mx-auto">
              We believe food is more than fuel. It's an emotional response.
              NOM's AI understands your mood and orchestrates the perfect meal.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
            {/* Step 1: Express Intent */}
            <div className="group">
              <div className="bg-white/70 backdrop-blur-xl rounded-[2rem] p-8 h-full flex flex-col shadow-[0_32px_64px_-16px_rgba(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-2 border border-slate-200/60">
                <div className="mb-8 relative">
                  <span className="text-orange-500 font-serif italic text-6xl opacity-10 select-none block">
                    01
                  </span>
                  <h3 className="text-xl font-bold -mt-8 relative text-slate-900 z-10">
                    Express Intent
                  </h3>
                </div>
                <div className="bg-slate-50/80 rounded-2xl p-6 mb-8 flex-grow space-y-4 shadow-inner border border-slate-100">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-700 font-bold text-xs">
                      U
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                      User
                    </span>
                  </div>
                  <div className="bg-white rounded-2xl rounded-tl-none p-4 shadow-sm border border-slate-100 text-slate-700 text-sm font-medium">
                    "I'm stressed and need comfort food."
                    <span className="block text-[10px] text-orange-500 mt-2 font-bold animate-pulse">
                      Typing...
                    </span>
                  </div>
                  <div className="flex gap-2 mt-4">
                    <div className="bg-slate-100 text-slate-600 px-3 py-1.5 rounded-full text-xs font-medium flex items-center gap-1.5">
                      <Zap className="w-3.5 h-3.5 text-orange-500" /> Stressed
                    </div>
                    <div className="bg-slate-100 text-slate-600 px-3 py-1.5 rounded-full text-xs font-medium flex items-center gap-1.5">
                      <CheckCircle className="w-3.5 h-3.5 text-orange-500" />{" "}
                      Comfort
                    </div>
                  </div>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed font-light">
                  Don't browse menus. Just speak your mind. Our AI recognizes
                  emotional triggers to filter for what you actually need.
                </p>
              </div>
            </div>

            {/* Step 2: AI Interpretation */}
            <div className="group">
              <div className="bg-white/70 backdrop-blur-xl rounded-[2rem] p-8 h-full flex flex-col shadow-[0_32px_64px_-16px_rgba(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-2 border border-slate-200/60">
                <div className="mb-8 relative">
                  <span className="text-orange-500 font-serif italic text-6xl opacity-10 select-none block">
                    02
                  </span>
                  <h3 className="text-xl font-bold -mt-8 relative text-slate-900 z-10">
                    AI Interpretation
                  </h3>
                </div>
                <div className="bg-slate-900 text-slate-100 rounded-2xl p-6 mb-8 flex-grow space-y-6 shadow-xl relative overflow-hidden">
                  {/* Subtle inner glow */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 blur-3xl rounded-full"></div>

                  <div className="flex justify-between items-center relative z-10">
                    <div className="flex items-center gap-2">
                      <Brain className="w-4 h-4 text-orange-400" />
                      <span className="text-[10px] font-bold uppercase tracking-widest opacity-80">
                        NOM Brain
                      </span>
                    </div>
                    <span className="text-[9px] bg-orange-500/20 text-orange-400 px-2.5 py-1 rounded-full font-bold tracking-wider">
                      CURATING
                    </span>
                  </div>
                  <div className="space-y-4 relative z-10">
                    <div>
                      <div className="flex justify-between text-xs mb-1.5">
                        <span className="text-slate-400">Protein Match</span>
                        <span className="text-orange-200 font-medium tracking-wide">
                          High
                        </span>
                      </div>
                      <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-orange-500 h-full w-[75%] rounded-full shadow-[0_0_10px_rgba(249,115,22,0.5)]"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs pt-1">
                        <span className="text-slate-400">
                          Tryptophan & Omega-3
                        </span>
                        <span className="text-orange-200 font-medium tracking-wide">
                          Mood Boost
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="border-t border-slate-800 pt-4 mt-2 relative z-10">
                    <span className="text-[9px] text-slate-500 block mb-1.5 tracking-widest font-bold">
                      SMART RECOMMENDATION
                    </span>
                    <div className="text-sm font-semibold text-white mb-1">
                      Miso Ramen with Extra Pork
                    </div>
                    <div className="text-[11px] text-slate-400 italic">
                      "Rich broth triggers serotonin release."
                    </div>
                  </div>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed font-light">
                  Our proprietary algorithm translates cravings into nutritional
                  data, matching your bio-rhythm with the city's top kitchens.
                </p>
              </div>
            </div>

            {/* Step 3: Seamless Delivery */}
            <div className="group">
              <div className="bg-white/70 backdrop-blur-xl rounded-[2rem] p-8 h-full flex flex-col shadow-[0_32px_64px_-16px_rgba(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-2 border border-slate-200/60">
                <div className="mb-8 relative">
                  <span className="text-orange-500 font-serif italic text-6xl opacity-10 select-none block">
                    03
                  </span>
                  <h3 className="text-xl font-bold -mt-8 relative text-slate-900 z-10">
                    Seamless Delivery
                  </h3>
                </div>
                <div className="bg-white rounded-2xl p-6 mb-8 flex-grow border border-slate-100 shadow-sm flex flex-col justify-center items-center gap-6">
                  <div className="w-20 h-20 rounded-full bg-orange-50/50 flex items-center justify-center p-2 border-2 border-orange-100/50">
                    <div className="w-full h-full rounded-full bg-orange-100/50 flex items-center justify-center text-2xl shadow-inner">
                      🍜
                    </div>
                  </div>
                  <button className="w-full bg-slate-900 text-white py-3.5 rounded-full font-semibold shadow-lg shadow-slate-900/10 hover:bg-slate-800 transition-colors text-sm">
                    Order Now
                  </button>
                  <div className="flex items-center gap-5 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
                    <div className="flex items-center font-sans tracking-tighter">
                      <span className="font-bold text-[15px]">Uber</span>
                      <span className="font-medium text-[15px] leading-none">
                        Eats
                      </span>
                    </div>
                    <div className="h-3 w-px bg-slate-400"></div>
                    <div className="flex items-center font-sans">
                      <span className="font-black text-[13px] text-[#FF3008] tracking-tighter">
                        DOORDASH
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed font-light">
                  Connect your favorite delivery accounts once. NOM routes the
                  logistics so you only have to focus on the arrival.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-32 px-4 relative overflow-hidden mesh-gradient">
        {/* Divider */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-200/40 to-transparent" />
        {/* Background Decorative Graphic */}
        <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-orange-500/5 to-transparent pointer-events-none -z-10"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 opacity-30 blur-[100px] bg-orange-100 rounded-full -z-10"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header Section */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-orange-600 font-bold tracking-[0.2em] text-xs uppercase mb-4 block">
              Intelligence by NOM
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-medium text-slate-900 mb-6 tracking-tight">
              Powered by Advanced AI
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed font-light italic max-w-2xl mx-auto">
              From emotional triggers to physical needs, NOM's proprietary AI
              orchestrates the perfect meal for your unique bio-rhythm.
            </p>
          </div>

          {/* Bento / Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1: Emotional Intelligence */}
            <div className="bg-white/40 backdrop-blur-xl border border-slate-200/60 rounded-[2rem] p-8 flex flex-col gap-6 shadow-xl shadow-orange-900/5 hover:-translate-y-1 transition-transform duration-500 group">
              <div className="h-64 relative bg-slate-50/50 rounded-2xl overflow-hidden p-6 border border-slate-100 group-hover:border-orange-100 transition-colors">
                {/* Abstract Visualization */}
                <div className="absolute inset-0 flex items-center justify-center opacity-70 mt-4">
                  <svg className="w-full h-full" viewBox="0 0 200 200">
                    <circle
                      className="text-slate-200"
                      cx="100"
                      cy="100"
                      fill="none"
                      r="80"
                      stroke="currentColor"
                      strokeWidth="1"
                    ></circle>
                    <circle
                      className="text-slate-200"
                      cx="100"
                      cy="100"
                      fill="none"
                      r="50"
                      stroke="currentColor"
                      strokeWidth="1"
                    ></circle>
                    {/* Dynamic Lines */}
                    <path
                      className="opacity-80 drop-shadow-md"
                      d="M40 100 Q100 20 160 100 T280 100"
                      fill="none"
                      stroke="#f97316"
                      strokeWidth="2"
                    ></path>
                    <path
                      className="opacity-50"
                      d="M40 120 Q100 60 160 120 T280 120"
                      fill="none"
                      stroke="#14b8a6"
                      strokeWidth="1.5"
                    ></path>
                    {/* Floating Markers */}
                    <circle cx="100" cy="40" fill="#f97316" r="4"></circle>
                    <text
                      className="text-[9px] font-medium fill-slate-500"
                      x="108"
                      y="42"
                    >
                      Magnesium
                    </text>
                    <circle cx="140" cy="140" fill="#14b8a6" r="4"></circle>
                    <text
                      className="text-[9px] font-medium fill-slate-500"
                      x="148"
                      y="142"
                    >
                      Protein
                    </text>
                  </svg>
                </div>
                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div className="flex justify-between items-start">
                    <span className="bg-white/90 backdrop-blur shadow-sm px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase text-slate-500">
                      Real-time Bioscan
                    </span>
                    <Brain className="text-orange-500 w-5 h-5 bg-white rounded-full" />
                  </div>
                  <div className="flex gap-2">
                    <div className="bg-orange-100/80 border border-orange-200/50 text-orange-700 px-2.5 py-1 rounded-md text-[10px] font-bold">
                      Stress
                    </div>
                    <div className="bg-teal-100/80 border border-teal-200/50 text-teal-700 px-2.5 py-1 rounded-md text-[10px] font-bold">
                      Fatigue
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 block">
                  Emotional Intelligence
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed font-light">
                  "Emotion to Nutrition Map". Our system decodes psychological
                  states to recommend micronutrients that stabilize mood and
                  amplify cognitive performance.
                </p>
              </div>
            </div>

            {/* Feature 2: Natural Language Understanding */}
            <div className="bg-white/40 backdrop-blur-xl border border-slate-200/60 rounded-[2rem] p-8 flex flex-col gap-6 shadow-xl shadow-orange-900/5 hover:-translate-y-1 transition-transform duration-500 group">
              <div className="h-64 bg-slate-100/50 rounded-2xl p-6 border border-slate-100 overflow-hidden flex flex-col gap-4 group-hover:border-orange-100 transition-colors">
                {/* Chat UI */}
                <div className="bg-white shadow-sm p-3.5 rounded-2xl rounded-tr-none self-end max-w-[85%] border border-slate-100">
                  <p className="text-xs text-slate-700 italic leading-relaxed">
                    "I'm feeling a bit tired and bloated from travel."
                  </p>
                </div>
                <div className="flex gap-3 items-start mt-2">
                  <div className="w-7 h-7 rounded-full bg-orange-500 flex items-center justify-center shrink-0 shadow-md shadow-orange-200">
                    <Sparkles className="text-white w-3.5 h-3.5" />
                  </div>
                  <div className="bg-orange-50/80 border border-orange-100/50 p-3.5 rounded-2xl rounded-tl-none shadow-sm flex flex-col gap-2.5">
                    <div className="flex gap-1.5 border-b border-orange-200/50 pb-2">
                      <span className="text-[9px] font-bold text-slate-500 uppercase flex items-center">
                        Analysis:
                      </span>
                      <span className="text-[10px] bg-white shadow-sm px-1.5 py-0.5 rounded-md text-orange-600 font-semibold">
                        Tired
                      </span>
                      <span className="text-[10px] bg-white shadow-sm px-1.5 py-0.5 rounded-md text-orange-600 font-semibold">
                        Bloated
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-700 leading-snug font-medium">
                      Suggesting: Grilled Sea Bass with Ginger & Turmeric. High
                      energy, low-sodium, digestive-first preparation.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 block">
                  Natural Language Context
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed font-light">
                  Beyond keywords. NOM understands nuance. Whether you're
                  recovering from a flight or celebrating a win, our AI
                  translates sentiment into menu architecture.
                </p>
              </div>
            </div>

            {/* Feature 3: Deep Personalization */}
            <div className="bg-white/40 backdrop-blur-xl border border-slate-200/60 rounded-[2rem] p-8 flex flex-col gap-6 shadow-xl shadow-orange-900/5 hover:-translate-y-1 transition-transform duration-500 group">
              <div className="h-64 bg-slate-50/80 rounded-2xl p-6 border border-slate-100 flex flex-col items-center justify-center relative group-hover:border-orange-100 transition-colors">
                {/* Circular Evolution Chart */}
                <div className="relative w-28 h-28 flex items-center justify-center mt-2">
                  <svg className="w-full h-full -rotate-90 drop-shadow-sm">
                    {/* Outer Ring */}
                    <circle
                      className="text-slate-200"
                      cx="56"
                      cy="56"
                      fill="transparent"
                      r="48"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <circle
                      className="text-orange-500 transition-all duration-1000 group-hover:stroke-orange-400"
                      cx="56"
                      cy="56"
                      fill="transparent"
                      r="48"
                      stroke="currentColor"
                      strokeDasharray="301"
                      strokeDashoffset="24"
                      strokeLinecap="round"
                      strokeWidth="4"
                    ></circle>
                    {/* Inner Ring */}
                    <circle
                      className="text-slate-200"
                      cx="56"
                      cy="56"
                      fill="transparent"
                      r="38"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <circle
                      className="text-teal-500 transition-all duration-1000 group-hover:stroke-teal-400 delay-100"
                      cx="56"
                      cy="56"
                      fill="transparent"
                      r="38"
                      stroke="currentColor"
                      strokeDasharray="238"
                      strokeDashoffset="71"
                      strokeLinecap="round"
                      strokeWidth="4"
                    ></circle>
                  </svg>
                  <div className="absolute flex flex-col items-center text-center">
                    <span className="text-sm font-bold text-slate-900">
                      92%
                    </span>
                    <span className="text-[9px] uppercase tracking-tighter text-slate-500 font-bold">
                      Sync
                    </span>
                  </div>
                </div>
                <div className="mt-8 w-full space-y-3">
                  <div className="space-y-1">
                    <div className="flex justify-between items-center text-[10px]">
                      <span className="text-slate-500 font-medium tracking-wide">
                        FLAVOR PROFILE
                      </span>
                      <span className="font-bold text-orange-600">Synced</span>
                    </div>
                    <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-orange-500 w-[92%] h-full rounded-full transition-all duration-1000 group-hover:w-[94%]"></div>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between items-center text-[10px]">
                      <span className="text-slate-500 font-medium tracking-wide">
                        DIGESTIVE HEALTH
                      </span>
                      <span className="font-bold text-teal-600 italic">
                        Optimizing
                      </span>
                    </div>
                    <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-teal-500 w-[70%] h-full rounded-full transition-all duration-1000 group-hover:w-[75%]"></div>
                    </div>
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur shadow-sm border border-slate-100 px-2 py-1 rounded flex items-center gap-1">
                  <TrendingUp className="w-3 h-3 text-emerald-500" />
                  <span className="text-[9px] font-bold text-emerald-700 uppercase tracking-wider">
                    +14% (30d)
                  </span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 block">
                  Evolutionary Profile
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed font-light">
                  Your palate is dynamic. NOM tracks your feedback loop and
                  bio-markers to refine your taste profile, ensuring every meal
                  is more "you" than the last.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <Link href="/features">
              <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-full px-8 py-6 font-semibold group shadow-xl shadow-orange-500/20 text-base transition-all hover:scale-[1.02]">
                Experience the AI Curator
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* B2B Platform Section -> Replaced with Consumer Lifestyle Section */}
      <section className="py-24 px-4 section-gradient-cool relative">
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
            {/* Left: Consumer Benefits Info */}
            <div>
              <div className="inline-flex items-center justify-center w-14 h-14 bg-orange-100 rounded-2xl mb-6">
                <Zap className="w-7 h-7 text-orange-500" />
              </div>
              <h3 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-6">
                Built For Managing Your Daily Health
              </h3>
              <p className="text-slate-500 font-light leading-relaxed mb-6">
                NOM brings mindfulness to your busy schedule. We instantly connect your cravings and goals with your
                favorite local spots—no endless menus, just exactly what you need.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <CheckCircle className="w-3.5 h-3.5 text-orange-500" />
                  </div>
                  <span className="text-slate-600 font-light">
                    Save hours of decision-making each week
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <CheckCircle className="w-3.5 h-3.5 text-orange-500" />
                  </div>
                  <span className="text-slate-600 font-light">
                    Easily discover healthier, locally-sourced options
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <CheckCircle className="w-3.5 h-3.5 text-orange-500" />
                  </div>
                  <span className="text-slate-600 font-light">
                    Meals curated for your physical and emotional state
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <CheckCircle className="w-3.5 h-3.5 text-orange-500" />
                  </div>
                  <span className="text-slate-600 font-light">
                    One-tap ordering through existing delivery platforms
                  </span>
                </li>
              </ul>
            </div>

            {/* Right: Category Creation */}
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-900/5 relative card-hover-lift gradient-border">
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
                Eat With Intention
              </h2>
              <p className="text-slate-300 text-lg mb-4 font-light max-w-xl mx-auto">
                Not just what's available. Not just what's nearby. What your
                mind, body, and soul truly need.
              </p>
              <p className="text-slate-400 text-sm mb-8 font-light max-w-2xl mx-auto">
                Join our waitlist today to be among the first to experience frictionless, health-conscious dining.
                Get ready to ditch decision fatigue forever.
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
