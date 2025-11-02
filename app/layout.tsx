import type { Metadata } from "next";
import { Urbanist } from "next/font/google";

import "./globals.css";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Navbar from "@/components/navbar";
import Header from "@/components/header";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Francisco Godoy - Desarrollador Full Stack",
    template: "%s | Francisco Godoy"
  },
  description: "Desarrollador Full Stack especializado en React, Vue.js, Angular, .NET/C# y SQL Server. Creando aplicaciones web escalables y funcionales con experiencia en Next.js, JavaScript y tecnologías modernas.",
  keywords: ["Desarrollador Full Stack", "React", "Vue.js", "Angular", ".NET", "C#", "Next.js", "JavaScript", "Desarrollador Web", "Frontend", "Backend", "Portafolio"],
  authors: [{ name: "Francisco Godoy" }],
  creator: "Francisco Godoy",
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://francisco-godoy-portfolio.vercel.app",
    title: "Francisco Godoy - Desarrollador Full Stack",
    description: "Desarrollador Full Stack especializado en tecnologías modernas. Portafolio profesional con proyectos destacados.",
    siteName: "Francisco Godoy Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Francisco Godoy - Desarrollador Full Stack",
    description: "Desarrollador Full Stack especializado en tecnologías modernas",
    creator: "@frang0doy",
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={urbanist.className}>
        <Navbar />
        <Header />
        {children}
      </body>
    </html>
  );
}
