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
            Features That{" "}
            <span className="relative inline-block">
              <span className="text-orange-500">Transform</span>
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
            Dining
          </h1>

          <p className="text-lg md:text-xl text-slate-500 mb-8 leading-relaxed max-w-2xl mx-auto font-light">
            Discover the advanced capabilities that make NOM the most
            intelligent meal delivery platform ever created.
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
                  Smart Meal Composition
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-500 font-light leading-relaxed text-base mb-5">
                  AI understands complex dietary requirements and creates
                  balanced meals that meet your exact specifications with
                  scientific precision.
                </CardDescription>
                <div className="space-y-3">
                  <div className="flex items-center text-slate-600 text-sm">
                    <div className="w-5 h-5 bg-orange-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <Check className="w-3 h-3 text-orange-500" />
                    </div>
                    <span>Macro and micronutrient optimization</span>
                  </div>
                  <div className="flex items-center text-slate-600 text-sm">
                    <div className="w-5 h-5 bg-orange-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <Check className="w-3 h-3 text-orange-500" />
                    </div>
                    <span>Dietary restriction compliance</span>
                  </div>
                  <div className="flex items-center text-slate-600 text-sm">
                    <div className="w-5 h-5 bg-orange-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <Check className="w-3 h-3 text-orange-500" />
                    </div>
                    <span>Flavor profile balancing</span>
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
                  Local Restaurant Network
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-500 font-light leading-relaxed text-base mb-5">
                  Access to 200+ local restaurants with real-time menu data,
                  availability, and quality ratings for the freshest options.
                </CardDescription>
                <div className="space-y-3">
                  <div className="flex items-center text-slate-600 text-sm">
                    <div className="w-5 h-5 bg-slate-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <Check className="w-3 h-3 text-slate-600" />
                    </div>
                    <span>Real-time menu updates</span>
                  </div>
                  <div className="flex items-center text-slate-600 text-sm">
                    <div className="w-5 h-5 bg-slate-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <Check className="w-3 h-3 text-slate-600" />
                    </div>
                    <span>Quality and rating tracking</span>
                  </div>
                  <div className="flex items-center text-slate-600 text-sm">
                    <div className="w-5 h-5 bg-slate-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <Check className="w-3 h-3 text-slate-600" />
                    </div>
                    <span>Ingredient freshness monitoring</span>
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
                  Synchronized Delivery
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-500 font-light leading-relaxed text-base mb-5">
                  Coordinated pickup and delivery from multiple restaurants so
                  your entire meal arrives hot, fresh, and perfectly timed.
                </CardDescription>
                <div className="space-y-3">
                  <div className="flex items-center text-slate-600 text-sm">
                    <div className="w-5 h-5 bg-orange-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <Check className="w-3 h-3 text-orange-500" />
                    </div>
                    <span>Multi-restaurant coordination</span>
                  </div>
                  <div className="flex items-center text-slate-600 text-sm">
                    <div className="w-5 h-5 bg-orange-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <Check className="w-3 h-3 text-orange-500" />
                    </div>
                    <span>Temperature-controlled transport</span>
                  </div>
                  <div className="flex items-center text-slate-600 text-sm">
                    <div className="w-5 h-5 bg-orange-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <Check className="w-3 h-3 text-orange-500" />
                    </div>
                    <span>Precise timing algorithms</span>
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
                  Nutritional Intelligence
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-500 font-light leading-relaxed text-base mb-5">
                  Precise calorie counting, macro tracking, and dietary
                  restriction compliance built into every meal recommendation.
                </CardDescription>
                <div className="space-y-3">
                  <div className="flex items-center text-slate-600 text-sm">
                    <div className="w-5 h-5 bg-slate-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <Check className="w-3 h-3 text-slate-600" />
                    </div>
                    <span>Accurate nutritional analysis</span>
                  </div>
                  <div className="flex items-center text-slate-600 text-sm">
                    <div className="w-5 h-5 bg-slate-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <Check className="w-3 h-3 text-slate-600" />
                    </div>
                    <span>Allergen detection & avoidance</span>
                  </div>
                  <div className="flex items-center text-slate-600 text-sm">
                    <div className="w-5 h-5 bg-slate-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <Check className="w-3 h-3 text-slate-600" />
                    </div>
                    <span>Health goal alignment</span>
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
                  Personalized Learning
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-500 font-light leading-relaxed text-base mb-5">
                  AI learns your preferences over time, making better
                  recommendations and discovering new favorites you'll love.
                </CardDescription>
                <div className="space-y-3">
                  <div className="flex items-center text-slate-600 text-sm">
                    <div className="w-5 h-5 bg-orange-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <Check className="w-3 h-3 text-orange-500" />
                    </div>
                    <span>Preference pattern recognition</span>
                  </div>
                  <div className="flex items-center text-slate-600 text-sm">
                    <div className="w-5 h-5 bg-orange-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <Check className="w-3 h-3 text-orange-500" />
                    </div>
                    <span>Adaptive recommendation engine</span>
                  </div>
                  <div className="flex items-center text-slate-600 text-sm">
                    <div className="w-5 h-5 bg-orange-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <Check className="w-3 h-3 text-orange-500" />
                    </div>
                    <span>Surprise & discovery features</span>
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
                  Quality Guarantee
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-500 font-light leading-relaxed text-base mb-5">
                  Every meal is quality-checked against your requirements with a
                  satisfaction guarantee and easy reordering.
                </CardDescription>
                <div className="space-y-3">
                  <div className="flex items-center text-slate-600 text-sm">
                    <div className="w-5 h-5 bg-slate-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <Check className="w-3 h-3 text-slate-600" />
                    </div>
                    <span>Pre-delivery quality checks</span>
                  </div>
                  <div className="flex items-center text-slate-600 text-sm">
                    <div className="w-5 h-5 bg-slate-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <Check className="w-3 h-3 text-slate-600" />
                    </div>
                    <span>100% satisfaction guarantee</span>
                  </div>
                  <div className="flex items-center text-slate-600 text-sm">
                    <div className="w-5 h-5 bg-slate-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <Check className="w-3 h-3 text-slate-600" />
                    </div>
                    <span>Instant feedback & improvements</span>
                  </div>
                </div>
              </CardContent>
            </Card>
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
                Traditional Food Delivery
              </h3>
              <div className="space-y-4">
                <div className="flex items-center text-slate-400">
                  <div className="w-6 h-6 border-2 border-slate-300 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <X className="w-3 h-3 text-slate-400" />
                  </div>
                  <span className="font-light">
                    Browse endless menus manually
                  </span>
                </div>
                <div className="flex items-center text-slate-400">
                  <div className="w-6 h-6 border-2 border-slate-300 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <X className="w-3 h-3 text-slate-400" />
                  </div>
                  <span className="font-light">
                    Guess nutritional information
                  </span>
                </div>
                <div className="flex items-center text-slate-400">
                  <div className="w-6 h-6 border-2 border-slate-300 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <X className="w-3 h-3 text-slate-400" />
                  </div>
                  <span className="font-light">
                    Order from single restaurant
                  </span>
                </div>
                <div className="flex items-center text-slate-400">
                  <div className="w-6 h-6 border-2 border-slate-300 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <X className="w-3 h-3 text-slate-400" />
                  </div>
                  <span className="font-light">No dietary optimization</span>
                </div>
                <div className="flex items-center text-slate-400">
                  <div className="w-6 h-6 border-2 border-slate-300 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <X className="w-3 h-3 text-slate-400" />
                  </div>
                  <span className="font-light">Generic recommendations</span>
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
                NOM AI Platform
              </h3>
              <div className="space-y-4">
                <div className="flex items-center text-slate-700">
                  <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span>AI creates perfect meals from prompts</span>
                </div>
                <div className="flex items-center text-slate-700">
                  <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span>Precise nutritional optimization</span>
                </div>
                <div className="flex items-center text-slate-700">
                  <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span>Multi-restaurant coordination</span>
                </div>
                <div className="flex items-center text-slate-700">
                  <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span>Dietary restriction compliance</span>
                </div>
                <div className="flex items-center text-slate-700">
                  <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span>Personalized learning & adaptation</span>
                </div>
              </div>
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
                Experience the Future of Food
              </h2>
              <p className="text-slate-300 text-lg mb-8 font-light max-w-xl mx-auto">
                Join thousands of food lovers who've discovered the perfect way
                to eat with AI-powered meal curation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact">
                  <Button
                    size="lg"
                    className="bg-orange-500 text-white hover:bg-orange-600 text-base px-10 py-6 rounded-full font-medium shadow-lg shadow-orange-500/25 group"
                  >
                    Get Started Now
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>

                <Link href="/how-it-works">
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-transparent text-white border-2 border-white/20 hover:bg-white/10 text-base px-10 py-6 rounded-full font-medium"
                  >
                    Learn How It Works
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
