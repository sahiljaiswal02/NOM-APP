"use client";

import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  ArrowRight,
  Mail,
  MessageSquare,
  Send,
  CheckCircle,
  Sparkles,
} from "lucide-react";
import { Navbar } from "@/components/navbar";
import Link from "next/link";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formDataToSend = new FormData();
    formDataToSend.append("entry.2056182173", formData.name);
    formDataToSend.append("entry.928305668", formData.email);
    formDataToSend.append("entry.184632566", formData.message);

    fetch(
      "https://docs.google.com/forms/d/e/1FAIpQLSdpqxcRYrFzKrQot5NaQu9YcuWSsfu5nUfUFD2Wmmm_NZHMSg/formResponse",
      {
        method: "POST",
        mode: "no-cors",
        body: formDataToSend,
      }
    )
      .then(() => {
        setIsSubmitted(true);
        setFormData({
          name: "",
          email: "",
          message: "",
        });
        setIsSubmitting(false);
      })
      .catch(() => {
        alert("Oops! Something went wrong. Please try again later.");
        setIsSubmitting(false);
      });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

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
            <MessageSquare className="w-4 h-4 mr-2" />
            Get in Touch
          </Badge>

          <h1 className="text-5xl md:text-6xl font-semibold mb-6 leading-tight text-slate-900 tracking-tight">
            Let's{" "}
            <span className="relative inline-block">
              <span className="text-orange-500">Connect</span>
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

          <p className="text-lg md:text-xl text-slate-500 mb-8 leading-relaxed max-w-2xl mx-auto font-light">
            NOM is currently raising its pre-seed round. Reach out to us for
            investment opportunities or any questions you might have.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 px-4 relative">
        {/* Decorative elements */}
        <svg
          className="absolute top-10 right-10 w-20 h-20 text-orange-100"
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
          className="absolute bottom-20 left-10 w-16 h-16 text-slate-200"
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
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <Card className="bg-white border-2 border-slate-100 rounded-3xl shadow-xl shadow-slate-100/50 overflow-hidden relative">
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

                <CardHeader className="pb-2">
                  <CardTitle className="text-2xl font-semibold text-slate-900">
                    Send us a Message
                  </CardTitle>
                  <CardDescription className="text-slate-500 font-light">
                    Fill out the form below and we'll get back to you within 24
                    hours.
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-4">
                  {isSubmitted ? (
                    <div className="py-12 text-center">
                      <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="w-8 h-8 text-orange-500" />
                      </div>
                      <h3 className="text-xl font-semibold text-slate-900 mb-2">
                        Message Sent!
                      </h3>
                      <p className="text-slate-500 font-light mb-6">
                        Thank you for reaching out. We'll get back to you soon.
                      </p>
                      <Button
                        onClick={() => setIsSubmitted(false)}
                        variant="outline"
                        className="bg-white text-slate-700 border-2 border-slate-200 hover:bg-slate-50 rounded-full px-6 py-2 font-medium"
                      >
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label
                            htmlFor="name"
                            className="text-slate-700 font-medium text-sm"
                          >
                            Name
                          </Label>
                          <Input
                            id="name"
                            value={formData.name}
                            onChange={(e) =>
                              handleInputChange("name", e.target.value)
                            }
                            className="bg-slate-50 border-2 border-slate-200 text-slate-800 rounded-xl focus:border-orange-400 focus:ring-orange-400 h-12 transition-colors"
                            placeholder="Your name"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label
                            htmlFor="email"
                            className="text-slate-700 font-medium text-sm"
                          >
                            Email
                          </Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) =>
                              handleInputChange("email", e.target.value)
                            }
                            className="bg-slate-50 border-2 border-slate-200 text-slate-800 rounded-xl focus:border-orange-400 focus:ring-orange-400 h-12 transition-colors"
                            placeholder="your@email.com"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label
                          htmlFor="message"
                          className="text-slate-700 font-medium text-sm"
                        >
                          Message
                        </Label>
                        <Textarea
                          id="message"
                          value={formData.message}
                          onChange={(e) =>
                            handleInputChange("message", e.target.value)
                          }
                          className="bg-slate-50 border-2 border-slate-200 text-slate-800 rounded-xl min-h-[150px] focus:border-orange-400 focus:ring-orange-400 transition-colors resize-none"
                          placeholder="Tell us about your inquiry, investment interest, or any questions..."
                          required
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-slate-900 hover:bg-slate-800 text-white rounded-full py-6 font-medium text-base group transition-all disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <>
                            <svg
                              className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="lg:col-span-2 space-y-6">
              {/* Email Card */}
              <Card className="bg-gradient-to-br from-orange-50 to-white border-2 border-orange-100 rounded-3xl overflow-hidden relative group hover:shadow-lg hover:border-orange-200 transition-all duration-300">
                <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-orange-200 rounded-tr-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <CardContent className="p-8">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 bg-orange-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-orange-200">
                      <Mail className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-1">
                        Email Us
                      </h3>
                      <p className="text-slate-500 font-light text-sm mb-3">
                        We typically respond within 24 hours
                      </p>
                      <a
                        href="mailto:nomapp@proton.me"
                        className="text-orange-500 font-medium hover:text-orange-600 transition-colors"
                      >
                        nomapp@proton.me
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Investment Card */}
              <Card className="bg-gradient-to-br from-slate-900 to-slate-800 border-0 rounded-3xl overflow-hidden relative">
                {/* Background decorations */}
                <div className="absolute top-0 left-0 w-full h-full opacity-10">
                  <div className="absolute top-4 right-4 w-20 h-20 border border-white rounded-full"></div>
                  <div className="absolute bottom-4 left-4 w-12 h-12 border border-white rounded-full"></div>
                </div>

                {/* Orange accent blob */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-orange-500 rounded-full opacity-20 blur-2xl"></div>

                <CardContent className="p-8 relative z-10">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 bg-orange-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-orange-500/25">
                      <Sparkles className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">
                        Investment Opportunities
                      </h3>
                      <p className="text-slate-400 font-light text-sm mb-4">
                        We're currently raising our pre-seed round. Interested
                        in being part of the future of food delivery?
                      </p>
                      <Link href="mailto:nomapp@proton.me?subject=Investment%20Inquiry">
                        <Button
                          size="sm"
                          className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-5 py-2 font-medium group"
                        >
                          Learn More
                          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Response Card */}
              <div className="bg-slate-50 rounded-3xl p-6 border border-slate-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-slate-600">
                    Quick Response Time
                  </span>
                </div>
                <p className="text-slate-500 font-light text-sm leading-relaxed">
                  Our team is actively monitoring all inquiries. You can expect
                  a response within 24 hours on business days.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-20 px-4 bg-gradient-to-b from-slate-50 to-white relative">
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

        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 tracking-tight mb-4">
              Common Questions
            </h2>
            <p className="text-slate-500 font-light">
              Quick answers to help you get started
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-slate-100 hover:border-orange-200 hover:shadow-md transition-all duration-300">
              <h3 className="font-semibold text-slate-900 mb-2">
                How can I invest in NOM?
              </h3>
              <p className="text-slate-500 font-light text-sm leading-relaxed">
                We're currently raising our pre-seed round. Send us an email
                with your interest and we'll share our pitch deck and investment
                details.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-100 hover:border-orange-200 hover:shadow-md transition-all duration-300">
              <h3 className="font-semibold text-slate-900 mb-2">
                When will NOM launch?
              </h3>
              <p className="text-slate-500 font-light text-sm leading-relaxed">
                We're targeting a 2026 launch. Sign up for updates to be the
                first to know when we go live in your area.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-100 hover:border-orange-200 hover:shadow-md transition-all duration-300">
              <h3 className="font-semibold text-slate-900 mb-2">
                Can restaurants partner with NOM?
              </h3>
              <p className="text-slate-500 font-light text-sm leading-relaxed">
                Absolutely! We're building our restaurant network. Reach out to
                discuss partnership opportunities.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-100 hover:border-orange-200 hover:shadow-md transition-all duration-300">
              <h3 className="font-semibold text-slate-900 mb-2">
                Where will NOM be available?
              </h3>
              <p className="text-slate-500 font-light text-sm leading-relaxed">
                We're starting in select metropolitan areas and expanding based
                on demand. Let us know your city!
              </p>
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
