"use client";

import { ExpandMore, Add, Delete, Edit } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  CircularProgress,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import { useGetEvents } from "@/src/hooks/queries/useGetEvents";
import { CreateEventModal } from "../admin/events/createEvent/createEventModal";
import parse from "html-react-parser";
import { EditEventModal } from "../admin/events/editEvent/editEventModal";
import dayjs from "dayjs";
import Image from "next/image";
import { DeleteEventModal } from "../admin/events/DeleteEventConfirm/deleteEventConfirm";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export function EventsComponent({ isAdmin = false }: { isAdmin?: boolean }) {
  const [isCreateModalOpen, setIsCreateModalOpen] = React.useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = React.useState(false);
  const [editEventId, setEditEventId] = React.useState(null);
  const [deleteEventId, setDeleteEventId] = React.useState(null);
  const [isConfirmDeleteOpen, setIsConfirmDeleteOpen] = React.useState(false);

  const { data: session, status: sessionStatus } = useSession();
  const { data: mfEvents, status: eventsStatus } = useGetEvents();

  React.useEffect(() => {
    if (sessionStatus === "unauthenticated" && isAdmin) {
      redirect("/events");
    }
  }, [session, isAdmin]);

  if (eventsStatus === "pending") {
    return (
      <div className="w-full h-screen">
        <CircularProgress className="relative top-1/2 left-1/2" />
      </div>
    );
  }
  if (eventsStatus === "error") {
    return <p>Error</p>;
  }

  const childcare = (childcare: Childcare) => {
    switch (childcare) {
      case "kid_friendly":
        return "Kid Friendly Event";

      case "childcare_options":
        return "Childcare Options Available";

      default:
        return null;
    }
  };

  const onEdit = (eventId: number) => {
    setIsEditModalOpen(true);
    setEditEventId(eventId);
  };

  const onDelete = (eventId: number) => {
    setIsConfirmDeleteOpen(true);
    setDeleteEventId(eventId);
  };

  function getDate(mfEvent: MF_Event) {
    if (!mfEvent.start_date) {
      return (
        <Typography className="font-montserrat text-sm md:text-base 2xl:text-lg">
          TBA
        </Typography>
      );
    } else if (mfEvent.start_date && mfEvent.end_date) {
      return (
        <Typography className="font-montserrat text-sm md:text-base 2xl:text-lg">
          {`${dayjs(mfEvent.start_date).format("MM/DD/YYYY")} - ${dayjs(
            mfEvent.end_date
          ).format("MM/DD/YYYY")}`}
        </Typography>
      );
    } else {
      return (
        <Typography className="font-montserrat text-sm md:text-base 2xl:text-lg">
          {`${dayjs(mfEvent.start_date).format("MM/DD/YYYY")}`}
        </Typography>
      );
    }
  }

  function getTime(mfEvent: MF_Event) {
    if (!mfEvent.start_date) {
      return (
        <Typography className="font-montserrat text-sm md:text-base 2xl:text-lg">
          TBA
        </Typography>
      );
    } else if (mfEvent.start_date && mfEvent.end_date) {
      return (
        <Typography className="font-montserrat text-sm md:text-base 2xl:text-lg">
          {new Date(mfEvent.start_date).toLocaleTimeString("en-US", {
            hour: "numeric",
            minute: "numeric",
          })}{" "}
          -{" "}
          {new Date(mfEvent.end_date).toLocaleTimeString("en-US", {
            hour: "numeric",
            minute: "numeric",
          })}
        </Typography>
      );
    } else {
      return (
        <Typography className="font-montserrat text-sm md:text-base 2xl:text-lg">
          {new Date(mfEvent.start_date).toLocaleTimeString("en-US", {
            hour: "numeric",
            minute: "numeric",
          })}
        </Typography>
      );
    }
  }

  return (
    <div className="w-11/12 lg:w-10/12 2xl:w-8/12 m-auto flex flex-col lg:gap-2">
      {isAdmin ? (
        <>
          <div
            className="flex flex-col hover:cursor-pointer shadow-md shadow-gray-400 p-2 rounded-md lg:gap-2 bg-white items-center"
            onClick={() => setIsCreateModalOpen(true)}
          >
            <div className="text-[#23334d] text-lg lg:text-2xl xl:text-3xl font-averia_serif_light tracking-widest font-bold">
              Add Event
            </div>
            <Add color="disabled" fontSize="large" />
          </div>
          <CreateEventModal
            isOpen={isCreateModalOpen}
            setIsOpen={setIsCreateModalOpen}
          />
        </>
      ) : null}{" "}
      {mfEvents.length > 0 ? (
        mfEvents.map((currEvent: MF_Event, index: number) => {
          return (
            <div
              className="flex flex-col shadow-md shadow-gray-400 my-4 p-2 rounded-md gap-4 md:gap-6 lg:gap-8 bg-white items-center w-full"
              key={`Event ${index}`}
            >
              <div className="flex flex-col w-full">
                <Typography
                  component="h3"
                  className="text-center text-[#23334d] font-averia_serif_light font-bold tracking-widest text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl w-3/4 md:w-full m-auto"
                >
                  {currEvent.title}
                </Typography>
                <Typography className="text-center font-montserrat tracking-widest text-xs lg:text-sm 2xl:text-base">
                  {childcare(currEvent.childcare)}
                </Typography>
              </div>
              <div className="flex flex-col md:flex-row w-[95%] justify-center gap-2 lg:gap-0">
                <div className="flex flex-col justify-between xl:flex-row self-center gap-4 mb-2 w-full md:w-10/12 xl:w-11/12">
                  <div className="flex flex-col md:flex-row items-center md:items-start lg:items-center gap-4 w-full xl:w-4/5 mb-4">
                    {currEvent.image ? (
                      <div className="flex flex-col items-center justify-start w-full">
                        <Image
                          alt={`${currEvent.title} image`}
                          className="relative rounded-md h-auto"
                          fill
                          src={currEvent.image}
                        />
                      </div>
                    ) : null}
                    <Typography className="font-montserrat font-medium tracking-widest text-start text-base lg:text-lg xl:text-xl 2xl:text-2xl leading-10 w-full mx-2">
                      {currEvent.summary}
                    </Typography>
                  </div>
                  <div className="flex flex-col md:flex-row xl:flex-col flex-wrap gap-2 items-start justify-between xl:justify-around w-3/4 md:w-auto xl:w-1/5">
                    <div className="flex flex-wrap">
                      <Typography className="font-bold font-montserrat text-sm md:text-base 2xl:text-lg mr-1">
                        Date:
                      </Typography>
                      {getDate(currEvent)}
                    </div>
                    <div className="flex flex-wrap">
                      <Typography className="font-bold font-montserrat text-sm md:text-base 2xl:text-lg mr-1">
                        Time:
                      </Typography>
                      <Typography className="font-montserrat text-sm md:text-base 2xl:text-lg">
                        {getTime(currEvent)}
                      </Typography>
                    </div>
                    <div className="flex">
                      <Typography className="font-bold font-montserrat text-sm md:text-base 2xl:text-lg mr-1">
                        Cost:
                      </Typography>
                      <Typography className="font-montserrat align-bottom text-sm md:text-base 2xl:text-lg">
                        {currEvent?.cost ? `$${currEvent.cost}` : "TBA"}
                      </Typography>
                    </div>
                    <div className="flex flex-wrap">
                      <Typography
                        component="label"
                        className="font-bold font-montserrat text-sm md:text-base 2xl:text-lg mr-1"
                      >
                        Location:
                      </Typography>
                      <Typography
                        component="p"
                        className="font-montserrat text-sm md:text-base 2xl:text-lg"
                      >
                        {currEvent.street_address
                          ? `${currEvent.street_address}, ${currEvent.city}, ${currEvent.state} ${currEvent.zipcode}`
                          : "TBA"}
                      </Typography>
                    </div>
                  </div>
                </div>

                {isAdmin ? (
                  <div className="flex justify-around md:items-center md:align-middle ml-auto w-full md:w-2/12 xl:w-1/12">
                    <IconButton
                      className="hover:rounded-md"
                      onClick={() => onEdit(currEvent.id)}
                    >
                      <Edit />
                    </IconButton>
                    <IconButton
                      className="hover:rounded-md"
                      onClick={() => onDelete(currEvent.id)}
                    >
                      <Delete />
                    </IconButton>
                  </div>
                ) : null}
              </div>
              {!currEvent.can_register && currEvent.url ? (
                <Button
                  className="bg-[#23334d] font-montserrat tracking-widest xl:text-xl xl:w-1/5 xl:py-2"
                  variant="contained"
                  href={`https://${currEvent.url}`}
                  target="_blank"
                >
                  Join Waitlist
                </Button>
              ) : null}
              {currEvent.url && currEvent.can_register ? (
                <Button
                  className="bg-[#23334d] font-montserrat tracking-widest xl:text-xl xl:w-1/5 xl:py-2"
                  variant="contained"
                  href={`https://${currEvent.url}`}
                  target="_blank"
                >
                  Register
                </Button>
              ) : null}
              {currEvent.description && currEvent.description !== "<p></p>" ? (
                <Accordion className="w-full">
                  <AccordionSummary
                    aria-controls={`event-${index}-more-info`}
                    className="font-montserrat tracking-widest font-bold text-base md:text-lg xl:text-xl 2xl:text-2xl"
                    id={`event-${index}-more-info`}
                    expandIcon={<ExpandMore />}
                  >
                    More Details
                  </AccordionSummary>
                  <AccordionDetails className="font-montserrat text-sm md:text-base xl:text-lg 2xl:text-2xl w-11/12 m-auto">
                    {parse(currEvent.description)}
                  </AccordionDetails>
                </Accordion>
              ) : null}
            </div>
          );
        })
      ) : (
        <div className="h-screen">
          <div className="font-averia_serif_light font-bold tracking-widest text-2xl text-center relative top-1/3">
            There are no events at this time, please check again later
          </div>
        </div>
      )}
      {isConfirmDeleteOpen ? (
        <DeleteEventModal
          eventId={deleteEventId}
          isOpen={isConfirmDeleteOpen}
          setIsOpen={setIsConfirmDeleteOpen}
        />
      ) : null}
      {isEditModalOpen ? (
        <EditEventModal
          isOpen={isEditModalOpen}
          setIsOpen={setIsEditModalOpen}
          eventId={editEventId}
        />
      ) : null}
    </div>
  );
}
