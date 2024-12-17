"use client";

import { useState } from "react";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import { Icons } from "./icons";
import { siteConfig } from "@/config/site";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" className="w-10 px-0 sm:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <SheetTitle>Menu</SheetTitle>
        <MobileLink
          onOpenChange={setOpen}
          href="/"
          className="flex items-center"
        >
          <Icons.logo className="mr-2 h-4 w-4" />
          <span className="font-bold">{siteConfig.name}</span>
        </MobileLink>
        <div className="flex flex-col gap-3 mt-3">
          <hr />
          <MobileLink onOpenChange={setOpen} href="/about">
            About
          </MobileLink>
          <MobileLink onOpenChange={setOpen} href="/decks">
            Decks
          </MobileLink>
          <MobileLink onOpenChange={setOpen} href="/fencing">
            Fencing
          </MobileLink>
          <hr />
          <Link
            target="_blank"
            rel="noreferrer"
            href={siteConfig.links.email}
          >
            Email Us!
          </Link>
          <Link
            target="_blank"
            rel="noreferrer"
            href={siteConfig.links.phone}
          >
            Call Us!
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}

// handle the mobile nav opening and closing
interface MobileLinkProps extends LinkProps {
  children: React.ReactNode;
  onOpenChange?: (open: boolean) => void; // option that takes in a bool to change the status to open, returns void
  className?: string;
}

function MobileLink({
  href,
  onOpenChange,
  children,
  className,
  ...props
}: MobileLinkProps) {
  const router = useRouter();
  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href.toString());
        onOpenChange?.(false); // "?." only runs the function if it knows it exists
      }}
      className={className}
      {...props}
    >
      {children}
    </Link>
  );
}
