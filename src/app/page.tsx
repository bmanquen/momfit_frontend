import styles from "../styles/page.module.css";
import { Typography } from "@mui/material";
import React from "react";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className="relative w-screen mb-16">
        <div className="bg-[url(../../public/heroImage.png)] bg-cover py-80">
          <div className="absolute bg-black opacity-50 inset-0 h-full w-full" />
        </div>
        <Typography
          className="text-center absolute inset-0 h-full w-full top-1/3"
          variant="h1"
          fontWeight={800}
        >
          Brooke's Business
        </Typography>
      </div>
      <div className="w-[70%]">
        <Typography borderBottom={1} className="mb-6" variant="h4">
          Services
        </Typography>
        <div className="flex justify-between pb-16">
          <div>
            <Typography borderBottom={1} className="mb-2" variant="h5">
              Pre-Pregnancy
            </Typography>
            <Typography variant="body1">
              We offer pre-pregnancy services.
            </Typography>
          </div>
          <div>
            <Typography borderBottom={1} className="mb-2" variant="h5">
              Pregnancy
            </Typography>
            <Typography variant="body1">
              We offer pregnancy services.
            </Typography>
          </div>
          <div>
            <Typography borderBottom={1} className="mb-2" variant="h5">
              Post-Pregnancy
            </Typography>
            <Typography variant="body1">
              We offer post-pregnancy services.
            </Typography>
          </div>
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
