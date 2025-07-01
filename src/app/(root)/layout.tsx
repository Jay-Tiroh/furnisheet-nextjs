import type { Metadata } from "next";
import { SidebarProvider } from "../../contexts/sidebar";
import { AppSidebar } from "@/components/Cart";

import "../globals.css";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { DialogProvider } from "@/contexts/dialog-context";
import Request from "@/components/Request";
import { MenuProvider } from "@/contexts/menu-context";

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
      <body className="">
        <DialogProvider>
          <Request />
          <MenuProvider>
            <SidebarProvider>
              <AppSidebar />
              <NavBar />
            </SidebarProvider>
          </MenuProvider>
        </DialogProvider>
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
