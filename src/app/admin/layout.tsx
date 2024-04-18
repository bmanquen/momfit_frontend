"use client";

import { Tab, Tabs } from "@mui/material";
import clsx from "clsx";
import React from "react";
import { isMobileOnly } from "react-device-detect";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [tabNum, setTabNum] = React.useState(0);
  const [isMobileDevice, setIsMobileDevice] = React.useState(false);

  React.useEffect(() => {
    if (isMobileOnly) {
      setIsMobileDevice(true);
    }
  }, []);

  const changeTab = (event: React.SyntheticEvent, newTab: number) => {
    setTabNum(newTab);
  };
  return (
    <div className="w-[90%] m-auto min-h-screen shadow-md mt-4">
      <div>Welcome to the Admin Page!</div>
      <div className="flex flex-col lg:flex row">
        <Tabs
          className="max-w-min mb-2"
          TabIndicatorProps={{ style: { background: "none" } }}
          orientation={isMobileDevice ? "horizontal" : "vertical"}
          value={tabNum}
          onChange={changeTab}
        >
          <Tab
            value={0}
            className={clsx([
              tabNum === 0 ? "bg-[#1e3653] text-white" : "text-[#1e3653]",
              "font-averia_serif_light font-bold tracking-widest rounded-sm",
            ])}
            label="Events"
          />
        </Tabs>
        <div className="flex flex-col w-full max-h-min">{children}</div>
      </div>
    </div>
  );
}
