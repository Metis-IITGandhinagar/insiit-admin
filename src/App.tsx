import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LoginRoute from "./routes/LoginRoute";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<div>Home</div>} />
          <Route path="/login" element={<LoginRoute />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
