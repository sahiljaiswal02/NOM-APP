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
  Search,
  Utensils,
  Truck,
  Clock,
  MapPin,
  Star,
  Check,
  MessageSquare,
  Sparkles,
  Route,
} from "lucide-react";
import { Navbar } from "@/components/navbar";
import Link from "next/link";

export default function HowItWorksPage() {
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
            <Brain className="w-4 h-4 mr-2" />
            The Science Behind NOM
          </Badge>

          <h1 className="text-5xl md:text-6xl font-semibold mb-6 leading-tight text-slate-900 tracking-tight">
            How{" "}
            <span className="relative inline-block">
              <span className="text-orange-500">NOM</span>
              {/* Underline doodle */}
              <svg
                className="absolute -bottom-1 left-0 w-full h-2 text-orange-300"
                viewBox="0 0 100 8"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,4 Q25,0 50,4 T100,4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>{" "}
            Works
          </h1>

          <p className="text-lg md:text-xl text-slate-500 mb-8 leading-relaxed max-w-2xl mx-auto font-light">
            Discover the advanced AI technology and seamless process that
            transforms your cravings into perfectly crafted meals.
          </p>
        </div>
      </section>

      {/* Quick Overview */}
      <section className="py-20 px-4 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-orange-100 rounded-full opacity-50"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 border-2 border-slate-100 rounded-full opacity-50"></div>
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-orange-300 rounded-full opacity-40"></div>
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-slate-300 rounded-full opacity-40"></div>

        <div className="container mx-auto max-w-5xl relative z-10">
          {/* Section header */}
          <div className="text-center mb-12">
            <p className="text-sm font-medium text-orange-500 uppercase tracking-wider mb-2">
              Simple Process
            </p>
            <h3 className="text-2xl font-semibold text-slate-900">
              Three Steps to Your Perfect Meal
            </h3>
          </div>

          {/* Steps container */}
          <div className="relative">
            {/* Connecting line - desktop */}
            <div className="absolute top-16 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-orange-200 via-slate-200 to-orange-200 hidden md:block"></div>

            {/* Animated dots on the line */}
            <div className="absolute top-[62px] left-[15%] right-[15%] hidden md:flex justify-between px-20">
              <div className="w-2 h-2 bg-orange-300 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-slate-300 rounded-full animate-pulse delay-300"></div>
              <div className="w-2 h-2 bg-orange-300 rounded-full animate-pulse delay-500"></div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-8">
              {/* Step 1 */}
              <div className="flex flex-col items-center text-center group">
                <div className="relative mb-6">
                  {/* Outer ring */}
                  <div className="absolute -inset-3 bg-orange-100 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  {/* Step number badge */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-white border-2 border-orange-200 rounded-full flex items-center justify-center z-10">
                    <span className="text-xs font-bold text-orange-500">1</span>
                  </div>
                  {/* Icon container */}
                  <div className="relative w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg shadow-orange-200 group-hover:scale-110 transition-transform duration-300">
                    <MessageSquare className="w-7 h-7 text-white" />
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-slate-900 mb-2">
                  Describe
                </h4>
                <p className="text-sm text-slate-500 font-light max-w-[160px]">
                  Tell us what you're craving in natural language
                </p>
              </div>

              {/* Arrow 1 - Mobile */}
              <div className="flex md:hidden items-center justify-center">
                <svg className="w-6 h-12 text-orange-300" viewBox="0 0 24 48">
                  <path
                    d="M12,0 L12,40 M6,34 L12,42 L18,34"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {/* Arrow 1 - Desktop */}
              <div className="hidden md:flex items-center justify-center flex-1 max-w-[100px]">
                <svg className="w-full h-8 text-slate-300" viewBox="0 0 100 32">
                  <defs>
                    <linearGradient
                      id="arrowGradient1"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#fed7aa" />
                      <stop offset="100%" stopColor="#cbd5e1" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0,16 Q25,16 50,16 T85,16"
                    fill="none"
                    stroke="url(#arrowGradient1)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeDasharray="6 4"
                  />
                  <path
                    d="M80,10 L90,16 L80,22"
                    fill="none"
                    stroke="#cbd5e1"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col items-center text-center group">
                <div className="relative mb-6">
                  {/* Outer ring */}
                  <div className="absolute -inset-3 bg-slate-100 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  {/* Step number badge */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-white border-2 border-slate-200 rounded-full flex items-center justify-center z-10">
                    <span className="text-xs font-bold text-slate-600">2</span>
                  </div>
                  {/* Decorative orbiting dot */}
                  <div
                    className="absolute -inset-4 animate-spin"
                    style={{ animationDuration: "8s" }}
                  >
                    <div className="absolute top-0 left-1/2 w-2 h-2 bg-orange-400 rounded-full -translate-x-1/2"></div>
                  </div>
                  {/* Icon container */}
                  <div className="relative w-16 h-16 bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl flex items-center justify-center shadow-lg shadow-slate-200 group-hover:scale-110 transition-transform duration-300">
                    <Brain className="w-7 h-7 text-white" />
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-slate-900 mb-2">
                  AI Crafts
                </h4>
                <p className="text-sm text-slate-500 font-light max-w-[160px]">
                  Our AI finds the perfect meal combination
                </p>
              </div>

              {/* Arrow 2 - Mobile */}
              <div className="flex md:hidden items-center justify-center">
                <svg className="w-6 h-12 text-orange-300" viewBox="0 0 24 48">
                  <path
                    d="M12,0 L12,40 M6,34 L12,42 L18,34"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {/* Arrow 2 - Desktop */}
              <div className="hidden md:flex items-center justify-center flex-1 max-w-[100px]">
                <svg className="w-full h-8 text-slate-300" viewBox="0 0 100 32">
                  <defs>
                    <linearGradient
                      id="arrowGradient2"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#cbd5e1" />
                      <stop offset="100%" stopColor="#fed7aa" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0,16 Q25,16 50,16 T85,16"
                    fill="none"
                    stroke="url(#arrowGradient2)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeDasharray="6 4"
                  />
                  <path
                    d="M80,10 L90,16 L80,22"
                    fill="none"
                    stroke="#fed7aa"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col items-center text-center group">
                <div className="relative mb-6">
                  {/* Outer ring */}
                  <div className="absolute -inset-3 bg-orange-100 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  {/* Step number badge */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-white border-2 border-orange-200 rounded-full flex items-center justify-center z-10">
                    <span className="text-xs font-bold text-orange-500">3</span>
                  </div>
                  {/* Sparkle decoration */}
                  <svg
                    className="absolute -top-4 -left-4 w-5 h-5 text-orange-300"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12,0 L13,9 L24,12 L13,15 L12,24 L11,15 L0,12 L11,9 Z" />
                  </svg>
                  {/* Icon container */}
                  <div className="relative w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg shadow-orange-200 group-hover:scale-110 transition-transform duration-300">
                    <Truck className="w-7 h-7 text-white" />
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-slate-900 mb-2">
                  Delivered
                </h4>
                <p className="text-sm text-slate-500 font-light max-w-[160px]">
                  Fresh meals arrive at your door perfectly timed
                </p>
              </div>
            </div>
          </div>

          {/* Bottom CTA hint */}
          <div className="text-center mt-12">
            <p className="text-sm text-slate-400 font-light">
              Scroll down to learn more about each step
            </p>
            <svg
              className="w-6 h-6 mx-auto mt-2 text-slate-300 animate-bounce"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                d="M12,5 L12,19 M5,12 L12,19 L19,12"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* Detailed Process */}
      <section className="py-24 px-4 relative">
        {/* Decorative elements */}
        <svg
          className="absolute top-20 right-10 w-20 h-20 text-orange-100"
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

        <div className="container mx-auto max-w-6xl">
          <div className="space-y-32">
            {/* Step 1 */}
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="relative">
                {/* Step number background */}
                <div className="absolute -top-8 -left-4 text-[120px] font-bold text-slate-100 leading-none select-none">
                  01
                </div>
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-orange-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg shadow-orange-200">
                      <MessageSquare className="w-7 h-7 text-white" />
                    </div>
                    <h2 className="text-3xl font-semibold text-slate-900 tracking-tight">
                      Describe Your Perfect Meal
                    </h2>
                  </div>
                  <p className="text-lg text-slate-500 mb-8 font-light leading-relaxed">
                    Start by telling our AI exactly what you're craving. Use
                    natural language to describe your dietary needs,
                    preferences, budget, or even your mood. Our AI understands
                    context and nuance.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center text-slate-600">
                      <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <Check className="w-3.5 h-3.5 text-orange-500" />
                      </div>
                      <span>Natural language processing</span>
                    </div>
                    <div className="flex items-center text-slate-600">
                      <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <Check className="w-3.5 h-3.5 text-orange-500" />
                      </div>
                      <span>Dietary restriction recognition</span>
                    </div>
                    <div className="flex items-center text-slate-600">
                      <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <Check className="w-3.5 h-3.5 text-orange-500" />
                      </div>
                      <span>Mood and context understanding</span>
                    </div>
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
                  <CardHeader className="bg-gradient-to-r from-slate-50 to-white border-b border-slate-100">
                    <CardTitle className="text-slate-900 flex items-center text-lg">
                      <Search className="w-5 h-5 mr-3 text-orange-500" />
                      Example Prompts
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 pt-6">
                    <div className="bg-orange-50 rounded-2xl p-4 border border-orange-100 hover:border-orange-200 transition-colors">
                      <p className="text-sm text-slate-700 leading-relaxed">
                        "I want something healthy but comforting, under 1800
                        calories, with lots of vegetables"
                      </p>
                    </div>
                    <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 hover:border-slate-200 transition-colors">
                      <p className="text-sm text-slate-700 leading-relaxed">
                        "Keto-friendly dinner for date night, budget around
                        \$40"
                      </p>
                    </div>
                    <div className="bg-orange-50 rounded-2xl p-4 border border-orange-100 hover:border-orange-200 transition-colors">
                      <p className="text-sm text-slate-700 leading-relaxed">
                        "Post-workout meal with high protein and complex carbs"
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Step 2 */}
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="relative md:order-2">
                {/* Step number background */}
                <div className="absolute -top-8 -left-4 text-[120px] font-bold text-slate-100 leading-none select-none">
                  02
                </div>
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl flex items-center justify-center shadow-lg shadow-slate-200">
                      <Brain className="w-7 h-7 text-white" />
                    </div>
                    <h2 className="text-3xl font-semibold text-slate-900 tracking-tight">
                      AI Analyzes & Creates
                    </h2>
                  </div>
                  <p className="text-lg text-slate-500 mb-8 font-light leading-relaxed">
                    Our advanced AI processes your request by analyzing hundreds
                    of local restaurant menus, nutritional databases, and your
                    personal preferences to create the perfect meal combination.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center text-slate-600">
                      <div className="w-6 h-6 bg-slate-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <Check className="w-3.5 h-3.5 text-slate-600" />
                      </div>
                      <span>Real-time menu scanning</span>
                    </div>
                    <div className="flex items-center text-slate-600">
                      <div className="w-6 h-6 bg-slate-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <Check className="w-3.5 h-3.5 text-slate-600" />
                      </div>
                      <span>Nutritional optimization</span>
                    </div>
                    <div className="flex items-center text-slate-600">
                      <div className="w-6 h-6 bg-slate-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <Check className="w-3.5 h-3.5 text-slate-600" />
                      </div>
                      <span>Flavor profile matching</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative md:order-1">
                {/* Corner decorations */}
                <svg
                  className="absolute -bottom-4 -left-4 w-8 h-8 text-slate-300"
                  viewBox="0 0 30 30"
                >
                  <circle
                    cx="15"
                    cy="15"
                    r="10"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <circle cx="15" cy="15" r="4" fill="currentColor" />
                </svg>

                <Card className="bg-white border-2 border-slate-100 rounded-3xl shadow-xl shadow-slate-100/50 overflow-hidden">
                  <CardHeader className="bg-gradient-to-r from-slate-50 to-white border-b border-slate-100">
                    <CardTitle className="text-slate-900 flex items-center text-lg">
                      <Sparkles className="w-5 h-5 mr-3 text-slate-600" />
                      AI Analysis Process
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 pt-6">
                    <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
                      <span className="text-slate-700 font-medium">
                        Menu Analysis
                      </span>
                      <div className="w-20 h-2 bg-slate-200 rounded-full overflow-hidden">
                        <div className="w-full h-full bg-gradient-to-r from-orange-400 to-orange-500 rounded-full animate-pulse"></div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
                      <span className="text-slate-700 font-medium">
                        Nutritional Matching
                      </span>
                      <div className="w-20 h-2 bg-slate-200 rounded-full overflow-hidden">
                        <div className="w-4/5 h-full bg-gradient-to-r from-slate-500 to-slate-600 rounded-full animate-pulse"></div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
                      <span className="text-slate-700 font-medium">
                        Preference Learning
                      </span>
                      <div className="w-20 h-2 bg-slate-200 rounded-full overflow-hidden">
                        <div className="w-3/5 h-full bg-gradient-to-r from-orange-400 to-orange-500 rounded-full animate-pulse"></div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Step 3 */}
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="relative">
                {/* Step number background */}
                <div className="absolute -top-8 -left-4 text-[120px] font-bold text-slate-100 leading-none select-none">
                  03
                </div>
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-orange-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg shadow-orange-200">
                      <Truck className="w-7 h-7 text-white" />
                    </div>
                    <h2 className="text-3xl font-semibold text-slate-900 tracking-tight">
                      Coordinated Delivery
                    </h2>
                  </div>
                  <p className="text-lg text-slate-500 mb-8 font-light leading-relaxed">
                    We coordinate with multiple restaurants to prepare your
                    custom meal components and deliver everything together,
                    perfectly timed and temperature-controlled for the best
                    experience.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center text-slate-600">
                      <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <Check className="w-3.5 h-3.5 text-orange-500" />
                      </div>
                      <span>Multi-restaurant coordination</span>
                    </div>
                    <div className="flex items-center text-slate-600">
                      <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <Check className="w-3.5 h-3.5 text-orange-500" />
                      </div>
                      <span>Temperature-controlled delivery</span>
                    </div>
                    <div className="flex items-center text-slate-600">
                      <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <Check className="w-3.5 h-3.5 text-orange-500" />
                      </div>
                      <span>Real-time tracking</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                {/* Corner decorations */}
                <svg
                  className="absolute -top-4 -right-4 w-6 h-6 text-orange-300"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12,0 L13,9 L24,12 L13,15 L12,24 L11,15 L0,12 L11,9 Z" />
                </svg>

                <Card className="bg-white border-2 border-slate-100 rounded-3xl shadow-xl shadow-slate-100/50 overflow-hidden">
                  <CardHeader className="bg-gradient-to-r from-slate-50 to-white border-b border-slate-100">
                    <CardTitle className="text-slate-900 flex items-center text-lg">
                      <Route className="w-5 h-5 mr-3 text-orange-500" />
                      Delivery Timeline
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="flex flex-col items-center">
                          <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center">
                            <Clock className="w-5 h-5 text-orange-500" />
                          </div>
                          <div className="w-0.5 h-8 bg-slate-200 mt-2"></div>
                        </div>
                        <div className="pt-2">
                          <p className="text-slate-700 font-medium">
                            Order placed
                          </p>
                          <p className="text-slate-400 text-sm">
                            Restaurants notified instantly
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="flex flex-col items-center">
                          <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center">
                            <Utensils className="w-5 h-5 text-slate-600" />
                          </div>
                          <div className="w-0.5 h-8 bg-slate-200 mt-2"></div>
                        </div>
                        <div className="pt-2">
                          <p className="text-slate-700 font-medium">
                            Preparation begins
                          </p>
                          <p className="text-slate-400 text-sm">
                            Synchronized cooking times
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="flex flex-col items-center">
                          <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center">
                            <MapPin className="w-5 h-5 text-slate-600" />
                          </div>
                          <div className="w-0.5 h-8 bg-slate-200 mt-2"></div>
                        </div>
                        <div className="pt-2">
                          <p className="text-slate-700 font-medium">
                            Coordinated pickup
                          </p>
                          <p className="text-slate-400 text-sm">
                            Optimal route planning
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="flex flex-col items-center">
                          <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center">
                            <Star className="w-5 h-5 text-white" />
                          </div>
                        </div>
                        <div className="pt-2">
                          <p className="text-slate-700 font-medium">
                            Perfect delivery
                          </p>
                          <p className="text-slate-400 text-sm">
                            Fresh, hot, and on time
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Behind */}
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

        <div className="absolute top-1/2 left-20 w-2 h-2 bg-orange-300 rounded-full opacity-50"></div>
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-slate-300 rounded-full opacity-40"></div>

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
                The Technology Behind NOM
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
              Advanced AI and machine learning power every aspect of our service
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white border-2 border-slate-100 shadow-none hover:shadow-xl hover:border-orange-200 transition-all duration-300 rounded-3xl overflow-hidden group relative">
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-orange-200 rounded-tr-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <CardHeader>
                <div className="w-14 h-14 bg-gradient-to-br from-orange-100 to-orange-50 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Brain className="w-7 h-7 text-orange-500" />
                </div>
                <CardTitle className="text-slate-900 font-semibold text-xl">
                  Natural Language Processing
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-500 font-light leading-relaxed text-base">
                  Advanced NLP models understand context, dietary restrictions,
                  preferences, and even emotional cues in your meal requests.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-white border-2 border-slate-100 shadow-none hover:shadow-xl hover:border-orange-200 transition-all duration-300 rounded-3xl overflow-hidden group relative">
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-slate-200 rounded-tr-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <CardHeader>
                <div className="w-14 h-14 bg-gradient-to-br from-slate-100 to-slate-50 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Search className="w-7 h-7 text-slate-600" />
                </div>
                <CardTitle className="text-slate-900 font-semibold text-xl">
                  Menu Intelligence
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-500 font-light leading-relaxed text-base">
                  Real-time analysis of restaurant menus, ingredients,
                  nutritional data, and availability across our partner network.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-white border-2 border-slate-100 shadow-none hover:shadow-xl hover:border-orange-200 transition-all duration-300 rounded-3xl overflow-hidden group relative">
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-orange-200 rounded-tr-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <CardHeader>
                <div className="w-14 h-14 bg-gradient-to-br from-orange-100 to-orange-50 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Star className="w-7 h-7 text-orange-500" />
                </div>
                <CardTitle className="text-slate-900 font-semibold text-xl">
                  Personalization Engine
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-500 font-light leading-relaxed text-base">
                  Machine learning algorithms that adapt to your preferences,
                  dietary needs, and feedback to improve recommendations.
                </CardDescription>
              </CardContent>
            </Card>
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
                Ready to Experience the Magic?
              </h2>
              <p className="text-slate-300 text-lg mb-8 font-light max-w-xl mx-auto">
                Start your journey to perfectly crafted meals with just a simple
                prompt.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-orange-500 text-white hover:bg-orange-600 text-base px-10 py-6 rounded-full font-medium shadow-lg shadow-orange-500/25 group"
                >
                  Try NOM Now
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Link href="/features">
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-transparent text-white border-2 border-white/20 hover:bg-white/10 text-base px-10 py-6 rounded-full font-medium"
                  >
                    Explore Features
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-50 border-t border-slate-200 py-16 px-4 relative">
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
