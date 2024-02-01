import React from "react";
import NavBarMain from "../../pages/partials/NavBarMain";
import crsl2 from "../../assets/images/crsl3.png";
import Footer from "../partials/Footer";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const PetOwnerBooking = () => {
  const navItems = [];
  return (
    <>
      <NavBarMain navItems={navItems} customLink={
        <a class="nav-link text-white" href="/"><AccountCircleIcon className="me-1"/>Dashboard</a>
      } />

      <div class="my-5 container px-5 pt-5">
        <h1 class="display-5 fw-bold">
          We are ready to <span className="yuki-font-color">SERVE</span>
        </h1>

        <p class="lead mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin viverra
          aliquet tellus suscipit malesuada. Nullam id sollicitudin est. Proin
          interdum ligula ac elit condimentum, vitae lacinia erat porta. Donec
          dictum, nisl quis aliquet volutpat, diam enim lobortis urna, nec
          posuere enim orci sed dolor.
        </p>

        <div class="row align-items-center">
          <div class="col-lg-6">
            <div
              id="carouselExampleDark1"
              class="carousel carousel-light slide"
            >
              <div class="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleDark1"
                  data-bs-slide-to="0"
                  class="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleDark1"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleDark1"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div class="carousel-inner rounded-3 shadow">
                <div class="carousel-item active" data-bs-interval="10000">
                  <img src={crsl2} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                  <img src={crsl2} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                  <img src={crsl2} class="d-block w-100" alt="..." />
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleDark1"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleDark1"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>

          <div class="col-lg-6 text-center pt-1">
            <div className="container">
              <h1 class="display-6 fw-bold lh-1">
                <span>Home Care</span>
              </h1>

              <p class="lead mb-4" style={{ fontSize: "17px" }}>
                Going for a vacation or business trip and worried about your
                pet, Home Care service is your choiice. We take every precaution
                to provide a safe and stress-free boarding experience for your
                pet.
              </p>
              <p class="text-start">
                <p>Check In: 12 noon - 4:30 PM only</p>
                <p>Check Out: 11:00 AM</p>

                <p>Fee of ₱50/hr for early check in or late check out</p>
                <p>
                  Please inform our staff if your pets has any allergies or
                  specific needs.
                </p>
                <p>Rates depends on Pet size</p>
              </p>

              <h5>
                Starting at:{" "}
                <span className="yuki-font-color">₱425/1380mins</span>
              </h5>

              <a
                class="btn btn-primary button-color"
                href="/PetOwnerBookingHomeCare"
              >
                Book
              </a>
            </div>
            {/* 
            <div className="flex-container ">
              <form action="/action_page.php" className="form-container center">
                <h5 className="display-10 fw-bold lh-1">Check In</h5>
                <input type="date" id="CheckIn" name="CheckIn" />
              </form>

              <form action="/action_page.php" className="center">
                <h5 className="display-10 fw-bold lh-1">Check Out</h5>
                <input type="date" id="CheckOut" name="CheckOut" />
              </form>
            </div>
            */}
          </div>
        </div>

        <hr className="my-5" />

        <div class="row align-items-center">
          <div class="col-lg-6">
            <div
              id="carouselExampleDark2"
              class="carousel carousel-light slide"
            >
              <div class="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleDark2"
                  data-bs-slide-to="0"
                  class="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleDark2"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleDark2"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div class="carousel-inner rounded-3 shadow">
                <div class="carousel-item active" data-bs-interval="10000">
                  <img src={crsl2} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                  <img src={crsl2} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                  <img src={crsl2} class="d-block w-100" alt="..." />
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleDark2"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleDark2"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>

          <div class="col-lg-6 text-center pt-5">
            <div className="container">
              <h1 class="display-6 fw-bold lh-1">
                <span>Day Care</span>
              </h1>

              <p class="lead mb-4" style={{ fontSize: "17px" }}>
                If youre leaving home for a day under 10 hours, Day Care service
                is your best option. Bring your furry loved one in the morning
                and will take care all the needs of your pet.
              </p>

              <p class="text-start">
                <p>7:30 AM - 7:00 PM</p>
                <p>5-10 hours and strictly no late pick up</p>
                <p>Overnight rate is applied if you pick up after 7:00 PM</p>

                <p>
                  A treat is provided, please inform our staff if your pet has
                  any allergies.
                </p>
              </p>

              <h5>
                Starting at:{" "}
                <span className="yuki-font-color">₱250/600mins</span>
              </h5>

              <a
                class="btn btn-primary button-color"
                href="/PetOwnerBookingDayCare"
              >
                Book
              </a>
            </div>
            {/* 
            <div className="flex-container ">
              <form action="/action_page.php" className="form-container center">
                <h5 className="display-10 fw-bold lh-1">Check In</h5>
                <input type="date" id="CheckIn" name="CheckIn" />
              </form>

              <form action="/action_page.php" className="center">
                <h5 className="display-10 fw-bold lh-1">Check Out</h5>
                <input type="date" id="CheckOut" name="CheckOut" />
              </form>
            </div>
            */}
          </div>
        </div>

        <hr className="my-5" />

        <div class="row align-items-center">
          <div class="col-lg-6">
            <div
              id="carouselExampleDark3"
              class="carousel carousel-light slide"
            >
              <div class="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleDark3"
                  data-bs-slide-to="0"
                  class="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleDark3"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleDark3"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div class="carousel-inner rounded-3 shadow">
                <div class="carousel-item active" data-bs-interval="10000">
                  <img src={crsl2} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                  <img src={crsl2} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                  <img src={crsl2} class="d-block w-100" alt="..." />
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleDark3"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleDark3"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>

          <div class="col-lg-6 text-center pt-5">
            <div className="container">
              <h1 class="display-6 fw-bold lh-1">
                <span>Errands Care</span>
              </h1>

              <p class="lead mb-4" style={{ fontSize: "17px" }}>
                Going to church, grocery, or an important meeting for a short
                period of time and you cant attend to your pet needs, Errand
                service is for you.
              </p>

              <p class="text-start">
                <p>7:30 AM - 4:30 PM</p>
                <p>1-4 hours and strictly no late pick up</p>
                <p>7:00 PM if the last pick up</p>
                <p>Overnight rate is applied if you pick up after 7:00 PM</p>

                <p>
                  A treat is provided, please inform our staff if your pet has
                  any allergies.
                </p>
              </p>

              <h5>
                Starting at:{" "}
                <span className="yuki-font-color">₱180/240mins</span>
              </h5>

              <a
                class="btn btn-primary button-color"
                href="/PetOwnerBookingErrandsCare"
              >
                Book
              </a>
            </div>
            {/* 
            <div className="flex-container ">
              <form action="/action_page.php" className="form-container center">
                <h5 className="display-10 fw-bold lh-1">Check In</h5>
                <input type="date" id="CheckIn" name="CheckIn" />
              </form>

              <form action="/action_page.php" className="center">
                <h5 className="display-10 fw-bold lh-1">Check Out</h5>
                <input type="date" id="CheckOut" name="CheckOut" />
              </form>
            </div>
            */}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PetOwnerBooking;
