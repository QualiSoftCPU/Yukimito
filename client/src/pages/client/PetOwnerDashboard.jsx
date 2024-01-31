import Footer from "../partials/Footer";
import Box from '@mui/material/Box';
// import ProfileMenu from '../../components/partials/ProfileMenu';
import Avatar from '@mui/material/Avatar';
import profilePicture from '../../assets/images/pp1.jpeg'
import AddPetForm from '../../components/partials/AddPetForm';
import EditPetProfileForm from "../../components/partials/EditPetProfileForm";
// import ProfileMenu from "../../components/partials/ProfileMenu";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; 
import { jwtDecode } from "jwt-decode";
import axios from 'axios';
// import NavBarUser from "../partials/NavBarUser";
import NavBarMain from "../partials/NavBarMain";
import Logout from "../partials/Logout";
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
export default function PetOwnerDashboard() {

  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  let userSelected = jwtDecode(token);
  
  
  const [ pets, setPets ] = useState([]);
  const [petOwnerDetails, setPetOwnerDetails] = useState({
    ownerName: String,
    username: String,
    address: String,
    contactNumber: String,
    email: String,
  });
  const [ pet, setPet ] = useState({
    name: String,
    breed: String,
    birthday: String,
    size: String,
    petOwnerId: userSelected.id
  });
  const [userData, setUserData] = useState({});
  const [ open, setOpen ] = useState(false);
  const [ openEdit, setOpenEdit ] = useState(false);

  const handleChange = (event) => {
    setPet({
      ...pet,
      [event.target.name]: event.target.value,
    });
  };
  const handleDateChange = (date) => {
    setPet({ ...pet, birthday: date.format('MM-DD-YYYY') });
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
  const handleEdit = (event) => {
    setPetOwnerDetails({
      ...petOwnerDetails,
      [event.target.name]: event.target.value,
    });
  };
  const handleEditOpen = () => { 
    setOpenEdit(true);
    
  };
  const handleEditCancel = () => {
    setOpenEdit(false);
  };

  async function handleAdd () {
    
    const token = localStorage.getItem('token');

    console.log(pet)

      try {
        const response = await axios.post('http://localhost:4269/api/addPet/pet', pet, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      
      if (response.status === 200) {
        setOpen(false);
        window.location.reload();
      } 
    } catch (error) {
        console.log(error);
    }
  };

  const handleUpdate = async () => {
    
    const ownerId = userSelected.id;
    console.log("debug")
    console.log(petOwnerDetails)
    
    try {
      const response = await axios.put(`http://localhost:4269/api/auth/editProfile/petowner/${ownerId}`,
        petOwnerDetails, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      
      if (response.status === 200) {
        // setUserData(petOwnerDetails);
        console.log(response.data.name)
        console.log(userSelected.name)
        console.log("Successfully updated!");
        window.location.reload();
      } else {
        console.log("Update failed!")
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/');
    }

    fetch(`http://localhost:4269/api/getPets/pet/${userSelected.id}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
      .then((response) => response.json())
      .then((fetchedPets) => setPets(fetchedPets))  
      .catch((error) => console.log(error));

    axios.get(`http://localhost:4269/api/auth/getPetOwner/${userSelected.id}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
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

    const navItems = [
    ];

    const iconStyle = {
      fontSize: '35px'
    };

  console.log(userSelected)
  console.log(petOwnerDetails)
  console.log(userData)


  return (
    <> 
      <NavBarMain navItems={navItems} customLink={<Logout />}/>

      <div className="container px-5">
        <div>
          Welcome back to Yukimito Services!
        </div>
        <Box sx={{ flexGrow: 1 }}>

            <div className="mt-5">
              <div className="col">
                <Avatar 
                    alt="Profile Picture"
                    src={profilePicture}
                    sx={{ width: 125, height: 125 }} />
              </div>
              <div className="col align-middle">
                
                  <div class="d-flex justify-content-between align-content-center">
                    <div className="col">
                      <h1>
                      {userData.ownerName} <AutoAwesomeIcon style={iconStyle} className="yuki-font-color"/>
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
                          updateFormData={handleEdit}
                          handleEditOpen={handleEditOpen}
                          handleEditCancel={handleEditCancel}
                          />
                      </div>
                    </div>
                  </div>
                    

                  <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalCenterTitle">Edit Profile</h5>
                          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                            </svg>
                          </button>
                        </div>
                        <div class="modal-body">
                          Edit Profile
                        </div>
                        <div class="modal-footer">
                          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                          <button type="button" class="btn btn-primary yuki-color2 yuki-border-color">Save changes</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  
              </div>
              <div className="col">
                <h5 className="text-secondary">
                  @{userData.username}
                </h5>
              </div>

              <hr />

              <div className="d-flex justify-content-center mx-auto">
                <a className="btn yuki-color text-white" href="/PetOwnerBooking">Book Now!</a>
              </div>
              
              <div className="py-3">
                <div className="card shadow-sm">
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

                <div>
                  <h5 className="py-3">
                    <b>
                      Rates and Services
                    </b>
                  </h5>
                  <div className="card my-2">
                      <div className="card-header">
                        Here are the services that we offer:
                      </div>
                      <ul class="list-group list-group-flush">
                        <li class="list-group-item">An item</li>
                        <li class="list-group-item">A second item</li>
                        <li class="list-group-item">A third item</li>
                      </ul>
                  </div>

                  <h5 className="py-3">
                    <b>
                      Boarding Requirements
                    </b>
                  </h5>
                  <div className="card my-2">
                      <div className="card-header">
                        Before boarding in, let's check if you meet the requirements:
                      </div>
                      <ul class="list-group list-group-flush">
                        <li class="list-group-item">An item</li>
                        <li class="list-group-item">A second item</li>
                        <li class="list-group-item">A third item</li>
                      </ul>
                  </div>
                </div>
                
              </div>

              <div className="col">
                <div className="row py-3">
                  <div className="col align-middle">
                    <h5>
                      <b>
                        My Pets
                      </b>
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
                    {pets.map(pet => {
                      return (
                        <div className="card my-2 shadow-sm">
                          <div className="card-header">
                            {pet.breed}
                          </div>
                          <div className="card-body">
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                              <div>
                                <span className="card-title h5">
                                  {pet.name}
                                </span>
                                &nbsp;
                                <span className="span">
                                  ({pet.size})
                                </span>
                              </div>
                              <div>
                                <button className="btn btn-primary yuki-color button-border-color mx-2"> Edit</button>
                                <button className="btn btn-danger">Delete</button>
                              </div>
                            </div>
                            <p className="card-text text-secondary">
                              {pet.birthday}
                              <br />
                            </p>
                          </div>
                        </div>
                        )})}
                    </div>  
                  </div>
                </div>
              </div>

          {/* <Grid item xs={12}>
            <div style={{padding: '1rem', backgroundColor: 'white', borderRadius: '15px'}}>
              {pets.map(pet => {
                return (
                  <Paper key={pet.id} style={{padding: '1rem 1rem', marginBottom: '1rem', display: 'flex', justifyContent: 'space-between'}}>
                    <div>
                      <Typography variant="h6">
                        {pet.name}
                      </Typography>
                      <Typography variant="h7" style={{color: 'gray'}}>
                        {pet.breed}
                      </Typography>
                    </div>
                    <div>
                      <PetProfileDetails 
                        id={pet.id} 
                        petName={pet.name} 
                        breed={pet.breed}
                        birthday={pet.birthday}
                        size={pet.size}
                        />
                    </div>
                  </Paper>
                )
              })}
            </div>
          </Grid> */}
        </Box>
      </div>

      <Footer />
    </>
  );
}