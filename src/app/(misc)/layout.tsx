import type { Metadata } from "next";

import "../globals.css";
import MiscNav from "@/components/MiscNav";
import { SidebarProvider } from "@/contexts/sidebar";
import { AppSidebar } from "@/components/Cart";

export const metadata: Metadata = {
  title: {
    default: "Orders & Requests",
    template: "%s | Furnisheet",
  },
  description:
    "Manage your cart, complete checkout, and submit furnishing requests — all in one place.",
  openGraph: {
    title: "Orders & Requests | Furnisheet",
    description:
      "Manage your cart, complete checkout, and submit furnishing requests — all in one place.",
    url: "https://furnisheet.com",
    siteName: "Furnisheet",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Orders & Requests | Furnisheet",
    description:
      "Manage your cart, complete checkout, and submit furnishing requests — all in one place.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body className="bg-light-grey">
        <SidebarProvider>
          <AppSidebar />
          <MiscNav />
        </SidebarProvider>
        {children}
      </body>
    </html>
  );
}
