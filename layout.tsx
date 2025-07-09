import "./globals.css";
import type { Metadata } from "next";
import { Inter, Lexend } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const lexend = Lexend({ subsets: ["latin"], variable: "--font-lexend" });

export const metadata: Metadata = {
  title: "Maria Bertone | Inside-Sales & GTM Consultant",
  description: "Interactive tools to accelerate your revenue engine."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${lexend.variable}`}> 
      <body className="min-h-screen bg-[#F9FAFB] font-sans antialiased text-gray-900">
        {children}
      </body>
    </html>
  );
}