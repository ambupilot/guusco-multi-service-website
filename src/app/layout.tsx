import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import "@/styles/globals.scss";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://guusco.nl"),
  title: {
    default: "GuusCo Multiservice | Klus- en onderhoudsbedrijf Nijmegen",
    template: "%s | GuusCo Multiservice",
  },
  description:
    "GuusCo Multiservice voor timmerwerk, elektra, sanitair, tegelwerk, montage, reparaties en kleine verbouwingen in Nijmegen en omgeving.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="nl" className={geistSans.variable}>
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
