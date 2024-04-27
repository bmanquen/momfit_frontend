"use client";
import { Button, Divider, IconButton, Typography } from "@mui/material";
import React, { useRef } from "react";
import Image from "next/image";
import navyLogo from "../../public/navyLogo.png";
import whiteLogo from "../../public/whiteLogo.png";
import heroImage from "../../public/Home.png";
import introImage from "../../public/intro_img.png";
import pregSurferImg from "../../public/pregnant_surfer.png";
import bandedPullup from "../../public/banded_pullups.png";
import personalTrainer from "../../public/personal_trainer.png";
import pregnantHiker from "../../public/pregnant_hiker.png";
import yoga from "../../public/yoga.png";
import treadmillRunner from "../../public/treadmill_runner.png";
import firefighting from "../../public/firefighting.png";
import beach from "../../public/beach.png";
import brookeAndZeke from "../../public/brookeAndZeke.png";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import PhoneIphoneRoundedIcon from "@mui/icons-material/PhoneIphoneRounded";
import LocationOnSharpIcon from "@mui/icons-material/LocationOnSharp";
import { Facebook } from "@mui/icons-material";

export default function Home() {
  const contactRef = useRef(null);

  function scrollToContact() {
    contactRef.current.scrollIntoView();
  }
  return (
    <main className="relative flex flex-col">
      <div className="flex justify-around pb-9 md:py-16 lg:py-24 xl:py-44 2xl:py-48 relative shadow-[0px_10px_50px_0px_gray]">
        <Image
          className="object-cover -z-10"
          src={heroImage}
          alt="Background picture of mom and baby working out"
          fill={true}
          quality={100}
          sizes="100vh"
        />
        <div className="flex flex-col md:flex-row w-full gap-6 2xl:gap-40">
          <div className="items-center w-1/2 md:w-1/3 flex flex-col md:ml-[10%] text-[#1e3653] relative">
            <div className="relative w-[100px] h-[100px] md:w-[150px] md:h-[150px] lg:w-[200px] lg:h-[200px] 2xl:w-[250px] 2xl:h-[250px]">
              <Image alt="Momfit Logo" src={navyLogo} fill={true} />
            </div>
            <Typography
              className="text-left md:text-center text-4xl md:text-6xl lg:text-8xl drop-shadow-lg tracking-wide md:mb-4 font-averia_serif_light"
              component="h1"
              variant="h1"
            >
              MOMFIT
            </Typography>

            <Divider
              className="bg-[#1e3653] h-1 w-3/5 md:w-4/5 lg:w-full my-2 2xl:my-6"
              component="div"
              data-testid="heroDivider"
            />
            <Typography
              className="text-xl lg:text-2xl xl:text-3xl 2xl:text-5xl text-center drop-shadow-lg w-3/4 md:w-full 2xl:py-9 font-averia_serif_light lg:tracking-widest font-bold"
              component="h2"
              variant="h2"
            >
              Functional & Corrective Exercise for Moms
            </Typography>
            <div className="mt-4 flex gap-4">
              <IconButton
                aria-label="facebook link"
                href="https://www.facebook.com/people/MomFit-Fitness-Training-for-Moms/61554754487020/?mibextid=LQQJ4d"
                target="_blank"
              >
                <Facebook htmlColor="#1e3653" fontSize="large" />
              </IconButton>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row md:justify-center p-8 md:p-4 lg:p-8 lg:py-12 md:gap-6 lg:gap-12 xl:gap-28 2xl:gap-56 shadow-[0px_10px_50px_0px_gray]">
        <div className="w-full md:w-1/2 2xl:w-1/3 pb-2">
          <Image
            className="object-cover object-[top_50%_right_25%] md:object-[top_50%_right_25%] rounded-[100%] h-full"
            alt="picture of two friends"
            src={introImage}
          />
        </div>
        <div className="text-justify md:w-1/2 flex flex-col gap-2 md:gap-4 lg:gap-6 2xl:gap-10">
          <Typography
            className="font-averia_serif_light text-[#3c586b] font-bold tracking-widest text-center text-2xl lg:text-4xl 2xl:text-6xl pb-4 md:pb-0"
            component="h3"
            variant="h3"
          >
            Learn the Essentials for Fitness After Kids
          </Typography>
          <Typography
            className="font-montserrat tracking-widest text-base xl:text-xl 2xl:text-2xl"
            component="p"
          >
            Are you unsure of how to safely return to exercise during or after
            pregnancy?
          </Typography>
          <Typography
            className="font-montserrat tracking-widest text-base xl:text-xl 2xl:text-2xl"
            component="p"
            gutterBottom
          >
            Are you frustrated by lingering diastasis, prolapse, or leaking?
          </Typography>
          <Typography
            className="font-montserrat tracking-widest text-base xl:text-xl 2xl:text-2xl"
            component="p"
            gutterBottom
          >
            We offer mommy and me fitness classes, workshops, and one-on-one
            training sessions to educate moms how to use movement to get
            stronger and heal their bodies. Whether you are training to keep up
            with your toddler or are a seasoned ahtlete, we have a place for
            you.
          </Typography>
          <Typography
            className="font-montserrat tracking-widest text-base xl:text-xl 2xl:text-2xl"
            component="p"
            gutterBottom
          >
            We're here to help you get back to what you love to do and feel
            great doing it. We're here to teach you to Train Like a Mom.
          </Typography>
          <Button
            className="text-[#166569] hover:bg-gray-200 border-black border-2 self-center font-averia_serif_light font-bold tracking-widest rounded-md text-base xl:text-xl 2xl:text-2xl mt-4 md:mt-0 px-12"
            endIcon={<ArrowRightAltIcon style={{ fontSize: 30 }} />}
            onClick={scrollToContact}
            variant="outlined"
          >
            CONTACT US
          </Button>
        </div>
      </div>
      <div className="flex flex-col items-center md:items-start md:flex-row md:px-8 xl:px-20 py-8 md:py-10 lg:py-16 gap-4 xl:gap-7 shadow-[0px_10px_50px_0px_gray]">
        <Typography
          className="font-averia_serif_light text-[#273854] text-center md:text-left text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-extrabold w-2/3 md:w-1/3 pb-2"
          component="h3"
          variant="h3"
        >
          Safe & Effective Exercise For:
        </Typography>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 w-4/5 md:w-2/3">
          <div>
            <Image
              alt="pregnant surfer"
              className="rounded-xl"
              src={pregSurferImg}
            />
            <Typography
              className="text-center font-montserrat text-sm xl:text-2xl tracking-[0.3rem] pt-2 font-medium uppercase"
              component="p"
            >
              Pregnancy
            </Typography>
          </div>
          <div>
            <Image
              alt="girl doing banded pull-ups"
              className="rounded-xl"
              src={bandedPullup}
            />
            <Typography
              className="text-center font-montserrat text-sm xl:text-2xl tracking-[0.3rem] pt-2 font-medium uppercase"
              component="p"
            >
              Diastasis
            </Typography>
          </div>
          <div>
            <Image
              alt="personal trainer coaching deadlifts"
              className="rounded-xl"
              src={personalTrainer}
            />
            <Typography
              className="text-center font-montserrat text-sm xl:text-2xl tracking-[0.3rem] pt-2 font-medium uppercase"
              component="p"
            >
              Prolapse
            </Typography>
          </div>
          <div>
            <Image
              alt="lady running on the treadmill"
              className="rounded-xl"
              src={treadmillRunner}
            />
            <Typography
              className="text-center font-montserrat text-sm xl:text-2xl tracking-[0.3rem] pt-2 font-medium uppercase"
              component="p"
            >
              Weightloss
            </Typography>
          </div>
          <div>
            <Image
              alt="pregnant lady hiking in the mountains"
              className="rounded-xl"
              src={pregnantHiker}
            />
            <Typography
              className="text-center font-montserrat text-sm xl:text-2xl tracking-[0.3rem] pt-2 font-medium uppercase"
              component="p"
            >
              Posture
            </Typography>
          </div>
          <div>
            <Image alt="ladies doing yoga" className="rounded-xl" src={yoga} />
            <Typography
              className="text-center font-montserrat text-sm xl:text-2xl tracking-[0.3rem] pt-2 font-medium uppercase"
              component="p"
            >
              Chronic Back Aches
            </Typography>
          </div>
        </div>
      </div>
      <div className="bg-[#1e3653] text-white flex flex-col items-center md:flex-row gap-2 md:gap-8 lg:gap-12 2xl:gap-16 py-2 md:py-8 xl:py-12 2xl:py-16 px-2 md:px-8 xl:px-12 2xl:px-16 shadow-[0px_10px_50px_0px_gray]">
        <div className="grid grid-cols-3 md:grid-cols-1 gap-2 md:gap-4 lg:gap-8 2xl:gap-12 md:w-1/3">
          <Image
            alt="firefighters working"
            className="rounded-tl-[2rem] rounded-br-[2rem] md:rounded-tl-[4rem] md:rounded-br-[4rem] 2xl:rounded-tl-[6rem] 2xl:rounded-br-[6rem] w-full"
            src={firefighting}
          />
          <Image
            alt="mom and baby at the beach with a surfboard"
            className="rounded-tl-[2rem] rounded-br-[2rem] md:rounded-tl-[4rem] md:rounded-br-[4rem] 2xl:rounded-tl-[6rem] 2xl:rounded-br-[6rem] w-full"
            src={beach}
          />
          <Image
            alt="Brooke and Zeke looking at each other"
            className="rounded-tl-[2rem] rounded-br-[2rem] md:rounded-tl-[4rem] md:rounded-br-[4rem] 2xl:rounded-tl-[6rem] 2xl:rounded-br-[6rem] w-full"
            src={brookeAndZeke}
          />
        </div>
        <div className="flex flex-col gap-2 md:gap-4 lg:gap-6 xl:gap-8 w-5/6 text-center py-4`">
          <Typography
            className="font-averia_serif_light text-4xl lg:text-6xl xl:text-8xl"
            component="h3"
            variant="h3"
          >
            About Brooke
          </Typography>
          <Typography
            className="font-averia_serif_light text-xl lg:text-2xl xl:text-4xl 2xl:text-5xl font-medium"
            component="p"
            variant="overline"
          >
            NASM CPT, PCES
          </Typography>
          <Typography
            className="text-justify font-montserrat tracking-widest text-base lg:text-xl xl:text-2xl 2xl:text-3xl lg:leading-8 xl:leading-10 2xl:leading-[3.5rem]"
            component="p"
            variant="body1"
            gutterBottom
          >
            I got pregnant while in the best shape of my life and struggled to
            maintain my fitness without pain throughout my pregnancy. I had a
            traumatic birth that brought my life to a halt. I finally found
            recovery through corrective exercise and became so passionate about
            it that I decided to devote my career to helping other moms attain
            the same life-changing results.
          </Typography>
          <Typography
            className="text-justify font-montserrat tracking-widest text-base lg:text-xl xl:text-2xl 2xl:text-3xl lg:leading-8 xl:leading-10 2xl:leading-[3.5rem]"
            component="p"
            variant="body1"
          >
            After my postpartum diagnosis I believed that I would never be able
            to do the active things that I loved doing. By creating new habits
            and improving my movement, I am back in action. Let's work together
            to get you back to what you love doing!
          </Typography>
        </div>
      </div>
      {/* TODO: fix responsiveness */}
      <div
        className="flex flex-col items-center bg-[url(../../public/contact_background.png)] bg-cover pb-4 shadow-[0px_10px_50px_0px_gray]"
        ref={contactRef}
      >
        <div className="flex flex-col items-center w-4/5 md:w-2/5 xl:w-1/3 2xl:w-1/4">
          <Image className="w-24 md:w-28" alt="Momfit logo" src={whiteLogo} />
          <Typography
            className="text-white text-center font-averia_serif_light text-5xl lg:text-7xl"
            component="h3"
            variant="h3"
          >
            Contact MOMFIT
          </Typography>
          <Divider
            className="bg-white h-1 w-4/5 lg:w-2/3 my-4 md:my-8 lg:my-6 2xl:my-6"
            component="div"
            data-testid="contactDivider"
          />
        </div>
        <div className="flex flex-col gap-4 text-white">
          <div className="flex gap-4 lg:gap-10">
            <EmailRoundedIcon fontSize="large" />
            <Typography
              className="font-montserrat align-middle xl:text-xl"
              component="a"
              href="mailto:momfitokc@gmail.com"
              target="_blank"
            >
              momfitokc@gmail.com
            </Typography>
          </div>
          <div className="flex gap-4 lg:gap-10">
            <PhoneIphoneRoundedIcon fontSize="large" />
            <Typography
              className="font-montserrat align-middle xl:text-xl"
              component="a"
              href="tel:714-732-3484"
            >
              (714)-732-3484
            </Typography>
          </div>
          <div className="flex gap-4 lg:gap-10 xl:text-xl">
            <LocationOnSharpIcon fontSize="large" />
            <Typography className="font-montserrat align-middle xl:text-xl">
              Located in Edmond, OK
            </Typography>
          </div>
        </div>
      </div>
    </main>
  );
}
