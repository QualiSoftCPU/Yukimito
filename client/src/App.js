import AdminDashBoard from "./pages/AdminDashboard";
import AdminNavbar from "./components/AdminNavbar";
import AdminManageContent from "./pages/AdminManageContent";
import AdminCalendar from "./pages/AdminCalendar";
import AdminInventory from "./pages/AdminInventory";
import AdminVaccine from "./pages/AdminVaccine";
import AdminBooking from "./pages/AdminBooking";
import AdminClient from "./pages/AdminClient";
import LandingPage from "./pages/LandingPage";
import ClientLogin from "./pages/ClientLogin";
import ClientRegister from "./pages/ClientRegister";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <AdminNavbar />
      <div className="container">
        <Routes>
          <Route path="/LandingPage" element={<LandingPage />} />

          <Route path="/ClientLogin" element={<ClientLogin />} />
          <Route path="/ClientRegister" element={<ClientRegister />} />

          <Route path="/AdminDashboard" element={<AdminDashBoard />} />
          <Route path="/AdminManageContent" element={<AdminManageContent />} />
          <Route path="/AdminCalendar" element={<AdminCalendar />} />
          <Route path="/AdminInventory" element={<AdminInventory />} />
          <Route path="/AdminVaccine" element={<AdminVaccine />} />
          <Route path="/AdminBooking" element={<AdminBooking />} />
          <Route path="/AdminClient" element={<AdminClient />} />
        </Routes>
      </div>
      
    </div>
  );
}

export default App;
