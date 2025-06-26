import "./globals.css";
import type { Metadata } from "next";
import { Inter, Cinzel, Crimson_Text } from "next/font/google";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const cinzel = Cinzel({ subsets: ["latin"], variable: "--font-cinzel" });
const crimsonText = Crimson_Text({
  subsets: ["latin"],
  variable: "--font-crimson",
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Lendas do Velho Mundo - Bronze Age RPG",
  description:
    "Explore the ancient world of Lendas do Velho Mundo, a Bronze Age tabletop RPG",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${cinzel.variable} ${crimsonText.variable} font-sans bg-stone-950 text-amber-50 min-h-screen`}
      >
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
