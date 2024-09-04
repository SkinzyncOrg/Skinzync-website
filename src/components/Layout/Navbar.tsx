"use client";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useAuthStore } from "@/store/authStore";

export default function Navbar() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const setAuthenticated = useAuthStore((state) => state.setAuthenticated);
  const logout = useAuthStore((state) => state.logout);
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await axios.post("/api/logout");
      logout();
      router.push("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <nav className="navbar bg-base-100">
          {/* Mobile menu */}
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          {/* Logo */}
          <div className="flex self-start">
            <a className="btn btn-ghost text-xl relative w-40 h-12" href="/">
              <Image
                src="/logo-text.svg"
                alt="Test Image"
                fill={true}
                className="object-contain"
                priority={true}
              />
            </a>
          </div>
          {/* Desktop menu */}
          <div className="hidden lg:flex flex-1 ">
            <ul className="menu menu-horizontal px-1">
              <li>
                <a href="/product">Materials</a>
              </li>
              <li>
                <a href="#">Formulation</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
            </ul>
          </div>
          {/* User Interaction */}
          {isAuthenticated ? (
            <div className="flex-none flex justify-end md:mr-5">
              <a className="btn btn-ghost btn-circle" href="cart">
                <div className="indicator">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
              </a>
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img
                      alt="Tailwind CSS Navbar component"
                      src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                >
                  <li>
                    <a className="justify-between" href="/profile">
                      Profile
                    </a>
                  </li>
                  <li>
                    <a>Settings</a>
                  </li>
                  <li>
                    <button onClick={handleLogout}>Logout</button>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-end space-x-4 md:mr-5">
              <a href="/login" className="btn btn-ghost">
                Login
              </a>
              <a href="/signup" className="btn btn-primary">
                Sign Up
              </a>
            </div>
          )}
        </nav>
        {/* Page content here REMOVE IT ALREADY */}
      </div>
      {/* Sidebar */}
      <div className="drawer-side z-50">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 min-h-full w-80 p-4">
          {/* Sidebar content here */}
          <li>
            <a className="text-lg font-bold" href="/product">
              Materials
            </a>
          </li>
          <div className="divider"></div>
          <li>
            <a className="text-lg font-bold" href="/product">
              Best Seller
            </a>
          </li>
          <div className="divider"></div>
          <li>
            <a className="text-lg font-bold" href="#">
              Formulation
            </a>
          </li>
          <div className="divider"></div>
          <li>
            <a className="text-lg font-bold" href="#">
              About Us
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
