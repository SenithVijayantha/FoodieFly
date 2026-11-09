import { useState, useContext, useEffect } from "react";
import type { FormEvent } from "react";
import axios from "axios";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { StoreContext } from "../context/StoreContext";

interface UserCredentials {
  name: string;
  email: string;
  password: string;
}

interface LoginFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const LoginForm = ({ open, onOpenChange }: LoginFormProps) => {
  const { url, checkUserAuthStats } = useContext(StoreContext);

  const [showErrorMsg, setShowErrorMsg] = useState(false);
  const [currentState, setCurrentState] = useState<"Sign Up" | "Login">("Sign Up");
  const [agreed, setAgreed] = useState(true);
  const [userCredentials, setUserCredentials] = useState<UserCredentials>({
    name: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    checkUserAuthStats();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserCredentials({
      ...userCredentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const endpoint = currentState === "Login" ? "signin" : "signup";

    try {
      const response = await axios.post(
        `${url}/api/user/${endpoint}`,
        userCredentials,
        { withCredentials: true }
      );

      if (response.data.success) {
        window.location.reload();
      }
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.data) {
        console.error(error.response.data.message);
        setShowErrorMsg(true);
      } else {
        toast.error("Something went wrong. Please try again.");
      }
      console.error(error);
    }
  };

  const isSignUp = currentState === "Sign Up";

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-sm">
        <DialogHeader>
          <DialogTitle className="text-2xl">
            {isSignUp ? "Create your account" : "Welcome back"}
          </DialogTitle>
          <DialogDescription>
            {isSignUp
              ? "Save your addresses and track every order."
              : "Log in to see your cart and orders."}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="grid gap-4">
          {isSignUp && (
            <div className="grid gap-2">
              <Label htmlFor="auth-name">Full name</Label>
              <Input
                id="auth-name"
                type="text"
                name="name"
                autoComplete="name"
                placeholder="Full name"
                value={userCredentials.name}
                onChange={handleChange}
                required
              />
            </div>
          )}
          <div className="grid gap-2">
            <Label htmlFor="auth-email">Email</Label>
            <Input
              id="auth-email"
              type="email"
              name="email"
              autoComplete="email"
              placeholder="you@example.com"
              value={userCredentials.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="auth-password">Password</Label>
            <Input
              id="auth-password"
              type="password"
              name="password"
              autoComplete={isSignUp ? "new-password" : "current-password"}
              placeholder="Password"
              value={userCredentials.password}
              onChange={handleChange}
              required
            />
          </div>

          {showErrorMsg && (
            <p role="alert" className="text-sm text-destructive">
              Incorrect email or password
            </p>
          )}

          {isSignUp && (
            <div className="flex items-start gap-2">
              <Checkbox
                id="auth-terms"
                checked={agreed}
                onCheckedChange={(checked) => setAgreed(checked === true)}
                className="mt-0.5"
              />
              <Label htmlFor="auth-terms" className="font-normal text-muted-foreground">
                I agree to the terms of use and privacy policy.
              </Label>
            </div>
          )}

          <Button type="submit" size="lg" className="w-full" disabled={isSignUp && !agreed}>
            {isSignUp ? "Create account" : "Log in"}
          </Button>
        </form>

        <p className="text-center text-sm text-muted-foreground">
          {isSignUp ? "Already have an account?" : "New to FoodieFly?"}{" "}
          <Button
            type="button"
            variant="link"
            className="h-auto p-0"
            onClick={() => {
              setShowErrorMsg(false);
              setCurrentState(isSignUp ? "Login" : "Sign Up");
            }}
          >
            {isSignUp ? "Log in" : "Create an account"}
          </Button>
        </p>
      </DialogContent>
    </Dialog>
  );
};

export default LoginForm;
