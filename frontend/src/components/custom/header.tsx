"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Search, UserRoundCheck } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-3">
          {/* Left side - Logo and Search */}
          <div className="flex items-center space-x-4">
            <h1 className="text-3xl font-bold">
              <Link href="/">
                <div className="relative inline-block cursor-pointer">
                  <span className="text-transparent [-webkit-text-stroke:1px_#05a8f3]">
                    BOX
                  </span>
                  <span className="absolute top-0 left-0 text-blue-500 [-webkit-text-stroke:1px_#05a8f3] animate-waves">
                    BOX
                  </span>
                  <span className="text-gray-900">CARS</span>
                </div>
              </Link>
            </h1>
            <div className="hidden lg:flex items-center relative">
              <Search className="absolute left-3 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search Cars eg. Audi Q7"
                className="pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-[10px] focus:outline-none focus:ring-.5 focus:ring-blue-500 focus:border-blue-500 w-64"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Middle - Navigation */}
          <div className="hidden md:flex items-center">
            <NavigationMenu>
              <NavigationMenuList className="gap-1">
                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink className="px-3 py-2 text-sm font-medium rounded-md hover:bg-gray-100">
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-medium px-3 py-2 hover:bg-gray-100">
                    Inventory
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="p-2 min-w-[200px]">
                    <div className="grid gap-1">
                      <Link href="/inventory/new" legacyBehavior passHref>
                        <NavigationMenuLink className="px-3 py-2 text-sm rounded-md hover:bg-gray-100">
                          New Arrivals
                        </NavigationMenuLink>
                      </Link>
                      <Link href="/inventory/used" legacyBehavior passHref>
                        <NavigationMenuLink className="px-3 py-2 text-sm rounded-md hover:bg-gray-100">
                          Used Vehicles
                        </NavigationMenuLink>
                      </Link>
                      <Link href="/inventory/featured" legacyBehavior passHref>
                        <NavigationMenuLink className="px-3 py-2 text-sm rounded-md hover:bg-gray-100">
                          Featured Listings
                        </NavigationMenuLink>
                      </Link>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/blog" legacyBehavior passHref>
                    <NavigationMenuLink className="px-3 py-2 text-sm font-medium rounded-md hover:bg-gray-100">
                      Blog
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/shop" legacyBehavior passHref>
                    <NavigationMenuLink className="px-3 py-2 text-sm font-medium rounded-md hover:bg-gray-100">
                      Shop
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-medium px-3 py-2 hover:bg-gray-100">
                    Pages
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="p-2 min-w-[200px]">
                    <div className="grid gap-1">
                      <Link href="/about" legacyBehavior passHref>
                        <NavigationMenuLink className="px-3 py-2 text-sm rounded-md hover:bg-gray-100">
                          About Us
                        </NavigationMenuLink>
                      </Link>
                      <Link href="/testimonials" legacyBehavior passHref>
                        <NavigationMenuLink className="px-3 py-2 text-sm rounded-md hover:bg-gray-100">
                          Testimonials
                        </NavigationMenuLink>
                      </Link>
                      <Link href="/faq" legacyBehavior passHref>
                        <NavigationMenuLink className="px-3 py-2 text-sm rounded-md hover:bg-gray-100">
                          FAQ
                        </NavigationMenuLink>
                      </Link>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/contact" legacyBehavior passHref>
                    <NavigationMenuLink className="px-3 py-2 text-sm font-medium rounded-md hover:bg-gray-100">
                      Contact
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Right side - Phone, Buttons */}
          <div className="flex items-center space-x-4">
            
              <Button variant="ghost"  size="sm">
              <Link href="/sign-in" prefetch={false}>
                <UserRoundCheck />
                </Link>
              </Button>
            
            <Button
              variant="outline"
              size="sm"
              className="hidden lg:flex px-3  py-2 border rounded-[15px] hover:bg-blue-900 hover:text-white"
            >
              Add New Car
            </Button>
            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={toggleMenu}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden z-50 border-t border-gray-200">
          <div className="container mx-auto px-4 py-3">
            <div className="flex items-center mb-4 relative">
              <Search className="absolute left-3 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search Cars eg. Audi Q7"
                className="pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-[10px] focus:outline-none focus:ring-0.5 focus:ring-blue-500 focus:border-blue-500 w-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <nav className="flex flex-col space-y-3">
              <Link
                href="/"
                className="py-2 text-gray-700 hover:text-blue-600"
                prefetch={false}
              >
                Home
              </Link>
              <Link
                href="/inventory"
                className="py-2 text-gray-700 hover:text-blue-600"
                prefetch={false}
              >
                Inventory
              </Link>
              <Link
                href="/blog"
                className="py-2 text-gray-700 hover:text-blue-600"
                prefetch={false}
              >
                Blog
              </Link>
              <Link
                href="/shop"
                className="py-2 text-gray-700 hover:text-blue-600"
                prefetch={false}
              >
                Shop
              </Link>
              <Link
                href="/pages"
                className="py-2 text-gray-700 hover:text-blue-600"
                prefetch={false}
              >
                Pages
              </Link>
              <Link
                href="/contact"
                className="py-2 text-gray-700 hover:text-blue-600"
                prefetch={false}
              >
                Contact
              </Link>
              <div className="pt-2 space-y-2">
                <Link href="/sign-in" className="w-full" prefetch={false}>
                  <Button variant="ghost" className="w-full">
                    <UserRoundCheck />
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full hover:bg-blue-900 hover:text-white"
                >
                  Add New Car
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
