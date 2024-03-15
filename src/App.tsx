import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LoginRoute from "./routes/LoginRoute";
import MessRoute from "./routes/MessRoute";
import AddMessRoute from "./routes/AddMessRoute";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginRoute />} />
        </Routes>
        <div className="w-full h-screen flex">
          <Sidebar />
          <div className="w-full">
            <Routes>
              <Route path="/" element={<div>Home</div>} />
              <Route path="/mess" element={<MessRoute />} />
              <Route path="/mess/add" element={<AddMessRoute />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
