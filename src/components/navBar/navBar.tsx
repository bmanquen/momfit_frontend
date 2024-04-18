"use client";

import { AppBar, Button, IconButton, Toolbar } from "@mui/material";
import Link from "next/link";
import React from "react";
import { isMobileOnly } from "react-device-detect";
import MenuIcon from "@mui/icons-material/Menu";
import clsx from "clsx";
import navyLogo from "../../../public/navyLogo.png";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { Login } from "../login";
import { usePathname } from "next/navigation";

export function NavBar() {
  const [isMobileDevice, setIsMobileDevice] = React.useState(false);
  const pages = ["Home", "Events", "Admin"];
  const links = ["/", "/events", "/admin"];
  const adminEmails = ["bmanquen1993@gmail.com", "momfitokc@gmail.com"];
  const { data: session } = useSession();
  const pathname = usePathname();

  const [activeNavItem, setActiveNavItem] = React.useState(
    links.indexOf(pathname)
  );
  const [isNavOpen, setIsNavOpen] = React.useState(false);

  const navChange = (index: number) => {
    setActiveNavItem(index);
  };

  function toggleNav() {
    setIsNavOpen(!isNavOpen);
  }

  React.useEffect(() => {
    if (isMobileOnly) {
      setIsMobileDevice(true);
    }
    if (activeNavItem !== links.indexOf(pathname)) {
      setActiveNavItem(links.indexOf(pathname));
    }
  }, [pathname, activeNavItem]);

  return (
    <AppBar color="inherit" component="nav">
      <Toolbar>
        <div className="flex flex-col text-center md:flex-row w-full">
          {isMobileDevice ? (
            <IconButton className="text-left self-start" onClick={toggleNav}>
              <MenuIcon />
            </IconButton>
          ) : null}
          {!isMobileDevice ? (
            <Link href={links[0]} onClick={() => navChange(0)}>
              <Image
                alt="Momfit logo"
                className="mr-6"
                src={navyLogo}
                width={60}
              />
            </Link>
          ) : null}
          {(isMobileDevice && isNavOpen) || !isMobileDevice
            ? pages.map((page, index) => {
                return (
                  <div
                    className={
                      page === "Admin" && !isMobileDevice ? "ml-auto" : ""
                    }
                    data-testid={`navItem${index}`}
                    key={index}
                  >
                    {page !== "Admin" ? (
                      <Link
                        className="font-montserrat tracking-widest font-bold"
                        href={links[index]}
                      >
                        <Button
                          className={clsx([
                            activeNavItem === index ? "bg-gray-100" : "",
                            "text-black hover:bg-gray-100 w-full md:w-auto h-full md:mx-2 md:px-4 rounded-none",
                          ])}
                          onClick={() => navChange(index)}
                          variant="text"
                        >
                          {page}
                        </Button>
                      </Link>
                    ) : adminEmails.includes(session?.user?.email) ? (
                      <>
                        <Link
                          className="font-montserrat tracking-widest font-bold"
                          href="/admin"
                          onClick={() => navChange(index)}
                        >
                          <Button
                            className={clsx([
                              activeNavItem === index ? "bg-gray-100" : "",
                              "text-black hover:bg-gray-100 w-full md:w-auto h-full md:mx-2 md:px-4 rounded-none",
                            ])}
                            onClick={() => navChange(index)}
                          >
                            Admin
                          </Button>
                        </Link>
                        <Login />
                      </>
                    ) : (
                      <Login />
                    )}
                  </div>
                );
              })
            : null}
        </div>
      </Toolbar>
    </AppBar>
  );
}
