import { useEditEvent } from "@/src/hooks/mutations/useEditEvent";
import { useGetEvent } from "@/src/hooks/queries/useGetEvent";
import {
  Button,
  Dialog,
  InputAdornment,
  MenuItem,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import { DateTimePicker } from "@mui/x-date-pickers";
import Placeholder from "@tiptap/extension-placeholder";
import TextAlign from "@tiptap/extension-text-align";
import { TextStyle } from "@tiptap/extension-text-style";
import Underline from "@tiptap/extension-underline";
import StarterKit from "@tiptap/starter-kit";
import {
  FontSize,
  MenuButtonBold,
  MenuButtonBulletedList,
  MenuButtonItalic,
  MenuButtonUnderline,
  MenuControlsContainer,
  MenuSelectFontSize,
  MenuSelectHeading,
  MenuSelectTextAlign,
  RichTextEditor,
  RichTextEditorRef,
} from "mui-tiptap";
import { ChangeEvent, Dispatch, useEffect, useRef, useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import parse from "html-react-parser";
import dayjs from "dayjs";
import { enqueueSnackbar } from "notistack";
import { UploadFile } from "@mui/icons-material";
import { localApi, momfitBackend } from "@/src/utils/constants";

type EditEventModalProps = {
  isOpen: boolean;
  setIsOpen: Dispatch<boolean>;
  eventId: number;
};

export function EditEventModal({
  isOpen,
  setIsOpen,
  eventId,
}: EditEventModalProps) {
  const { data: mfEvent, status, isLoading, isError } = useGetEvent(eventId);
  const [oldImageUrl, setOldImageUrl] = useState<string>(mfEvent?.image);
  const [newImageFile, setNewImageFile] = useState<File>(null);
  const [imageLabel, setImageLabel] = useState<string>("Choose File");
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<MF_Event>();
  const editEvent = useEditEvent(mfEvent);
  const rteRef = useRef<RichTextEditorRef>(null);

  useEffect(() => {
    if (!isLoading && !isError && mfEvent.image) {
      setImageLabel(mfEvent?.image.match(/[^\/]+$/g)[0]);
      setOldImageUrl(mfEvent?.image);
    }
    if (newImageFile) {
      setImageLabel(newImageFile.name);
    }
  }, [
    imageLabel,
    newImageFile,
    oldImageUrl,
    isLoading,
    isError,
    mfEvent?.image,
  ]);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewImageFile(event.target.files[0]);
  };

  const onSubmit: SubmitHandler<MF_Event> = async (mfEvent: MF_Event) => {
    mfEvent.description = rteRef.current.editor.getHTML();
    mfEvent.id = eventId;

    if (parse(mfEvent.description) === "<p></p>") {
      mfEvent.description = null;
    }

    const formData = new FormData();
    formData.append("file", newImageFile);

    try {
      if (newImageFile) {
        const res = await fetch(`${momfitBackend}/upload-file`, {
          method: "POST",
          body: formData,
        });
        await fetch(`${localApi}/api/S3/remove-file`, {
          method: "DELETE",
          body: JSON.stringify({ fileName: oldImageUrl.split("/").pop() }),
        });
        const data = await res.json();
        mfEvent.image = data.imageUrl;
        if (!data) {
          throw new Error("There was a problem uploading image.");
        }
      }

      editEvent.mutate(mfEvent);
      enqueueSnackbar(`${mfEvent.title} was saved successfully`, {
        variant: "success",
      });
      setIsOpen(false);
    } catch (error) {
      enqueueSnackbar(
        "There was an issue editing your event, please try again.",
        { variant: "error" }
      );
    }
  };

  if (status === "pending") {
    return (
      <Modal open={status === "pending"}>
        <div className="absolute bg-white rounded-md p-4 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          Loading...
        </div>
      </Modal>
    );
  }
  if (status === "error") {
    return (
      <Modal open={status === "error"}>
        <div>Error!</div>
      </Modal>
    );
  }
  if (status === "success") {
    return (
      <Dialog fullWidth={true} open={isOpen} onClose={() => setIsOpen(false)}>
        <div className="p-4">
          <Typography>Edit Event</Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col mb-2">
              <label htmlFor="image">Image</label>
              <Button
                className="max-w-min mb-2"
                color="inherit"
                component="label"
                variant="outlined"
                startIcon={<UploadFile />}
              >
                <Controller
                  control={control}
                  name="image"
                  render={() => (
                    <input
                      accept=".png, .jpg"
                      className="hidden"
                      id="image"
                      type="file"
                      onChange={(event) => handleFileChange(event)}
                    />
                  )}
                />
                {imageLabel}
              </Button>
              <TextField
                defaultValue={mfEvent?.title}
                label="Title"
                margin="dense"
                required
                {...register("title", { required: "Title is required" })}
              />
              <TextField
                defaultValue={mfEvent?.summary}
                label="Summary"
                margin="dense"
                required
                {...register("summary", { required: "Summary is required" })}
              />
              <RichTextEditor
                className="h-56"
                extensions={[
                  StarterKit,
                  FontSize,
                  Placeholder.configure({ placeholder: "Description" }),
                  TextStyle,
                  TextAlign.configure({ types: ["heading", "paragraph"] }),
                  Underline,
                ]}
                content={mfEvent?.description}
                ref={rteRef}
                renderControls={() => (
                  <MenuControlsContainer>
                    <MenuSelectHeading />
                    <MenuSelectFontSize />
                    <MenuButtonBold />
                    <MenuButtonItalic />
                    <MenuButtonUnderline />
                    <MenuSelectTextAlign />
                    <MenuButtonBulletedList />
                  </MenuControlsContainer>
                )}
              />
            </div>
            <div className="flex flex-col">
              <Typography component="h6" variant="h6">
                Location
              </Typography>
              <TextField
                label="Street Address"
                margin="dense"
                defaultValue={mfEvent.street_address}
                {...register("street_address")}
              />
              <TextField
                label="City"
                margin="dense"
                defaultValue={mfEvent.city}
                {...register("city")}
              />
              <TextField
                label="State"
                margin="dense"
                defaultValue={mfEvent.state}
                {...register("state")}
              />
              <TextField
                error={errors?.zipcode ? true : false}
                helperText={errors.zipcode ? "Zipcode must be numerical" : ""}
                label="Zipcode"
                margin="dense"
                defaultValue={mfEvent.zipcode}
                {...register("zipcode", { pattern: /^[0-9]*$/ })}
              />
            </div>
            <div className="flex flex-col gap-1 mt-1">
              <div className="flex justify-between gap-1">
                <Controller
                  control={control}
                  name="start_date"
                  render={({ field }) => {
                    return (
                      <DateTimePicker
                        className="border-2 border-gray w-1/2"
                        defaultValue={
                          mfEvent.start_date ? dayjs(mfEvent.start_date) : null
                        }
                        inputRef={field.ref}
                        label="Start Date"
                        onChange={(start_date) => {
                          field.onChange(start_date);
                        }}
                      />
                    );
                  }}
                />
                <Controller
                  control={control}
                  name="end_date"
                  render={({ field }) => {
                    return (
                      <DateTimePicker
                        className="border-2 border-gray w-1/2"
                        defaultValue={
                          mfEvent.end_date ? dayjs(mfEvent.end_date) : null
                        }
                        inputRef={field.ref}
                        label="End Date"
                        onChange={(end_date) => {
                          field.onChange(end_date);
                        }}
                      />
                    );
                  }}
                />
              </div>
              <div className="flex justify-between gap-1">
                <TextField
                  className="w-1/3"
                  defaultValue={mfEvent.cost}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">$</InputAdornment>
                    ),
                  }}
                  label="Cost"
                  margin="dense"
                  {...register("cost")}
                />
                <TextField
                  className="w-2/3"
                  defaultValue={mfEvent.url}
                  label="URL"
                  margin="dense"
                  {...register("url")}
                />
              </div>
              <TextField
                defaultValue={mfEvent.childcare}
                label="Childcare"
                select
                {...register("childcare")}
              >
                <MenuItem value="">None</MenuItem>
                <MenuItem value="kid_friendly">Kid Friendly Event</MenuItem>
                <MenuItem value="childcare_options">
                  Childcare Options Available
                </MenuItem>
              </TextField>
            </div>
            <Button
              className="border-2 mt-4"
              color="inherit"
              type="submit"
              variant="outlined"
            >
              Edit Event
            </Button>
          </form>
        </div>
      </Dialog>
    );
  }
}
