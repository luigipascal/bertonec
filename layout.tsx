import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Maria Bertone | Inside-Sales & GTM Consultant",
  description: "Interactive tools to accelerate your revenue engine."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 font-sans antialiased text-gray-900">
        {children}
      </body>
    </html>
  );
}