import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";

type ServiceCardProps = {
  title: string;
  description: string;
};
export default function ServiceCard({ title, description }: ServiceCardProps) {
  return (
    <Card className="mx-4 my-2 rounded-2xl transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:cursor-pointer shadow-md shadow-neutral-600 hover:shadow-xl hover:shadow-neutral-600">
      <CardContent className="mb-2 text-center">
        <Typography className="mb-4" variant="h5">
          {title}
        </Typography>
        <Typography variant="body1">{description}</Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Button
          className="text-white m-auto bg-neutral-800 hover:bg-neutral-200 hover:text-black"
          size="small"
          color="primary"
          variant="contained"
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
