import type { Metadata } from "next";
import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Bay Area trucking to the interstate LLC",
    template: "%s | Bay Area trucking to the interstate LLC",
  },
  description:
    "Contact Bay Area trucking to the interstate LLC, based in Oak Hills, California, to discuss your trucking and transportation needs.",
  applicationName: "Bay Area trucking to the interstate LLC",
  icons: {
    icon: [
      {
        url: "/logo.png",
        type: "image/png",
      },
    ],
    apple: "/logo.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />

        <main id="main-content" tabIndex={-1}>
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}