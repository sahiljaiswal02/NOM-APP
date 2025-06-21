import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Check, Star, Zap, Crown, Rocket } from "lucide-react";
import { Navbar } from "@/components/navbar";
import Link from "next/link";

export default function PricingPage() {
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
            <Star className="w-4 h-4 mr-1" />
            Simple, Transparent Pricing 💰
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-slate-800">
            Choose Your{" "}
            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 bg-clip-text text-transparent wiggle inline-block">
              Perfect Plan
            </span>{" "}
            🎯
          </h1>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed">
            From casual dining to gourmet experiences, we have a plan that fits
            your lifestyle and budget! ✨
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 px-4 relative z-[2]">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Starter Plan */}
            <Card className="bg-white border-4 border-orange-200 doodle-blob hover:border-orange-300 transition-all duration-300 relative">
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-300 doodle-circle bounce-gentle"></div>
              <CardHeader className="text-center pb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-orange-500 doodle-circle flex items-center justify-center mx-auto mb-4 wiggle">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-slate-800 mb-2">
                  Starter 🌱
                </CardTitle>
                <CardDescription className="text-slate-600">
                  Perfect for trying NOM
                </CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-slate-800">
                    $9.99
                  </span>
                  <span className="text-slate-500">/month</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center text-slate-700">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span>5 AI-crafted meals per month 🍽️</span>
                </div>
                <div className="flex items-center text-slate-700">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span>Basic dietary preferences 🥗</span>
                </div>
                <div className="flex items-center text-slate-700">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span>Standard delivery 🚚</span>
                </div>
                <div className="flex items-center text-slate-700">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span>Email support 📧</span>
                </div>
                <div className="flex items-center text-slate-700">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span>Mobile app access 📱</span>
                </div>
                <Button className="w-full mt-6 bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white rounded-full py-6 font-bold">
                  Get Started 🚀
                </Button>
              </CardContent>
            </Card>

            {/* Pro Plan */}
            <Card className="bg-white border-4 border-pink-300 doodle-blob relative transform scale-105 hover:border-pink-400 transition-all duration-300">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-gradient-to-r from-pink-400 to-purple-400 text-white px-4 py-1 rounded-full font-bold">
                  Most Popular 🔥
                </Badge>
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-300 doodle-circle bounce-gentle"></div>
              <CardHeader className="text-center pb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-purple-400 doodle-circle flex items-center justify-center mx-auto mb-4 bounce-gentle">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-slate-800 mb-2">
                  Pro ⭐
                </CardTitle>
                <CardDescription className="text-slate-600">
                  For regular NOM users
                </CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-slate-800">
                    $24.99
                  </span>
                  <span className="text-slate-500">/month</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center text-slate-700">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span>15 AI-crafted meals per month 🍽️</span>
                </div>
                <div className="flex items-center text-slate-700">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span>Advanced dietary optimization 🎯</span>
                </div>
                <div className="flex items-center text-slate-700">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span>Priority delivery ⚡</span>
                </div>
                <div className="flex items-center text-slate-700">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span>Nutritional tracking 📊</span>
                </div>
                <div className="flex items-center text-slate-700">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span>Group ordering 👥</span>
                </div>
                <div className="flex items-center text-slate-700">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span>24/7 chat support 💬</span>
                </div>
                <Button className="w-full mt-6 bg-gradient-to-r from-pink-400 to-purple-400 hover:from-pink-500 hover:to-purple-500 text-white rounded-full py-6 font-bold">
                  Choose Pro 🌟
                </Button>
              </CardContent>
            </Card>

            {/* Premium Plan */}
            <Card className="bg-white border-4 border-purple-200 doodle-blob hover:border-purple-300 transition-all duration-300 relative">
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-pink-300 doodle-circle bounce-gentle"></div>
              <CardHeader className="text-center pb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-purple-500 doodle-circle flex items-center justify-center mx-auto mb-4 float">
                  <Crown className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-slate-800 mb-2">
                  Premium 👑
                </CardTitle>
                <CardDescription className="text-slate-600">
                  Ultimate NOM experience
                </CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-slate-800">
                    $49.99
                  </span>
                  <span className="text-slate-500">/month</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center text-slate-700">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span>Unlimited AI-crafted meals ∞</span>
                </div>
                <div className="flex items-center text-slate-700">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span>Personal nutrition consultant 👨‍⚕️</span>
                </div>
                <div className="flex items-center text-slate-700">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span>Express delivery (30 min) 🏃‍♂️</span>
                </div>
                <div className="flex items-center text-slate-700">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span>Premium restaurant access 🏆</span>
                </div>
                <div className="flex items-center text-slate-700">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span>Health app integrations 📱</span>
                </div>
                <div className="flex items-center text-slate-700">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span>Dedicated account manager 🤵</span>
                </div>
                <Button className="w-full mt-6 bg-gradient-to-r from-purple-400 to-purple-500 hover:from-purple-500 hover:to-purple-600 text-white rounded-full py-6 font-bold">
                  Go Premium 👑
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Enterprise Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-orange-100 via-pink-100 to-purple-100 relative z-[2]">
        <div className="container mx-auto max-w-4xl">
          <Card className="bg-white border-4 border-teal-200 doodle-blob relative">
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-300 doodle-circle bounce-gentle"></div>
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-teal-400 to-teal-500 doodle-circle flex items-center justify-center mx-auto mb-4 wiggle">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-3xl text-slate-800 mb-2">
                Enterprise 🏢
              </CardTitle>
              <CardDescription className="text-xl text-slate-600">
                Custom solutions for teams and organizations
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div>
                  <h4 className="font-bold text-slate-800 mb-2">
                    Team Management 👥
                  </h4>
                  <p className="text-slate-600 text-sm">
                    Centralized billing and meal coordination for your entire
                    team
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 mb-2">
                    Custom Integration 🔧
                  </h4>
                  <p className="text-slate-600 text-sm">
                    API access and custom integrations with your existing
                    systems
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 mb-2">
                    Analytics & Insights 📊
                  </h4>
                  <p className="text-slate-600 text-sm">
                    Detailed reporting on team nutrition and spending patterns
                  </p>
                </div>
              </div>
              <Button
                size="lg"
                variant="outline"
                className="bg-white text-slate-700 border-3 border-teal-300 hover:bg-teal-50 rounded-full px-8 py-4 font-bold"
              >
                Contact Sales 📞
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 relative z-[2]">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-slate-800">
              Frequently Asked Questions 🤔
            </h2>
            <p className="text-xl text-slate-600">
              Everything you need to know about NOM pricing
            </p>
          </div>

          <div className="space-y-6">
            <Card className="bg-white border-4 border-orange-200 doodle-blob">
              <CardHeader>
                <CardTitle className="text-slate-800">
                  Can I change my plan anytime? 🔄
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-600">
                  Yes! You can upgrade or downgrade your plan at any time.
                  Changes take effect at the start of your next billing cycle,
                  and we'll prorate any differences! ✨
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-white border-4 border-pink-200 doodle-blob">
              <CardHeader>
                <CardTitle className="text-slate-800">
                  What happens if I don't use all my meals? 🍽️
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-600">
                  Unused meals roll over to the next month (up to 5 meals for
                  Starter, 10 for Pro). Premium users have unlimited meals, so
                  this doesn't apply! 🔄
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-white border-4 border-purple-200 doodle-blob">
              <CardHeader>
                <CardTitle className="text-slate-800">
                  Are there any delivery fees? 🚚
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-600">
                  Delivery fees are included in your subscription. However,
                  you'll still pay for the actual food from restaurants at their
                  menu prices! 💰
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-white border-4 border-teal-200 doodle-blob">
              <CardHeader>
                <CardTitle className="text-slate-800">
                  Can I cancel anytime? ❌
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-600">
                  There are no long-term contracts. You can cancel your
                  subscription at any time, and you'll continue to have access
                  until the end of your current billing period! 🗓️
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-orange-200 via-pink-200 to-purple-200 relative">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-4xl font-bold mb-6 text-slate-800">
            Ready to Start Your Journey? 🚀
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            Join thousands of satisfied customers and transform the way you eat
            with AI-powered meal creation! 🌟
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-400 to-pink-400 hover:from-orange-500 hover:to-pink-500 text-white text-lg px-8 py-6 rounded-full font-bold doodle-squiggle"
            >
              Start Free Trial 🎉
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="bg-white text-slate-700 border-3 border-orange-300 hover:bg-orange-50 text-lg px-8 py-6 rounded-full font-bold"
              >
                Contact Sales 📞
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
