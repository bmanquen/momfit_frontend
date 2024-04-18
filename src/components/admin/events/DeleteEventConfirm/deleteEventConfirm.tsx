import { useDeleteEvent } from "@/src/hooks/mutations/useDeleteEvent";
import { useGetEvent } from "@/src/hooks/queries/useGetEvent";
import { localApi } from "@/src/utils/constants";
import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material";
import { enqueueSnackbar } from "notistack";
import { Dispatch } from "react";

type Props = {
  eventId: number;
  isOpen: boolean;
  setIsOpen: Dispatch<boolean>;
};

export function DeleteEventModal({ eventId, isOpen, setIsOpen }: Props) {
  const { mutate } = useDeleteEvent();
  const { data: event, status } = useGetEvent(eventId);
  const imageUrl = event?.image ? event.image.split("/") : "";
  const imageName = imageUrl[imageUrl.length - 1];

  const onDelete = async (index: number) => {
    try {
      if (imageName) {
        await fetch(`${localApi}/api/S3/remove-file`, {
          method: "DELETE",
          body: JSON.stringify({ fileName: imageName }),
        });
      }
      mutate(index);
      setIsOpen(false);
      enqueueSnackbar(`${event.title} was deleted successfully!`, {
        variant: "success",
      });
    } catch (error) {
      enqueueSnackbar(
        `There was an issue deleting ${event.title}, please try again.`,
        { variant: "error" }
      );
    }
  };

  if (status === "success")
    return (
      <Dialog open={isOpen}>
        <DialogTitle>
          Are you sure you want to delete {event.title}?
        </DialogTitle>
        <DialogActions>
          <Button onClick={() => setIsOpen(false)}>Cancel</Button>
          <Button
            color="error"
            onClick={async () => await onDelete(event.id)}
            variant="outlined"
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    );
}
