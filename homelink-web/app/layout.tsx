import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HomeLink Addis - Workforce Supply Platform",
  description: "Connecting Ethiopian domestic workers with verified employers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
