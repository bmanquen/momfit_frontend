"use client";
import { Button, Divider, Typography } from "@mui/material";
import React from "react";
// import ServiceCard from "../components/serviceCard/serviceCard";
import { isMobileOnly } from "react-device-detect";
import Image from "next/image";
import logo from "../../public/logo.png";
import heroImage from "../../public/homePageHero.png";
import introImage from "../../public/intro_img.png";
import pregSurferImg from "../../public/pregnant_surfer.png";
import bandedPullup from "../../public/banded_pullups.png";
import personalTrainer from "../../public/personal_trainer.png";
import pregnantHiker from "../../public/pregnant_hiker.png";
import rockClimber from "../../public/rock_climber.png";
import treadmillRunner from "../../public/treadmill_runner.png";
import firefighting from "../../public/firefighting.png";
import beach from "../../public/beach.png";
import yogaOutside from "../../public/yoga_outside.png";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

export default function Home() {
  const [isMobile, setIsMobile] = React.useState(false);
  React.useEffect(() => {
    setIsMobile(isMobileOnly);
  }, []);

  return (
    <main className="relative flex flex-col">
      <div className="flex justify-around pb-9 md:p-16 lg:p-24 xl:p-44 2xl:p-24 relative">
        <Image
          className="object-cover -z-10"
          src={heroImage}
          alt="Background picture of mom and baby working out"
          fill={true}
          quality={100}
          sizes="100vh"
        />
        <div className="flex flex-col items-center md:flex-row md:justify-around w-full gap-6 2xl:gap-32">
          <div className="sm:w-3/4 md:w-1/2 flex flex-col items-center text-white relative">
            <div className="relative w-[100px] h-[100px] md:w-[150px] md:h-[150px] 2xl:w-[250px] 2xl:h-[250px]">
              <Image alt="Momfit Logo" src={logo} fill={true} />
            </div>
            <Typography
              className="text-center text-4xl md:text-6xl 2xl:text-8xl drop-shadow-lg tracking-wide md:mb-4 font-averia_serif_light"
              component="h1"
              variant="h1"
            >
              MOMFIT
            </Typography>

            <Divider
              className="bg-white h-1 w-3/5 md:w-4/5 my-4 md:my-8 2xl:my-6"
              component="div"
              data-testid="heroDivider"
            />
            <Typography
              className="text-2xl xl:text-3xl 2xl:text-5xl text-center drop-shadow-lg w-3/4 md:w-full 2xl:py-9 font-averia_serif_light lg:tracking-widest"
              component="h2"
              variant="h2"
            >
              Functional & Corrective Exercise for Moms
            </Typography>
          </div>

          <div className="w-3/4 md:w-1/2 flex flex-col h-full items-center md:pt-14 lg:pt-0 2xl:pt-20">
            <Typography
              className="text-sm md:text-[16px] lg:text-[20px] xl:text-[24px] 2xl:text-[32px] text-justify tracking-widest drop-shadow-lg text-white mb-4 font-montserrat leading-6 md:leading-8 lg:leading-10 xl:leading-[3rem] 2xl:leading-[4rem]"
              component="p"
            >
              Our bodies are amazing! They created beautiful babies. However,
              sometimes the changes from pregnancy and delivery can cause
              dysfunction. Let’s use exercise to change that while improving
              overall fitness and body image.
            </Typography>
            <Button
              className="md:w-3/4 bg-[#b1cfc0] rounded-full border-[#3c586b] bg-opacity-70 hover:bg-opacity-100"
              variant="outlined"
            >
              <Typography
                className="text-white font-bold text-sm 2xl:text-2xl font-averia_serif_light tracking-widest p-2 md:p-0 lg:p-2"
                variant="button"
              >
                SCHEDULE A CONSULTATION
              </Typography>
            </Button>
          </div>
        </div>
      </div>
      <div className="bg-[#cdcfc0] w-full flex flex-col md:flex-row md:justify-center p-8 lg:py-12 md:gap-6 lg:gap-12 xl:gap-48 2xl:gap-56">
        <div className="w-full md:w-1/2 lg:w-1/3 2xl:w-1/4 pb-2">
          <Image
            className="object-cover object-[top_50%_right_25%] rounded-[100%] h-full"
            alt="picture of two friends"
            src={introImage}
          />
        </div>
        <div className="items-center text-justify md:w-1/2 xl:w-2/5 flex flex-col gap-2 md:gap-4 lg:gap-6 2xl:gap-10">
          <Typography
            className="font-averia_serif_light text-[#3c586b] font-bold tracking-widest text-center text-2xl lg:text-4xl 2xl:text-6xl pb-4 md:pb-0"
            component="h3"
            variant="h3"
          >
            Learn the essentials for fitness after kids
          </Typography>
          <Typography
            className="font-montserrat tracking-widest text-base xl:text-xl 2xl:text-2xl"
            component="p"
            gutterBottom
          >
            MOMFIT is a highly specialized and individualized program to improve
            the fitness for women at any stage of motherhood.
          </Typography>
          <Typography
            className="font-montserrat tracking-widest text-base xl:text-xl 2xl:text-2xl"
            component="p"
            gutterBottom
          >
            We start with a head-to-toe fitness and posture assessment and
            design a program to improve the way you move.
          </Typography>
          <Typography
            className="font-montserrat tracking-widest text-base xl:text-xl 2xl:text-2xl"
            component="p"
            gutterBottom
          >
            Whatever your goal is whether it is to finally get rid your back
            pain so that you can pick up and chase your kids, stop leaking and
            get back into running, or train for a backpacking trip. Let’s get
            you back to what you love doing!
          </Typography>
          <Button
            className="bg-[#f1ebe5] text-[#166569] font-averia_serif_light font-bold tracking-widest rounded-full xl:text-xl 2xl:text-2xl mt-4 md:mt-0 w-3/4"
            endIcon={<ArrowRightAltIcon style={{ fontSize: 30 }} />}
            variant="contained"
          >
            SCHEDULE A CONSULT
          </Button>
        </div>
      </div>
      <div className="flex flex-col items-center md:items-start md:flex-row md:px-8 xl:px-20 py-8 md:py-10 lg:py-16 bg-[#f1ebe5] gap-4 xl:gap-7">
        <Typography
          className="font-averia_serif_light text-[#273854] text-center md:text-left text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-extrabold w-2/3 md:w-1/3 pb-2"
          component="h3"
          variant="h3"
        >
          What we can help with
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
            <Image
              alt="lady rock climbing"
              className="rounded-xl min-w-full"
              src={rockClimber}
            />
            <Typography
              className="text-center font-montserrat text-sm xl:text-2xl tracking-[0.3rem] pt-2 font-medium uppercase"
              component="p"
            >
              Chronic Back Pain
            </Typography>
          </div>
        </div>
      </div>
      <div className="bg-[#cdcfc0] flex flex-col md:flex-row gap-2 md:gap-8 lg:gap-12 2xl:gap-16 pt-2 md:py-8 xl:py-12 2xl:py-16 px-2 md:px-8 xl:px-12 2xl:px-16">
        <div className="grid grid-cols-3 md:grid-cols-1 gap-2 lg:gap-8 2xl:gap-12">
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
            alt="two ladies doing yoga outside"
            className="rounded-tl-[2rem] rounded-br-[2rem] md:rounded-tl-[4rem] md:rounded-br-[4rem] 2xl:rounded-tl-[6rem] 2xl:rounded-br-[6rem] w-full"
            src={yogaOutside}
          />
        </div>
        <div className="flex flex-col gap-2 md:gap-4 lg:gap-6 xl:gap-8 text-center">
          <Typography
            className="font-averia_serif_light text-[#423f32] text-4xl lg:text-6xl xl:text-8xl"
            component="h3"
            variant="h3"
          >
            About Brooke
          </Typography>
          <Typography
            className="font-averia_serif_light text-[#423f32] text-xl lg:text-2xl xl:text-4xl 2xl:text-5xl font-medium"
            component="p"
            variant="overline"
          >
            NASM CPT, PCES
          </Typography>
          <Typography
            className="text-justify font-montserrat tracking-widest text-base lg:text-xl xl:text-2xl 2xl:text-3xl lg:leading-8 xl:leading-10 2xl:leading-[3.5rem] text-[#423f32]"
            component="p"
            variant="body1"
            gutterBottom
          >
            As a firefighter and lifelong athlete, Brooke made it a top priority
            to maintain a high level of physical fitness throughout her first
            pregnancy. However, after experiencing the challenges of pregnancy
            she quickly realized that her old workout strategies weren’t the
            most effective during a pregnancy.
          </Typography>
          <Typography
            className="text-justify font-montserrat tracking-widest text-base lg:text-xl xl:text-2xl 2xl:text-3xl lg:leading-8 xl:leading-10 2xl:leading-[3.5rem] text-[#423f32]"
            component="p"
            variant="body1"
          >
            After a traumatic birth she wondered if she would ever lift weights,
            surf, or carry her son pain-free. After trying every postpartum
            recovery method she could find, she finally saw results when she saw
            a corrective exercise specialist. She was inspired to get her
            professional certification so that she could help other women see
            the same life-changing results. Brooke combines her passion for
            corrective exercise and functional training to educate women about
            their bodies and to empower them to use them better.
          </Typography>
        </div>
      </div>
    </main>
  );
}
