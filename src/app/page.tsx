import { Typography } from "@mui/material";
import React from "react";
import ServiceCard from "../components/serviceCard/serviceCard";

export default function Home() {
  return (
    <main className="flex flex-col justify-between items-center min-h-screen dark:bg-neutral-800">
      <div className="relative w-screen mb-16">
        <div className="bg-[url(../../public/heroImage.png)] bg-cover py-80">
          <div className="absolute bg-black opacity-50 inset-0 h-full w-full" />
        </div>
        <Typography
          className="text-center absolute inset-0 w-full top-1/3 text-white"
          variant="h1"
          fontWeight={800}
        >
          Brooke's Business
        </Typography>
      </div>
      <div className="w-11/12 md:w-3/4">
        <Typography borderBottom={1} className="mb-6" variant="h4">
          Services
        </Typography>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between gap-6 pb-16">
          <ServiceCard
            title="Pre-Pregnancy"
            description="We offer pre-pregnancy services."
          />
          <ServiceCard
            title="Pregnancy"
            description="We offer pregnancy services."
          />
          <ServiceCard
            title="Post-Pregnancy"
            description="We offer post-pregnancy services."
          />
        </div>
        <div>
          <Typography borderBottom={1} className="mb-6" variant="h4">
            About Us
          </Typography>
          <Typography variant="body1">
            We specialize in pelvic floor corrective training to either help you
            prepare for pregnancy or to help you after pregnancy.
          </Typography>
        </div>
      </div>
    </main>
  );
}
