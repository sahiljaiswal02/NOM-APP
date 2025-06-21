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
  Award,
  Heart,
  Lightbulb,
} from "lucide-react";
import { Navbar } from "@/components/navbar";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50">
      <Navbar />

      {/* Floating Doodle Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-[1]">
        <div className="absolute top-20 left-10 w-16 h-16 bg-yellow-200 doodle-circle opacity-60 float"></div>
        <div className="absolute top-40 right-20 w-12 h-12 bg-green-200 doodle-blob opacity-50 bounce-gentle"></div>
        <div className="absolute bottom-40 left-20 w-20 h-20 bg-blue-200 doodle-circle opacity-40 wiggle"></div>
        <div className="absolute bottom-20 right-10 w-14 h-14 bg-pink-200 doodle-blob opacity-60 float"></div>
      </div>

      {/* Hero Section */}
      <section className="py-20 px-4 relative z-[2]">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge className="mb-6 bg-gradient-to-r from-orange-200 to-pink-200 text-orange-700 border-2 border-orange-300 rounded-full px-4 py-2">
            <Heart className="w-4 h-4 mr-1" />
            Our Story 📖
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-slate-800">
            Revolutionizing{" "}
            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 bg-clip-text text-transparent wiggle inline-block">
              Food Delivery
            </span>{" "}
            with AI 🤖
          </h1>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed">
            We believe everyone deserves to eat exactly what they want, when
            they want it. That's why we created NOM - the world's first
            AI-powered meal creation and delivery platform! 🌟
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 relative z-[2]">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-slate-800">
                Our Mission 🎯
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                To democratize access to perfect nutrition by making
                personalized, restaurant-quality meals available to everyone,
                regardless of their dietary needs, preferences, or cooking
                skills! 🍽️
              </p>
              <p className="text-lg text-slate-600 mb-8">
                We're not just delivering food - we're delivering health,
                convenience, and joy through the power of artificial
                intelligence! ✨
              </p>
              <div className="space-y-4">
                <div className="flex items-center text-green-600">
                  <Target className="w-5 h-5 mr-3" />
                  <span>Personalized nutrition for everyone 🥗</span>
                </div>
                <div className="flex items-center text-green-600">
                  <Brain className="w-5 h-5 mr-3" />
                  <span>AI-powered meal optimization 🧠</span>
                </div>
                <div className="flex items-center text-green-600">
                  <Users className="w-5 h-5 mr-3" />
                  <span>Supporting local restaurant communities 🏪</span>
                </div>
              </div>
            </div>
            <Card className="bg-white border-4 border-orange-200 doodle-blob relative">
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-300 doodle-circle bounce-gentle"></div>
              <CardContent className="p-8">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-orange-400 to-pink-400 doodle-circle flex items-center justify-center mx-auto mb-6 wiggle">
                    <Lightbulb className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-4">
                    The Idea 💡
                  </h3>
                  <p className="text-slate-600">
                    "What if we could describe our perfect meal in plain English
                    and have AI create it from the best local restaurants?" This
                    simple question sparked the creation of NOM in 2026! 🚀
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-orange-100 via-pink-100 to-purple-100 relative z-[2]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-slate-800">
              Our Values 💎
            </h2>
            <p className="text-xl text-slate-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white border-4 border-orange-200 doodle-blob text-center relative">
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-300 doodle-circle bounce-gentle"></div>
              <CardHeader>
                <Brain className="w-12 h-12 text-orange-500 mx-auto mb-3 wiggle" />
                <CardTitle className="text-slate-800">
                  Innovation First 🚀
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-600">
                  We push the boundaries of what's possible with AI and
                  technology to create experiences that seemed impossible just
                  years ago! ⚡
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-white border-4 border-pink-200 doodle-blob text-center relative">
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-300 doodle-circle bounce-gentle"></div>
              <CardHeader>
                <Users className="w-12 h-12 text-pink-500 mx-auto mb-3 bounce-gentle" />
                <CardTitle className="text-slate-800">
                  Community Focused 🤝
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-600">
                  We believe in supporting local restaurants and building
                  stronger food communities while serving our customers better!
                  🏪
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-white border-4 border-purple-200 doodle-blob text-center relative">
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-pink-300 doodle-circle bounce-gentle"></div>
              <CardHeader>
                <Heart className="w-12 h-12 text-purple-500 mx-auto mb-3 float" />
                <CardTitle className="text-slate-800">
                  Health & Wellness 💪
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-600">
                  Every meal we create is optimized not just for taste, but for
                  your health, dietary needs, and wellness goals! 🎯
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 relative z-[2]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-slate-800">
              Meet Our Team 👥
            </h2>
            <p className="text-xl text-slate-600">
              The brilliant minds behind NOM
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white border-4 border-orange-200 doodle-blob text-center relative">
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-300 doodle-circle bounce-gentle"></div>
              <CardHeader>
                <div className="w-24 h-24 bg-gradient-to-r from-orange-400 to-orange-500 doodle-circle mx-auto mb-4 flex items-center justify-center wiggle">
                  <span className="text-2xl font-bold text-white">AS</span>
                </div>
                <CardTitle className="text-slate-800">Alex Smith 👨‍💼</CardTitle>
                <CardDescription className="text-slate-600">
                  CEO & Co-Founder
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 text-sm">
                  Former Google AI researcher with 10+ years in machine
                  learning. Passionate about using AI to solve real-world
                  problems! 🧠
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-4 border-pink-200 doodle-blob text-center relative">
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-300 doodle-circle bounce-gentle"></div>
              <CardHeader>
                <div className="w-24 h-24 bg-gradient-to-r from-pink-400 to-pink-500 doodle-circle mx-auto mb-4 flex items-center justify-center bounce-gentle">
                  <span className="text-2xl font-bold text-white">MJ</span>
                </div>
                <CardTitle className="text-slate-800">
                  Maria Johnson 👩‍💻
                </CardTitle>
                <CardDescription className="text-slate-600">
                  CTO & Co-Founder
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 text-sm">
                  Ex-Uber engineering lead who built scalable food delivery
                  systems. Expert in logistics and real-time optimization! ⚡
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-4 border-pink-200 doodle-blob text-center relative">
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-300 doodle-circle bounce-gentle"></div>
              <CardHeader>
                <div className="w-24 h-24 bg-gradient-to-r from-pink-400 to-pink-500 doodle-circle mx-auto mb-4 flex items-center justify-center bounce-gentle">
                  <span className="text-2xl font-bold text-white">MJ</span>
                </div>
                <CardTitle className="text-slate-800">
                  Maria Johnson 👩‍💻
                </CardTitle>
                <CardDescription className="text-slate-600">
                  CTO & Co-Founder
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 text-sm">
                  Ex-Uber engineering lead who built scalable food delivery
                  systems. Expert in logistics and real-time optimization! ⚡
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-4 border-pink-200 doodle-blob text-center relative">
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-300 doodle-circle bounce-gentle"></div>
              <CardHeader>
                <div className="w-24 h-24 bg-gradient-to-r from-pink-400 to-pink-500 doodle-circle mx-auto mb-4 flex items-center justify-center bounce-gentle">
                  <span className="text-2xl font-bold text-white">MJ</span>
                </div>
                <CardTitle className="text-slate-800">
                  Maria Johnson 👩‍💻
                </CardTitle>
                <CardDescription className="text-slate-600">
                  CTO & Co-Founder
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 text-sm">
                  Ex-Uber engineering lead who built scalable food delivery
                  systems. Expert in logistics and real-time optimization! ⚡
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-4 border-purple-200 doodle-blob text-center relative">
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-pink-300 doodle-circle bounce-gentle"></div>
              <CardHeader>
                <div className="w-24 h-24 bg-gradient-to-r from-purple-400 to-purple-500 doodle-circle mx-auto mb-4 flex items-center justify-center float">
                  <span className="text-2xl font-bold text-white">DC</span>
                </div>
                <CardTitle className="text-slate-800">David Chen 👨‍⚕️</CardTitle>
                <CardDescription className="text-slate-600">
                  Head of Nutrition
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 text-sm">
                  Registered dietitian and former nutrition consultant for
                  professional athletes. Ensures every meal meets the highest
                  standards! 🏆
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
