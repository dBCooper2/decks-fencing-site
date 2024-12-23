import type { Metadata } from "next";
import "./globals.css";
import { Rubik } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { siteConfig } from "@/config/site";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Providers } from "@/components/providers";

const rubik = Rubik({
  subsets: ["latin"],
});

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
      <body className={rubik.className}>
        <Providers>
          <div className="fixed top-0 left-0 right-0 z-50">
            <SiteHeader />
          </div>

          <div className="flex flex-col min-h-screen pt-16">
            <main className="flex-grow overflow-y-auto">{children}</main>
          </div>
          <div className="flex flex-col min-h-20 sm:min-h-28 pt-2">
            <div className="hidden sm:fixed sm:block bottom-0 left-0 right-0 z-50">
              <SiteFooter />
            </div>
            <div className="sm:hidden block bottom-0 left-0 right-0 z-0">
              <SiteFooter />
            </div>
          </div>
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
