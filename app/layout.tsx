import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";
import "./futuristic.css";

export const metadata: Metadata = {
  title: { default: "FUTURE CASA — Properti, Desain & Smart Living", template: "%s | FUTURE CASA" },
  description: "Jelajahi properti pilihan, layanan arsitektur dan interior, serta inspirasi smart living bersama FUTURE CASA.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://futurecasa.com"),
  openGraph: {
    title: "FUTURE CASA — The Future of Living",
    description: "Ruang yang lebih baik. Masa depan yang lebih baik. Temukan properti dan layanan FUTURE CASA.",
    type: "website",
    locale: "id_ID",
    siteName: "FUTURE CASA"
  },
  twitter: { card: "summary_large_image", title: "FUTURE CASA — The Future of Living", description: "Better spaces. Better futures." }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="id"><body><a className="skip-link" href="#main-content">Lewati ke konten</a><Header/><main id="main-content">{children}</main><Footer/></body></html>;
}
