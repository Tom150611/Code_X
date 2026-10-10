import { Be_Vietnam_Pro, Fraunces, IBM_Plex_Mono } from "next/font/google";
import Aurora from "@/components/Aurora";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import "./globals.css";

const beVietnam = Be_Vietnam_Pro({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-be-vietnam",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
});

const fraunces = Fraunces({
  subsets: ["latin", "vietnamese"],
  axes: ["opsz"],
  variable: "--font-fraunces",
});

export const metadata = {
  title: {
    default: "CodeX",
    template: "CodeX — %s",
  },
  description:
    "CodeX là câu lạc bộ lập trình dành cho học sinh khối 10, 11. Học web, Python và tham gia các cuộc thi công nghệ.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="vi"
      className={`${beVietnam.variable} ${plexMono.variable} ${fraunces.variable}`}
    >
      <body>
        <Aurora />
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
