import { useCreateEvent } from "@/src/hooks/mutations/useCreateEvent";
import {
  Button,
  Dialog,
  InputAdornment,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
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
import { Dispatch, FormEvent, useRef, useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import TextStyle from "@tiptap/extension-text-style";
import TextAlign from "@tiptap/extension-text-align";
import Underline from "@tiptap/extension-underline";
import { DateTimePicker } from "@mui/x-date-pickers";
import { Dayjs } from "dayjs";
import { enqueueSnackbar } from "notistack";
import { UploadFile } from "@mui/icons-material";
import { localApi } from "@/src/utils/constants";

type CreateEventModalProps = {
  isOpen: boolean;
  setIsOpen: Dispatch<boolean>;
};

export function CreateEventModal({ isOpen, setIsOpen }: CreateEventModalProps) {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<MF_Event>();

  const rteRef = useRef<RichTextEditorRef>(null);
  const [imageFile, setImageFile] = useState<File>(null);
  const { mutateAsync: addEvent, isSuccess, isError } = useCreateEvent();

  const onSubmit: SubmitHandler<MF_Event> = async (
    mfEvent: MF_Event,
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("file", imageFile);

    try {
      if (imageFile) {
        const res = await fetch(`${localApi}/api/S3/add-file`, {
          method: "POST",
          body: formData,
        });
        const data = await res.json();
        mfEvent.image = data.imageUrl;
        if (!data) {
          throw new Error("There was a problem uploading image.");
        }
      }
      mfEvent.description = rteRef.current.editor.getHTML();

      if (mfEvent.description === "<p></p>") {
        mfEvent.description = null;
      }

      await addEvent(mfEvent);

      if (Object.keys(errors).length > 0) {
        throw new Error("These was an issue adding your event");
      }

      reset();
      setImageFile(null);
      setIsOpen(false);
      enqueueSnackbar("Your event has been added!", {
        variant: "success",
      });
    } catch (error) {
      enqueueSnackbar(
        "There was an issue creating your event, please try again.",
        { variant: "error" }
      );
    }
  };

  return (
    <>
      <Dialog fullWidth={true} open={isOpen} onClose={() => setIsOpen(false)}>
        <div className="p-4">
          <Typography gutterBottom component="h2" variant="h4">
            Create an Event
          </Typography>
          <form
            className="flex flex-col justify-center"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-col mb-2">
              <label htmlFor="image">Image</label>
              <Button
                className="max-w-max mb-2"
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
                      onChange={(event) => setImageFile(event.target.files[0])}
                    />
                  )}
                />
                {imageFile ? imageFile.name : "Choose File"}
              </Button>

              <TextField
                error={errors.title ? true : false}
                helperText={errors?.title?.message || ""}
                label="Title"
                margin="dense"
                required
                {...register("title", {
                  required: "Title is required",
                })}
              />
              <TextField
                error={errors.summary ? true : false}
                helperText={errors?.summary?.message || ""}
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
                content=""
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
                {...register("street_address")}
              />
              <TextField label="City" margin="dense" {...register("city")} />
              <TextField label="State" margin="dense" {...register("state")} />
              <TextField
                label="Zipcode"
                margin="dense"
                {...register("zipcode")}
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
                        inputRef={field.ref}
                        defaultValue={null as Dayjs}
                        label="Start Date"
                        onChange={(start_date) => {
                          field.onChange(start_date.toISOString());
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
                        defaultValue={null as Dayjs}
                        inputRef={field.ref}
                        label="End Date"
                        onChange={(end_date) => {
                          field.onChange(end_date.toISOString());
                        }}
                      />
                    );
                  }}
                />
              </div>
              <div className="flex justify-between gap-1">
                <TextField
                  className="w-1/3"
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
                  label="URL"
                  margin="dense"
                  {...register("url")}
                />
              </div>
              <TextField label="Childcare" select {...register("childcare")}>
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
              Create Event
            </Button>
          </form>
        </div>
      </Dialog>
    </>
  );
}
