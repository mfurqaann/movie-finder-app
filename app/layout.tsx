import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Movie App Finder",
  description: "Movie App Finder",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main className="p-4">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
