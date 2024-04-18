import { momfitBackend } from "@/src/utils/constants";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const removeEvent = async (id: number) => {
  await fetch(`${momfitBackend}/events/${id}`, { method: "DELETE" });
};

const useDeleteEvent = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: number) => removeEvent(id),
    onSuccess: () => {
      return queryClient.invalidateQueries({ queryKey: ["events"] });
    },
  });
};

export { useDeleteEvent };
