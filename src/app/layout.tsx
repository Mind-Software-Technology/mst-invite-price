import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./tailwind.css";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-plus-jakarta",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mind Software Technology | Jasa Undangan Digital Eksklusif",
  description:
    "Buat undangan digital elegan untuk Pernikahan, Ulang Tahun, Aqiqah, Khitanan, Wisuda, dan Acara Perusahaan. Desain premium, harga terjangkau, siap dalam 1–2 hari kerja.",
  keywords: [
    "undangan digital",
    "undangan pernikahan digital",
    "undangan digital murah",
    "jasa undangan digital",
    "undangan online",
    "mind software technology",
  ],
  openGraph: {
    title: "Mind Software Technology | Jasa Undangan Digital Eksklusif",
    description:
      "Undangan digital premium untuk semua momen spesial Anda. Pernikahan, Ulang Tahun, Aqiqah, Wisuda, dan lainnya.",
    type: "website",
    locale: "id_ID",
    siteName: "Mind Software Technology",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${playfair.variable} ${inter.variable} scroll-smooth`}
    >
      <body>{children}</body>
    </html>
  );
}
