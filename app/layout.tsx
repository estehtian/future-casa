import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";
import "./futuristic.css";

export const metadata: Metadata = {
  title: { default: "FUTURE CASA — The Future of Living", template: "%s | FUTURE CASA" },
  description: "Temukan properti, eksplorasi arsitektur, dan ciptakan pengalaman smart living bersama FUTURE CASA.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://futurecasa.com"),
  openGraph: { title: "FUTURE CASA — The Future of Living", description: "Better spaces. Better futures.", type: "website" }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="id"><body><Header/><main>{children}</main><Footer/></body></html>;
}
