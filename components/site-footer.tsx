import { siteConfig } from "@/config/site";
import { Icons } from "./icons";

export function SiteFooter() {
  return (
    <footer>
      <div className="mb-4 mt-14 flex flex-col items-center">
        <div className="mb-1 flex space-x-4">
          <a target="_blank" rel="noreferrer" href={siteConfig.links.email}>
            <span className="sr-only">email</span>
            <Icons.mail className="h-6 w-6" />
          </a>
          <a target="_blank" rel="noreferrer" href={siteConfig.links.phone}>
            <span className="sr-only">phone</span>
            <Icons.phone className="h-6 w-6" />
          </a>
        </div>
        <div className="mb-2 flex space-x-2 text-sm text-muted-foreground"></div>
      </div>
    </footer>
  );
}
