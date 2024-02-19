import Footer from "../partials/Footer";
import Box from "@mui/material/Box";
// import ProfileMenu from '../../components/partials/ProfileMenu'
import Avatar from "@mui/material/Avatar";
import profilePicture from "../../assets/images/pp1.jpeg";
import AddPetForm from "../../components/partials/AddPetForm";
import EditPetProfileForm from "../../components/partials/EditPetProfileForm";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import NavBarMain from "../partials/NavBarMain";
import Logout from "../partials/Logout";
import VerifiedIcon from "@mui/icons-material/Verified";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import VaccinesIcon from "@mui/icons-material/Vaccines";
import coverImage from "../../assets/images/coverImage.jpeg";

export default function PetOwnerDashboard() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  let userSelected = jwtDecode(token);

  const [pets, setPets] = useState([]);
  const [petOwnerDetails, setPetOwnerDetails] = useState({
    ownerName: String,
    username: String,
    address: String,
    contactNumber: Number,
    email: String,
  });
  const [pet, setPet] = useState({
    name: String,
    breed: String,
    birthday: String,
    size: String,
    petOwnerId: userSelected.id,
  });
  const [userData, setUserData] = useState({});
  const [open, setOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);

  const [ownerNameError, setOwnerNameError] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [contactNumberError, setContactNumberError] = useState("");
  const [emailError, setEmailError] = useState("");
  // const [ addressError, setAddressError ] = useState('');

  const handleChange = (event) => {
    setPet({
      ...pet,
      [event.target.name]: event.target.value,
    });
  };
  const handleDateChange = (date) => {
    setPet({ ...pet, birthday: date.format("MM-DD-YYYY") });
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleCancel = () => {
    setOpen(false);
  };

  const handleUpdateUser = (updatedUser) => {
    setPetOwnerDetails(updatedUser);
  };

  const updateFormData = (event) => {
    const regex = /^[0-9\b]+$/;
    setPetOwnerDetails({
      ...petOwnerDetails,
      [event.target.name]: event.target.value,
    });
    if (petOwnerDetails.ownerName.length <= 5) {
      setOwnerNameError("Name must be at least 5 characters long");
    } else {
      setOwnerNameError("");
    }
    if (petOwnerDetails.username.length <= 5) {
      setUsernameError("Username must be at least 5 characters long");
    } else {
      setUsernameError("");
    }
    if (
      regex.test(petOwnerDetails.contactNumber) &&
      petOwnerDetails.contactNumber.length >= 11 - 1
    ) {
      setContactNumberError(``);
    } else {
      setContactNumberError("Invalid Contact Number");
    }
    if (petOwnerDetails.email.length < 5) {
      setEmailError("Invalid Email Address");
    } else {
      setEmailError("");
    }
  };
  const handleEditOpen = () => {
    setOpenEdit(true);
  };
  const handleEditCancel = () => {
    setOpenEdit(false);
    window.location.reload();
  };

  async function handleAdd() {
    const token = localStorage.getItem("token");

    console.log(pet);

    try {
      const response = await axios.post(
        "http://localhost:4269/api/addPet/pet",
        pet,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        setOpen(false);
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  }

  const handleUpdate = async () => {
    const ownerId = userSelected.id;
    // console.log("debug")
    // console.log(petOwnerDetails)

    try {
      // if (textField is valid) {
      //   const response
      // } else {
      //   setError('Invalid input')
      // }
      const response = await axios.put(
        `http://localhost:4269/api/auth/editProfile/petowner/${ownerId}`,
        petOwnerDetails,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        // setUserData(petOwnerDetails);
        console.log(response.data.name);
        console.log(userSelected.name);
        console.log("Successfully updated!");
        window.location.reload();
      } else {
        console.log("Update failed!");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
    }

    fetch(`http://localhost:4269/api/getPets/pet/${userSelected.id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((fetchedPets) => setPets(fetchedPets))
      .catch((error) => console.log(error));

    axios
      .get(`http://localhost:4269/api/auth/getPetOwner/${userSelected.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const userDetails = response.data;

        setPetOwnerDetails({
          ownerName: userDetails.name,
          username: userDetails.username,
          address: "No address",
          contactNumber: userDetails.contact_number,
          email: userDetails.email,
        });

        setUserData({
          ownerName: userDetails.name,
          username: userDetails.username,
          address: "No address",
          contactNumber: userDetails.contact_number,
          email: userDetails.email,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, [navigate, userSelected.id]);

  const navItems = [];

  const iconStyle = {
    fontSize: "35px",
  };

  // console.log(userSelected)
  // console.log(petOwnerDetails)
  // console.log(userData)

  return (
    <>
      <NavBarMain navItems={navItems} customLink={<Logout />} />
      <div className="mt-5 pt-3 px-5 yuki-color2 text-center">
        Welcome back to Yukimito Services!
      </div>

      <div className="container px-5" >
        <Box sx={{ flexGrow: 1 }} >
          <div style={{ position: "relative" }} >
            <img
              src={coverImage}
              alt="Cover Photo"
              style={{ width: "100%", height: "400px", objectFit: "cover" }}
            />

            <div className="mt-3">
              <div className="col mt-3">
                <Avatar
                  alt="Profile Picture"
                  src={profilePicture}
                  sx={{
                    transform: "translate(10%, -80%)",
                    width: 150,
                    height: 150,
                  }}
                />
              </div>
            </div>
            <div className="col align-middle">
              <div class="d-flex justify-content-between align-content-center" >
                <div className="col">
                  <h1>
                    {userData.ownerName}{" "}
                    <VerifiedIcon
                      style={iconStyle}
                      className="yuki-font-color"
                    />
                  </h1>
                </div>
                <div class="col d-flex flex-row-reverse lg">
                  <div>
                    <EditPetProfileForm
                      ownerName={petOwnerDetails.ownerName}
                      username={petOwnerDetails.username}
                      contactNumber={petOwnerDetails.contactNumber}
                      address={petOwnerDetails.address}
                      email={petOwnerDetails.email}
                      openEdit={openEdit}
                      handleUpdateUser={handleUpdateUser}
                      handleUpdate={handleUpdate}
                      updateFormData={updateFormData}
                      handleEditOpen={handleEditOpen}
                      handleEditCancel={handleEditCancel}
                      ownerNameError={ownerNameError}
                      usernameError={usernameError}
                      contactNumberError={contactNumberError}
                      emailError={emailError}
                    />
                  </div>
                </div>
              </div>

              <div
                class="modal fade"
                id="exampleModalCenter"
                tabindex="-1"
                role="dialog"
                aria-labelledby="exampleModalCenterTitle"
                aria-hidden="true"
              >
                <div class="modal-dialog modal-dialog-centered" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalCenterTitle">
                        Edit Profile
                      </h5>
                      <button
                        type="button"
                        class="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-x"
                          viewBox="0 0 16 16"
                        >
                          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                        </svg>
                      </button>
                    </div>
                    <div class="modal-body">Edit Profile</div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-dismiss="modal"
                      >
                        Close
                      </button>
                      <button
                        type="button"
                        class="btn btn-primary yuki-color2 yuki-border-color"
                      >
                        Save changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <h5 className="text-secondary">@{userData.username}</h5>
            </div>

            <hr />

            <div className="d-flex justify-content-center mx-auto">
              <a className="btn yuki-color text-white" href="/PetOwnerBooking">
                Book Now!
              </a>
            </div>

            <div className="py-3">
              <div className="card shadow">
                <div class="card-header">
                  <b>Pet Owner Details</b>
                </div>
                <div class="card-body">
                  <h5 class="card-title">{userData.address}</h5>
                  <p class="card-text text-secondary">
                    Contact Number: {userData.contactNumber}
                    <br />
                    Email: {userData.email}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <hr />

          <div className="row">
            <div className="row col">

            <div className="row col-4">

              <div>
                <h5 className="py-3">
                  <b>Rates and Services</b>
                </h5>
                <div className="card my-2 shadow">
                  <div className="card-header">
                    Here are the services that we offer:
                  </div>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">
                      <CheckCircleOutlineIcon className="me-1 text-success" />
                      Home Care (24 Hours) starting at ₱450.00
                    </li>
                    <li class="list-group-item">
                      <CheckCircleOutlineIcon className="me-1 text-success" />
                      Day Care (10 Hours) starting at ₱250.00
                    </li>
                    <li class="list-group-item">
                      <CheckCircleOutlineIcon className="me-1 text-success" />
                      Errands Care (4 Hours) starting at ₱180.00
                    </li>
                  </ul>
                </div>

                <h5 className="py-3">
                  <b>Boarding Requirements</b>
                </h5>
                <div className="card my-2 shadow">
                  <div className="card-header">
                    Before boarding in, let's check if you meet the
                    requirements:
                  </div>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">
                      <CheckCircleOutlineIcon className="me-1 text-success" />
                      Updated Vaccine Cards
                    </li>
                    <li class="list-group-item">
                      <CheckCircleOutlineIcon className="me-1 text-success" />
                      Recent Tick and Flea Treatment
                    </li>
                    <li class="list-group-item">
                      <CheckCircleOutlineIcon className="me-1 text-success" />
                      Bath/Clean Pets
                    </li>
                    <li class="list-group-item">
                      <CheckCircleOutlineIcon className="me-1 text-success" />1
                      Diaper per Day/Stay
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-8">
              <div className="row py-3">
                <div className="col align-middle">
                  <h5>
                    <b>My Pets</b>
                  </h5>
                </div>
                <div className="col d-flex flex-row-reverse">
                  <AddPetForm
                    handleDateChange={handleDateChange}
                    open={open}
                    handleAdd={handleAdd}
                    handleCancel={handleCancel}
                    handleChange={handleChange}
                    handleClickOpen={handleClickOpen}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="overflow-auto card shadow">
                    <div
                      class="overflow-auto p-3 mb-3 mb-md-0 mr-md-3 bg-light"
                      style={{ maxWidth: "800px", maxHeight: "500px" }}
                    >
                      {pets.map((pet) => {
                        return (
                          <div className="card my-2 shadow-sm">
                            <div className="card-header">{pet.breed}</div>
                            <div className="card-body">
                              <div
                                style={{
                                  display: "flex",
                                  justifyContent: "space-between",
                                  alignItems: "center",
                                }}
                              >
                                <div>
                                  <Avatar
                                    className="img-fluid"
                                    alt="Profile Picture"
                                    src={profilePicture}
                                    sx={{ width: 75, height: 75 }}
                                  />
                                  <span className="card-title h5">
                                    {pet.name}
                                  </span>
                                  &nbsp;
                                  <span className="span">({pet.size})</span>
                                  <VaccinesIcon className="yuki-font-color" />
                                </div>
                                <div>
                                  <button className="btn btn-primary yuki-color button-border-color mx-2">
                                    {" "}
                                    Edit
                                  </button>




                                 

                                  <a
                  type="button"
                  class="btn btn-danger"
                  data-toggle="modal"
                  data-target="#HomeCareBookNow"
                  href="/"
                >
                  Delete
                </a>

                                  <div
        class="modal fade"
        id="HomeCareBookNow"
        tabindex="-1"
        role="dialog"
        aria-labelledby="HomeCareBookNowCenterTitle"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="HomeCareBookNowLongTitle">
              Delete Pet
              </h5>
            </div>
            <div class="modal-body">
            Are you sure you want to delete pet?
            </div>
            <div class="modal-footer">
              <a type="button" class="btn btn-secondary" data-dismiss="modal" href="/">
                Cancel
              </a>
              <a type="button" class="btn btn-primary button-color" href="/">
                Yes
              </a>
            </div>
          </div>
        </div>
      </div>




                                </div>
                              </div>
                              <p className="card-text text-secondary">
                                {pet.birthday}
                                <br />
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </Box>
      </div>

      <Footer />
    </>
  );
}
