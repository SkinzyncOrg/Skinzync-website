"use client";
import React, {FormEvent,useState} from "react";
import { useRouter } from "next/navigation";
import globalApi from "@/utils/globalApi";

const tabContentTitles = ["Individual", "Company"];
export default function SignupForm() {
  const router = useRouter();
  const [activeTab, setActiveTab] = React.useState(0);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    const email = (e.target as HTMLFormElement).email.value;
    const password = (e.target as HTMLFormElement).password.value;
    let company = null;;

    if (activeTab === 1) {
      // Only read company value if the "Company" tab is active
      company = (e.target as HTMLFormElement).company?.value;
    }
    try {
     await globalApi.registerUser(email, password, company);
      router.push("/login");
    } catch (error) {
      setError("Signup error:"+error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col justify-center w-full max-w-sm shrink-0 ">
      <form className="flex flex-col justify-center" onSubmit={handleSubmit}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            id="password"
            type="password"
            name="password"
            placeholder="Password"
            className="input input-bordered"
            required
          />
        </div>
        <div className="flex flex-col space-y-4">
        <div className="w-fit overflow-hidden rounded-xl border border-gray-100 bg-purple-50 p-1 mt-4 self-center">
          <ul className="flex items-center gap-2 text-sm font-medium">
            {tabContentTitles.map((title, index) => (
              <li key={index}>
                <a
                  onClick={() => setActiveTab(index)}
                  className={`inline-flex cursor-pointer items-center gap-2 rounded-lg px-3 py-2 ${
                    activeTab === index ? "bg-primary shadow text-white" : ""
                  }`}
                >
                  {title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {activeTab === 1 && (
          <div className="form-control">
            <input
              id="company"
              type="text"
              name="company"
              placeholder="Company Name"
              className="input input-bordered"
              required
            />
          </div>
        )}
        </div>
        <div className="form-control mt-6">
        {loading ? (
            <span className="loading loading-spinner loading-lg"></span>
          ) : (
            <button type="submit" className="btn btn-primary w-full">
              Sign Up
            </button>
          )}
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </div>
      </form>
      {/* NOTE: GOOGLE signup*/}
      {/* <div className="divider">or continue with</div>
      <button
        className="btn bg-purple-50 rounded-3xl"
        onClick={() => (window.location.href = "/auth/google")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="30"
          height="30"
          viewBox="0 0 48 48"
        >
          <path
            fill="#FFC107"
            d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
          ></path>
          <path
            fill="#FF3D00"
            d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
          ></path>
          <path
            fill="#4CAF50"
            d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
          ></path>
          <path
            fill="#1976D2"
            d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
          ></path>
        </svg>
        Google
      </button> */}
      <p className="text-sm font-light text-gray-500 mt-2">
        Already have an account?{" "}
        <a
          href="/login"
          className="font-medium text-primary hover:underline"
        >
          Login here
        </a>
      </p>
    </div>
  );
}
