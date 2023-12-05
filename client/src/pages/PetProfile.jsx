import NavBar from '../components/partials/NavBar';
import Footer from '../components/partials/Footer';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import { Typography } from "@mui/material";
import profilePicture from '../assets/images/kobe.jpg'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Link from '@mui/material/Link';

import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const navItems = [
      <Link className='white-font-color' href="/PetOwnerDashboard" underline="none">
        <ArrowBackIcon />
      </Link>
];

export default function PetProfile() {

  const navigate = useNavigate();

  const [pet, setPet] = useState({});

  let { petId } = useParams();

  useEffect(() => {

    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/');
    }

    fetch(`http://localhost:4269/api/getPet/${petId}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
      .then((response) => response.json())
      .then((fetchedPet) => setPet(fetchedPet))
      .catch((error) => console.log(error));

  }, [navigate, petId]);

  return (
    <>
      <NavBar navItems={navItems} />  
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
                            <Typography variant="h6" style={{color: 'gray'}}>
                              {pet.breed}
                            </Typography>
                            <Typography variant="h4" className="yuki-font-color2">
                              {pet.name}<br />
                            </Typography>
                          </div>
                      </div>
                    </Grid>
              </Grid>
            </Box>
          </Toolbar>
        </Container>
      <Footer />
    </>
  )
};