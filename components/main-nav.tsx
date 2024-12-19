"use client";

import { siteConfig } from "@/config/site";
import { Icons } from "./icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function MainNav() {
  const pathname = usePathname();
  return (
    <nav className="flex items-center space-x-4 lg:space-x-6">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <Icons.logo className="h-6 w-6" />
        <span className="font-bold">{siteConfig.name}</span>
      </Link>
      <Link
        href="/about"
        className={cn(
          "text-sm font-medium transition-colors text-gray-900 hover:text-gray-700/60 dark:text-gray-50 dark:hover:text-gray-300 hidden sm:inline-block",
          pathname === "/about" ? "text-gray-900" : "text-gray-950/60",
        )}
      >
        About
      </Link>
      <Link
        href="/decks"
        className={cn(
          "text-sm font-medium transition-colors text-gray-900 hover:text-gray-700/60 dark:text-gray-50 dark:hover:text-gray-300 hidden sm:inline-block",
          pathname === "/decks" ? "text-gray-900" : "text-gray-950/60",
        )}
      >
        Decks
      </Link>
      <Link
        href="/fencing"
        className={cn(
          "text-sm font-medium transition-colors text-gray-900 hover:text-gray-700/60 dark:text-gray-50 dark:hover:text-gray-300  hidden sm:inline-block",
          pathname === "/fencing" ? "text-gray-900" : "text-gray-950/60",
        )}
      >
        Fencing
      </Link>
    </nav>
  );
}
