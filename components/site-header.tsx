import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { Icons } from "./icons";
import { MainNav } from "./main-nav";
import { MobileNav } from "./mobile-nav";
import { ModeToggle } from "./mode-toggle";
import "../app/globals.css";

export function SiteHeader() {
  return (
    <header className="z-50 sticky top-0 w-full border-b border-gray-200 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4 shadow-sm">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <MainNav />
        <div className="flex flex-1 items-center justify-end space-x-2">
          <nav className="flex items-center space-x-1">
            <Link
              href={siteConfig.links.email}
              target="_blank"
              rel="noreferrer"
              className="hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
            >
              <div
                className={cn(
                  buttonVariants({ variant: "ghost" }),
                  "w-10 px-0 hidden sm:inline-flex",
                )}
              >
                <Icons.mail className="h-4 w-4 text-gray-800 stroke-current dark:text-gray-100 hover:stroke-gray-900 dark:hover:stroke-gray-900" />
                <span className="sr-only">Email</span>
              </div>
            </Link>
            <Link
              href={siteConfig.links.phone}
              target="_blank"
              rel="noreferrer"
              className="hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
            >
              <div
                className={cn(
                  buttonVariants({ variant: "ghost" }),
                  "w-10 px-0 hidden sm:inline-flex",
                )}
              >
                <Icons.phone className="h-4 w-4 transition-colors text-gray-800 dark:text-gray-100" />
                <span className="sr-only">Phone</span>
              </div>
            </Link>
            <ModeToggle />
            <MobileNav />
          </nav>
        </div>
      </div>
    </header>
  );
}
