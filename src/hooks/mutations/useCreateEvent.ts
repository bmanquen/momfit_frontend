import { momfitBackend } from "@/src/utils/constants";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const addEvent = async (eventData: MF_Event) => {
  const mfEvent: MF_Event = await (
    await fetch(`${momfitBackend}/events`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(eventData),
    })
  ).json();
  return mfEvent;
};

export const useCreateEvent = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (eventData: MF_Event) => addEvent(eventData),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["events"] }),
  });
};
