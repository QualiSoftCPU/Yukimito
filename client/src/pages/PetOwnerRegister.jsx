import React, { useState } from 'react'
import { Box, Button, FormControl, TextField, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import Logo from '../assets/images/Logo.PNG';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import ClientNavBar from '../components/ClientNavBar';
import Footer from '../components/partials/Footer';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cats from '../assets/images/Cats.jpg';

const inputDetails = [
{   name: 'ownerName', 
    placeholder: 'Enter Owner Name', 
    type: 'text', 
    label: 'Pet Owner Name' 
},

{   name: 'contactNumber', 
    placeholder: 'Enter Contact Number', 
    type: 'text', 
    label: 'Contact Number' 
},
{   name: 'username', 
    placeholder: 'Enter Username', 
    type: 'text', 
    label: 'Username' 
},

{   name: 'password', 
    placeholder: 'Enter Password', 
    type: 'password', 
    label: 'Password' 
},

{   name: 'confirmPassword', 
    placeholder: 'Confirm Password', 
    type: 'password', 
    label: 'Confirm Password' 
},
  ];

export default function ClientRegister() {
    const navigate = useNavigate();

    const [form, setForm] = useState({
      username: '',
      name: '',
      contact_number: '',
      email: '',
      password: '',
      confirmPassword: '',
    });
  
    const handleInput = (e) => {
      setForm({
        ...form,
        [e.target.name]: e.target.value,
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      if (form.password !== form.confirmPassword) {
        alert('Error: Passwords do not match.');
        return;
      }

      axios.post('http://localhost:4269/api/auth/signup/petowner', form)
        .then((response) => {
          console.log(response.data);
          // handle success here
          alert('Registration successful!');
          navigate('/');
        })
        .catch((error) => {
            console.error(error);
            // handle error here
            alert('Registration failed!');
        });
}
     
    return (
        <>
            <ClientNavBar navItems={[]} />
            <Container maxWidth='xl' className='main-container'>
            <Toolbar disableGutters>
                    <FormControl sx={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(2, 1fr)',
                        gap: 10,
                        textAlign: 'center',
                        gridTemplateRows: 'auto',
                        gridTemplateAreas: `"hero form"`,
                    }}> 
                        <Box sx={{ gridArea: 'hero'}}>
                                <Box>
                                    <Box sx={2}> {/**/}
                                      {/*  <Typography className='yukimito-font yuki-font-color' variant="h1" sx={2}>
                                            YUKIMITO
                                        </Typography>*/}
                                    </Box>
                                    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                            <img
                                                src={Logo}
                                                alt="Logo"
                                                style={{ width: "70%", maxWidth: "70%", margin: 'auto'}}
                                            />
                                             <img
                                                src={Cats}
                                                alt="Cats"
                                                style={{ width: "55%", maxWidth: "55%", margin: 'auto' }}
                                            />
                                    </Box>

                                </Box>
                        </Box>
                        <Box sx={{ gridArea: 'form'}}>
                            <Box>
                                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                    <Card className='form-bg-color form-styles'>
                                        <Box className="input-container">
                                            <Typography className='yukimito-font yuki-font-color2' variant="h1" sx={{ 
                                                fontSize: "35px"}}>
                                                WELCOME
                                            </Typography>

                                            <Typography className='no-margin' variant="body2" sx={{
                                                    fontSize: "20px",
                                                    color: "#5A6473",
                                                    fontWeight: "1000",
                                                    my: 2,
                                                }}>
                                                Register to Yukimito!
                                            </Typography>

                                            {inputDetails.map((details, index) => {
                                                return (
                                                    <TextField
                                                        key={index}
                                                        className='input-margin non-inline input-styling'
                                                        onChange={handleInput}
                                                        name={details.name}
                                                        placeholder={details.placeholder}
                                                        type={details.type}
                                                        id={'outlined-basic ' + index}
                                                        label={details.label} 
                                                        variant="outlined"
                                                        required={true}
                                                        />)
                                            })}

                                                <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                                                    <Button  to={'/'} className='button-color' onClick={handleSubmit} variant="contained"
                                                        style={{marginRight: '10px'}}
                                                    >
                                                        Register
                                                    </Button>
                                                    <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                                                        <Typography
                                                            variant="body2"
                                                            sx={{
                                                                fontSize: "15px",
                                                                color: "#5A6473",
                                                                fontWeight: "1000",
                                                                my: 2,
                                                            }}
                                                        >
                                                            Already have an account?
                                                        </Typography>
                                                        <Link to={'/'} className='button-link' type="submit" variant="text">
                                                            Sign in
                                                        </Link>
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </Card>
                                </Box>
                            </Box>
                        </Box>
                    </FormControl>
            </Toolbar>
        </Container>
            <Footer />
        </>
    );
};