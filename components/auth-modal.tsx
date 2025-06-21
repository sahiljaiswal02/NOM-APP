"use client";

import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAuth } from "@/contexts/auth-context";
import { Loader2, Mail } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AuthModal({ isOpen, onClose }: AuthModalProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { signIn, signUp, signInWithGoogle } = useAuth();

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }

    setLoading(true);
    setError("");
    try {
      await signIn(email, password);
      onClose();
      setEmail("");
      setPassword("");
    } catch (error: any) {
      setError(error.message || "Failed to sign in");
    }
    setLoading(false);
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    setLoading(true);
    setError("");
    try {
      await signUp(email, password);
      onClose();
      setEmail("");
      setPassword("");
    } catch (error: any) {
      setError(error.message || "Failed to create account");
    }
    setLoading(false);
  };

  const handleGoogleSignIn = async () => {
    setLoading(true);
    setError("");
    try {
      await signInWithGoogle();
      onClose();
    } catch (error: any) {
      setError(error.message || "Failed to sign in with Google");
    }
    setLoading(false);
  };

  const resetForm = () => {
    setEmail("");
    setPassword("");
    setError("");
  };

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => {
        if (!open) {
          onClose();
          resetForm();
        }
      }}
    >
      <DialogContent className="sm:max-w-md bg-white border-2 border-orange-200 doodle-blob">
        <DialogHeader>
          <DialogTitle className="text-slate-800 text-center text-2xl font-bold">
            Welcome to NOM! 🍽️
          </DialogTitle>
          <DialogDescription className="text-slate-600 text-center">
            Sign in to your account or create a new one to get started.
          </DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="signin" className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-orange-100 rounded-full">
            <TabsTrigger
              value="signin"
              className="text-slate-700 data-[state=active]:bg-orange-300 data-[state=active]:text-slate-800 rounded-full"
              onClick={resetForm}
            >
              Sign In
            </TabsTrigger>
            <TabsTrigger
              value="signup"
              className="text-slate-700 data-[state=active]:bg-orange-300 data-[state=active]:text-slate-800 rounded-full"
              onClick={resetForm}
            >
              Sign Up
            </TabsTrigger>
          </TabsList>

          <TabsContent value="signin" className="space-y-4">
            <form onSubmit={handleSignIn} className="space-y-4">
              <div className="space-y-2">
                <Label
                  htmlFor="signin-email"
                  className="text-slate-700 font-medium"
                >
                  Email
                </Label>
                <Input
                  id="signin-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-orange-50 border-2 border-orange-200 text-slate-800 rounded-2xl focus:border-orange-400"
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="signin-password"
                  className="text-slate-700 font-medium"
                >
                  Password
                </Label>
                <Input
                  id="signin-password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-orange-50 border-2 border-orange-200 text-slate-800 rounded-2xl focus:border-orange-400"
                  placeholder="••••••••"
                  required
                />
              </div>

              {error && (
                <Alert className="bg-red-50 border-2 border-red-200 rounded-2xl">
                  <AlertDescription className="text-red-700">
                    {error}
                  </AlertDescription>
                </Alert>
              )}

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-400 to-pink-400 hover:from-orange-500 hover:to-pink-500 text-white rounded-2xl py-6 font-semibold text-lg doodle-squiggle"
                disabled={loading}
              >
                {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Sign In 🚀
              </Button>
            </form>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-orange-200" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-slate-500">
                  Or continue with
                </span>
              </div>
            </div>

            <Button
              type="button"
              variant="outline"
              onClick={handleGoogleSignIn}
              className="w-full border-2 border-orange-200 text-slate-700 hover:bg-orange-50 rounded-2xl py-6 font-semibold"
              disabled={loading}
            >
              <Mail className="mr-2 h-4 w-4" />
              Google
            </Button>
          </TabsContent>

          <TabsContent value="signup" className="space-y-4">
            <form onSubmit={handleSignUp} className="space-y-4">
              <div className="space-y-2">
                <Label
                  htmlFor="signup-email"
                  className="text-slate-700 font-medium"
                >
                  Email
                </Label>
                <Input
                  id="signup-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-orange-50 border-2 border-orange-200 text-slate-800 rounded-2xl focus:border-orange-400"
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="signup-password"
                  className="text-slate-700 font-medium"
                >
                  Password
                </Label>
                <Input
                  id="signup-password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-orange-50 border-2 border-orange-200 text-slate-800 rounded-2xl focus:border-orange-400"
                  placeholder="••••••••"
                  required
                />
                <p className="text-xs text-slate-500">
                  Password must be at least 6 characters
                </p>
              </div>

              {error && (
                <Alert className="bg-red-50 border-2 border-red-200 rounded-2xl">
                  <AlertDescription className="text-red-700">
                    {error}
                  </AlertDescription>
                </Alert>
              )}

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-green-400 to-blue-400 hover:from-green-500 hover:to-blue-500 text-white rounded-2xl py-6 font-semibold text-lg doodle-squiggle"
                disabled={loading}
              >
                {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Create Account 🎉
              </Button>
            </form>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-orange-200" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-slate-500">
                  Or continue with
                </span>
              </div>
            </div>

            <Button
              type="button"
              variant="outline"
              onClick={handleGoogleSignIn}
              className="w-full border-2 border-orange-200 text-slate-700 hover:bg-orange-50 rounded-2xl py-6 font-semibold"
              disabled={loading}
            >
              <Mail className="mr-2 h-4 w-4" />
              Google
            </Button>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
