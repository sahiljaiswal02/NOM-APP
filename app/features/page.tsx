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
  MapPin,
  Clock,
  Utensils,
  Star,
  CheckCircle,
  Zap,
  Shield,
  Check,
  X,
} from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Link from "next/link";

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="py-24 px-4 relative">
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-24 h-24 border-2 border-orange-200 rounded-full opacity-50"></div>
        <div className="absolute top-32 right-16 w-3 h-3 bg-orange-400 rounded-full"></div>
        <div className="absolute top-24 right-24 w-2 h-2 bg-slate-300 rounded-full"></div>

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

        {/* Decorative star */}
        <svg
          className="absolute top-40 right-1/4 w-8 h-8 text-orange-300 opacity-60"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12,0 L14,10 L24,12 L14,14 L12,24 L10,14 L0,12 L10,10 Z" />
        </svg>

        {/* Grid pattern */}
        <div className="absolute top-1/2 right-10 grid grid-cols-3 gap-2 opacity-30">
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
            <Zap className="w-4 h-4 mr-2" />
            Powerful Features
          </Badge>

          <h1 className="text-5xl md:text-6xl font-semibold mb-6 leading-tight text-slate-900 tracking-tight">
            The Universal{" "}
            <span className="relative inline-block">
              <span className="text-orange-500">Meal Intelligence</span>
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
            Engine
          </h1>

          <p className="text-lg md:text-xl text-slate-500 mb-8 leading-relaxed max-w-2xl mx-auto font-light">
            A sophisticated plugin that interprets any prompt—emotional,
            physical, situational, dietary—and instantly delivers personalized
            meal recommendations.
          </p>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20 px-4 bg-gradient-to-b from-slate-50 to-white relative">
        {/* Decorative elements */}
        <svg
          className="absolute top-10 left-10 w-20 h-20 text-orange-100"
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
                Core AI Features
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
              The intelligence that powers your perfect meal
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature Card 1 */}
            <Card className="bg-white border-2 border-slate-100 shadow-none hover:shadow-xl hover:border-orange-200 transition-all duration-300 rounded-3xl overflow-hidden group relative">
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-orange-200 rounded-tr-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <CardHeader className="pb-2">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-100 to-orange-50 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Brain className="w-7 h-7 text-orange-500" />
                </div>
                <CardTitle className="text-slate-900 font-semibold text-xl">
                  Emotional + Intent-Based Discovery
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-500 font-light leading-relaxed text-base mb-5">
                  Understanding psychological states and translating them into
                  nourishment. Match situational context with optimal meal
                  choices.
                </CardDescription>
                <div className="space-y-3">
                  <div className="flex items-center text-slate-600 text-sm">
                    <div className="w-5 h-5 bg-orange-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <Check className="w-3 h-3 text-orange-500" />
                    </div>
                    <span>Mood-based meal matching</span>
                  </div>
                  <div className="flex items-center text-slate-600 text-sm">
                    <div className="w-5 h-5 bg-orange-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <Check className="w-3 h-3 text-orange-500" />
                    </div>
                    <span>Situational context understanding</span>
                  </div>
                  <div className="flex items-center text-slate-600 text-sm">
                    <div className="w-5 h-5 bg-orange-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <Check className="w-3 h-3 text-orange-500" />
                    </div>
                    <span>Energy and intuition alignment</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Feature Card 2 */}
            <Card className="bg-white border-2 border-slate-100 shadow-none hover:shadow-xl hover:border-orange-200 transition-all duration-300 rounded-3xl overflow-hidden group relative">
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-slate-200 rounded-tr-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <CardHeader className="pb-2">
                <div className="w-14 h-14 bg-gradient-to-br from-slate-100 to-slate-50 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <MapPin className="w-7 h-7 text-slate-600" />
                </div>
                <CardTitle className="text-slate-900 font-semibold text-xl">
                  Curated Suggestions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-500 font-light leading-relaxed text-base mb-5">
                  Best meals matched to the moment—uplifting food, grounding
                  food, energizing options tailored to your body and mood.
                </CardDescription>
                <div className="space-y-3">
                  <div className="flex items-center text-slate-600 text-sm">
                    <div className="w-5 h-5 bg-slate-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <Check className="w-3 h-3 text-slate-600" />
                    </div>
                    <span>Intelligent meal curation</span>
                  </div>
                  <div className="flex items-center text-slate-600 text-sm">
                    <div className="w-5 h-5 bg-slate-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <Check className="w-3 h-3 text-slate-600" />
                    </div>
                    <span>Moment-specific recommendations</span>
                  </div>
                  <div className="flex items-center text-slate-600 text-sm">
                    <div className="w-5 h-5 bg-slate-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <Check className="w-3 h-3 text-slate-600" />
                    </div>
                    <span>Cuisine preference matching</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Feature Card 3 */}
            <Card className="bg-white border-2 border-slate-100 shadow-none hover:shadow-xl hover:border-orange-200 transition-all duration-300 rounded-3xl overflow-hidden group relative">
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-orange-200 rounded-tr-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <CardHeader className="pb-2">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-100 to-orange-50 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Clock className="w-7 h-7 text-orange-500" />
                </div>
                <CardTitle className="text-slate-900 font-semibold text-xl">
                  Seamless Integration
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-500 font-light leading-relaxed text-base mb-5">
                  Connected to Uber Eats, Grab, DoorDash, and more. Plugin
                  connects directly to delivery platforms for instant
                  fulfillment.
                </CardDescription>
                <div className="space-y-3">
                  <div className="flex items-center text-slate-600 text-sm">
                    <div className="w-5 h-5 bg-orange-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <Check className="w-3 h-3 text-orange-500" />
                    </div>
                    <span>Multi-platform connectivity</span>
                  </div>
                  <div className="flex items-center text-slate-600 text-sm">
                    <div className="w-5 h-5 bg-orange-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <Check className="w-3 h-3 text-orange-500" />
                    </div>
                    <span>One-click ordering</span>
                  </div>
                  <div className="flex items-center text-slate-600 text-sm">
                    <div className="w-5 h-5 bg-orange-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <Check className="w-3 h-3 text-orange-500" />
                    </div>
                    <span>Real-time availability</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Feature Card 4 */}
            <Card className="bg-white border-2 border-slate-100 shadow-none hover:shadow-xl hover:border-orange-200 transition-all duration-300 rounded-3xl overflow-hidden group relative">
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-slate-200 rounded-tr-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <CardHeader className="pb-2">
                <div className="w-14 h-14 bg-gradient-to-br from-slate-100 to-slate-50 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Utensils className="w-7 h-7 text-slate-600" />
                </div>
                <CardTitle className="text-slate-900 font-semibold text-xl">
                  Natural Language Processing
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-500 font-light leading-relaxed text-base mb-5">
                  Conversational prompts that capture nuanced human needs. Say
                  what you feel, and we understand what you need.
                </CardDescription>
                <div className="space-y-3">
                  <div className="flex items-center text-slate-600 text-sm">
                    <div className="w-5 h-5 bg-slate-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <Check className="w-3 h-3 text-slate-600" />
                    </div>
                    <span>Context-aware interpretation</span>
                  </div>
                  <div className="flex items-center text-slate-600 text-sm">
                    <div className="w-5 h-5 bg-slate-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <Check className="w-3 h-3 text-slate-600" />
                    </div>
                    <span>Emotional cue recognition</span>
                  </div>
                  <div className="flex items-center text-slate-600 text-sm">
                    <div className="w-5 h-5 bg-slate-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <Check className="w-3 h-3 text-slate-600" />
                    </div>
                    <span>Dietary restriction parsing</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Feature Card 5 */}
            <Card className="bg-white border-2 border-slate-100 shadow-none hover:shadow-xl hover:border-orange-200 transition-all duration-300 rounded-3xl overflow-hidden group relative">
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-orange-200 rounded-tr-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <CardHeader className="pb-2">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-100 to-orange-50 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Star className="w-7 h-7 text-orange-500" />
                </div>
                <CardTitle className="text-slate-900 font-semibold text-xl">
                  LLM Personalization
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-500 font-light leading-relaxed text-base mb-5">
                  Deep learning that evolves with individual preferences,
                  understanding your unique relationship with food over time.
                </CardDescription>
                <div className="space-y-3">
                  <div className="flex items-center text-slate-600 text-sm">
                    <div className="w-5 h-5 bg-orange-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <Check className="w-3 h-3 text-orange-500" />
                    </div>
                    <span>Individual preference learning</span>
                  </div>
                  <div className="flex items-center text-slate-600 text-sm">
                    <div className="w-5 h-5 bg-orange-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <Check className="w-3 h-3 text-orange-500" />
                    </div>
                    <span>Adaptive taste profiling</span>
                  </div>
                  <div className="flex items-center text-slate-600 text-sm">
                    <div className="w-5 h-5 bg-orange-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <Check className="w-3 h-3 text-orange-500" />
                    </div>
                    <span>Continuous improvement</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Feature Card 6 */}
            <Card className="bg-white border-2 border-slate-100 shadow-none hover:shadow-xl hover:border-orange-200 transition-all duration-300 rounded-3xl overflow-hidden group relative">
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-slate-200 rounded-tr-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <CardHeader className="pb-2">
                <div className="w-14 h-14 bg-gradient-to-br from-slate-100 to-slate-50 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Shield className="w-7 h-7 text-slate-600" />
                </div>
                <CardTitle className="text-slate-900 font-semibold text-xl">
                  Privacy & Trust
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-500 font-light leading-relaxed text-base mb-5">
                  Your data stays yours. We use your preferences only to improve
                  recommendations—never sold, never shared.
                </CardDescription>
                <div className="space-y-3">
                  <div className="flex items-center text-slate-600 text-sm">
                    <div className="w-5 h-5 bg-slate-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <Check className="w-3 h-3 text-slate-600" />
                    </div>
                    <span>End-to-end encryption</span>
                  </div>
                  <div className="flex items-center text-slate-600 text-sm">
                    <div className="w-5 h-5 bg-slate-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <Check className="w-3 h-3 text-slate-600" />
                    </div>
                    <span>No data selling, ever</span>
                  </div>
                  <div className="flex items-center text-slate-600 text-sm">
                    <div className="w-5 h-5 bg-slate-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <Check className="w-3 h-3 text-slate-600" />
                    </div>
                    <span>Full transparency & control</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* User Benefits Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-slate-50 to-white relative">
        {/* Decorative elements */}
        <svg
          className="absolute top-10 left-10 w-20 h-20 text-orange-100"
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

        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-4">
              Why Users Love NOM
            </h2>
            <p className="text-lg text-slate-500 font-light max-w-2xl mx-auto">
              Real benefits that make every meal decision effortless and every
              bite more satisfying.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-slate-100 hover:border-orange-200 hover:shadow-lg transition-all duration-300 text-center">
              <div className="text-3xl font-bold text-orange-500 mb-2">30s</div>
              <p className="text-slate-600 font-light text-sm">
                From opening the app to finding your perfect meal
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-100 hover:border-orange-200 hover:shadow-lg transition-all duration-300 text-center">
              <div className="text-3xl font-bold text-slate-700 mb-2">Zero</div>
              <p className="text-slate-600 font-light text-sm">
                Decision fatigue—NOM handles the thinking for you
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-100 hover:border-orange-200 hover:shadow-lg transition-all duration-300 text-center">
              <div className="text-3xl font-bold text-orange-500 mb-2">
                100%
              </div>
              <p className="text-slate-600 font-light text-sm">
                Personalised to your mood, body, and lifestyle
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-100 hover:border-orange-200 hover:shadow-lg transition-all duration-300 text-center">
              <div className="text-3xl font-bold text-slate-700 mb-2">∞</div>
              <p className="text-slate-600 font-light text-sm">
                New discoveries—meals you never knew you needed
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-24 px-4 relative">
        {/* Decorative elements */}
        <div className="absolute top-20 left-1/4 w-2 h-2 bg-orange-300 rounded-full opacity-40"></div>
        <div className="absolute top-40 right-1/4 w-3 h-3 bg-slate-300 rounded-full opacity-30"></div>
        <div className="absolute bottom-32 left-1/3 w-2 h-2 bg-orange-400 rounded-full opacity-30"></div>

        <svg
          className="absolute top-16 right-20 w-16 h-16 text-orange-100"
          viewBox="0 0 80 80"
        >
          <circle
            cx="40"
            cy="40"
            r="35"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="6 4"
          />
        </svg>

        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block relative">
              <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-4">
                Why Choose NOM?
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
              See how we compare to traditional food delivery
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Traditional */}
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 relative">
              <div className="absolute -top-3 left-8">
                <span className="bg-slate-200 text-slate-600 text-xs font-medium px-3 py-1 rounded-full">
                  Traditional
                </span>
              </div>
              <h3 className="text-xl font-semibold text-slate-400 text-center mb-8 mt-2">
                Traditional Delivery Apps
              </h3>
              <div className="space-y-4">
                <div className="flex items-center text-slate-400">
                  <div className="w-6 h-6 border-2 border-slate-300 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <X className="w-3 h-3 text-slate-400" />
                  </div>
                  <span className="font-light">
                    Endless scrolling through categories
                  </span>
                </div>
                <div className="flex items-center text-slate-400">
                  <div className="w-6 h-6 border-2 border-slate-300 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <X className="w-3 h-3 text-slate-400" />
                  </div>
                  <span className="font-light">
                    Decision fatigue and reactive eating
                  </span>
                </div>
                <div className="flex items-center text-slate-400">
                  <div className="w-6 h-6 border-2 border-slate-300 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <X className="w-3 h-3 text-slate-400" />
                  </div>
                  <span className="font-light">
                    Ignores mood, energy, and intuition
                  </span>
                </div>
                <div className="flex items-center text-slate-400">
                  <div className="w-6 h-6 border-2 border-slate-300 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <X className="w-3 h-3 text-slate-400" />
                  </div>
                  <span className="font-light">No emotional understanding</span>
                </div>
                <div className="flex items-center text-slate-400">
                  <div className="w-6 h-6 border-2 border-slate-300 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <X className="w-3 h-3 text-slate-400" />
                  </div>
                  <span className="font-light">
                    Shows only categories or restaurants
                  </span>
                </div>
              </div>
            </div>

            {/* NOM */}
            <div className="bg-gradient-to-br from-orange-50 to-white rounded-3xl p-8 border-2 border-orange-200 relative shadow-lg shadow-orange-100/50">
              {/* Corner decoration */}
              <svg
                className="absolute -top-3 -right-3 w-8 h-8 text-orange-400"
                viewBox="0 0 30 30"
              >
                <circle cx="15" cy="15" r="10" fill="currentColor" />
              </svg>
              <svg
                className="absolute -bottom-2 -left-2 w-6 h-6 text-orange-300"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12,0 L13,9 L24,12 L13,15 L12,24 L11,15 L0,12 L11,9 Z" />
              </svg>

              <div className="absolute -top-3 left-8">
                <span className="bg-orange-500 text-white text-xs font-medium px-3 py-1 rounded-full">
                  NOM AI
                </span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 text-center mb-8 mt-2">
                NOM Intelligence Engine
              </h3>
              <div className="space-y-4">
                <div className="flex items-center text-slate-700">
                  <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span>Intent-based meal discovery</span>
                </div>
                <div className="flex items-center text-slate-700">
                  <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span>Emotional & situational understanding</span>
                </div>
                <div className="flex items-center text-slate-700">
                  <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span>Natural language prompts</span>
                </div>
                <div className="flex items-center text-slate-700">
                  <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span>Deep personalization with LLM</span>
                </div>
                <div className="flex items-center text-slate-700">
                  <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span>Seamless platform integration</span>
                </div>
              </div>
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
