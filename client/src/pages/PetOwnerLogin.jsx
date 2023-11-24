import React, { useState } from 'react';
import { Box, Button, FormControl, TextField, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import cartoonDogs from "../assets/images/cartoonDogs.jpeg";
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import NavBar from '../components/partials/NavBar';
import Footer from '../components/partials/Footer';
import { Link } from 'react-router-dom';
import axios from 'axios';

const inputDetails = [
  {
    name: 'username',
    label: "Username",
    placeholder: "Username",
    type: "text"
  }, 
  {
    name: 'password',
    label: "Password",
    placeholder: "Password",
    type: "password"
  }
];

async function loginUser(credentials) {
  try {
    const response = await axios.post('http://localhost:4269/api/auth/signin/petowner', credentials);
    localStorage.setItem('token', response.data.token);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

const PetOwnerLogin = () => {

  const [ input, setInput ] = useState({
    username: String,
    password: String
  });

  function handleInput(event) {
    const name = event.target.name;
    console.log(name);
    if (name === 'username') {
      setInput({
        ...input,
        username: event.target.value
      })
    } else if (name === 'password') {
      setInput({
        ...input,
        password: event.target.value
      })
    }
  }

  async function handleLogin() {
    const success = await loginUser(input);
    if (success) {
      window.location.href = "/SuccessTestPage";
    } else {
        alert("Invalid username or password!");
    }
  }

  return (
    <>
      <NavBar />
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
                <Box sx={2}>
                  <Typography className='yukimito-font yuki-font-color' variant="h1" sx={2}>
                    YUKIMITO
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <img
                    src={cartoonDogs}
                    alt="cartoon dog"
                    style={{ width: "100%", maxWidth: "70%" }}
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
                        Login to Yukimito!
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
                            id="outlined-basic" 
                            label={details.label} 
                            variant="outlined"
                            required
                          />
                        )
                      })}

                      <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                        <Button className='button-color' onClick={handleLogin} variant="contained"
                          style={{marginRight: '10px'}}
                        >
                          Login
                        </Button>
                        <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                          <Link to={'/ClientRegister'} className='button-link' type="submit" variant="text">
                            Create an account
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

export default PetOwnerLogin;