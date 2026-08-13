import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "@/styles/globals.scss";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "GuusCo Multiservice",
    template: "%s | GuusCo Multiservice",
  },
  description:
    "GuusCo Multiservice voor timmerwerk, elektra, sanitair, montage, reparaties en kleine verbouwingen in Nijmegen en omgeving.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="nl" className={geistSans.variable}>
      <body>{children}</body>
    </html>
  );
}