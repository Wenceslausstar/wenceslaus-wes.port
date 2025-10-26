import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-950/80 backdrop-blur border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-blue-500">
          MyPortfolio
        </Link>

        <div className="hidden md:flex gap-6 text-gray-300">
          <Link href="#about">About</Link>
          <Link href="#services">Services</Link>
          <Link href="#experience">Experience</Link>
          <Link href="#projects">Projects</Link>

          <Link href="#contact">Contact</Link>
        </div>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
            Resume
          </Button>
        </div>
      </div>
    </nav>
  );
}
