import "../styles/globals.css";
import { Inter, Montserrat, Averia_Serif_Libre } from "next/font/google";
import React from "react";

// TODO: Implement Analytics once we resolve issues with Jest.
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Toolbar } from "@mui/material";
import { NavBar } from "../components/navBar";
import Providers from "../components/Providers";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});
const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});
const averia_serif_light = Averia_Serif_Libre({
  weight: "300",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-averia-serif",
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={
        (inter.className, montserrat.variable, averia_serif_light.variable)
      }
    >
      <head>
        <title>MOMFIT</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body>
        <div>
          <Providers>
            <NavBar />
            <Toolbar />
            {children}
          </Providers>
        </div>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
