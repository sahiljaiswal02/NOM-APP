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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageSquare,
  Send,
} from "lucide-react";
import { Navbar } from "@/components/navbar";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    type: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

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
            <MessageSquare className="w-4 h-4 mr-1" />
            Get in Touch 📞
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-slate-800">
            Let's{" "}
            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 bg-clip-text text-transparent wiggle inline-block">
              Connect
            </span>{" "}
            🤝
          </h1>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed">
            Nom is currently raising its pre-seed round. Reach out to us for
            investment opportunities.✨
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 px-4 relative z-[2]">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-white border-4 border-orange-200 doodle-blob relative">
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-300 doodle-circle bounce-gentle"></div>
              <CardHeader>
                <CardTitle className="text-2xl text-slate-800">
                  Send us a Message 📝
                </CardTitle>
                <CardDescription className="text-slate-600">
                  Fill out the form below and we'll get back to you within 24
                  hours! ⚡
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label
                        htmlFor="name"
                        className="text-slate-700 font-medium"
                      >
                        Name 👤
                      </Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) =>
                          handleInputChange("name", e.target.value)
                        }
                        className="bg-orange-50 border-2 border-orange-200 text-slate-800 rounded-2xl focus:border-orange-400"
                        placeholder="Your awesome name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label
                        htmlFor="email"
                        className="text-slate-700 font-medium"
                      >
                        Email 📧
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          handleInputChange("email", e.target.value)
                        }
                        className="bg-orange-50 border-2 border-orange-200 text-slate-800 rounded-2xl focus:border-orange-400"
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="message"
                      className="text-slate-700 font-medium"
                    >
                      Message 💬
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) =>
                        handleInputChange("message", e.target.value)
                      }
                      className="bg-orange-50 border-2 border-orange-200 text-slate-800 rounded-2xl min-h-[120px] focus:border-orange-400"
                      placeholder="Tell us more about what you need..."
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-orange-400 to-pink-400 hover:from-orange-500 hover:to-pink-500 text-white rounded-2xl py-6 font-bold text-lg doodle-squiggle"
                  >
                    Send Message 🚀
                    <Send className="ml-2 w-4 h-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="py-16 px-4 relative z-[2]">
              <div className="max-w-xl mx-auto space-y-8 text-center">
                <h2 className="text-4xl font-bold text-slate-800">
                  Get in Touch ✉️
                </h2>
                <p className="text-lg text-slate-600">
                  We’re happy to hear from you. Reach out anytime!
                </p>

                <Card className="bg-white border-4 border-orange-200 doodle-blob relative shadow-md">
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-300 doodle-circle bounce-gentle"></div>
                  <CardHeader className="flex justify-center">
                    <CardTitle className="text-slate-800 flex items-center text-xl font-semibold">
                      <Mail className="w-5 h-5 mr-2 text-orange-500" />
                      Email Us 📧
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 px-6 pb-10 text-left">
                    <div>
                      <p className="text-slate-700 font-semibold mb-1">
                        nomapp@proton.me
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
