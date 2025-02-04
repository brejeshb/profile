// app/components/navbar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type NavLink = {
  href: string;
  label: string;
};

const navLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

const Navbar: React.FC = () => {
  const pathname = usePathname();

  return (
    <nav className="bg-white shadow-lg fixed w-full z-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-gray-800">
            <Link href="/">My Portfolio</Link>
          </div>

          <div className="flex space-x-7">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-gray-800 hover:text-blue-500 transition duration-300 ${
                  pathname === link.href ? "text-blue-500" : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;