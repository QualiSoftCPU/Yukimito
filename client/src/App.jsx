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


// pet ownwer pages
import PetOwnerHome from "./pages/PetOwnerHome";
import PetOwnerReview from "./pages/PetOwnerReview";
import PetOwnerContact from "./pages/PetOwnerContact";
import PetOwnerSizeChart from "./pages/PetOwnerSizeChart";
import PetOwnerRates from "./pages/PetOwnerRates";
import PetOwnerPhotos from "./pages/PetOwnerPhotos";
import PetOwnerRequirements from "./pages/PetOwnerRequirements";


import { BrowserRouter, Routes, Route } from "react-router-dom";
import ClientRegister from "./pages/PetOwnerRegister";
import AdminLogin from "./pages/AdminLogin";
import PetOwnerLogin from "./pages/PetOwnerLogin";
import SuccessTestPage from "./pages/SuccessTestpage";
import LandingPage from "./pages/LandingPage";
import PetOwnerDashboard from "./pages/PetOwnerDashboard";

export default function App() {

  return (  
    <BrowserRouter>
      <Routes>

        {/* pet owner pages*/}
        <Route path="/PetOwnerHome" element={<PetOwnerHome />} />
        <Route path="/PetOwnerReview" element={<PetOwnerReview />} />
        <Route path="/PetOwnerContact" element={<PetOwnerContact />} />
        <Route path="/PetOwnerSizeChart" element={<PetOwnerSizeChart />} />
        <Route path="/PetOwnerRates" element={<PetOwnerRates />} />
        <Route path="/PetOwnerPhotos" element={<PetOwnerPhotos />} />
        <Route path="/PetOwnerRequirements" element={<PetOwnerRequirements />} />

        {/* admin pages */} 



        <Route path="/Landing" element={<LandingPage />} />
        <Route path="/" element={<PetOwnerLogin />} />
        <Route path="/ClientRegister" element={<ClientRegister />} />
        <Route path="/AdminLogin" element={<AdminLogin />} />
        <Route path="/AdminDashboard" element={<AdminDashBoard />} />
        <Route path="/SuccessTestPage" element={<SuccessTestPage />} />
        <Route path="/PetOwnerDashboard" element={<PetOwnerDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
