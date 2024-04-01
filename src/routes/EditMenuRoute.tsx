import { useEffect, useState } from "react";
import Mess, { MessMenuItems } from "../types/Mess";
import { getAllMesses } from "../utils/MessUtils";
import DefaultLoader from "../components/DefaultLoader";
import { DAYS_OF_THE_WEEK, MEAL_TIMES } from "../types/Globals";
import { Box, TextField } from "@mui/material";

interface EditMenuRouteProps {}

const EditMenuRoute: React.FC<EditMenuRouteProps> = () => {
  const [messes, setMesses] = useState<Mess[]>([]);
  const [selectedMess, setSelectedMess] = useState<Mess | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedDay, setSelectedDay] = useState<string>("monday");
  const [isDayDialogOpen, setIsDayDialogOpen] = useState(false);

  const handleDelete = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    setMesses(messes.filter(mess => mess.id !== Number(data.get("id"))));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    console.log(data.get("id"), data.get("name"), data.get("description"));
    // const newMenu: MessMenuItems = {
    //   breakfast: [],
    //   lunch: [],
    //   snacks: [],
    //   dinner: [],
    // };

    // MEAL_TIMES.forEach(meal => {
    //   const items = (data.get(meal) as string).split("\n");
    //   items.forEach(item => {
    //     const [name, description] = item.split(" - ");
    //     const menuItem: MessMenuItem = {
    //       id: Math.floor(Math.random() * 1000),
    //       name,
    //       description,
    //       rating: 0,
    //     };
    //     newMenu[meal].push(menuItem);
    //   });
    // });

    // console.log(newMenu);
  };

  useEffect(() => {
    getAllMesses().then(res => {
      setMesses(res.data.messes);
    });
  }, []);

  return (
    <div>
      <div className="w-full">
        <div className="flex justify-between items-center p-10">
          <div className="text-2xl font-bold">Edit Menu</div>
        </div>
        <div>
          {messes.length === 0 ? (
            <DefaultLoader />
          ) : (
            <div>
              {messes.map(mess => (
                <div
                  key={mess.id}
                  className="p-5 border-b border-gray-200 cursor-pointer hover:bg-gray-100 transition-all"
                  onClick={() => {
                    setSelectedMess(mess);
                    setIsDialogOpen(true);
                    console.log(mess.menu);
                  }}
                >
                  <div className="text-xl font-bold">{mess.name}</div>
                  <div className="text-gray-500"></div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {selectedMess && isDialogOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-full p-10 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-10 rounded-lg w-full m-10 overflow-y-auto max-h-full">
            <div className="text-2xl font-bold">Edit Menu</div>
            <div className="text-gray-500 mb-4">Edit the menu for {selectedMess?.name}</div>
            <div>
              {!!selectedMess.menu &&
                DAYS_OF_THE_WEEK.map(day => (
                  <div
                    key={day}
                    className="p-5 border-b border-gray-200 cursor-pointer hover:bg-gray-100 transition-all"
                    onClick={() => {
                      setSelectedDay(day);
                      setIsDayDialogOpen(true);
                    }}
                  >
                    <div className="text-xl font-bold">{day}</div>
                  </div>
                ))}
            </div>
            <div className="flex justify-between mt-5">
              <button className="bg-red-500 text-white px-5 py-2 rounded-lg" onClick={() => setIsDialogOpen(false)}>
                Cancel
              </button>
              <button className="bg-primary text-black px-5 py-2 rounded-lg">Save</button>
            </div>
          </div>
        </div>
      )}

      {selectedMess && isDayDialogOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-full p-10 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-10 rounded-lg w-full m-10 overflow-y-auto max-h-full">
            <div className="text-2xl font-bold">
              Edit Menu - {selectedMess.name} - {selectedDay}
            </div>

            {selectedMess.menu &&
              MEAL_TIMES.map(meal => {
                return ((selectedMess.menu as never)[selectedDay] as MessMenuItems)[meal].map(item => (
                  <div key={item.id} className="py-4 border-b border-200">
                    <Box component="form" onSubmit={handleSubmit} onReset={handleDelete} noValidate sx={{ mt: 1 }}>
                      <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="id"
                        label="Item id"
                        name="id"
                        autoComplete="id"
                        defaultValue={item.id}
                        className="!hidden"
                        // disabled
                      />
                      <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="name"
                        label="Item name"
                        name="name"
                        autoComplete="name"
                        autoFocus
                        defaultValue={item.name}
                      />
                      <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="description"
                        label="Item description"
                        name="description"
                        autoComplete="description"
                        defaultValue={item.description}
                      />
                      <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="rating"
                        label="Rating"
                        name="rating"
                        autoComplete="rating"
                        defaultValue={item.rating}
                      />

                      <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="cal"
                        label="Calories"
                        name="cal"
                        autoComplete="cal"
                        defaultValue={item.cal}
                      />

                      <div className="flex justify-between mt-2">
                        <button type="reset" className="bg-red-500 text-white px-5 py-2 rounded-lg">
                          Delete
                        </button>
                        <button type="submit" className="bg-primary text-black px-5 py-2 rounded-lg">
                          Save
                        </button>
                      </div>
                    </Box>
                  </div>
                ));
              })}
            <div className="flex justify-between mt-5">
              <button className="bg-red-500 text-white px-5 py-2 rounded-lg" onClick={() => setIsDayDialogOpen(false)}>
                Cancel
              </button>
              <button className="bg-primary text-black px-5 py-2 rounded-lg">Save</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditMenuRoute;
