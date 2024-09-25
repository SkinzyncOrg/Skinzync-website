"use client";
import LoginForm from "./form";
import FormWrapper from "@/components/FormWrapper";
export default function LoginPage() {
  return (
    <FormWrapper
      title="Welcome back"
      description="Login to your account"
    >
      <LoginForm />
      <p className="text-sm font-light text-gray-500  mt-2">
        Don&apos;t have an account yet?{" "}
          <a
            href="/signup"
            className="font-medium text-primary hover:underline "
          >
            Sign up here
          </a>
        </p>
    </FormWrapper>
  );
}
