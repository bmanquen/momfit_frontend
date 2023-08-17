"use client";

import { Metadata } from "next";
import "../styles/globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";
import React from "react";
import { AppBar, Button, Tab, Tabs, Toolbar } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activeNavItem, SetActiveNavItem] = React.useState(0);
  const pages = ["Home", "Exercises", "Blog"];
  const links = ["/", "/exercises", "/blog"];

  const navChange = (index: number) => {
    SetActiveNavItem(index);
  };
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppBar className="bg-white">
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
                      className="text-black hover:bg-slate-200 py-4 font-bold"
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
        </AppBar>
        {children}
      </body>
    </html>
  );
}
