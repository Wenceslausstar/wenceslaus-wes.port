import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-950/80 backdrop-blur border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-blue-500">
          Wenceslaus Wesilei
        </Link>

        <div className="hidden md:flex gap-6 text-gray-300 ml-auto mr-8">
          <Link href="/" className="hover:text-blue-500 transition-colors">
            Home
          </Link>
          <Link
            href="/#about"
            className="hover:text-blue-500 transition-colors"
          >
            About
          </Link>
          <Link
            href="/#services"
            className="hover:text-blue-500 transition-colors"
          >
            Services
          </Link>
          <Link
            href="/#experience"
            className="hover:text-blue-500 transition-colors"
          >
            Experience
          </Link>
          <Link
            href="/#projects"
            className="hover:text-blue-500 transition-colors"
          >
            Projects
          </Link>

          <Link
            href="/#contact"
            className="hover:text-blue-500 transition-colors"
          >
            Contact
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
