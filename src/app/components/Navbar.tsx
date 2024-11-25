"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}

          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="MyLogo"
                width={80}
                height={80}
                className="w-auto"
              />
            </Link>
          </div>

          {/* Desktop Menu */}

          <div className="hidden md:flex space-x-8">
            <Link
              href="/"
              className="font-semibold text-lg hover:text-blue-100"
            >
              Home
            </Link>

            <Link
              href="/"
              className="font-semibold text-lg hover:text-blue-100"
            >
              About
            </Link>
            <Link
              href="/"
              className="font-semibold text-lg hover:text-blue-100"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-blue-100 hover:text-white focus:outline-none"
            >
              {isOpen ? (
                <i className="bx bx-x text-3xl hover:border-2 border-solid border-gray-600 p-1"></i> // Close Icon
              ) : (
                <i className="bx bx-menu text-3xl hover:border-2 border-solid border-gray-600 p-1"></i> // Hamburger Icon
              )}
            </button>

          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-500"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-500"
            >
              About
            </Link>
            <Link
              href="/services"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-500"
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-500"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
