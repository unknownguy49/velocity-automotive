import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Velocity Automotive",
  description: "Frontend Battle",
  generator: "Dibyadyuti Dutta",
  icons: {
    icon: "/images/va.png",
    shortcut: "/images/va.png",
    apple: "/images/va.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
