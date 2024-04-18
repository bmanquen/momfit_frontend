import { momfitBackend } from "@/src/utils/constants";
import { useQuery } from "@tanstack/react-query";

const fetchEvents = async () => {
  const mfEvents: Array<MF_Event> = await (
    await fetch(`${momfitBackend}/events`)
  ).json();

  return mfEvents;
};

export const useGetEvents = () => {
  return useQuery({
    queryKey: ["events"],
    queryFn: () => fetchEvents(),
  });
};
