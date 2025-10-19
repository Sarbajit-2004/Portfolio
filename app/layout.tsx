import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sarbajit — AI/ML & Full-Stack Engineer",
  description: "I turn messy ideas into shipped products.",
  openGraph: { title: "Sarbajit — AI/ML & Full-Stack Engineer", description: "I turn messy ideas into shipped products.", images: ["/og.png"] },
  metadataBase: new URL("https://example.com")
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
