import type { Metadata } from "next";
import { Noto_Sans_Thai } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Layout/Navbar.server";
import Footer from "@/components/Layout/Footer";

const noto = Noto_Sans_Thai({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Skinzync",
  description: "AI formulation for skincare",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={noto.className}>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
