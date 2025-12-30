import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AvailableCourses from "./pages/AvailableCourses";
import GetCourses from "./pages/GetCourses";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/available-courses" element={<AvailableCourses />} />
      <Route path="/get-courses" element={<GetCourses />} />
    </Routes>
  );
}

export default App;
