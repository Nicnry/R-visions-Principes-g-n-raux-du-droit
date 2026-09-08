import type { Metadata, Viewport } from "next";
import "./globals.css";
import { BottomNav } from "@/components/BottomNav";

export const metadata: Metadata = {
  title: "Droit 61-31.3 — Réviser",
  description:
    "App de révision pour l'unité 61-31.3 « Principes généraux du droit » : théorie, cas pratiques et quiz.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#faf8ff",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="min-h-dvh font-sans antialiased">
        <div className="mx-auto min-h-dvh max-w-2xl pb-24">{children}</div>
        <BottomNav />
      </body>
    </html>
  );
}
