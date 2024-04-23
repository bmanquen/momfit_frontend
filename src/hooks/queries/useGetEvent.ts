import { momfitBackend } from "@/src/utils/constants";
import { useQuery } from "@tanstack/react-query";

const fetchEvent = async (eventId: number): Promise<MF_Event> => {
  try {
    const response = await fetch(`${momfitBackend}/events/${eventId}`);
    if (!response.ok) {
      throw new Error("Failed to get event");
    }
    return await response.json();
  } catch (error) {
    console.error("Error getting the event:", error);
  }
};

export const useGetEvent = (eventId: number) => {
  return useQuery({
    queryKey: ["event", eventId],
    queryFn: () => fetchEvent(eventId),
  });
};
