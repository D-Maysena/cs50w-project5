import { Navigate, Route, Routes } from "react-router-dom";
import { refreshToken } from "../../auth/helpers/fetch";
import { useEffect } from "react";
import { Home } from "../pages/Home";
import { Communities } from "../pages/Communities";
import { Calendar } from "../pages/Calendar";
import { Inbox } from "../pages/Inbox";
import { ComposeEmail } from "../pages/ComposeEmail";
import { Community } from "../pages/Community";
import { Events } from "../components/Events";

export const HomeRoutes = () => {


  return (
    <>

      <Routes>
        <Route path="/communities" element={<Communities />} />
        <Route path="/home" element={<Home />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/inbox" element={<Inbox />} />
        <Route path="/compose" element={<ComposeEmail />} />
        <Route path="/community/:id" element={<Community />} />
        <Route path="/events" element={<Events />} />

      </Routes>
    </>
  );
};
