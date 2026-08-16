import type { Metadata } from "next";
import "./globals.css";
import { poppins } from "@/components/ui/font";

export const metadata: Metadata = {
  title: "Student Assistant",
  description: "Created with Next.js",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${poppins.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
