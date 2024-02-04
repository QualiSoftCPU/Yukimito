import React from "react";
import NavBarMain from "../../pages/partials/NavBarMain";
import crsl2 from "../../assets/images/service.png";
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import Footer from "../partials/Footer";
import HailIcon from '@mui/icons-material/Hail';
import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';

const PetOwnerBooking = () => {
  const navItems = ["Home Care", "Day Care", "Errands Care"];
  return (
    <>
      <NavBarMain navItems={navItems} customLink={
        <li class="nav-item active px-3 align-middle yuki-font-color">
          <a class="nav-link text-white" href="/PetOwnerDashboard"><KeyboardReturnIcon className="me-1"/>Back to Profile</a>
        </li>
      } />

      <div class="my-5 container px-5 pt-5">
        <h1 class="display-5 fw-bold">
          We Are Ready To <span className="yuki-font-color">SERVE!</span>
        </h1>

        <p class="lead mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin viverra
          aliquet tellus suscipit malesuada. Nullam id sollicitudin est. Proin
          interdum ligula ac elit condimentum, vitae lacinia erat porta. Donec
          dictum, nisl quis aliquet volutpat, diam enim lobortis urna, nec
          posuere enim orci sed dolor.
        </p>

        <h1 class="display-6 fw-bold text-center">
          Our Services Offered.
        </h1>

        <hr id="Home Care" className="my-5 py-3"/> 

        <div class="card my-5 shadow border-1">
          <img src={crsl2} class="img-fluid card-img-top" alt="..."/>
          <div className="card-header">
            <h1 class="display-6 fw-bold lh-1 lead">
              <span>Home Care</span>
            </h1>
            <p>
              <span className="text-success">
                <DirectionsWalkIcon />
                Check In: 12 noon - 4:30 PM only &nbsp;
              </span>
              <span className="text-danger">
                <HailIcon />Check Out: 11:00 AM
              </span>
            </p>
          </div>
          <div class="card-body">
            <p class="lead" style={{ fontSize: "17px" }}>
              Going for a vacation or business trip and worried about your
              pet, Home Care service is your choiice. We take every precaution
              to provide a safe and stress-free boarding experience for your
              pet.
            </p>
            <p className="text-secondary">
              <WarningAmberIcon className="me-1 text-danger"/>
              Fee of ₱50/hr is charged for early check in or late check out 
              <br />
              <WarningAmberIcon className="me-1 text-danger"/>Please inform our staff if your pets has any allergies or
              specific needs.
              <br />
              <WarningAmberIcon className="me-1 text-danger"/>Rate is dependent on pet size.
            </p>

            <h5 className="lead text-dark mt-5">
              Starting at:
              <br />
               <span className="h1 fw-bold">₱425.00</span><spa className="text-secondary"> for 1,380 mins.</spa>
            </h5>
            <a
              class="btn btn-primary button-color mt-1"
              href="/PetOwnerBookingHomeCare/Home Care"
            >
              Book This Service
            </a>
          </div>
        </div>

        <hr id="Day Care" className="my-5 py-3"/>

        <div class="card my-5 shadow border-1">
          <img src={crsl2} class="img-fluid" alt="..."/>
          <div className="card-header">
            <h1 class="display-6 fw-bold lh-1 lead">
              <span>Day Care</span>
            </h1>
            <p>
              <span className="text-success">
                <DirectionsWalkIcon />
                7:30 AM - 7:00 PM &nbsp;
              </span>
            </p>
          </div>
          <div class="card-body">
            <p class="lead" style={{ fontSize: "17px" }}>
              If youre leaving home for a day under 10 hours, Day Care service is your best option. Bring your furry loved one in the morning and will take care all the needs of your pet.
            </p>
            <p className="text-secondary">
              <WarningAmberIcon className="me-1 text-danger"/>
                5-10 hours ONLY 
              <br />
              <WarningAmberIcon className="me-1 text-danger"/>
                Strictly no late pick ups - 7 PM last pick up time
              <br />
              <WarningAmberIcon className="me-1 text-danger"/>
              Overnight rate is applied if you pick up later than 7 PM
              <br />
              <WarningAmberIcon className="me-1 text-danger"/>
              A treat is provided, please inform our staff if your pet has any allergies.
            </p>

            <h5 className="lead text-dark mt-5">
              Starting at:
              <br />
              
              <span className="h1 fw-bold">₱250.00</span><span className="text-secondary"> for 600 mins.</span>
            </h5>
            <a
              class="btn btn-primary button-color"
              href="/PetOwnerBookingHomeCare/Day Care"
            >
              Book This Service
            </a>
          </div>
        </div>

        <hr id="Errands Care" className="my-5 py-3"/>

        <div class="card my-5 shadow border-1">
          <img src={crsl2} class="img-fluid" alt="..."/>
          <div className="card-header">
            <h1 class="display-6 fw-bold lh-1 lead">
              <span>Errands Care</span>
            </h1>
            <p>
              <span className="text-success">
                <DirectionsWalkIcon />
                7:30 AM - 4:30 PM &nbsp;
              </span>
            </p>
          </div>
          <div class="card-body">
            <p class="lead" style={{ fontSize: "17px" }}>
              Going to church, grocery, or an important meeting for a short period of time and you cant attend to your pet needs, Errand service is for you.
            </p>
            <p className="text-secondary">
              <WarningAmberIcon className="me-1 text-danger"/>
                1-4 hours ONLY
              <br />
              <WarningAmberIcon className="me-1 text-danger"/>
                Strictly no late pick ups - 7 PM last pick up time
              <br />
              <WarningAmberIcon className="me-1 text-danger"/>
                Overnight rate is applied if you pick up later than 7 PM
              <br />
              <WarningAmberIcon className="me-1 text-danger"/>
              A treat is provided, please inform our staff if your pet has any allergies.
            </p>

            <h5 className="lead text-dark mt-5">
              Starting at:
                <br />
                <span className="h1 fw-bold">₱180.00</span><span className="text-secondary"> for 240 mins.</span>
              </h5>
            <a
              class="btn btn-primary button-color"
              href="/PetOwnerBookingHomeCare/Errands Care"
            >
              Book This Service
            </a>
          </div>
        </div>

      </div>

      <Footer />
    </>
  );
};

export default PetOwnerBooking;
