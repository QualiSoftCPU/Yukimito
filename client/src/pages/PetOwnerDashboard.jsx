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
import Link from '@mui/material/Link';

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; 

import { jwtDecode } from "jwt-decode";
import axios from 'axios';

const navItems = ["About Us", "Reviews", "Rates", "Size Charts", "Requirements", "Gallery", "Book Now", <ProfileMenu />];

export default function PetOwnerDashboard() {

  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const userSelected = jwtDecode(token);

  const [ pets, setPets ] = useState([]);

  const [ pet, setPet ] = useState({
    name: String,
    breed: String,
    birthday: String,
    size: String,
    petOwnerId: userSelected.id
  });

  const [ open, setOpen ] = useState(false);

  const handleChange = (event) => {
    let name = event.target.name;
    console.log(name)

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

  async function handleAdd (event) {
    
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

  console.log(userSelected);

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

  }, [navigate, userSelected.id]);
  

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
                              {userSelected.name}<br />
                            <Typography variant="h6" style={{color: 'gray'}}>
                              @{userSelected.username}
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
                            Contact Number: {userSelected.contact_number}
                          </div>
                          <div>
                            Email: {userSelected.email}
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
                            <Link className="yuki-font-color2" href="#" underline="none">
                              View {pet.name}'s Profile
                            </Link>
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