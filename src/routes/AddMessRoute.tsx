import { Box, Button, TextField } from "@mui/material";
import Mess from "../types/Mess";
import { addMess } from "../utils/MessUtils";

interface AddMessRouteProps {}

const AddMessRoute: React.FC<AddMessRouteProps> = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const mess: Mess = {
      name: data.get("name") as string,
      landmark: data.get("location") as string,
      timings: {
        breakfast: {
          start: data.get("breakfast-start") as string,
          end: data.get("breakfast-end") as string,
        },
        lunch: {
          start: data.get("lunch-start") as string,
          end: data.get("lunch-end") as string,
        },
        snacks: {
          start: data.get("snacks-start") as string,
          end: data.get("snacks-end") as string,
        },
        dinner: {
          start: data.get("dinner-start") as string,
          end: data.get("dinner-end") as string,
        },
      },
      rating: 0,
      image: "",
      location: {
        latitude: 0,
        longitude: 0,
      },
    };

    console.log(mess);

    console.log(await addMess(mess));
  };

  return (
    <div className="w-full">
      <div className="flex justify-between items-center p-10">
        <div className="text-2xl font-bold">Add Mess</div>
      </div>
      <div className="px-10">
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="Mess name"
            name="name"
            autoComplete="name"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="location"
            label="Mess location"
            name="location"
            autoComplete="location"
          />
          <div className="py-2 my-2">
            <span className="text-xl font-medium">Timings</span>
          </div>
          <div className="flex flex-col">
            <span className="text-lg">Breakfast</span>
            <div className="flex gap-4">
              <TextField
                margin="normal"
                required
                id="breakfast-start"
                label="Start"
                name="breakfast-start"
                autoComplete="breakfast-start"
              />
              <TextField
                margin="normal"
                required
                id="breakfast-end"
                label="End"
                name="breakfast-end"
                autoComplete="breakfast-end"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-lg">Lunch</span>
            <div className="flex gap-4">
              <TextField
                margin="normal"
                required
                id="lunch-start"
                label="Start"
                name="lunch-start"
                autoComplete="lunch-start"
              />
              <TextField
                margin="normal"
                required
                id="lunch-end"
                label="End"
                name="lunch-end"
                autoComplete="lunch-end"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-lg">Snacks</span>
            <div className="flex gap-4">
              <TextField
                margin="normal"
                required
                id="snacks-start"
                label="Start"
                name="snacks-start"
                autoComplete="snacks-start"
              />
              <TextField
                margin="normal"
                required
                id="snacks-end"
                label="End"
                name="snacks-end"
                autoComplete="snacks-end"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-lg">Dinner</span>
            <div className="flex gap-4">
              <TextField
                margin="normal"
                required
                id="dinner-start"
                label="Start"
                name="dinner-start"
                autoComplete="dinner-start"
              />
              <TextField
                margin="normal"
                required
                id="dinner-end"
                label="End"
                name="dinner-end"
                autoComplete="dinner-end"
              />
            </div>
          </div>
          <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
            Create
          </Button>
        </Box>
      </div>
    </div>
  );
};

export default AddMessRoute;
