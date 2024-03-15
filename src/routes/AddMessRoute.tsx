import { Box, Button, TextField, Typography } from "@mui/material";

interface AddMessRouteProps {}

const AddMessRoute: React.FC<AddMessRouteProps> = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    console.log({
      name: data.get("name"),
      location: data.get("location"),
      breakfastStart: data.get("breakfast-start"),
      breakfastEnd: data.get("breakfast-end"),
      lunchStart: data.get("lunch-start"),
      lunchEnd: data.get("lunch-end"),
      dinnerStart: data.get("dinner-start"),
      dinnerEnd: data.get("dinner-end"),
    });
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
