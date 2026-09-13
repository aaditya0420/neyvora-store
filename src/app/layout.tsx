import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Overlays } from "@/components/Overlays";
import { StoreProvider } from "@/context/StoreContext";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-serif",
});

const sans = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "NeyVora — Beauty, rooted in nature",
  description: "NeyVora is a premium beauty house of thoughtful rituals for skin and hair. Luxury personal care, rooted in nature.",
};

export const viewport = {
  themeColor: "#F7F4EC",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body>
        <StoreProvider>
          <div className="announce">Complimentary shipping on orders above ₹499</div>
          <Header />
          <main>{children}</main>
          <Footer />
          <Overlays />
        </StoreProvider>
      </body>
    </html>
  );
}
