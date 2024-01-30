import React, { useState, useEffect } from 'react';
import { Box, TextField } from "@mui/material";
import Card from "@mui/material/Card";
// import logoFooter from '../../assets/images/IMG_075.PNG'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import WhatWeOffer from '../partials/WhatWeOffer';
import Footer from '../partials/Footer';
import NavBarMain from '../partials/NavBarMain';
import LoginHero from '../partials/HeroLogin';
import LoginIcon from '@mui/icons-material/Login';

const inputDetails = [
  {
    name: 'username',
    label: "Your Username",
    placeholder: "Username",
    type: "text"
  }, 
  {
    name: 'password',
    label: "Your Password",
    placeholder: "Password",
    type: "password"
  }
];

async function loginUser(credentials) {
  try {
    const response = await axios.post('http://localhost:4269/api/auth/signin/petowner', credentials);
    localStorage.setItem('token', response.data.accessToken); // Store the token in localStorage
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

const PetOwnerLogin = () => {

  const navigate = useNavigate();
  const [input, setInput] = useState({
    username: '',
    password: ''
  });

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      navigate('/PetOwnerDashboard');
    }
  }, [navigate]);

  async function handleLogin() {
    const success = await loginUser(input);

    console.log(success)

    if (success) {
      navigate('/PetOwnerDashboard');
    } else {
      alert("Invalid username or password!");
    }
  }

  function handleInput(event) {
    const name = event.target.name;
    setInput({
      ...input,
      [name]: event.target.value
    }); 
  }

  const navItems=["About", "Gallery", "Requirements", "Rates & Services", "Team", "Reviews"]

  return (
    <>
      <hr id="Log In"/>
      
      <NavBarMain navItems={navItems} customLink={<a class="nav-link text-white nav-link display-6" href="#Log In"><LoginIcon className='me-1'/>Log In</a>}/>

      <div className="container my-5 main-container pt-5">
        <div className="row">

          <div className="col-sm mt-3 d-flex justify-content-center text-center">
            <div>
              <div className="row ">
                <LoginHero />
              </div>
            </div>
          </div>

          <div className="col-sm mt-3 p-0">
            <div className='mx-3'>
              <Box sx={{ gridArea: 'form' }} >
                  <Box>
                    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                      <Card className='form-bg-color form-styles shadow'>
                        <Box className="input-container">

                          <p className='text-center h4 mb-3 black-font fw-bold'>
                            Login to Yukimito!
                          </p>

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
                          <div class="d-grid gap-2 my-2">
                            <button class="btn btn-primary button-color" onClick={handleLogin} type="button">Login</button>
                          </div>
                          <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                            <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                            No account yet?  
                              <Link to={'/ClientRegister'} className='button-link yuki-font-color' type="submit" variant="text">
                                Create an account
                              </Link>
                            </Box>
                          </Box>
                        </Box>
                      </Card>
                    </Box>
                  </Box>
                </Box>
            </div>
          </div>
        </div>

      </div>

      <div className="container">
        <hr id='About' className='mb-5 pb-5'/>
      </div>

      <WhatWeOffer />

      <Footer /> 
    </>
  );
};

export default PetOwnerLogin;