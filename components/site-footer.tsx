import { siteConfig } from "@/config/site";
import { Icons } from "./icons";
import Image from "next/image";
import { Card } from "@/components/ui/card";

export function SiteFooter() {
  return (
    <footer className="w-full">
      <div className="relative flex flex-col items-center bg-transparent">
        <div className="w-full h-auto relative">
          <Image
            src="/images/fence-graphic.png"
            alt="Fence graphic"
            width={1920}
            height={200}
            className="w-full h-auto object-cover sm:object-contain"
            priority
          />
          <Card className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 px-4 sm:px-8 py-2 sm:py-4 bg-white/80 shadow-none border-0">
            <div className="flex space-x-3 sm:space-x-6">
              <a
                target="_blank"
                rel="noreferrer"
                href={siteConfig.links.email}
                className="transition-colors hover:text-muted-foreground"
              >
                <span className="sr-only">email</span>
                <Icons.mail className="h-4 w-4 sm:h-6 sm:w-6" />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href={siteConfig.links.phone}
                className="transition-colors hover:text-muted-foreground"
              >
                <span className="sr-only">phone</span>
                <Icons.phone className="h-4 w-4 sm:h-6 sm:w-6" />
              </a>
            </div>
          </Card>
        </div>
      </div>
    </footer>
  );
}
