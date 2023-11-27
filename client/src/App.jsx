 import AdminDashBoard from "./pages/AdminDashboard";
// import AdminNavbar from "./components/AdminNavbar";
// import AdminManageContent from "./pages/AdminManageContent";
// import AdminCalendar from "./pages/AdminCalendar";
// import AdminInventory from "./pages/AdminInventory";
// import AdminVaccine from "./pages/AdminVaccine";
// import AdminBooking from "./pages/AdminBooking";
// import AdminClient from "./pages/AdminClient";
// import LandingPage from "./pages/LandingPage";
// import ClientLogin from "./pages/ClientLogin";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ClientRegister from "./pages/PetOwnerRegister";
import AdminLogin from "./pages/AdminLogin";
import PetOwnerLogin from "./pages/PetOwnerLogin";
import SuccessTestPage from "./pages/SuccessTestpage";
import LandingPage from "./pages/LandingPage";

export default function App() {

  return (  
    <BrowserRouter>
      <Routes>
        <Route path="/Landing" element={<LandingPage />} />
        <Route path="/" element={<PetOwnerLogin />} />
        <Route path="/ClientRegister" element={<ClientRegister />} />
        <Route path="/AdminLogin" element={<AdminLogin />} />
        <Route path="/SuccessTestPage" element={<SuccessTestPage />} />
        <Route path="/AdminDashboard" element={<AdminDashBoard />} />
      </Routes>
    </BrowserRouter>
  );
}
