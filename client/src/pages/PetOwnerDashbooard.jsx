import Navbar from "../components/partials/NavBar";
import Footer from "../components/partials/Footer";
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ProfileMenu from '../components/partials/ProfileMenu';
import Avatar from '@mui/material/Avatar';
import PopUpForm from '../components/partials/PopUpForm';
import profilePicture from '../assets/images/kobe.jpg'
import { Typography } from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom"; 
import Paper from '@mui/material/Paper';

const navItems = ["About Us", "Reviews", "Rates", "Size Charts", "Requirements", "Gallery", "Book Now", <ProfileMenu />];

export default function PetOwnerDashboard() {

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/');
    }
  }, [navigate]);

  return (
    <> 
      <Navbar navItems={navItems}/>
        <Container maxWidth='xl' className='main-container'>
          <Toolbar disableGutters>  
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Avatar 
                    alt="Profile Picture"
                    src={profilePicture}
                    sx={{ width: 100, height: 100 }} />
                    <Typography variant="h5">
                      Sean Patrick Paguntalan Namo
                    </Typography>
                    <Typography>
                      @seannamo
                    </Typography>
                    <Typography>
                      +639497097025
                    </Typography>
                    <Typography>
                      seannamo15@gmail.com
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h6">
                    My Pets
                    <PopUpForm />
                    <Grid item xs={12}>
                      <Paper>
                        Pet 1
                      </Paper>
                    </Grid> 
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Toolbar>
        </Container>
      <Footer />
    </>
  );
}