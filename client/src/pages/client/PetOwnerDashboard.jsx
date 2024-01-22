import Footer from "../partials/Footer";
import Box from '@mui/material/Box';
// import ProfileMenu from '../../components/partials/ProfileMenu';
import Avatar from '@mui/material/Avatar';
import profilePicture from '../../assets/images/pp.jpeg'
import AddPetForm from '../../components/partials/AddPetForm';
// import ProfileMenu from "../../components/partials/ProfileMenu";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; 

import { jwtDecode } from "jwt-decode";
import axios from 'axios';
import NavBarUser from "../partials/NavBarUser";

import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

export default function PetOwnerDashboard() {

  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const userSelected = jwtDecode(token);

  const [ pets, setPets ] = useState([]);
  const [petOwnerDetails, setPetOwnerDetails] = useState({});

  const [ pet, setPet ] = useState({
    name: String,
    breed: String,
    birthday: String,
    size: String,
    petOwnerId: userSelected.id
  });

  // const [formData, setFormData] = useState({
  //   ownerName: userSelected.name,
  //   contactNumber: userSelected.contact_number,
  //   email: userSelected.email,
  //   username: userSelected.username,
  // });


  const [ open, setOpen ] = useState(false);

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

  // const handleUpdate = async () => {
    
  //   const ownerId = userSelected.id;

  //   try {
  //     const response = await axios.put(`http://localhost:4269/api/auth/editProfile/petowner/${ownerId}`,
  //       formData, {
  //       headers: {
  //         'Authorization': `Bearer ${token}`
  //       }
  //     });

  //     if (response.status === 200) {
  //       console.log("Successfully updated!");
  //       window.location.reload();
  //     } else {
  //       console.log("Update failed!")
  //     }
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };

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
          contactNumber: userDetails.contact_number,
          email: userDetails.email,
        });
      })
      .catch((error) => {
        console.log(error);
      });
    

  }, [navigate, userSelected.id]);

  // const updateFormData = (event) => {
  //   console.log(event.target.name);
  //   setFormData({
  //     ...formData,
  //     [event.target.name]: event.target.value,
  //   });
  // };

    const navItems = [
      {
        name: <svg xmlns="http://www.w3.org/2000/svg" height="40" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
              </svg>,
        link: "/PetOwnerDashboard"
      }, 
      {
        name: "Home",
        link: ""
      },
      {
        name: "BookNow",
        link: "/"
      },
    // <ProfileMenu
    //   updateFormData={updateFormData}
    //   handleUpdate={handleUpdate}
    //   ownerName={formData.ownerName}
    //   username={formData.username}
    //   contactNumber={formData.contactNumber}
    //   email={formData.email}
    // />
    ];

    const iconStyle = {
      fontSize: '35px'
    };

  return (
    <> 
      <NavBarUser navItems={navItems} />

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
                    sx={{ width: 150, height: 150 }} />
              </div>
              <div className="col align-middle">
                
                  <div class="d-flex justify-content-between align-content-center">
                    <div className="col">
                      <h1>
                      {petOwnerDetails.ownerName} <AutoAwesomeIcon style={iconStyle} className="yuki-font-color"/>
                      </h1>
                    </div>
                    <div class="col d-flex flex-row-reverse lg">
                      <div>
                        <button type="button" class="btn btn-primary yuki-color button-border-color" data-toggle="modal" data-target="#exampleModalCenter">
                          <span className="px-1">
                            <svg xmlns="http://www.w3.org/2000/svg" height="18" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
                              <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z"/>
                            </svg>
                          </span>
                          Edit profile
                        </button>
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
                          ...
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
                  @{petOwnerDetails.username}
                </h5>
              </div>
              <hr />
              <div className="py-3">
                <div className="card">
                  <div class="card-header">
                    <b>Pet Owner Introduction</b>
                  </div>
                  <div class="card-body">
                    <h5 class="card-title">San Pedro, San Jose de Buenavista, Antique</h5>
                    <p class="card-text text-secondary">
                      Contact Number: {petOwnerDetails.contactNumber}
                      <br />
                      Email: {petOwnerDetails.email}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <hr />

            <div>
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
                    <div className="card my-2">
                      <div class="card-header">
                        {pet.breed}
                      </div>
                      <div class="card-body">
                        <span className="card-title h5">
                          {pet.name}
                        </span>
                        &nbsp;
                        <span className="span">
                           ({pet.size})
                        </span>
                        <p class="card-text text-secondary">
                          {pet.birthday}
                          <br />
                        </p>
                      </div>
                    </div>
                  )
              })}
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