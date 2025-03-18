import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abner",
  description: "Wecome to my website!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
