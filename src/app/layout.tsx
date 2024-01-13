"use client";

import "../styles/globals.css";
import { Inter, Montserrat, Averia_Serif_Libre } from "next/font/google";
import Link from "next/link";
import React from "react";
import Image from "next/image";
// TODO: Implement Analytics once we resolve issues with Jest.
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { AppBar, Button, IconButton, Toolbar } from "@mui/material";
import { isMobileOnly } from "react-device-detect";
import logo from "../../public/logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import LaunchIcon from "@mui/icons-material/Launch";
import clsx from "clsx";

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
  const [activeNavItem, setActiveNavItem] = React.useState(0);
  const [isNavOpen, setIsNavOpen] = React.useState(false);
  const [isMobileDevice, setIsMobileDevice] = React.useState(false);
  const pages = ["Home", "Events"];
  const links = ["/", ""];

  React.useEffect(() => {
    if (isMobileOnly) {
      setIsMobileDevice(true);
    }
  });

  const navChange = (index: number) => {
    setActiveNavItem(index);
  };

  function toggleNav() {
    setIsNavOpen(!isNavOpen);
  }
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
        <AppBar color="inherit" component="nav">
          <Toolbar>
            <div className="flex flex-col text-center md:flex-row w-full">
              {isMobileDevice ? (
                <IconButton
                  className="text-left self-start"
                  onClick={toggleNav}
                >
                  <MenuIcon />
                </IconButton>
              ) : null}
              {!isMobileDevice ? (
                <Link href={links[0]}>
                  <Image
                    alt="Momfit logo"
                    className="filter invert mr-6"
                    src={logo}
                    width={60}
                  />
                </Link>
              ) : null}
              {(isMobileDevice && isNavOpen) || !isMobileDevice
                ? pages.map((page, index) => {
                    return (
                      <div data-testid={`navItem${index}`} key={index}>
                        <Button
                          className={clsx([
                            activeNavItem === index ? "bg-gray-100" : "",
                            "text-black hover:bg-gray-100 w-full md:w-auto h-full md:mx-2 md:px-4 rounded-none",
                          ])}
                          onClick={() => navChange(index)}
                          variant="text"
                        >
                          <Link
                            className="font-montserrat tracking-widest font-bold"
                            href={
                              page === "Events"
                                ? "https://lvoaet.pushpress.com/landing/events/cal-c86af468-d5d3-4eed-b7c8-5080"
                                : links[index]
                            }
                            target="_blank"
                          >
                            {page}
                            {page === "Events" ? (
                              <LaunchIcon
                                className="ml-2"
                                color="disabled"
                                fontSize="small"
                              />
                            ) : null}
                          </Link>
                        </Button>
                      </div>
                    );
                  })
                : null}
            </div>
          </Toolbar>
        </AppBar>
        <div>
          <Toolbar />
          {children}
        </div>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
