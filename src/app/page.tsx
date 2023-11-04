"use client";
import { Button, Divider, Typography } from "@mui/material";
import React from "react";
import ServiceCard from "../components/serviceCard/serviceCard";
import { isMobileOnly } from "react-device-detect";
import Image from "next/image";
import logo from "../../public/logo.png";
import heroImage from "../../public/homePageHero.png";

export default function Home() {
  const [isMobile, setIsMobile] = React.useState(false);
  React.useEffect(() => {
    setIsMobile(isMobileOnly);
  }, []);

  return (
    <main className="relative flex flex-col items-center gap-6">
      <div className="flex justify-around pb-9 md:pb-32 md:pt-16 2xl:pb-52 relative">
        <Image
          className="object-cover -z-10"
          src={heroImage}
          alt="Background picture of mom and baby working out"
          fill={true}
          quality={100}
          sizes="100vh"
        />
        <div className="flex flex-col items-center md:flex-row md:justify-around md:w-10/12">
          <div className="sm:w-3/4 md:w-1/2 flex flex-col items-center text-white relative">
            <div className="relative w-[100px] h-[100px] md:w-[150px] md:h-[150px] 2xl:w-[300px] 2xl:h-[300px]">
              <Image alt="Momfit Logo" src={logo} fill={true} />
            </div>
            <Typography
              className="text-center text-5xl md:text-7xl 2xl:text-9xl drop-shadow-lg tracking-wide mb-4 font-averia_serif_light"
              component="h1"
              variant="h1"
            >
              MOMFIT
            </Typography>

            <Divider
              className="bg-white h-1 w-3/5 md:w-4/5 mt-2 md:mt-1 mb-6 md:my-10"
              component="div"
              data-testid="heroDivider"
            />
            <Typography
              className="text-2xl md:text-3xl 2xl:text-4xl text-center drop-shadow-lg w-3/4 md:w-full 2xl:py-9 font-averia_serif_light "
              component="h2"
              variant="h2"
            >
              Functional & Corrective Exercise for Moms
            </Typography>
          </div>
          {!isMobile ? (
            <div className="md:w-1/2 flex flex-col h-full justify-end items-center">
              <Typography
                className="text-sm md:text-base lg:text-xl 2xl:text-4xl text-center font-bold tracking-widest drop-shadow-lg text-white mb-4 lg:my-8 font-montserrat"
                component="p"
                variant="body1"
              >
                Our bodies are amazing! They created beautiful babies. However,
                sometimes the changes from pregnancy and delivery can cause
                dysfunction. Let’s use exercise to change that while improving
                overall fitness and body image.
              </Typography>
              <Button
                className="md:w-2/3 bg-[#b1cfc0] hover:bg-[#3c586b] rounded-full border-[#3c586b] hover:border-[#b1cfc0]"
                variant="outlined"
              >
                <Typography
                  className="text-white font-bold text-sm 2xl:text-2xl font-roca tracking-widest p-2 md:p-0 lg:p-2"
                  variant="button"
                >
                  SCHEDULE A CONSULTATION
                </Typography>
              </Button>
            </div>
          ) : null}
        </div>
      </div>
      <div className="w-11/12 md:w-3/4 ">
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
