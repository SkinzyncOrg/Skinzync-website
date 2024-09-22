// navbar.server.tsx
import Link from "next/link";
import dynamic from "next/dynamic";

// Dynamically load the client-side component for authentication
const NavbarClient = dynamic(() => import("./Navbar.client"), { ssr: false });

export default function Navbar() {
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
            <Link className="btn btn-ghost text-xl relative w-40 h-12" href="/">
              <img src="/logo-text.svg" alt="logo" className="w-40 h-12" />
            </Link>
          </div>
          {/* Desktop menu */}
          <div className="hidden lg:flex flex-1">
            <ul className="menu menu-horizontal px-1">
              <li>
                <Link href="/product">Materials</Link>
              </li>
              <li>
                <Link href="#">Formulation</Link>
              </li>
              <li>
                <Link href="#">About Us</Link>
              </li>
            </ul>
          </div>
          {/* This part will handle the authentication check client-side */}
          <NavbarClient />
        </nav>
      </div>
      <div className="drawer-side z-50">
        <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu bg-base-200 min-h-full w-80 p-4">
          <li>
            <Link className="text-lg font-bold" href="/product">
              Materials
            </Link>
          </li>
          <div className="divider"></div>
          <li>
            <Link className="text-lg font-bold" href="/product">
              Best Seller
            </Link>
          </li>
          <div className="divider"></div>
          <li>
            <Link className="text-lg font-bold" href="#">
              Formulation
            </Link>
          </li>
          <div className="divider"></div>
          <li>
            <Link className="text-lg font-bold" href="#">
              About Us
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
