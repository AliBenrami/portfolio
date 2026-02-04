"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Logo from "@/../public/logo.svg";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/resume", label: "Resume" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-16 bg-white/80 backdrop-blur-lg border-b border-apple-border">
      <div className="max-w-5xl mx-auto h-full px-6 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center hover:opacity-70 transition-opacity"
        >
          <Image src={Logo} alt="Ali Benrami" width={25} height={25} />
        </Link>

        <div className="flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={`text-sm transition-colors ${
                  isActive
                    ? "text-apple-text font-medium"
                    : "text-apple-text-secondary hover:text-apple-text"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
