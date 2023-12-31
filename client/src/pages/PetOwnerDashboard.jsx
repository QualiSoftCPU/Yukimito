import Navbar from "../components/partials/NavBar";
import Footer from "../components/partials/Footer";
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ProfileMenu from '../components/partials/ProfileMenu';
import Avatar from '@mui/material/Avatar';
import profilePicture from '../assets/images/kobe.jpg'
import { Typography } from "@mui/material";
import Paper from '@mui/material/Paper';
import AddPetForm from '../components/partials/AddPetForm';
import PetProfileDetails from "../components/partials/PetProfileDetails";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; 

import { jwtDecode } from "jwt-decode";
import axios from 'axios';

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

  const [formData, setFormData] = useState({
    ownerName: userSelected.name,
    contactNumber: userSelected.contact_number,
    email: userSelected.email,
    username: userSelected.username,
  });


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

    try {
      const response = await axios.put(`http://localhost:4269/api/auth/editProfile/petowner/${ownerId}`,
        formData, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.status === 200) {
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
          contactNumber: userDetails.contact_number,
          email: userDetails.email,
        });
      })
      .catch((error) => {
        console.log(error);
      });
    

  }, [navigate, userSelected.id]);

  const updateFormData = (event) => {
    console.log(event.target.name);
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const navItems = ["AboutUs", "Reviews", "Rates", "SizeCharts", "Requirements", "Gallery", "BookNow", 
    <ProfileMenu
      updateFormData={updateFormData}
      handleUpdate={handleUpdate}
      ownerName={formData.ownerName}
      username={formData.username}
      contactNumber={formData.contactNumber}
      email={formData.email}
    />
    ];
    
  return (
    <> 
        <Navbar navItems={navItems}/>
          <Container maxWidth='xl' className='main-container'>
            <Toolbar disableGutters>  
              <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} className='yukimito-font'>
                    <div style={{ display: 'flex', justifyContent: 'left' }}>
                      <Avatar 
                        style={{border: '16px solid #ededed'}}
                        alt="Profile Picture"
                        src={profilePicture}
                        sx={{ width: 130, height: 130 }} />
                        <div style={{ marginLeft: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <Typography variant="h4" className="yuki-font-color2">
                              {petOwnerDetails.ownerName}<br />
                            <Typography variant="h6" style={{color: 'gray'}}>
                              @{petOwnerDetails.username}
                            </Typography>
                          </Typography>
                        </div>
                    </div>
                  </Grid>
                  <Grid item xs={12}>
                    <div style={{ padding: '1rem', backgroundColor: '#ededed', borderRadius: '15px' }}>
                      <Paper style={{ padding: '1rem', display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
                        <Typography variant="h6">
                          <div>
                            Contact Number: {petOwnerDetails.contactNumber}
                          </div>
                          <div>
                            Email: {petOwnerDetails.email}
                          </div>
                        </Typography>
                      </Paper>
                    </div>
                  </Grid>
                  <Grid item xs={6}>
                  <Box sx={{ textAlign: 'left' }}>
                    <Typography className="yuki-font-color" variant="h5" style={{ marginLeft: '16px' }}>
                      My Pets
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box sx={{ textAlign: 'right' }}>
                    <AddPetForm
                      handleDateChange={handleDateChange}
                      open={open}
                      handleAdd={handleAdd}
                      handleCancel={handleCancel}
                      handleChange={handleChange}
                      handleClickOpen={handleClickOpen}
                     />
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <div style={{padding: '1rem', backgroundColor: '#ededed', borderRadius: '15px'}}>
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
                </Grid> 
              </Grid>
            </Box>
          </Toolbar>
        </Container>
      <Footer />
    </>
  );
}