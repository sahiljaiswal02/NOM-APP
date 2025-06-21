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

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50">
      <Navbar />

      {/* Floating Doodle Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-[1]">
        <div className="absolute top-20 left-10 w-16 h-16 bg-yellow-200 doodle-circle opacity-60 float"></div>
        <div className="absolute top-40 right-20 w-12 h-12 bg-green-200 doodle-blob opacity-50 bounce-gentle"></div>
        <div className="absolute bottom-40 left-20 w-20 h-20 bg-blue-200 doodle-circle opacity-40 wiggle"></div>
        <div className="absolute bottom-20 right-10 w-14 h-14 bg-pink-200 doodle-blob opacity-60 float"></div>
        <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-purple-200 doodle-circle opacity-30 bounce-gentle"></div>
        <div className="absolute top-1/3 right-1/3 w-10 h-10 bg-orange-200 doodle-blob opacity-40 wiggle"></div>
      </div>

      {/* Hero Section */}
      <section className="py-20 px-4 relative z-[2]">
        <div className="container mx-auto text-center max-w-5xl">
          <Badge className="mb-6 bg-gradient-to-r from-orange-200 to-pink-200 text-orange-700 border-2 border-orange-300 rounded-full px-4 py-2 doodle-squiggle">
            <Sparkles className="w-4 h-4 mr-1" />
            AI-Powered Meal Magic ✨
          </Badge>

          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight text-slate-800">
            Your Perfect Meal,{" "}
            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 bg-clip-text text-transparent wiggle inline-block">
              One Prompt Away
            </span>
            <span className="text-4xl">🍽️</span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-600 mb-12 leading-relaxed max-w-3xl mx-auto">
            Simply describe what you want to eat, and our AI will craft the
            perfect meal from local restaurant menus and deliver it to your door
            in perfect harmony! 🎯
          </p>

          {/* Interactive Example */}
          <div className="bg-white rounded-3xl shadow-xl p-8 mb-12 max-w-3xl mx-auto border-4 border-orange-200 doodle-blob relative">
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-300 doodle-circle bounce-gentle"></div>
            <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-green-300 doodle-blob wiggle"></div>

            <div className="flex items-center mb-4">
              <div className="flex space-x-2">
                <div className="w-4 h-4 bg-red-400 doodle-circle"></div>
                <div className="w-4 h-4 bg-yellow-400 doodle-circle"></div>
                <div className="w-4 h-4 bg-green-400 doodle-circle"></div>
              </div>
              <span className="ml-4 text-slate-500 text-sm font-medium">
                NOM AI Terminal 🤖
              </span>
            </div>
            <div className="text-left">
              <p className="text-slate-500 text-sm mb-3 font-medium">
                Try typing something like:
              </p>
              <div className="bg-gradient-to-r from-orange-100 to-pink-100 rounded-2xl p-4 mb-4 border-2 border-orange-200">
                <p className="text-lg font-mono text-slate-700">
                  {">"} "Alkaline meal below 2k calories with lean protein and
                  Mediterranean vibes 🌿"
                </p>
              </div>
              <div className="flex items-center text-green-600 bg-green-100 rounded-2xl p-3 border-2 border-green-200">
                <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0" />
                <span className="text-sm font-medium">
                  AI analyzing 200+ local restaurants • Perfect match found •
                  Delivery coordinated! 🚀
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              variant="outline"
              className="bg-white text-slate-700 border-3 border-orange-300 hover:bg-orange-50 text-lg px-10 py-6 rounded-full font-bold"
            >
              Watch Demo 📺
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works Preview */}
      <section className="py-20 px-4 bg-gradient-to-r from-orange-100 to-pink-100 relative z-[2]">
        <div className="absolute top-10 left-10 w-12 h-12 bg-yellow-300 doodle-blob opacity-50 float"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 bg-blue-300 doodle-circle opacity-40 bounce-gentle"></div>

        <div className="container mx-auto max-w-6xl relative z-[2]">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-800">
              How NOM Works 🔮
            </h2>
            <p className="text-xl text-slate-600">
              Three simple steps to culinary perfection
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white border-4 border-orange-200 doodle-blob hover:border-orange-300 transition-all duration-300 transform hover:scale-105 relative overflow-hidden">
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-300 doodle-circle"></div>
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-orange-400 to-orange-500 doodle-circle flex items-center justify-center mx-auto mb-4 shadow-lg float">
                  <span className="text-3xl font-bold text-white">1</span>
                </div>
                <CardTitle className="text-xl text-slate-800">
                  Describe Your Craving 🗣️
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-slate-600">
                  Tell our AI exactly what you want using natural language. Be
                  as specific or creative as you like - dietary needs, calories,
                  cuisine, mood, anything! 🎯
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-white border-4 border-pink-200 doodle-blob hover:border-pink-300 transition-all duration-300 transform hover:scale-105 relative overflow-hidden">
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-300 doodle-circle"></div>
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-pink-400 to-pink-500 doodle-circle flex items-center justify-center mx-auto mb-4 shadow-lg bounce-gentle">
                  <span className="text-3xl font-bold text-white">2</span>
                </div>
                <CardTitle className="text-xl text-slate-800">
                  AI Crafts Your Meal 🤖
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-slate-600">
                  Our advanced AI analyzes hundreds of local restaurant menus,
                  nutritional data, and your preferences to create the perfect
                  meal combination! ⚡
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-white border-4 border-purple-200 doodle-blob hover:border-purple-300 transition-all duration-300 transform hover:scale-105 relative overflow-hidden">
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-pink-300 doodle-circle"></div>
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-400 to-purple-500 doodle-circle flex items-center justify-center mx-auto mb-4 shadow-lg float">
                  <span className="text-3xl font-bold text-white">3</span>
                </div>
                <CardTitle className="text-xl text-slate-800">
                  Perfectly Delivered 🚚
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-slate-600">
                  We coordinate with multiple restaurants to prepare your custom
                  meal and deliver everything together, perfectly timed and
                  temperature-controlled! 🌡️
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link href="/how-it-works">
              <Button
                variant="outline"
                className="bg-white text-slate-700 border-3 border-orange-300 hover:bg-orange-50 rounded-full px-8 py-4 font-bold"
              >
                Learn More About Our Magic Process ✨
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="py-20 px-4 relative z-[2]">
        <div className="absolute top-20 right-20 w-10 h-10 bg-green-300 doodle-blob opacity-50 wiggle"></div>
        <div className="absolute bottom-20 left-20 w-14 h-14 bg-yellow-300 doodle-circle opacity-40 float"></div>

        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-800">
              Powered by Advanced AI 🧠
            </h2>
            <p className="text-xl text-slate-600">
              Features that make meal planning effortless and exciting
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white border-4 border-orange-200 doodle-blob hover:shadow-xl hover:border-orange-300 transition-all duration-300 relative">
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-300 doodle-circle"></div>
              <CardHeader>
                <Brain className="w-12 h-12 text-orange-500 mb-3 wiggle" />
                <CardTitle className="text-slate-800">
                  Smart Meal Composition 🎯
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-600">
                  AI understands complex dietary requirements and creates
                  balanced meals that meet your exact specifications with
                  scientific precision! 🔬
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-white border-4 border-pink-200 doodle-blob hover:shadow-xl hover:border-pink-300 transition-all duration-300 relative">
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-300 doodle-circle"></div>
              <CardHeader>
                <MapPin className="w-12 h-12 text-pink-500 mb-3 bounce-gentle" />
                <CardTitle className="text-slate-800">
                  Local Restaurant Network 🏪
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-600">
                  Access to 200+ local restaurants with real-time menu data,
                  availability, and quality ratings for the freshest options! 🌟
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-white border-4 border-purple-200 doodle-blob hover:shadow-xl hover:border-purple-300 transition-all duration-300 relative">
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-pink-300 doodle-circle"></div>
              <CardHeader>
                <Clock className="w-12 h-12 text-purple-500 mb-3 float" />
                <CardTitle className="text-slate-800">
                  Synchronized Delivery ⏰
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-600">
                  Coordinated pickup and delivery from multiple restaurants so
                  your entire meal arrives hot, fresh, and perfectly timed! 🚚
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link href="/features">
              <Button
                variant="outline"
                className="bg-white text-slate-700 border-3 border-pink-300 hover:bg-pink-50 rounded-full px-8 py-4 font-bold"
              >
                Explore All Amazing Features 🚀
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t-4 border-orange-200 py-16 px-4 relative z-[2]">
        <div className="absolute top-5 left-5 w-6 h-6 bg-yellow-300 doodle-circle opacity-50"></div>
        <div className="absolute top-5 right-5 w-8 h-8 bg-green-300 doodle-blob opacity-40"></div>

        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Link href="/" className="flex items-center space-x-2">
                  <img
                    src="/logo.png"
                    className="w-20 h-12 bg-cover"
                    alt="NOM"
                  />
                </Link>
              </div>
              <p className="text-slate-600 mb-4">
                AI-powered meal creation and delivery for the modern lifestyle!
              </p>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-purple-200 doodle-circle flex items-center justify-center hover:bg-purple-300 transition-colors cursor-pointer">
                  <Link
                    href="https://www.linkedin.com/company/nom-app/?viewAsMember=true"
                    target="_blank"
                  >
                    <span className="text-xs text-slate-700">in</span>
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-bold mb-4 text-slate-800">Product 🛍️</h3>
              <ul className="gap-20 text-slate-600 flex">
                <li>
                  <Link
                    href="/how-it-works"
                    className="hover:text-orange-500 transition-colors"
                  >
                    How it Works
                  </Link>
                </li>
                <li>
                  <Link
                    href="/features"
                    className="hover:text-orange-500 transition-colors"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="hover:text-orange-500 transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-orange-500 transition-colors"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t-2 border-orange-200 mt-12 pt-8 text-center text-slate-600">
            <p>
              &copy; 2026 NomApp. All rights reserved. Nom is currently raising
              its pre-seed round.
              <Link href="/contact">
                <span className="text-red-500"> Reach out to us</span>
              </Link>{" "}
              for investment opportunities.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
