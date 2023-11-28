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
import { useEffect } from "react";
import { useNavigate } from "react-router-dom"; 
import Paper from '@mui/material/Paper';
import PopUpForm from '../components/partials/AddPetForm';
import Link from '@mui/material/Link';


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
                <Grid item xs={12} className='yukimito-font'>
                  <div style={{ display: 'flex', justifyContent: 'left' }}>
                    <Avatar 
                      alt="Profile Picture"
                      src={profilePicture}
                      sx={{ width: 100, height: 100 }} />
                      <div style={{ marginLeft: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Typography variant="h4" className="yuki-font-color2">
                            Sean Patrick Paguntalan Namo<br />
                          <Typography variant="h6" style={{color: 'gray'}}>
                            @seannamo
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
                          Contact Number: +639497097025
                        </div>
                        <div>
                          Email: seannamo15@gmail.com
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
                  <PopUpForm />
                </Box>
              </Grid>
                <Grid item xs={12}>
                  <div style={{padding: '1rem', backgroundColor: '#ededed', borderRadius: '15px'}}>
                    <Paper style={{padding: '1rem 1rem', marginBottom: '1rem', display: 'flex', justifyContent: 'space-between'}}>
                      <div>
                        <Typography variant="h6">
                          Blacky
                        </Typography>
                        <Typography variant="h7" style={{color: 'gray'}}>
                          Chowchow
                        </Typography>
                      </div>
                      <div>
                        <Link className="yuki-font-color2" href="#" underline="none">
                          View Blacky's Profile
                        </Link>
                      </div>
                    </Paper>
                    <Paper style={{padding: '1rem 1rem', display: 'flex', justifyContent: 'space-between'}}>
                      <div>
                        <Typography variant="h6">
                          Browny
                        </Typography>
                        <Typography variant="h7" style={{color: 'gray'}}>
                          Rottweiler
                        </Typography>
                      </div>
                      <div>
                        <Link className="yuki-font-color2" href="#" underline="none">
                          View Browny's Profile
                        </Link>
                      </div>
                    </Paper>
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