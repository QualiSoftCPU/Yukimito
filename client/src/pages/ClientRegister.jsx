import React, { useState } from 'react'
import { Box, Button, FormControl, TextField, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import cartoonDogs from "../assets/images/cartoonDogs.jpeg";
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import NavBar from '../components/partials/NavBar';
import Footer from '../components/partials/Footer';
import { Link } from 'react-router-dom';

const inputDetails = [
    {
        name: 'ownerName',
        label: "Pet Owner's Name",
        placeholder: "Enter Name",
        type: "text"
    }, 
    {
        name: 'contact',
        label: "Contact Number",
        placeholder: "Enter Contact Number",
        type: "text"
    }, 
    {
        name: 'username',
        label: "Username",
        placeholder: "Enter Username",
        type: "text"
    }, 
    {
        name: 'password',
        label: "Password",
        placeholder: "Enter Passord",
        type: "password"
    }, 
    {
        name: 'confirmPassword',
        label: "Confirm Password",
        placeholder: "Confirm Username",
        type: "password"
    }]

const ClientRegister = () => {

    const [ input, setInput ] = useState({
        ownerName: String,
        contactNumber: String,
        username: String,
        password: String,
        confirmPassword: String,
    });

    function handleInput(event) {
        const name = event.target.name;
        console.log(name);
        if (name === 'ownerName') {
            setInput({
                ...input,
                ownerName: event.target.value
            })
        } else if (name === 'contact') {
            setInput({
                ...input,
                contact: event.target.value
            })
        } else if (name === 'username') {
            setInput({
                ...input,
                username: event.target.value
            })
        } else if (name === 'password') {
            setInput({
                ...input,
                password: event.target.value
            })
        } else if (name === 'confirmPassword') {
            setInput({
                ...input,
                confirmPassword: event.target.value
            })
        }
    }

    function handleSubmit() {
        fetch('localhost:5000/createUser').then(( ) => {
            console.log("Established connection!")
        })
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
                                            <Typography className='yukimito-font yuki-font-color' variant="h1" sx={{ 
                                                fontSize: "70px"}}>
                                                Welcome
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
                                                        id="outlined-basic" 
                                                        label={details.label} 
                                                        variant="outlined"
                                                        required
                                                        />)
                                            })}

                                                <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                                                    <Button className='button-color' onClick={handleSubmit} variant="contained"
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
                                                        <Link to={'/PetOwnerLogin'} className='button-link' type="submit" variant="text">
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
export default ClientRegister