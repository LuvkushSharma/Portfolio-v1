import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { NavigationBar } from "@/components/custom/nav-bar";
import Link from "next/link";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GeistSans } from "geist/font/sans";
import Flarecursor from "@/components/custom/Flarecursor";

export const metadata: Metadata = {
  title: "Luvkush Sharma",
  description: "I plan, design, build, test and deploy software",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <link rel="icon" type="image/svg+xml" href="/projects_images/me.jpg" />
        <meta
          name="description"
          content="Luvkush Sharma | A passionate fullstack developer."
        ></meta>
        <meta
          name="keywords"
          content="portfolio , next.js , typescript , aceternity ui"
        ></meta>
        <meta name="author" content="Luvkush Sharma"></meta>
        <meta property="og:title" content="Portfolio"></meta>
      </head>
      <body className={GeistSans.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Flarecursor />
          <NavigationBar />
          <main className="w-full px-8 py-1 mx-auto">{children}</main>
          <footer className="container mx-auto py-4">
            <Link href="" target="_blank">
              <p className="text-center text-sm text-muted-foreground hover:text-white transition-all">
                © Designed & Built by Luvkush Sharma ·{" "}
                {new Date().getFullYear()}
              </p>
            </Link>
          </footer>
        </ThemeProvider>

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
