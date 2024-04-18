import { EventsComponent } from "@/src/components/events";

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
  return <EventsComponent />;
}
