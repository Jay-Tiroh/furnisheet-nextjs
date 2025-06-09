import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Providers } from "./providers";
import { MenuProvider } from "@/context/MenuContext";
// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: {
    default: "Furnisheet",
    template: "%s | Furnisheet",
  },
  description: "Rent, Furnish, Live.",
  openGraph: {
    title: "Furnisheet",
    description: "Rent, Furnish, Live.",
    url: "https://furnisheet.com",
    siteName: "Furnisheet",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Furnisheet",
    description: "Rent, Furnish, Live.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body>
        <Providers>
          <MenuProvider>
            <NavBar />
            <main className="flex-1">{children}</main>
            <Footer />
          </MenuProvider>
        </Providers>
      </body>
    </html>
  );
}
