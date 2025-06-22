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
  Users,
  TrendingUp,
  Heart,
  Smartphone,
} from "lucide-react";
import { Navbar } from "@/components/navbar";
import Link from "next/link";

export default function FeaturesPage() {
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
            <Zap className="w-4 h-4 mr-1" />
            Powerful Features ⚡
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-slate-800">
            Features That{" "}
            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 bg-clip-text text-transparent wiggle inline-block">
              Transform
            </span>{" "}
            Dining 🍽️
          </h1>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed">
            Discover the advanced capabilities that make NOM the most
            intelligent meal delivery platform ever created! ✨
          </p>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20 px-4 relative z-[2]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-slate-800">
              Core AI Features 🧠
            </h2>
            <p className="text-xl text-slate-600">
              The intelligence that powers your perfect meal
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white border-4 border-orange-200 doodle-blob hover:shadow-xl hover:border-orange-300 transition-all duration-300 group relative">
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-300 doodle-circle bounce-gentle"></div>
              <CardHeader>
                <Brain className="w-12 h-12 text-orange-500 mb-3 group-hover:scale-110 transition-transform wiggle" />
                <CardTitle className="text-slate-800 text-lg">
                  Smart Meal Composition 🎯
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-600 mb-4">
                  AI understands complex dietary requirements and creates
                  balanced meals that meet your exact specifications with
                  scientific precision! 🔬
                </CardDescription>
                <div className="space-y-2">
                  <div className="flex items-center text-green-600 text-sm">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    <span>Macro and micronutrient optimization 📊</span>
                  </div>
                  <div className="flex items-center text-green-600 text-sm">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    <span>Dietary restriction compliance ✅</span>
                  </div>
                  <div className="flex items-center text-green-600 text-sm">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    <span>Flavor profile balancing 😋</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-4 border-pink-200 doodle-blob hover:shadow-xl hover:border-pink-300 transition-all duration-300 group relative">
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-300 doodle-circle bounce-gentle"></div>
              <CardHeader>
                <MapPin className="w-12 h-12 text-pink-500 mb-3 group-hover:scale-110 transition-transform bounce-gentle" />
                <CardTitle className="text-slate-800 text-lg">
                  Local Restaurant Network 🏪
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-600 mb-4">
                  Access to 200+ local restaurants with real-time menu data,
                  availability, and quality ratings for the freshest options! 🌟
                </CardDescription>
                <div className="space-y-2">
                  <div className="flex items-center text-green-600 text-sm">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    <span>Real-time menu updates 🔄</span>
                  </div>
                  <div className="flex items-center text-green-600 text-sm">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    <span>Quality and rating tracking ⭐</span>
                  </div>
                  <div className="flex items-center text-green-600 text-sm">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    <span>Ingredient freshness monitoring 🌱</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-4 border-purple-200 doodle-blob hover:shadow-xl hover:border-purple-300 transition-all duration-300 group relative">
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-pink-300 doodle-circle bounce-gentle"></div>
              <CardHeader>
                <Clock className="w-12 h-12 text-purple-500 mb-3 group-hover:scale-110 transition-transform float" />
                <CardTitle className="text-slate-800 text-lg">
                  Synchronized Delivery ⏰
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-600 mb-4">
                  Coordinated pickup and delivery from multiple restaurants so
                  your entire meal arrives hot, fresh, and perfectly timed! 🚚
                </CardDescription>
                <div className="space-y-2">
                  <div className="flex items-center text-green-600 text-sm">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    <span>Multi-restaurant coordination 🤝</span>
                  </div>
                  <div className="flex items-center text-green-600 text-sm">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    <span>Temperature-controlled transport ❄️</span>
                  </div>
                  <div className="flex items-center text-green-600 text-sm">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    <span>Precise timing algorithms ⚡</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-4 border-teal-200 doodle-blob hover:shadow-xl hover:border-teal-300 transition-all duration-300 group relative">
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-orange-300 doodle-circle bounce-gentle"></div>
              <CardHeader>
                <Utensils className="w-12 h-12 text-teal-500 mb-3 group-hover:scale-110 transition-transform wiggle" />
                <CardTitle className="text-slate-800 text-lg">
                  Nutritional Intelligence 🍎
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-600 mb-4">
                  Precise calorie counting, macro tracking, and dietary
                  restriction compliance built into every meal recommendation!
                  📊
                </CardDescription>
                <div className="space-y-2">
                  <div className="flex items-center text-green-600 text-sm">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    <span>Accurate nutritional analysis 🔍</span>
                  </div>
                  <div className="flex items-center text-green-600 text-sm">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    <span>Allergen detection & avoidance ⚠️</span>
                  </div>
                  <div className="flex items-center text-green-600 text-sm">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    <span>Health goal alignment 🎯</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-4 border-yellow-200 doodle-blob hover:shadow-xl hover:border-yellow-300 transition-all duration-300 group relative">
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-blue-300 doodle-circle bounce-gentle"></div>
              <CardHeader>
                <Star className="w-12 h-12 text-yellow-500 mb-3 group-hover:scale-110 transition-transform bounce-gentle" />
                <CardTitle className="text-slate-800 text-lg">
                  Personalized Learning 🌟
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-600 mb-4">
                  AI learns your preferences over time, making better
                  recommendations and discovering new favorites you'll love! 🤖
                </CardDescription>
                <div className="space-y-2">
                  <div className="flex items-center text-green-600 text-sm">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    <span>Preference pattern recognition 🧠</span>
                  </div>
                  <div className="flex items-center text-green-600 text-sm">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    <span>Adaptive recommendation engine 🔄</span>
                  </div>
                  <div className="flex items-center text-green-600 text-sm">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    <span>Surprise & discovery features 🎁</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-4 border-emerald-200 doodle-blob hover:shadow-xl hover:border-emerald-300 transition-all duration-300 group relative">
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-purple-300 doodle-circle bounce-gentle"></div>
              <CardHeader>
                <Shield className="w-12 h-12 text-emerald-500 mb-3 group-hover:scale-110 transition-transform float" />
                <CardTitle className="text-slate-800 text-lg">
                  Quality Guarantee 🛡️
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-600 mb-4">
                  Every meal is quality-checked against your requirements with a
                  satisfaction guarantee and easy reordering! ✅
                </CardDescription>
                <div className="space-y-2">
                  <div className="flex items-center text-green-600 text-sm">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    <span>Pre-delivery quality checks 🔍</span>
                  </div>
                  <div className="flex items-center text-green-600 text-sm">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    <span>100% satisfaction guarantee 💯</span>
                  </div>
                  <div className="flex items-center text-green-600 text-sm">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    <span>Instant feedback & improvements 📈</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-20 px-4 relative z-[2]">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-slate-800">
              Why Choose NOM? 🤔
            </h2>
            <p className="text-xl text-slate-600">
              See how we compare to traditional food delivery
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white border-4 border-gray-300 doodle-blob">
              <CardHeader>
                <CardTitle className="text-slate-800 text-center text-lg">
                  Traditional Food Delivery 😴
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center text-slate-500">
                  <div className="w-4 h-4 border-2 border-slate-400 rounded mr-3"></div>
                  <span>Browse endless menus manually 📚</span>
                </div>
                <div className="flex items-center text-slate-500">
                  <div className="w-4 h-4 border-2 border-slate-400 rounded mr-3"></div>
                  <span>Guess nutritional information 🤷‍♂️</span>
                </div>
                <div className="flex items-center text-slate-500">
                  <div className="w-4 h-4 border-2 border-slate-400 rounded mr-3"></div>
                  <span>Order from single restaurant 🏪</span>
                </div>
                <div className="flex items-center text-slate-500">
                  <div className="w-4 h-4 border-2 border-slate-400 rounded mr-3"></div>
                  <span>No dietary optimization ❌</span>
                </div>
                <div className="flex items-center text-slate-500">
                  <div className="w-4 h-4 border-2 border-slate-400 rounded mr-3"></div>
                  <span>Generic recommendations 😐</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-orange-100 to-pink-100 border-4 border-orange-300 doodle-blob relative">
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-300 doodle-circle bounce-gentle"></div>
              <CardHeader>
                <CardTitle className="text-slate-800 text-center text-lg">
                  NOM AI Platform 🚀
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center text-green-600">
                  <CheckCircle className="w-4 h-4 mr-3" />
                  <span>AI creates perfect meals from prompts 🤖</span>
                </div>
                <div className="flex items-center text-green-600">
                  <CheckCircle className="w-4 h-4 mr-3" />
                  <span>Precise nutritional optimization 🎯</span>
                </div>
                <div className="flex items-center text-green-600">
                  <CheckCircle className="w-4 h-4 mr-3" />
                  <span>Multi-restaurant coordination 🤝</span>
                </div>
                <div className="flex items-center text-green-600">
                  <CheckCircle className="w-4 h-4 mr-3" />
                  <span>Dietary restriction compliance ✅</span>
                </div>
                <div className="flex items-center text-green-600">
                  <CheckCircle className="w-4 h-4 mr-3" />
                  <span>Personalized learning & adaptation 🧠</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
