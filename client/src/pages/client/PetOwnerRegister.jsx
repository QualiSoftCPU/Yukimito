import React, { useState } from 'react'
import { Box, TextField } from "@mui/material";
import Card from "@mui/material/Card";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../partials/NavBar';
import HeroRegistration from '../partials/HeroRegistration';

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
      <hr id="Register"/>

      <Navbar/>

      <div className="container my-5 main-container">
        <div className="row">

          <div className="col-sm mt-3 p-0 d-flex flex-row justify-content-center">
            <div className='mx-3'>
              <HeroRegistration />
              <div className="form d-flex flex-row justify-content-center">
              <Box sx={{ gridArea: 'form'}} style={{maxWidth: "30rem"}}>
                <Box>
                    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <Card className='form-bg-color form-styles shadow'>
                        <Box className="input-container">

                        <p className='text-center h4 mb-3 fw-bold'>
                            Create a new account
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
                            <button class="btn btn-primary button-color" onClick={handleSubmit} type="button">Register</button>
                        </div>
                        <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                            <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                            Already have an account?  
                            <Link to={'/'} className='button-link yuki-font-color' type="submit" variant="text">
                                Log in
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

      </div>

      <div class="container fixed-bottom">
      <footer class="py-3 my-4">
        <p class="text-center text-muted">© {new Date().getFullYear()} QUALISOFT Services.</p>
      </footer>
    </div>
    </>
  );
};