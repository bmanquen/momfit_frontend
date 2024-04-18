import { momfitBackend } from "@/src/utils/constants";
import { useQuery } from "@tanstack/react-query";

const fetchEvent = async (eventId: number): Promise<MF_Event> => {
  return await (await fetch(`${momfitBackend}/events/${eventId}`)).json();
};

export const useGetEvent = (eventId: number) => {
  return useQuery({
    queryKey: ["event", eventId],
    queryFn: () => fetchEvent(eventId),
  });
};
