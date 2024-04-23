import { momfitBackend } from "@/src/utils/constants";
import { useQuery } from "@tanstack/react-query";

const fetchEvents = async () => {
  try {
    const response = await fetch(`${momfitBackend}/events`);
    if (!response.ok) {
      throw new Error("Failed to get events");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching events:", error);
    throw error;
  }
};

export const useGetEvents = () => {
  return useQuery({
    queryKey: ["events"],
    queryFn: () => fetchEvents(),
  });
};
