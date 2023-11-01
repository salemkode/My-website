import "./globals.css";
import Footer from "@/components/layout/Footer";
import NavBar from "@/components/layout/NavBar";
import type { Metadata } from "next";
import { Manrope, Poppins } from "next/font/google";

const manrope = Manrope({ subsets: ["latin", "latin-ext"] });
export const poppins = Poppins({
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-display",
  fallback: ["Times New Roman", "Times", "serif"],
  subsets: ["latin"],
});

const metadata = {
  title: "Salemkode website",
  description: "Personal website of salemkode",
  image: "/preview.png",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="overflow-x-hidden" lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta charSet="UTF-8" />
        <link href="/favicon.png" rel="icon" type="image/svg+xml" />
        <meta charSet="utf-8" />
        <meta content="width=device-width,initial-scale=1" name="viewport" />
        {/**/}
        <meta content={metadata.title} property="og:title" />
        <meta content={metadata.image} property="og:image" />
        <meta content={metadata.description} name="description" />
        <meta content={metadata.description} property="og:description" />

        {/*Twitter metadata*/}
        <meta content={metadata.title} name="twitter:title" />
        <meta content={metadata.description} name="twitter:description" />
        <meta content="summary_large_image" name="twitter:card" />
        <meta content="https://salemkode.com" name="twitter:site" />
        <meta content={metadata.image} name="twitter:image" />
      </head>

      <body
        className={`max-w-full overflow-y-auto overflow-x-hidden ${manrope.className} ${poppins.variable}`}
      >
        <NavBar />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
