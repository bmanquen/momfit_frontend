"use client";

import "../styles/globals.css";
import { Inter, Montserrat, Averia_Serif_Libre } from "next/font/google";
import Link from "next/link";
import React from "react";
// TODO: Implement Analytics once we resolve issues with Jest.
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { AppBar, Button, Toolbar } from "@mui/material";

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activeNavItem, SetActiveNavItem] = React.useState(0);
  const pages = ["Home", "Exercises", "Blog"];
  const links = ["/", "/exercises", "/blog"];

  // TODO: Implement Nav Bar when adding pages to site.
  // const navChange = (index: number) => {
  //   SetActiveNavItem(index);
  // };
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
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body>
        {/* <AppBar className="bg-white" component="nav">
          <Toolbar>
            <div className="flex justify-around w-full">
              {pages.map((page, index) => {
                return (
                  <div
                    className={
                      activeNavItem === index
                        ? "border-b-4 border-black border-solid"
                        : ""
                    }
                    data-testid={`navItem${index}`}
                    key={index}
                  >
                    <Button
                      className="text-black hover:bg-slate-200 md:py-4 font-bold"
                      onClick={() => navChange(index)}
                      variant="text"
                    >
                      <Link href={links[index]}>{page}</Link>
                    </Button>
                  </div>
                );
              })}
            </div>
          </Toolbar>
        </AppBar> */}
        <div>
          {/* <Toolbar /> */}
          {children}
          <Analytics />
          <SpeedInsights />
        </div>
      </body>
    </html>
  );
}
