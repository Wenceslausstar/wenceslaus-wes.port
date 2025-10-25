import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-950/80 backdrop-blur border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-blue-500">
          MyPortfolio
        </Link>
        <div className="flex gap-6 text-gray-300">
          <Link href="#about">About</Link>
          <Link href="#projects">Projects</Link>
          <Link href="#contact">Contact</Link>
        </div>
        <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
          Resume
        </Button>
      </div>
    </nav>
  );
}
