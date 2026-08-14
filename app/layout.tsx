import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  title: "Prerna Kakkar | Senior Product Manager, AI Systems",
  description:
    "Senior Product Manager building AI-powered products end to end: conversational AI, agent governance, and analytics platforms, with outcomes measured, not assumed.",
  openGraph: {
    title: "Prerna Kakkar | Senior Product Manager, AI Systems",
    description:
      "Senior Product Manager building AI-powered products end to end: conversational AI, agent governance, and analytics platforms, with outcomes measured, not assumed.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} font-body antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
