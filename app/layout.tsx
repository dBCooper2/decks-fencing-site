import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { siteConfig } from "@/config/site";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Providers } from "@/components/providers";

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="">
        <Providers>
          <div className="fixed top-0 left-0 right-0 z-50">
            <SiteHeader />
          </div>

          <div className="flex flex-col min-h-screen pt-16">
            <main className="flex-grow overflow-y-auto">{children}</main>
            <div className="sm:fixed bottom-0 left-0 right-0 z-50">
              <SiteFooter />
            </div>
          </div>
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
