import React, { useState } from 'react';
import { Box, TextField } from "@mui/material";
import Card from "@mui/material/Card";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../partials/NavBar';
import HeroRegistration from '../partials/HeroRegistration';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const inputDetails = [
  { name: 'ownerName', placeholder: 'Enter Owner Name', type: 'text', label: 'Pet Owner Name' },
  { name: 'contactNumber', placeholder: 'Enter Contact Number', type: 'text', label: 'Contact Number' },
  { name: 'username', placeholder: 'Enter Username', type: 'text', label: 'Username' },
  { name: 'password', placeholder: 'Enter Password', type: 'password', label: 'Password' },
  { name: 'confirmPassword', placeholder: 'Confirm Password', type: 'password', label: 'Confirm Password' },
];

export default function ClientRegister() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: '',
    ownerName: '',
    contactNumber: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const errors = {};
    if (!form.username) {
      errors.username = 'Username is required';
    }
    if (!form.ownerName) {
      errors.ownerName = 'Name is required';
    }
    if (!form.contactNumber) {
      errors.contactNumber = 'Contact number is required';
    } else if (!/^\d{11}$/.test(form.contactNumber.trim())) {
      errors.contactNumber = 'Contact number must be 11 digits long';
    }
    if (!form.password) {
      errors.password = 'Password is required';
    } else if (form.password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }
    if (form.password !== form.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleInput = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isValid = validateForm();

    if (!isValid) {
      toast.error('Registration failed! Please correct the errors.');
    } else {
      try {
        await axios.post('http://localhost:4269/api/auth/signup/petowner', form);
        toast.success('Registration successful!');
        navigate('/');
      } catch (error) {
        console.error(error);
        toast.error('Registration failed! Please try again.');
      }
    }
  };

  return (
    <>
      <hr id="Register" />
      <Navbar />
      <div className="container my-5 main-container">
        <div className="row">
          <div className="col-sm mt-3 p-0 d-flex flex-row justify-content-center">
            <div className='mx-3'>
              <HeroRegistration />
              <div className="form d-flex flex-row justify-content-center">
                <Box sx={{ gridArea: 'form' }} style={{ maxWidth: "30rem" }}>
                  <Box>
                    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                      <Card className='form-bg-color form-styles shadow'>
                        <Box className="input-container">
                          <p className='text-center h4 mb-3 fw-bold'>Create a new account</p>
                          {inputDetails.map((details, index) => (
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
                              error={errors[details.name] ? true : false}
                              helperText={errors[details.name]}
                            />
                          ))}
                          <div className="d-grid gap-2 my-2">
                            <button className="btn btn-primary button-color" onClick={handleSubmit} type="button">Register</button>
                          </div>
                          <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                            <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                              Already have an account?
                              <Link to={'/'} className='button-link yuki-font-color' type="submit" variant="text">Log in</Link>
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
      <ToastContainer />
      <div className="container fixed-bottom">
        <footer className="py-3 my-4">
          <p className="text-center text-muted">© {new Date().getFullYear()} QUALISOFT Services.</p>
        </footer>
      </div>
    </>
  );
};
