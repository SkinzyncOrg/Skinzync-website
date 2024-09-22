"use client";
import SignupForm from "./form";
import FormWrapper from "@/components/FormWrapper";
export default function SignupPage() {
  return (
    // <div className="hero h-full">
    //   <div className="hero-content flex-col">
    //     <div className="text-center lg:text-left">
    //       <h1 className="text-3xl font-bold text-center text-primary">Create an account</h1>
    //       <p className="py-6 text-center">Enter your email to sign up for this website</p>
    //     </div>
    //     <SignupForm />
    //     <p>
    //       By clicking continue, you agree to our {" "}
    //       <a
    //         href="#"
    //         className="font-medium text-primary-600 hover:underline dark:text-primary"
    //       >
    //         Terms of Service
    //       </a>
    //       {" "}
    //       and
    //       {" "}
    //       <a
    //         href="#"
    //         className="font-medium text-primary-600 hover:underline dark:text-primary"
    //       >
    //         Privacy Policy
    //       </a>
    //     </p>
    //   </div>
    // </div>

    <FormWrapper 
      title="Create an account"
      description="Enter your email to sign up for this website"
    >
      <SignupForm />
      <p className="text-center mt-4">
        By clicking continue, you agree to our{" "}
        <a
          href="#"
          className="font-medium text-primary hover:underline"
        >
          Terms of Service
        </a>{" "}
        and{" "}
        <a
          href="#"
          className="font-medium text-primary hover:underline"
        >
          Privacy Policy
        </a>
        .
      </p>
    </FormWrapper>
  );
}
