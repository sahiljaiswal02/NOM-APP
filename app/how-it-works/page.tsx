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
  CheckCircle,
  Clock,
  MapPin,
  Star,
} from "lucide-react";
import { Navbar } from "@/components/navbar";
import Link from "next/link";

export default function HowItWorksPage() {
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
            <Brain className="w-4 h-4 mr-1" />
            The Science Behind NOM 🔬
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-slate-800">
            How{" "}
            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 bg-clip-text text-transparent wiggle inline-block">
              NOM
            </span>{" "}
            Works ⚡
          </h1>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed">
            Discover the advanced AI technology and seamless process that
            transforms your cravings into perfectly crafted meals! 🎯
          </p>
        </div>
      </section>

      {/* Rest of the content with similar doodleify styling... */}
      {/* I'll continue with the key sections */}

      {/* Detailed Process */}
      <section className="py-20 px-4 relative z-[2]">
        <div className="container mx-auto max-w-6xl">
          <div className="space-y-20">
            {/* Step 1 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-orange-500 doodle-circle flex items-center justify-center mr-4 wiggle">
                    <span className="text-2xl font-bold text-white">1</span>
                  </div>
                  <h2 className="text-3xl font-bold text-slate-800">
                    Describe Your Perfect Meal 🗣️
                  </h2>
                </div>
                <p className="text-lg text-slate-600 mb-6">
                  Start by telling our AI exactly what you're craving. Use
                  natural language to describe your dietary needs, preferences,
                  budget, or even your mood. Our AI understands context and
                  nuance! 🎯
                </p>
                <div className="space-y-4">
                  <div className="flex items-center text-green-600">
                    <CheckCircle className="w-5 h-5 mr-3" />
                    <span>Natural language processing 🧠</span>
                  </div>
                  <div className="flex items-center text-green-600">
                    <CheckCircle className="w-5 h-5 mr-3" />
                    <span>Dietary restriction recognition 🥗</span>
                  </div>
                  <div className="flex items-center text-green-600">
                    <CheckCircle className="w-5 h-5 mr-3" />
                    <span>Mood and context understanding 😊</span>
                  </div>
                </div>
              </div>
              <Card className="bg-white border-4 border-orange-200 doodle-blob relative">
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-300 doodle-circle bounce-gentle"></div>
                <CardHeader>
                  <CardTitle className="text-slate-800 flex items-center">
                    <Search className="w-5 h-5 mr-2 text-orange-500" />
                    Example Prompts 💭
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-orange-100 rounded-2xl p-3 border-2 border-orange-200">
                    <p className="text-sm text-slate-700">
                      "I want something healthy but comforting, under 1800
                      calories, with lots of vegetables 🥬"
                    </p>
                  </div>
                  <div className="bg-pink-100 rounded-2xl p-3 border-2 border-pink-200">
                    <p className="text-sm text-slate-700">
                      "Keto-friendly dinner for date night, budget around $40
                      💕"
                    </p>
                  </div>
                  <div className="bg-purple-100 rounded-2xl p-3 border-2 border-purple-200">
                    <p className="text-sm text-slate-700">
                      "Post-workout meal with high protein and complex carbs 💪"
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Step 2 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <Card className="bg-white border-4 border-pink-200 doodle-blob relative md:order-1">
                <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-green-300 doodle-circle bounce-gentle"></div>
                <CardHeader>
                  <CardTitle className="text-slate-800 flex items-center">
                    <Brain className="w-5 h-5 mr-2 text-pink-500" />
                    AI Analysis Process 🧠
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-pink-50 rounded-2xl border-2 border-pink-100">
                    <span className="text-slate-700">Menu Analysis 🍽️</span>
                    <div className="w-16 h-2 bg-pink-200 rounded-full overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-r from-pink-400 to-purple-400 animate-pulse"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-pink-50 rounded-2xl border-2 border-pink-100">
                    <span className="text-slate-700">
                      Nutritional Matching 🍎
                    </span>
                    <div className="w-16 h-2 bg-pink-200 rounded-full overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-r from-pink-400 to-purple-400 animate-pulse delay-200"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-pink-50 rounded-2xl border-2 border-pink-100">
                    <span className="text-slate-700">
                      Preference Learning 🌟
                    </span>
                    <div className="w-16 h-2 bg-pink-200 rounded-full overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-r from-pink-400 to-purple-400 animate-pulse delay-400"></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <div className="md:order-2">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-pink-500 doodle-circle flex items-center justify-center mr-4 wiggle">
                    <span className="text-2xl font-bold text-white">2</span>
                  </div>
                  <h2 className="text-3xl font-bold text-slate-800">
                    AI Analyzes & Creates ✨
                  </h2>
                </div>
                <p className="text-lg text-slate-600 mb-6">
                  Our advanced AI processes your request by analyzing hundreds
                  of local restaurant menus, nutritional databases, and your
                  personal preferences to create the perfect meal combination!
                  🎯
                </p>
                <div className="space-y-4">
                  <div className="flex items-center text-green-600">
                    <CheckCircle className="w-5 h-5 mr-3" />
                    <span>Real-time menu scanning 🔍</span>
                  </div>
                  <div className="flex items-center text-green-600">
                    <CheckCircle className="w-5 h-5 mr-3" />
                    <span>Nutritional optimization 🍎</span>
                  </div>
                  <div className="flex items-center text-green-600">
                    <CheckCircle className="w-5 h-5 mr-3" />
                    <span>Flavor profile matching 😋</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-purple-500 doodle-circle flex items-center justify-center mr-4 wiggle">
                    <span className="text-2xl font-bold text-white">3</span>
                  </div>
                  <h2 className="text-3xl font-bold text-slate-800">
                    Coordinated Delivery 🚚
                  </h2>
                </div>
                <p className="text-lg text-slate-600 mb-6">
                  We coordinate with multiple restaurants to prepare your custom
                  meal components and deliver everything together, perfectly
                  timed and temperature-controlled for the best experience! 🌟
                </p>
                <div className="space-y-4">
                  <div className="flex items-center text-green-600">
                    <CheckCircle className="w-5 h-5 mr-3" />
                    <span>Multi-restaurant coordination 🤝</span>
                  </div>
                  <div className="flex items-center text-green-600">
                    <CheckCircle className="w-5 h-5 mr-3" />
                    <span>Temperature-controlled delivery ❄️</span>
                  </div>
                  <div className="flex items-center text-green-600">
                    <CheckCircle className="w-5 h-5 mr-3" />
                    <span>Real-time tracking 📍</span>
                  </div>
                </div>
              </div>
              <Card className="bg-white border-4 border-purple-200 doodle-blob relative">
                <div className="absolute -top-2 -left-2 w-6 h-6 bg-orange-300 doodle-circle bounce-gentle"></div>
                <CardHeader>
                  <CardTitle className="text-slate-800 flex items-center">
                    <Truck className="w-5 h-5 mr-2 text-purple-500" />
                    Delivery Timeline ⏰
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Clock className="w-4 h-4 text-purple-500" />
                    <span className="text-slate-700">
                      Order placed & restaurants notified 🔔
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Utensils className="w-4 h-4 text-purple-500" />
                    <span className="text-slate-700">
                      Synchronized preparation begins 🧑‍🍳
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-4 h-4 text-purple-500" />
                    <span className="text-slate-700">
                      Coordinated pickup & delivery 📍
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Star className="w-4 h-4 text-purple-500" />
                    <span className="text-slate-700">
                      Perfect meal delivered 🎉
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Behind */}
      <section className="py-20 px-4 bg-gradient-to-r from-orange-100 via-pink-100 to-purple-100 relative z-[2]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-slate-800">
              The Technology Behind NOM 🚀
            </h2>
            <p className="text-xl text-slate-600">
              Advanced AI and machine learning power every aspect of our
              service! ✨
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white border-4 border-orange-200 doodle-blob">
              <CardHeader>
                <Brain className="w-12 h-12 text-orange-500 mb-3" />
                <CardTitle className="text-slate-800">
                  Natural Language Processing 🗣️
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-600">
                  Advanced NLP models understand context, dietary restrictions,
                  preferences, and even emotional cues in your meal requests! 🧠
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-white border-4 border-pink-200 doodle-blob">
              <CardHeader>
                <Search className="w-12 h-12 text-pink-500 mb-3" />
                <CardTitle className="text-slate-800">
                  Menu Intelligence 🍽️
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-600">
                  Real-time analysis of restaurant menus, ingredients,
                  nutritional data, and availability across our partner network!
                  🔍
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-white border-4 border-purple-200 doodle-blob">
              <CardHeader>
                <Star className="w-12 h-12 text-purple-500 mb-3" />
                <CardTitle className="text-slate-800">
                  Personalization Engine 🌟
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-600">
                  Machine learning algorithms that adapt to your preferences,
                  dietary needs, and feedback to improve recommendations over
                  time! 🤖
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
