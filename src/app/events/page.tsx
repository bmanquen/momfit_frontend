import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Typography,
} from "@mui/material";
import parse from "html-react-parser";

export default function Events() {
  const events = [
    {
      title: "Postpartum Fitness Workout",
      childcare: "(Kid Friendly Event)",
      summary:
        "A gentle, low impact workout while your little one plays at the studio",
      date: new Date("2024-02-20").toLocaleDateString("en-us", {
        year: "numeric",
        month: "short",
        day: "2-digit",
      }),
      time: "5pm-6pm CST",
      cost: "Free with Play Pass",
      url: "https://www.monamiplaystudio.com/events/postpartum-fitness-class?fbclid=IwAR3rxtpA4l2BJ3YcU91COFZooA4_7SgwLILCIQwjaX2LJ6BP3YODBYx9PB0",
    },
    {
      title: "Postpartum Return to Exercise Program",
      childcare: "(Childcare Options Avaliable)",
      description: `<p>This class offers a complete program to help moms safely and effectively return to fitness postpartum. We will cover common postpartum fitness concerns such as diastasis, prolapse, back pain, leaking, glute strength, and so much more while building a community of moms prioritizing fitness.</br></br>This program includes:</p></br><ul className="list-disc m-auto p-[revert]"><li>2 group workouts per week</li><li>3 mini-home workouts per week</li><li>Education on dozens of postpartum fitness concerns</li><li>Return to Run & Return to Weightlifting programs to equip you to continue your progress after the program</li></ul></br><p>Recommended for beginning to intermediate fitness levels.</p>`,
      summary: "Build a foundation of fitness after baby",
      date: "",
      cost: null,
    },
    {
      title: "Pregnancy Fitness Program",
      childcare: "(Childcare Options Avaliable)",
      description: `<p>Who says you have to lose your fitness during your pregnancy?</br></br> This class is designed for moms who want to learn to safely exercise throughout their pregnancies. We will explore changes in the body, modifications depending upon your body's specific needs, and how to prevent unnecessary aches and pains with prenatal exercise.</p>`,
      summary: "Learn how to exercise safely and effectively during pregnancy",
      date: "",
      cost: null,
    },
  ];
  return (
    <div className="w-11/12 md:w-10/12 lg:w-8/12 xl:w-6/12 m-auto flex flex-col lg:gap-2 bg-gray-100">
      {events.map((currEvent, index) => {
        return (
          <div
            className="flex flex-col shadow-md shadow-gray-400 my-4 p-2 rounded-md gap-6 md:gap-8 lg:gap-10 bg-white items-center"
            key={`Event ${index}`}
          >
            <div className="flex flex-col">
              <Typography className="text-center text-[#23334d] font-averia_serif_light font-bold tracking-widest text-lg md:text-xl 2xl:text-2xl w-3/4 md:w-full m-auto">
                {currEvent.title}
              </Typography>
              <Typography className="text-center font-montserrat text-xs lg:text-sm 2xl:text-base">
                {currEvent.childcare}
              </Typography>
            </div>
            <div className="flex w-[85%] justify-between self-center gap-2">
              <Typography className="font-montserrat font-medium tracking-widest text-sm md:text-base 2xl:text-lg max-w-[220px] md:max-w-xs">
                {currEvent.summary}
              </Typography>
              <div className="flex flex-col gap-2 min-w-fit">
                <div className="flex gap-2">
                  <Typography className="font-bold font-montserrat text-sm lg:text-base 2xl:text-lg">
                    Date:
                  </Typography>
                  <Typography className="font-montserrat text-sm lg:text-base 2xl:text-lg">
                    {currEvent?.date ? currEvent.date.toString() : "TBA"}
                  </Typography>
                </div>
                <div className="flex gap-2">
                  <Typography className="font-bold font-montserrat text-sm lg:text-base 2xl:text-lg">
                    Time:
                  </Typography>
                  <Typography className="font-montserrat text-sm lg:text-base 2xl:text-lg">
                    {currEvent?.time ? currEvent.time : "TBA"}
                  </Typography>
                </div>
                <div className="flex gap-2">
                  <Typography className="font-bold font-montserrat text-sm lg:text-base 2xl:text-lg">
                    Cost:
                  </Typography>
                  <Typography className="font-montserrat text-sm lg:text-base 2xl:text-lg">
                    {currEvent?.cost ? `${currEvent.cost}` : "TBA"}
                  </Typography>
                </div>
              </div>
            </div>
            <div className="m-auto">
              {currEvent?.date ? (
                <Button
                  className="bg-[#23334d] text-white hover:text-[#23334d] hover:bg-gray-200 border-black border-[1px] self-center font-averia_serif_light font-bold tracking-widest rounded-md text-sm lg:text-base xl:text-md 2xl:text-lg mt-4 md:mt-0 p-2"
                  variant="outlined"
                  href={currEvent.url}
                  target="_blank"
                >
                  Register
                </Button>
              ) : (
                <Button
                  className="bg-[#23334d] text-white hover:text-[#23334d] hover:bg-gray-200 border-black border-[1px] self-center font-averia_serif_light font-bold tracking-widest rounded-md text-sm lg:text-base xl:text-md 2xl:text-lg mt-4 md:mt-0 p-2"
                  variant="outlined"
                  href="https://forms.gle/tgqm57euqPihemi96"
                  target="_blank"
                >
                  Join Waitlist
                </Button>
              )}
            </div>
            {currEvent.description ? (
              <Accordion>
                <AccordionSummary
                  aria-controls={`event-${index}-more-info`}
                  className="font-montserrat font-bold text-base 2xl:text-lg"
                  id={`event-${index}-more-info`}
                  expandIcon={<ExpandMore />}
                >
                  Details
                </AccordionSummary>
                <AccordionDetails className="font-montserrat text-sm lg:text-base 2xl:text-lg w-11/12 m-auto">
                  {parse(currEvent.description)}
                </AccordionDetails>
              </Accordion>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
