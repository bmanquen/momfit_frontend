import { momfitBackend } from "@/src/utils/constants";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const editEvent = async (eventData: MF_Event) => {
  return await (
    await fetch(`${momfitBackend}/events/${eventData.id}`, {
      method: "PUT",
      body: JSON.stringify(eventData),
      headers: { "Content-Type": "application/json" },
    })
  ).json();
};

export const useEditEvent = (eventData: MF_Event) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (eventData: MF_Event) => editEvent(eventData),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["event", eventData.id],
      });
      queryClient.invalidateQueries({
        queryKey: ["events"],
      });
    },
  });
};
