import { Route, Routes } from "react-router-dom";
import { Home } from "../views/Home";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" />
    </Routes>
  );
};
